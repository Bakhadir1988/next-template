const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

const iconsDir = path.join(__dirname, '../shared/icons/svg'); // Папка с исходными SVG
const outputDir = path.join(__dirname, '../shared/icons'); // Папка для выходных файлов

// Чтение всех SVG-файлов
fs.readdir(iconsDir, async (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if (path.extname(file) === '.svg') {
      const iconName = path.basename(file, '.svg');
      const filePath = path.join(iconsDir, file);

      // Чтение содержимого SVG
      const svgContent = fs.readFileSync(filePath, 'utf-8');

      // Оптимизация SVG с помощью SVGO
      const optimizedSvg = await optimize(svgContent, {
        path: filePath,
        plugins: [
          'removeComments', // Удаление комментариев
          'removeXMLProcInst', // Удаление XML-декларации
          'removeMetadata', // Удаление метаданных
          'removeTitle', // Удаление <title>
          'removeDesc', // Удаление <desc>, если оно пустое
          'removeUselessDefs', // Удаление неиспользуемых <defs>
          'removeHiddenElems', // Удаление скрытых элементов
          'removeEmptyAttrs', // Удаление пустых атрибутов
          {
            name: 'removeAttributesBySelector',
            params: {
              selectors: [
                {
                  selector: '*', // Применить ко всем элементам
                  attributes: ['fill'], // Удалить атрибут fill
                },
              ],
            },
          },
          'removeDimensions', // Удаление width и height
          'removeUnusedNS', // Удаление неиспользуемых пространств имен
          'inlineStyles', // Инлайнинг стилей
          'convertStyleToAttrs', // Конвертация стилей в атрибуты
          'convertTransform', // Оптимизация трансформаций
          'removeEmptyText', // Удаление пустых текстовых элементов
          'removeUnknownsAndDefaults', // Удаление неизвестных атрибутов
          'removeViewBox', // Удаление viewBox, если это безопасно
          { name: 'convertPathData', params: { floatPrecision: 2 } }, // Минификация путей
          'removeOffCanvasPaths', // Удаление путей за пределами холста
        ],
      });

      // Создание компонента
      const componentCode = `
        import React from 'react';

        export const ${iconName.charAt(0).toUpperCase() + iconName.slice(1)}Icon = (props: React.SVGProps<SVGSVGElement>) => (
          ${optimizedSvg.data.replace('<svg', '<svg {...props} {...(props.width ? { width: props.width } : { width: "40" })} {...(props.height ? { height: props.height } : { height: "40" })}' )}
        );
      `;

      // Запись в файл
      fs.writeFileSync(path.join(outputDir, `${iconName}.tsx`), componentCode);
    }
  }

  console.log('Иконки успешно созданы и оптимизированы!');
});
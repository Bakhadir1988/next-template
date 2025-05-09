// types/fancybox.d.ts
declare module '@fancyapps/ui' {
  // Все поддерживаемые кнопки
  type ButtonType = 'zoom' | 'slideShow' | 'fullScreen' | 'download' | 'close';

  // Явно перечисляем известные опции
  interface FancyboxOptions {
    // Основные настройки
    infinite?: boolean;
    buttons?: ButtonType[];
    showClass?: string;
    hideClass?: string;
    animated?: boolean;
    keyboard?: boolean;
    dragToClose?: boolean;
    placeCells?: boolean;
    autoCaption?: boolean;
    parentEl?: HTMLElement;

    // Типы контента
    defaultType?: 'image' | 'inline' | 'ajax' | 'iframe';
  }

  // Расширяем возможность добавлять произвольные свойства
  type ExtraOptions = Partial<Record<string, unknown>>;

  // Итоговый тип опций
  type OptionsType = FancyboxOptions & ExtraOptions;

  class Fancybox {
    static bind(selector: string, options?: Partial<OptionsType>): void;
    static bind(
      container: HTMLElement | null,
      selector: string,
      options?: Partial<OptionsType>,
    ): void;
    static unbind(selector: string): void;
    static close(): void;
    static destroy(): void;
    static getInstance(): Fancybox | null;
  }

  export { Fancybox };
}

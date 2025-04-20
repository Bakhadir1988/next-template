export const truncateText = (text: string, maxLength: number): string => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
};

export const formatPrice = (price: string): string => {
  const numericPrice = parseFloat(price);
  if (isNaN(numericPrice)) return price;
  return numericPrice.toLocaleString('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const normalizeInMain = (value: string | boolean): boolean => {
  if (typeof value === 'string') {
    return value === '1';
  }
  return Boolean(value);
};

export const formatDate = (date: Date, locale: string = 'ru-RU'): string => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

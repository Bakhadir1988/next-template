export type BaseSliderProps<T> = {
  data: T[]; // Массив данных
  renderItem: (item: T) => React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  navigation?: boolean;
  pagination?: boolean;
  loop?: boolean;
  className?: string;
  autoplay?: boolean;
  speed?: number;
};

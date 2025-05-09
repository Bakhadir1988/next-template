import { AboutAdvantagesItem } from '@/entities/about/model/types';

export type AboutDto = {
  title: string;
  text?: string;
  image?: string;
  items_count?: string;
  items: AboutAdvantagesItem[];
  slider: string[];
};

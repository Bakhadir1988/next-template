// entities/news/model/services.ts
import { getData } from '@/shared/api';

import { NewsDto, NewsItemDto } from './types';

export const fetchNewsList = async (): Promise<NewsDto> => {
  const res = await getData('news');
  return res;
};

export const fetchNewsBySlug = async (
  slug: string,
): Promise<NewsItemDto | null> => {
  try {
    const news = await fetchNewsList();
    const url = `/news/${slug}/`;
    return news.items.find((item) => item.url === url) ?? null;
  } catch (error) {
    console.error('Ошибка при поиске новости по slug:', error);
    return null;
  }
};

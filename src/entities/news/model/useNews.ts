import { useEffect, useState } from 'react';

import { fetchNewsList } from './services';
import type { NewsDto } from './types';

type NewsProps = {
  initialData?: NewsDto;
};

export const useNews = ({ initialData }: NewsProps = {}) => {
  const [news, setNews] = useState<NewsDto | null>(initialData ?? null);
  const [isLoading, setIsLoading] = useState(!initialData);

  useEffect(() => {
    if (!initialData) {
      setIsLoading(true);
      fetchNewsList()
        .then(setNews)
        .catch((e) => console.error('Ошибка загрузки новостей:', e))
        .finally(() => setIsLoading(false));
    }
  }, [initialData]);

  return { news, isLoading };
};

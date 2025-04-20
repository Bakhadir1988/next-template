import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { fetchNewsBySlug } from '@/entities/news/model/services';
import type { NewsItemDto } from '@/entities/news/model/types';
import { NewsDetail } from '@/entities/news/ui/news-detail';

type Props = {
  params: Promise<{ slug: string[] }>;
};

// Генерация метаданных
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await fetchNewsBySlug(slug[0]);

  if (!item) {
    return {
      title: 'Новость не найдена',
      description: 'Такой новости не существует.',
    };
  }

  return {
    title: item.title,
    description: item.announce ?? '',
  };
}

// Рендер детальной страницы новости
export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item: NewsItemDto | null = await fetchNewsBySlug(slug[0]);

  if (!item) return notFound();

  return <NewsDetail data={item} />;
}

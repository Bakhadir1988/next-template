import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { fetchNewsBySlug, fetchNewsList } from '@/entities/news/model/services';
import type { NewsItemDto } from '@/entities/news/model/types';
import { NewsDetailView } from '@/views/news-detail/ui/news-detail';

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

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item: NewsItemDto | null = await fetchNewsBySlug(slug[0]);
  const relatedNews = await fetchNewsList();
  const path = relatedNews?.section;

  if (!item) return notFound();

  return (
    <NewsDetailView
      data={item}
      path={path}
      relatedNews={relatedNews.items.slice(0, 5)}
    />
  );
}

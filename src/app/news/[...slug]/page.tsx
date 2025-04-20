import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { fetchNewsBySlug } from '@/entities/news/model/services';
import type { NewsItemDto } from '@/entities/news/model/types';
import { NewsDetail } from '@/entities/news/ui/news-detail';

type Props = {
  params: { slug: string[] };
};

// Генерация метаданных
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug[0];
  const item = await fetchNewsBySlug(slug);

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
  const slug = params.slug[0];
  const item: NewsItemDto | null = await fetchNewsBySlug(slug);

  if (!item) return notFound();

  return <NewsDetail data={item} />;
}

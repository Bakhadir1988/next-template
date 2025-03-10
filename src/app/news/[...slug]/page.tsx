import { Metadata } from 'next';
import React, { Suspense } from 'react';

import { getData } from '@/shared/api';
import { NewsDetail } from '@/shared/components/news-detail';
import { NewsItem } from '@/views/news/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const data = await getData('news');
  const { slug } = await params;
  const item: NewsItem = data.items.find(
    (item: NewsItem) => item.manual_url === slug[0],
  );

  return {
    title: item?.title || 'News',
    description: item?.announce || 'News description',
  };
}

export default async function NewsSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data = await getData('news');
  const { slug } = await params;
  const item: NewsItem = data.items.find(
    (item: NewsItem) => item.manual_url === slug[0],
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsDetail item={item} />
    </Suspense>
  );
}

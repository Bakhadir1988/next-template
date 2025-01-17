import { Metadata } from 'next';

import { getData } from '@/shared/api';
import { NewsPage } from '@/views/news';

export const metadata: Metadata = {
  title: 'Новости',
  description: '...',
};

export default async function News() {
  const data = await getData('news');
  return <NewsPage data={data} />;
}

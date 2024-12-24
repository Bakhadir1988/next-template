import { getData } from '@/shared/api';
import { NewsPage } from '@/views/news';

export default async function News() {
  const data = await getData('news');
  return <NewsPage data={data} />;
}

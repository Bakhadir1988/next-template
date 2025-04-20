import { fetchNewsList } from '@/entities/news/model/services';
import { NewsView } from '@/views/news';

export default async function NewsPage() {
  const data = await fetchNewsList();

  return <NewsView data={data} />;
}

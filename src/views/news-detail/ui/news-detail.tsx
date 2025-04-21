import { NewsItemDto, NewsSectionDto } from '@/entities/news/model/types';
import { NewsDetail } from '@/entities/news/ui/news-detail';
import { LatestNews } from '@/widgets';

type Props = {
  data: NewsItemDto;
  relatedNews: NewsItemDto[];
  path: NewsSectionDto;
};

export const NewsDetailView = ({ data, relatedNews, path }: Props) => {
  return (
    <main>
      <NewsDetail data={data} path={path} />
      <LatestNews items={relatedNews} excludeId={data.item_id} />
    </main>
  );
};

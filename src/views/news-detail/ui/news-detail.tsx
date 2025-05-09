import { NewsItemDto, NewsSectionDto } from '@/entities/news/model/types';
import { NewsDetail } from '@/entities/news/ui/news-detail';

type Props = {
  data: NewsItemDto;
  relatedNews: NewsItemDto[];
  path: NewsSectionDto;
};

export const NewsDetailView = ({ data, path }: Props) => {
  return (
    <main>
      <NewsDetail data={data} path={path} />
    </main>
  );
};

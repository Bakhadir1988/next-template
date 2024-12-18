import { api } from '@/shared/api';
import { LatestNews } from '@/shared/components/latest-news';
import { LatestNewsDto } from '@/shared/components/latest-news/type';

interface Block {
  manual_url: string;
  item_id: number;
}

function blockRenderer(block: Block) {
  switch (block.manual_url) {
    case 'poslednie-novosti':
      return (
        <LatestNews
          key={block.item_id}
          data={block as unknown as LatestNewsDto}
        />
      );
    default:
      return null;
  }
}

export default async function Home() {
  const data = await api('home-page');

  if (!data.data.blocks) return <div>Блоки не найдены</div>;

  return (
    <main>{data.data.blocks.map((block: Block) => blockRenderer(block))}</main>
  );
}

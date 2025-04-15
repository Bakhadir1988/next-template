import { getData } from '@/shared/api';
import {
  LatestNews,
  MainAbout,
  MainAdvantages,
  MainBanner,
} from '@/shared/components';

interface Block {
  manual_url: string;
  item_id: number;
  title: string;
  items_count?: string;
  linked_sections: [];
}

function blockRenderer(block: Block) {
  switch (block.manual_url) {
    case 'main_banner':
      return <MainBanner key={block.item_id} data={block} />;
    case 'main_advantages':
      return <MainAdvantages key={block.item_id} data={block} />;
    case 'main_about':
      return <MainAbout key={block.item_id} data={block} />;
    case 'main_news':
      return <LatestNews key={block.item_id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const data = await getData('home-page');

  if (!data.blocks) return <div>Блоки не найдены</div>;

  return <main>{data.blocks.map((block: Block) => blockRenderer(block))}</main>;
}

import { getData } from '@/shared/api';
import { Advantages } from '@/shared/components';
import { Accordion } from '@/shared/ui/accordion';
import { LatestNews, MainAbout, MainBanner, ServicesWidget } from '@/widgets';

type Block = {
  manual_url: string;
  item_id: string;
  title: string;
  content: string;
  items_count?: string;
  linked_sections: [];
};

function blockRenderer(block: Block) {
  switch (block.manual_url) {
    case 'main_banner':
      return <MainBanner key={block.item_id} data={block} />;
    case 'main_advantages':
      return <Advantages key={block.item_id} data={block} />;
    case 'main_about':
      return <MainAbout key={block.item_id} data={block} />;
    case 'main_news':
      return <LatestNews key={block.item_id} data={block} />;
    case 'main_services':
      return <ServicesWidget key={block.item_id} data={block} />;
    case 'main_accordion':
      return <Accordion key={block.item_id} data={block} />;
    // case 'main_clients':
    //   return <Clients key={block.item_id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const data = await getData('home-page');

  if (!data.blocks) return <div>Блоки не найдены</div>;

  return (
    <main>{data.blocks.map((block: Block) => blockRenderer(block))} </main>
  );
}

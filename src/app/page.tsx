import { getData } from '@/shared/api';
import { Accordion, Advantages, ThroughForm } from '@/shared/ui';
import {
  About,
  MainBanner,
  MapBlock,
  TabWidget,
  WorkPrinciplesWidget,
} from '@/widgets';

type Block = {
  title: string;
  text: string;
  manual_url: string;
  item_id: string;
  items: [];
  image: string;
  slider: string[];
  sections: [];
};

function blockRenderer(block: Block) {
  switch (block.manual_url) {
    case 'banner':
      return <MainBanner key={block.item_id} data={block} />;
    case 'advantages':
      return <Advantages key={block.item_id} data={block} />;
    case 'repair':
      return <TabWidget key={block.item_id} data={block} />;
    case 'about':
      return <About key={block.item_id} data={block} />;
    case 'accordion':
      return <Accordion key={block.item_id} data={block} />;
    case 'our_work':
      return <WorkPrinciplesWidget key={block.item_id} data={block} />;
    case 'form':
      return <ThroughForm key={block.item_id} data={block} />;
    case 'map':
      return <MapBlock key={block.item_id} />;
    default:
      return null;
  }
}

export default async function Home() {
  const data = await getData('/api/');

  if (!data.blocks) return <div>Блоки не найдены</div>;

  return (
    <main>{data.blocks.map((block: Block) => blockRenderer(block))} </main>
  );
}

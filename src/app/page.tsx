import { getData } from '@/shared/api';
import { LatestNews, MainBanner, Services } from '@/widgets';
import { EquipmentSection } from '@/widgets/equipment-section/equipment-section';
import { MainAbout } from '@/widgets/main-about';

type Block = {
  manual_url: string;
  item_id: number;
  title: string;
  items_count?: string;
  linked_sections: [];
};

function blockRenderer(block: Block) {
  switch (block.manual_url) {
    case 'main_banner':
      return <MainBanner key={block.item_id} data={block} />;
    // case 'main_advantages':
    //   return <Advantages key={block.item_id} data={block} />;
    case 'main_about':
      return <MainAbout key={block.item_id} data={block} />;
    case 'main_news':
      return <LatestNews key={block.item_id} data={block} />;
    case 'main_services':
      return <Services key={block.item_id} data={block} />;
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
    <main>
      {data.blocks.map((block: Block) => blockRenderer(block))}{' '}
      <EquipmentSection />
    </main>
  );
}

'use client';

import { NewsItem } from '@/shared/components';
import { BaseSlider } from '@/shared/ui/base-slider';

import { LatestNewsDto, LatestNewsItemsDto } from './type';

type Props = {
  data?: LatestNewsDto;
  items?: LatestNewsItemsDto[];
  excludeId?: string;
};

export const LatestNews = ({ data, items, excludeId }: Props) => {
  const title = data?.title ?? 'Похожие новости';
  const content = data?.content ?? null;

  // Определяем источник данных: либо linked_sections, либо items
  const sections = data?.linked_sections ?? [
    {
      section: { item_id: 1 },
      items: items ?? [],
    },
  ];

  return (
    <section className="base_section">
      <div className="container">
        <div className="base_title">
          <h2>{title}</h2>
          {content && <span dangerouslySetInnerHTML={{ __html: content }} />}
        </div>

        {sections.map((section) => {
          const filteredItems = section.items.filter(
            (item) => item.item_id !== excludeId,
          );

          return (
            <BaseSlider
              key={section.section.item_id}
              data={filteredItems}
              slidesPerView={4}
              spaceBetween={32}
              navigation
              pagination
              loop={false}
              autoplay={false}
              renderItem={(item: LatestNewsItemsDto) => (
                <NewsItem key={item.item_id} data={item} />
              )}
            />
          );
        })}
      </div>
    </section>
  );
};

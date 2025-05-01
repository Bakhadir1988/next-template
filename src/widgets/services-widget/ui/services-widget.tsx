'use client';

import React from 'react';

import { ServiceCard, ServicesDto } from '@/entities/service';
import { BaseSlider } from '@/shared/ui/base-slider';
import { normalizeInMain } from '@/utils/helpers';

export const ServicesWidget = ({ data }: { data: ServicesDto }) => {
  return (
    <section className={'base_section'}>
      <div className="container">
        <div className="base_title">
          <h2>{data.title}</h2>
          {data.content && (
            <span dangerouslySetInnerHTML={{ __html: data.content }} />
          )}
        </div>
        {data.linked_sections.map((section) => {
          const filteredItems = section.items.filter((item) =>
            normalizeInMain(item.in_main),
          );

          if (filteredItems.length === 0) return null;

          return (
            <React.Fragment key={section.section.item_id}>
              <BaseSlider
                data={filteredItems}
                slidesPerView={4}
                spaceBetween={32}
                navigation
                pagination
                loop={false}
                autoplay={false}
                renderItem={(item) => <ServiceCard item={item} />}
              />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

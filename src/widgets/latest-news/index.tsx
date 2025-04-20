'use client';

import React from 'react';

import { NewsItem } from '@/shared/components';
import { BaseSlider } from '@/shared/ui/base-slider';

import { LatestNewsDto, LatestNewsItemsDto } from './type';

export const LatestNews = ({ data }: { data: LatestNewsDto }) => {
  return (
    <section className={'base_section'}>
      <div className="container">
        <div className="base_title">
          <h2>{data.title}</h2>
          {data.content && (
            <span dangerouslySetInnerHTML={{ __html: data.content }} />
          )}
        </div>
        {data.linked_sections.map((section) => (
          <React.Fragment key={section.section.item_id}>
            <BaseSlider
              data={section.items}
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
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

'use client';

import Image from 'next/image';
import React from 'react';

import { BaseSlider } from '@/shared/ui/base-slider';

import noPhoto from '../../../../public/no-photo.jpg';
import styles from './clients.module.scss';
import { ClientsDto, ClientsItems } from './type';

export const Clients = ({ data }: { data: ClientsDto }) => {
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
              slidesPerView={6}
              slidesPerViewXs={2}
              slidesPerViewMd={4}
              spaceBetween={32}
              navigation
              pagination
              loop={false}
              autoplay={false}
              renderItem={(item: ClientsItems) => (
                <div className={styles.item} key={item.item_id}>
                  <div className={styles.image}>
                    <Image
                      src={
                        item.img
                          ? `https://dev.nmcms.ru/resources/catalog/images/${item.img}`
                          : noPhoto
                      }
                      alt={item.title}
                      width={150}
                      height={100}
                    />
                  </div>
                </div>
              )}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

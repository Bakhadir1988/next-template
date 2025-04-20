'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { BaseSlider } from '@/shared/ui/base-slider';
import { Button } from '@/shared/ui/button';
import { formatPrice, normalizeInMain, truncateText } from '@/utils/helpers';

import styles from './services.module.scss';
import { ServicesDto, ServicesItems } from './type';

export const Services = ({ data }: { data: ServicesDto }) => {
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
          // Фильтруем товары, оставляя только те, у которых in_main === "1"
          const filteredItems = section.items.filter((item) =>
            normalizeInMain(item.in_main),
          );

          // Если после фильтрации товаров нет, пропускаем секцию
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
                renderItem={(item: ServicesItems) => (
                  <Link
                    href={`${item.manual_url}`}
                    className={styles.item}
                    key={item.item_id}
                  >
                    {item.announce?.image && (
                      <div className={styles.image}>
                        <Image
                          src={`https://dev.nmcms.ru/resources/catalog/images/${item.announce.image}`}
                          alt={item.title}
                          width={400}
                          height={300}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    <div className={styles.content}>
                      <div
                        className={clsx(
                          'base_subtitle base_subtitle__separate',
                          styles.heading,
                        )}
                      >
                        {truncateText(item.title, 55)}
                      </div>
                      {item.announce?.text && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: truncateText(
                              item.announce?.text || '',
                              120,
                            ),
                          }}
                        />
                      )}
                      {item.price && (
                        <div className={styles.price}>
                          от{' '}
                          <span className="base_subtitle">
                            {formatPrice(item.price)}
                          </span>{' '}
                          руб.
                        </div>
                      )}

                      <Button variant="primary" radius="lg">
                        Заказать консультацию
                      </Button>
                    </div>
                  </Link>
                )}
              />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

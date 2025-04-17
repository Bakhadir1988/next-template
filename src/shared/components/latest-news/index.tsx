'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { BaseSlider } from '@/shared/ui/base-slider';

import noPhoto from '../../../../public/no-photo.jpg';
import styles from './latest-news.module.scss';
import { LatestNewsDto, LatestNewsItems } from './type';

export const LatestNews = ({ data }: { data: LatestNewsDto }) => {
  const truncateText = (text: string, maxLength: number): string => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trimEnd() + '...';
  };
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
              renderItem={(item: LatestNewsItems) => (
                <div className={styles.item} key={item.item_id}>
                  <div className={styles.image}>
                    <Image
                      src={
                        item.img
                          ? `https://dev.nmcms.ru/resources/catalog/images/${item.img}`
                          : noPhoto
                      }
                      alt={item.title}
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className={styles.content}>
                    <Link
                      href={`/news/${item.manual_url}`}
                      className={'base_subtitle'}
                    >
                      {truncateText(item.title, 55)}
                    </Link>
                    {item.announce && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: truncateText(item.announce, 120),
                        }}
                      />
                    )}
                    <Link
                      href={`/news/${item.manual_url}`}
                      className={styles.link}
                    >
                      Читать статью...
                    </Link>
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

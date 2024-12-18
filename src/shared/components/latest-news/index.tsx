import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import noPhoto from '../../../../public/no-photo.jpg';
import styles from './latest-news.module.scss';
import { LatestNewsDto } from './type';

export const LatestNews = ({ data }: { data: LatestNewsDto }) => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2>{data.title}</h2>
        <div className={styles.items}>
          {data.linked_sections.map((section) =>
            section.items.map((item) => (
              <div className={styles.item}>
                <Image
                  src={
                    item.img
                      ? `${process.env.DOMAIN_URL}/resources/catalog/images/${item.img}`
                      : noPhoto
                  }
                  alt={item.title}
                  width={300}
                  height={200}
                />
                <div className={styles.content}>
                  <Link
                    href={`${process.env.DOMAIN_URL}${item.url}`}
                    key={item.id}
                  >
                    {item.title}
                  </Link>
                  {item.announce && (
                    <div dangerouslySetInnerHTML={{ __html: item.announce }} />
                  )}
                </div>
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
};

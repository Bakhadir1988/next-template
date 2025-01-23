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
        <h2>{data.title} 111111122222</h2>
        {data.content && (
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        )}
        <div className={styles.items}>
          {data.linked_sections.map((section) =>
            section.items.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.image}>
                  <Image
                    src={
                      item.img
                        ? `https://dev.nmcms.ru/resources/catalog/images/${item.img}`
                        : noPhoto
                    }
                    alt={item.title}
                    width={345}
                    height={200}
                  />
                </div>
                <div className={styles.content}>
                  <Link href={`/news/${item.manual_url}`}>{item.title}</Link>
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

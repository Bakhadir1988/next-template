import Image from 'next/image';
import React from 'react';

import noPhoto from '../../../../public/no-photo.jpg';
import styles from './latest-client.module.scss';
import { LatestNewsDto } from './type';

export const LatestClient = ({ data }: { data: LatestNewsDto }) => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2>{data.title}</h2>
        <div className={styles.items}>
          {data.linked_sections.map((section) =>
            section.items.map((item) => (
              <div key={item.id} className={styles.item}>
                <Image
                  src={
                    item.img
                      ? `https://dev.nmcms.ru/resources/catalog/images/${item.img}`
                      : noPhoto
                  }
                  alt={item.title}
                  width={150}
                  height={100}
                  className={styles.image}
                />
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
};

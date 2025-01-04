import Image from 'next/image';
import React from 'react';

import noPhoto from '../../../../public/no-photo.jpg';
import styles from './latest-certificates.module.scss';
import { LatestNewsDto } from './type';

export const LatestCertificates = ({ data }: { data: LatestNewsDto }) => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2>{data.title}123</h2>
        {data.content && (
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        )}
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
                  width={235}
                  height={333}
                  className={styles.image}
                />
                <div className={styles.content}>
                  <strong>{item.title}</strong>
                </div>
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
};

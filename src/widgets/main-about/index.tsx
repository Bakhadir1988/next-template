import Image from 'next/image';
import React from 'react';

import styles from './about.module.scss';
import { AboutDto } from './type';

export const MainAbout = ({ data }: { data: AboutDto }) => {
  return (
    <section className={'base_section'}>
      <div className="container">
        <div className="base_title">
          <h2>{data.title}</h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.grid__item}>
            <Image
              src={`https://dev.nmcms.ru/resources/catalog/images/${data.image}`}
              alt={data.title}
              width={808}
              height={480}
              className={styles.image}
            />
          </div>
          <div className={styles.grid__item}>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: data.content || '' }}
            />
            <div className={styles.list}>
              {data.linked_sections.map((section) =>
                section.items?.map((item) => (
                  <div key={item.item_id} className={styles.list__item}>
                    <span className={'base_subtitle base_subtitle__separate'}>
                      {item.title}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

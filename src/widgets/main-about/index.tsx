import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import styles from './about.module.scss';
import { AboutDto } from './type';

export const MainAbout = ({ data }: { data: AboutDto }) => {
  return (
    <section className={'base_section'}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.grid}>
            <div className={clsx(styles.grid__item, styles.grid__content)}>
              <div dangerouslySetInnerHTML={{ __html: data.content || '' }} />
            </div>
            <div className={styles.grid__item}>
              <Image
                src={`https://dev.nmcms.ru/resources/catalog/images/${data.image}`}
                alt={data.title}
                width={800}
                height={800}
                priority
              />
            </div>
          </div>
          <div className={styles.list}>
            {data.linked_sections.map((section) =>
              section.items?.map((item) => (
                <div key={item.item_id} className={styles.list__item}>
                  <span
                    className={clsx(
                      'base_subtitle base_subtitle__separate',
                      styles.subtitle,
                    )}
                  >
                    {item.title}
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

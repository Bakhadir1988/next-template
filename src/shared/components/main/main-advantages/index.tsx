import Image from 'next/image';
import React from 'react';

import styles from './advantages.module.scss';
import { AdvantagesDto } from './type';

export const MainAdvantages = ({ data }: { data: AdvantagesDto }) => {
  return (
    <section className={'base_section'}>
      <div className="container">
        <div className="base_title">
          <h2>{data.title}</h2>
          {data.content && (
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          )}
        </div>
        <div className={styles.list}>
          {data.linked_sections.map((section) =>
            section.items.map((item) => (
              <div key={item.item_id} className={styles.list__item}>
                <Image
                  src={`https://dev.nmcms.ru/resources/catalog/files/${item.icon_svg}`}
                  alt={item.title}
                  width={40}
                  height={40}
                  className={styles.image}
                />
                <span className={'base_subtitle'}>{item.title}</span>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
};

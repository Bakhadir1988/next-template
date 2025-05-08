import Image from 'next/image';
import React from 'react';

import styles from './advantages.module.scss';
import { AdvantagesDto } from './type';

export const Advantages = ({ data }: { data: AdvantagesDto }) => {
  const { items } = data;

  return (
    <section className={'base_section'}>
      <div className="container">
        <div className={styles.list}>
          {items.map((item) => (
            <div key={item.item_id} className={styles.list__item}>
              <div className={styles.icon}>
                <Image
                  src={`https://dev.nmcms.ru/resources/catalog/files/${item.icon_svg}`}
                  alt={item.title}
                  width={40}
                  height={40}
                  className={styles.image}
                />
              </div>
              <span className={'base_subtitle'}>{item.title}</span>
              {item.text && (
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

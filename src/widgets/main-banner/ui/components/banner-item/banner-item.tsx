import Image from 'next/image';
import React from 'react';

import { MainBannerItem } from '../../../model/type';
import { BannerButton } from '../banner-button';
import styles from './banner-item.module.scss';

export const BannerItem = ({ item }: { item: MainBannerItem }) => {
  const { title, image_bg, text, image, button } = item;

  console.log('button', button);

  return (
    <div className={styles.root} key={item.item_id}>
      <div className={styles.bg_image}>
        <Image
          className={styles.bg_image}
          src={`https://dev.nmcms.ru/resources/catalog/images/${image_bg}`}
          alt={title}
          priority
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.inner}>
          <h1>{title}</h1>
          {text && (
            <div
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          )}
          {item.button && <BannerButton button={item.button} />}
        </div>
        <div className={styles.image}>
          <Image
            src={`https://dev.nmcms.ru/resources/catalog/images/${image}`}
            alt={title}
            width={538}
            height={640}
            priority
          />
        </div>
      </div>
    </div>
  );
};

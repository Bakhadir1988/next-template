import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainBannerItem } from '../../model/type';
import { BannerButton } from '../banner-button';
import styles from './banner-item.module.scss';

export const BannerItem = ({ item }: { item: MainBannerItem }) => {
  const { title, image_bg, text, image, button } = item;

  return (
    <div className={styles.root}>
      {image_bg && (
        <Image
          className={styles.bg_image}
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image_bg}`}
          alt={title}
          priority
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <div className={clsx(styles.info, image ? styles.grid : '')}>
        <div className={styles.inner}>
          <h1>{title}</h1>
          {text && (
            <div
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          )}
          {button && <BannerButton button={button} />}
        </div>
        {image && (
          <div className={styles.image}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image}`}
              alt={title}
              width={538}
              height={640}
            />
          </div>
        )}
      </div>
    </div>
  );
};

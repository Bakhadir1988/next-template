import Image from 'next/image';
import React from 'react';

import { AdvantagesItemDto } from '../../model/type';
import styles from './advantages-item.module.scss';

export const AdvantagesItem = ({ item }: { item: AdvantagesItemDto }) => {
  const { icon_svg, title, text } = item;

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <Image
          src={`${process.env.NEXT_PUBLIC_FILES_URL}${icon_svg}`}
          alt={title}
          width={40}
          height={40}
        />
      </div>
      <span className={'base_subtitle'}>{title}</span>
      {text && (
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>
  );
};

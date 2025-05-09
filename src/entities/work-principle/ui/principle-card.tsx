import Image from 'next/image';
import React from 'react';

import { PrincipleCardDto } from '../model/types';
import styles from './principle-card.module.scss';

export const PrincipleCard = ({ item }: { item: PrincipleCardDto }) => {
  const { title, text, icon_svg } = item;

  return (
    <div className={styles.item}>
      <Image
        src={`${process.env.NEXT_PUBLIC_FILES_URL}${icon_svg}`}
        width={40}
        height={40}
        alt={title}
      />
      <div className="base_subtitle">{title}</div>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

import React from 'react';

import { PrincipleCardDto } from '../model/types';
import styles from './principle-card.module.scss';

export const PrincipleCard = ({ item }: { item: PrincipleCardDto }) => {
  const { title, text } = item;
  return (
    <div className={styles.item}>
      <div className={styles.icon}></div>
      <div className={styles.heading}>{title}</div>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

import React from 'react';

import { TableItem } from '../../model/type';
import styles from './table-price-item.module.scss';

export const TablePriceItem = ({ item }: { item: TableItem }) => {
  const { variant_title, price } = item;
  return (
    <div className={styles.item}>
      <div className={styles.cell}>{variant_title}</div>
      <div className={styles.cell}>
        <strong>{price}</strong>
      </div>
    </div>
  );
};

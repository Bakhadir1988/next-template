import React from 'react';

import { TableItem } from '../model/type';
import styles from './table-price.module.scss';

export const TablePrice = ({ items }: { items: TableItem[] }) => {
  return (
    <div className={styles.price}>
      <div className="base_subtitle t-center">
        Стоимость услуг по ремонту и обслуживанию двигателей
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.cell}>Работы</div>
          <div className={styles.cell}>Стоимость</div>
        </div>

        <div className={styles.list}>
          {items.map((item) => (
            <div key={item.subitem_id} className={styles.item}>
              <div className={styles.cell}>{item.variant_title}</div>
              <div className={styles.cell}>
                <strong>от {item.price} руб.</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

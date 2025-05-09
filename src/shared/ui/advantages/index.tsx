import React from 'react';

import styles from './advantages.module.scss';
import { AdvantagesDto } from './model/type';
import { AdvantagesItem } from './ui/advantages-item';

export const Advantages = ({ data }: { data: AdvantagesDto }) => {
  const { items } = data;

  return (
    <section className={'base_section'}>
      <div className="container">
        <div className={styles.root}>
          {items.map((item) => (
            <React.Fragment key={item.item_id}>
              <AdvantagesItem item={item} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

import clsx from 'clsx';
import React from 'react';

import { AboutAdvantagesItem } from '../../model/types';
import styles from './about-advantages-card.module.scss';

export const AboutAdvantagesCard = ({
  item,
}: {
  item: AboutAdvantagesItem;
}) => {
  const { title, text } = item;

  return (
    <div key={item.item_id} className={styles.root}>
      <span
        className={clsx(
          'base_subtitle base_subtitle__separate',
          styles.subtitle,
        )}
      >
        {title}
      </span>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

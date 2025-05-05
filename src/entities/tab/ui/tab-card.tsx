import { Skeleton } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

import { TablePrice } from '@/shared/ui';
import { TabItem } from '@/widgets/tab-widget';

import styles from './tab-card.module.scss';

type Props = {
  item: TabItem;
};

export const TabCard = ({ item }: Props) => {
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <div className={styles.root}>
      {item.announce?.image ? (
        <div className={styles.image}>
          <Image
            src={`${imagePath}/${item.announce.image}`}
            width={600}
            height={400}
            alt={item.title}
            style={{ width: 'fit-content', height: 'auto' }}
          />
        </div>
      ) : (
        <Skeleton
          style={{ margin: '0 auto' }}
          width={600}
          height={400}
          radius="lg"
        />
      )}

      <h3 className={styles.title}>{item.title}</h3>
      {item.text && (
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: item.text }}
        />
      )}

      {item.prices?.length > 0 && <TablePrice items={item.prices} />}
    </div>
  );
};

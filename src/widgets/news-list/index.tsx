import clsx from 'clsx';
import React from 'react';

import { NewsItemDto } from '@/entities/news/model';
import { NewsItem } from '@/entities/news/ui/news-item';

import styles from './news-list.module.scss';

type Props = {
  data?: NewsItemDto[];
};

export const NewsList = ({ data }: Props) => {
  return (
    <section className={clsx(styles.root, 'base_section')}>
      <div className="container">
        <div className={styles.list}>
          {data?.map((item) => <NewsItem key={item.item_id} data={item} />)}
        </div>
      </div>
    </section>
  );
};

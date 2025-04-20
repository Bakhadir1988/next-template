import React from 'react';

import { NewsItemDto } from '../../model';
import styles from './news-detail.module.scss';

export const NewsDetail = ({ data }: { data: NewsItemDto }) => {
  console.log('dataDetail', data);
  return <section className={styles.root}>NewsDetailPage</section>;
};

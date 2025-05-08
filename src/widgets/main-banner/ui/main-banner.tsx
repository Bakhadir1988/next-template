'use client';

import React from 'react';

import { MainBannerDto } from '../model/type';
import { BannerItem } from './components/banner-item/banner-item';
import styles from './main-banner.module.scss';

export const MainBanner = ({ data }: { data: MainBannerDto }) => {
  const { items } = data;

  return (
    <section className={styles.section}>
      <div className="container">
        {items?.map((item) => <BannerItem key={item.item_id} item={item} />)}
      </div>
    </section>
  );
};

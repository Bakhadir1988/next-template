'use client';

import clsx from 'clsx';
import React from 'react';

import { MainBannerDto } from '../model/type';
import { BannerItem } from './components/banner-item';
import styles from './main-banner.module.scss';

export const MainBanner = ({ data }: { data: MainBannerDto }) => {
  return (
    <section className={clsx('base_section', styles.section)}>
      <div className="container">
        <div className={styles.list}>
          {data.linked_sections?.map((section) =>
            section.items?.map((item) => (
              <BannerItem key={item.item_id} item={item} />
            )),
          )}
        </div>
      </div>
    </section>
  );
};

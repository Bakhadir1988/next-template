'use client';

import { Input, Textarea } from '@mantine/core';
import React, { useState } from 'react';

import { Drawer } from '@/shared/ui/drawer';

import { MainBannerDto } from '../model/type';
import { BannerItem } from './banner-item';
import styles from './main-banner.module.scss';

export const MainBanner = ({ data }: { data: MainBannerDto }) => {
  const { items } = data;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className={styles.section}>
      <div className="container">
        {items?.map((item) => <BannerItem key={item.item_id} item={item} />)}
      </div>
      <button onClick={() => setIsOpen(true)}>Открыть Drawer</button>
      <button onClick={() => setIsOpen(true)}>Открыть Drawer</button>

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Содержимое Drawer</h2>
        <p>Это пример боковой панели.</p>
        <Input />
        <Input />
        <Input />
        <Input />
        <Textarea />
        <button onClick={() => setIsOpen(false)}>Закрыть</button>
      </Drawer>
    </section>
  );
};

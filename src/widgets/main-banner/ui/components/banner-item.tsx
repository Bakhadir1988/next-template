'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { DefaultForm } from '@/features/default-form';
import { Dialog } from '@/shared/ui';
import { Button } from '@/shared/ui/button';

import { MainBannerItem } from '../../model/type';
import styles from './banner-item.module.scss';

type BannerItemProps = {
  item: MainBannerItem;
};

export const BannerItem = ({ item }: BannerItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.item} key={item.item_id}>
      <Image
        src={`https://dev.nmcms.ru/resources/catalog/images/${item.bg_image}`}
        alt={item.title}
        priority
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className={styles.inner}>
        <h1>{item.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: item.text,
          }}
        />
        {item.buttons && (
          <div className={styles.buttons}>
            {item.buttons.map((button) => (
              <React.Fragment key={button.subitem_id}>
                <Button
                  variant="primary"
                  radius="lg"
                  size="lg"
                  onClick={() => setOpen(true)}
                >
                  {button.variant_title}
                </Button>
                <Dialog
                  open={open}
                  onClose={() => setOpen(false)}
                  animation="scale"
                >
                  <DefaultForm />
                </Dialog>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

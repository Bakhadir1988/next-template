import Image from 'next/image';
import React from 'react';

import { DefaultForm } from '@/features/default-form';
import { UiModal } from '@/shared/ui/modal';

import { MainBannerItem } from '../../model/type';
import styles from './banner-item.module.scss';

type BannerItemProps = {
  item: MainBannerItem;
};

export const BannerItem = ({ item }: BannerItemProps) => {
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
              <UiModal key={button.subitem_id} text={button.variant_title}>
                <DefaultForm />
              </UiModal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/shared/ui/button';
import { formatPrice, truncateText } from '@/utils/helpers';

import { ServicesItem } from '../model/types';
import styles from './service-card.module.scss';

export const ServiceCard = ({ item }: { item: ServicesItem }) => {
  return (
    <Link href={`${item.manual_url}`} className={styles.item}>
      {item.announce?.image && (
        <div className={styles.image}>
          <Image
            src={`https://dev.nmcms.ru/resources/catalog/images/${item.announce.image}`}
            alt={item.title}
            fill
          />
        </div>
      )}
      <div className={styles.content}>
        <div
          className={clsx(
            'base_subtitle base_subtitle__separate',
            styles.heading,
          )}
        >
          {truncateText(item.title, 55)}
        </div>
        {item.announce?.text && (
          <div
            dangerouslySetInnerHTML={{
              __html: truncateText(item.announce?.text || '', 120),
            }}
          />
        )}
        {item.price && (
          <div className={styles.price}>
            от{' '}
            <span className="base_subtitle">
              {formatPrice(item.price.toString())}
            </span>{' '}
            руб.
          </div>
        )}
        <Button variant="primary" radius="lg">
          Заказать консультацию
        </Button>
      </div>
    </Link>
  );
};

'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/shared/ui/button';

import { AccordionItem } from '../../model/types';
import styles from './accordion-card.module.css';

type Props = {
  item: AccordionItem;
  isActive: boolean;
  onClick: () => void;
  index: number;
};

export const AccordionCard = ({ item, isActive, onClick, index }: Props) => {
  const { title, image, heading, text, buttons } = item;

  const imagePath = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <div
      className={clsx(styles.card, isActive ? styles.active : styles.inactive)}
    >
      <div className={styles.grid}>
        <div onClick={onClick} className={styles.title}>
          <span>{title}</span>
          <span>{index + 1}</span>
        </div>
        {isActive && (
          <div className={styles.content}>
            <Image
              src={`${imagePath}/${image}`}
              alt="Описание изображения"
              width={500}
              height={300}
            />
            <span className="base_subtitle">{heading}</span>
            <div dangerouslySetInnerHTML={{ __html: text || '' }} />
            {buttons.map((button) => (
              <React.Fragment key={button.subitem_id}>
                <Button variant="primary">{button.variant_title}</Button>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

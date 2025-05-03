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
      <div onClick={onClick} className={styles.title}>
        <span className={'base_subtitle'}>{title}</span>
        <span className={'base_subtitle'}>0{index + 1}</span>
      </div>
      <div className={styles.content}>
        <Image
          src={`${imagePath}/${image}`}
          alt={title}
          width={700}
          height={300}
        />
        <span className="base_subtitle">{heading}</span>
        <div dangerouslySetInnerHTML={{ __html: text || '' }} />
        {buttons && buttons.length > 0 ? (
          buttons.map((button) => (
            <React.Fragment key={button.subitem_id}>
              <Button radius="full" size="lg" className={styles.button}>
                {button.variant_title}
              </Button>
            </React.Fragment>
          ))
        ) : (
          <Button radius="full" size="lg" className={styles.button}>
            Записаться на ремонт
          </Button>
        )}
      </div>
    </div>
  );
};

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/shared/ui/button';

import { AccordionItem } from '../../model/types';
import styles from './accordion-card.module.css';

type AccordionCardProps = {
  item: AccordionItem;
  index: number;
  isActive: boolean;
  onToggle: () => void;
};

export const AccordionCard = ({
  item,
  index,
  isActive,
  onToggle,
}: AccordionCardProps) => {
  const { title, image, heading, text, buttons } = item;

  return (
    <div
      onClick={onToggle}
      className={clsx(styles.root, isActive ? styles.active : styles.inactive)}
    >
      <div className={styles.title}>
        <span className={'base_subtitle'}>{title}</span>
        <span className={'base_subtitle'}>0{index + 1}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${image}`}
            alt={title}
            width={700}
            height={400}
          />
        </div>

        <span className="base_subtitle">{heading}</span>

        {text && <div dangerouslySetInnerHTML={{ __html: text }} />}

        {buttons && buttons.length > 0 ? (
          buttons.map((button) => (
            <Button
              key={button.subitem_id}
              radius="full"
              size="lg"
              className={styles.button}
            >
              {button.variant_title}
            </Button>
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

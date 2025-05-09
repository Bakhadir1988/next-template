'use client';

import React, { useState } from 'react';

import { Title } from '../../title';
import { AccordionDto } from '../model/types';
import { AccordionCard } from './accordion-card/accordion-card';
import styles from './accordion.module.scss';

export const Accordion = ({ data }: { data: AccordionDto }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const { title, text, items } = data;

  return (
    <section className={'base_section'}>
      <div className="container">
        <Title title={title} text={text} />

        <div className={styles.root}>
          {items.map((item, index) => (
            <AccordionCard
              key={item.item_id}
              item={item}
              index={index}
              isActive={activeIndex === index}
              onToggle={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

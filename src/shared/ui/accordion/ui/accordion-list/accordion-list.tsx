'use client';

import React, { useState } from 'react';

import { AccordionLinkedSection } from '../../model/types';
import { AccordionCard } from '../accordion-card/accordion-card';
import styles from './accordion-list.module.css';

export const AccordionList = ({ data }: { data: AccordionLinkedSection[] }) => {
  const [activeId, setActiveId] = useState<number | null>(0);

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.accordion}>
      {data.map((section) => (
        <React.Fragment key={section.section.item_id}>
          {section?.items.map((item, index: number) => (
            <AccordionCard
              item={item}
              key={item.item_id}
              isActive={activeId === index}
              index={index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

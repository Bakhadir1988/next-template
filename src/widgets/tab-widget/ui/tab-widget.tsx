'use client';

import { useMediaQuery } from '@mantine/hooks';
import React, { useMemo, useState } from 'react';

import { TabCard } from '@/entities/tab';
import { SliderArrowIcon } from '@/shared/icons/sliderArrow';

import { TabDto } from '../model/types';
import styles from './tab-widget.module.scss';

export const TabWidget = ({ data }: { data: TabDto }) => {
  const { title, text, sections } = data;

  const items = useMemo(() => {
    if (!sections) return [];

    return Object.values(sections)
      .map((section) => section.items || [])
      .flat();
  }, [sections]);

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const isMobile = useMediaQuery('(max-width: 1080px)');

  return (
    <section className="base_section">
      <div className="container">
        <div className="base_title">
          <h2>{title}</h2>
          {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        </div>

        <div className={styles.root}>
          {isMobile ? (
            <div className={styles.header}>
              {items.map((item, index) => (
                <React.Fragment key={item.item_id}>
                  <button
                    className={`${styles.button} ${
                      index === activeIndex ? styles.active : ''
                    }`}
                    onClick={() =>
                      setActiveIndex((prev) => (prev === index ? null : index))
                    }
                  >
                    {item.title}
                    <SliderArrowIcon className={styles.icon} />
                  </button>
                  {activeIndex === index && (
                    <div className={styles.content}>
                      <TabCard item={item} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <>
              <div className={styles.header}>
                {items.map((item, index) => (
                  <button
                    key={item.item_id}
                    className={`${styles.button} ${
                      index === activeIndex ? styles.active : ''
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.title}
                    <SliderArrowIcon className={styles.icon} />
                  </button>
                ))}
              </div>

              <div className={styles.content}>
                {activeIndex !== null && <TabCard item={items[activeIndex]} />}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

import clsx from 'clsx';
import React from 'react';

import { AboutAdvantagesCard, AboutSlider } from '@/entities/about';

import styles from './about-widget.module.scss';
import { AboutDto } from './type';

export const About = ({ data }: { data: AboutDto }) => {
  const { title, text, slider, items } = data;

  return (
    <section className={'base_section'}>
      <div className="container">
        <div className={styles.root}>
          <div className={styles.grid}>
            <div className={clsx(styles.grid__item, styles.grid__content)}>
              <h2>{title}</h2>
              {text && <div dangerouslySetInnerHTML={{ __html: text || '' }} />}
            </div>
            <div className={styles.grid__item}>
              <AboutSlider items={slider} />
            </div>
          </div>
          <div className={styles.list}>
            {items.map((item) => (
              <React.Fragment key={item.item_id}>
                <AboutAdvantagesCard item={item} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

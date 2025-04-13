import React from 'react';

import { TestIcon } from '@/shared/icons/test';

import styles from './advantages.module.scss';
import { AdvantagesDto } from './type';

export const Advantages = ({ data }: { data: AdvantagesDto }) => {
  return (
    <section className={'base-section'}>
      <div className="container">
        <h2>{data.title}</h2>
        {data.content && (
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        )}
        <TestIcon width={200} />
        <div className={styles.items}>
          {data.linked_sections.map((section) =>
            section.items.map((item) => (
              <div key={item.item_id} className={styles.item}>
                <div className={styles.image}></div>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
};

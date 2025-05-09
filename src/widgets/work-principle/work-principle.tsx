import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { PrincipleCard } from '@/entities/work-principle';

import { WorkPrincipleDto } from './model/types';
import styles from './work-principle.module.scss';

export const WorkPrinciplesWidget = ({ data }: { data: WorkPrincipleDto }) => {
  const { title, text, image, items } = data;

  return (
    <section className="base_section">
      <div className="container">
        <div className="base_title">
          <h2>{title}</h2>
          {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        </div>

        <div className={clsx(image ? styles.grid : null)}>
          {image && (
            <Image
              className={styles.image}
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${image}`}
              width={580}
              height={580}
              alt={title}
            />
          )}
          <div className={styles.list}>
            {items.map((item) => (
              <React.Fragment key={item.item_id}>
                <PrincipleCard item={item} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

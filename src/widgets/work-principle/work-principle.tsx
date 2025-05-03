import Image from 'next/image';
import React from 'react';

import { PrincipleCard } from '@/entities/work-principle';

import { WorkPrincipleDto } from './model/types';
import styles from './work-principle.module.scss';

export const WorkPrinciplesWidget = ({ data }: { data: WorkPrincipleDto }) => {
  const { title, content, image, linked_sections } = data;

  const imagePath = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <section className="base_section">
      <div className="container">
        <div className="base_title">
          <h2>{title}</h2>
          {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
        </div>

        <div className={styles.content}>
          <Image
            className={styles.image}
            src={`${imagePath}/${image}`}
            width={580}
            height={580}
            alt={title}
          />
          <div className={styles.list}>
            {linked_sections.map((sections) => (
              <React.Fragment key={sections.section.item_id}>
                {sections.items.map((item) => (
                  <PrincipleCard key={item.item_id} item={item} />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

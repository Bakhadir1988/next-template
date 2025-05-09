import Image from 'next/image';
import React from 'react';

import { Button } from '../button';
import styles from './through-form.module.scss';
import { ThroughFormDto } from './types';

export const ThroughForm = ({ data }: { data: ThroughFormDto }) => {
  const { title, image, text } = data;

  const imagePath = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <section className="base_section">
      <div className="container">
        <div
          style={{ backgroundImage: 'url("/form_bg.png")' }}
          className={styles.wrapper}
        >
          <h2>{title}</h2>
          {text && (
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
          <div className={styles.image}>
            <Image
              src={`${imagePath}/${image}`}
              alt={title}
              width={527}
              height={527}
            />
          </div>
          <Button>Записаться на ремонт</Button>
        </div>
      </div>
    </section>
  );
};

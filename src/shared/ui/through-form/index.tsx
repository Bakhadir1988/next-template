import Image from 'next/image';
import React from 'react';

import { Button } from '../button';
import bgImage from './../../assets/form_bg.png';
import styles from './through-form.module.scss';
import { ThroughFormDto } from './types';

export const ThroughForm = ({ data }: { data: ThroughFormDto }) => {
  const { title, image, content } = data;

  const imagePath = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <section className="base_section">
      <div className="container">
        <div
          style={{ backgroundImage: `url(${bgImage.src})` }}
          className={styles.wrapper}
        >
          <h2>{title}</h2>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className={styles.image}>
            <Image
              src={`${imagePath}/${image}`}
              alt={title}
              width={527}
              height={527}
            />
          </div>
          <Button radius="full" size="lg">
            Записаться на ремонт
          </Button>
        </div>
      </div>
    </section>
  );
};

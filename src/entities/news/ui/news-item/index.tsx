import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { truncateText } from '@/utils/helpers';

import { NewsItemDto } from '../../model';
// import noPhoto from '../../../../../public/no-photo.png';
import styles from './news-item.module.scss';

export const NewsItem = ({ data }: { data: NewsItemDto }) => {
  return (
    <div className={styles.item} key={data.item_id}>
      <div className={styles.image}>
        <Image
          src={
            data.img
              ? `https://dev.nmcms.ru/resources/catalog/images/${data.img}`
              : 'noPhoto'
          }
          alt={data.title}
          width={400}
          height={300}
        />
      </div>
      <div className={styles.content}>
        <Link href={`/news/${data.manual_url}`} className={'base_subtitle'}>
          {truncateText(data.title, 55)}
        </Link>
        {data.announce && (
          <div
            dangerouslySetInnerHTML={{
              __html: truncateText(data.announce, 120),
            }}
          />
        )}
        <Link href={`/news/${data.manual_url}`} className={styles.link}>
          Читать статью...
        </Link>
      </div>
    </div>
  );
};

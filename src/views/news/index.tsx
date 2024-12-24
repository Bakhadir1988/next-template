import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import noPhoto from '../../../public/no-photo.jpg';
import { NewsListDto } from './types';

export const NewsPage = ({ data }: { data: NewsListDto }) => {
  return (
    <>
      <Link href="/">Главная</Link>
      <h2>{data.section.title}</h2>
      <div>
        {data.items.map((item) => (
          <div key={item.item_id}>
            <div>
              <Image
                src={
                  item.img
                    ? `https://dev.nmcms.ru/resources/catalog/images/${item.img}`
                    : noPhoto
                }
                alt={item.title}
                width={345}
                height={200}
              />
            </div>
            <Link href={`/news/${item.manual_url}/`}>{item.title}</Link>
            <p>{item.date}</p>
            {item.announce && (
              <div dangerouslySetInnerHTML={{ __html: item.announce }} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

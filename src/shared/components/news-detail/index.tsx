'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

import { NewsListItems } from '@/views/news/types';

export const NewsDetail = ({ data }: { data: NewsListItems[] }) => {
  const { slug } = useParams();

  const slugValue = Array.isArray(slug) ? slug[0] : slug;

  const item = data.find(
    (item: NewsListItems) => slugValue === item.manual_url,
  );

  if (!item) {
    return <div>Элемент не найден</div>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      {item.img && (
        <Image
          src={`https://dev.nmcms.ru/resources/catalog/images/${item.img}`}
          alt={item.title}
          width={345}
          height={200}
        />
      )}
      {item.content && (
        <div dangerouslySetInnerHTML={{ __html: item.content }} />
      )}
    </div>
  );
};

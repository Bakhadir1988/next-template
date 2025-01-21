import Image from 'next/image';
import React from 'react';

import { NewsItem } from '@/views/news/types';

export const NewsDetail = ({ item }: { item: NewsItem }) => {
  return (
    <div>
      <h1>{item.title} test h1</h1>
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

'use client';

import { Breadcrumbs } from '@mantine/core';
import Link from 'next/link';

import type { NewsDto } from '@/entities/news/model/types';
import { useNews } from '@/entities/news/model/useNews';
import TittleBlock from '@/shared/ui/title-block';
import { NewsList } from '@/widgets/news-list';

type Props = {
  data?: NewsDto;
};

export const NewsView = ({ data }: Props) => {
  const { news, isLoading } = useNews({ initialData: data });

  if (isLoading) return <div>Загрузка новостей...</div>;

  return (
    <main>
      <TittleBlock title={news?.section.title}>
        <Breadcrumbs className="breadcrumbs">
          {news?.section.__path.map((item, index) => {
            const isLast = index === news.section.__path.length - 1;
            return isLast ? (
              <span key={item.item_id}>{item.title}</span>
            ) : (
              <Link key={item.item_id} href={item.url}>
                {item.title}
              </Link>
            );
          })}
        </Breadcrumbs>
      </TittleBlock>
      <NewsList data={news?.items} />
    </main>
  );
};

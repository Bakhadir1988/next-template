import { Breadcrumbs } from '@mantine/core';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { NewsItemDto, NewsSectionDto } from '@/entities/news/model/types';
import TitleBlock from '@/shared/ui/title-block';

import styles from './news-detail.module.scss';

type Props = { data: NewsItemDto; path: NewsSectionDto };

export const NewsDetail = ({ data, path }: Props) => {
  return (
    <>
      <TitleBlock title={data.title}>
        <Breadcrumbs className="breadcrumbs">
          {path?.__path.map((item, index) => {
            const isLast = index === path?.__path.length - 1;
            return isLast ? (
              <span key={item.item_id}>{item.title}</span>
            ) : (
              <Link key={item.item_id} href={item.url}>
                {item.title}
              </Link>
            );
          })}
        </Breadcrumbs>
      </TitleBlock>
      <section className={clsx('base_section', styles.detail)}>
        <div
          className="container"
          dangerouslySetInnerHTML={{
            __html: data?.text || '',
          }}
        />
      </section>
    </>
  );
};

import React, { Suspense } from 'react';

import { getData } from '@/shared/api';
import { NewsDetail } from '@/shared/components/news-detail';

export default async function NewsSlug() {
  const data = await getData('news');

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsDetail data={data.items} />
    </Suspense>
  );
}

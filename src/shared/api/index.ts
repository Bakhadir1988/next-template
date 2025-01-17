import { unstable_cache } from 'next/cache';

export const getData = unstable_cache(async (url: string) => {
  const data = await fetch(`https://dev.nmcms.ru/api/${url}`, {
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
    },
  }).then((res) => res.json());

  return data;
});

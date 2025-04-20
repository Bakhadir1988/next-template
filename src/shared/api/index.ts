// shared/api/index.ts
export const getData = async (url: string) => {
  const res = await fetch(`https://dev.nmcms.ru/api/${url}`, {
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
    },
    next: { revalidate: 60 }, // или cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status}`);
  }

  return res.json();
};

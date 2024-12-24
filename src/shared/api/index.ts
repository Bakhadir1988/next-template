export const getData = async (url: string) => {
  const data = await fetch(`https://dev.nmcms.ru/api/${url}`, {
    cache: 'force-cache',
  }).then((res) => res.json());

  return data;
};

export const fetchData = async (url: string) => {
  const response = await fetch(`https://dev.nmcms.ru/api/${url}`, {
    cache: 'force-cache',
  });
  const data = await response.json();
  return data;
};

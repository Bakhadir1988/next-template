export const getData = async (url: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error(
      'NEXT_PUBLIC_API_URL is not defined in the environment variables',
    );
  }

  const fullUrl = new URL(url, baseUrl).toString();

  const res = await fetch(fullUrl, {
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
    },
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    const errorDetails = await res.text();
    throw new Error(
      `Failed to fetch ${fullUrl}: ${res.status} - ${errorDetails}`,
    );
  }

  return res.json();
};

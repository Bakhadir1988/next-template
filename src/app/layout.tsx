import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../node_modules/normalize.css/normalize.css';
import '../shared/styles/index.scss';

const roboto = localFont({
  src: [
    {
      path: './fonts/Roboto-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Шаблон для NewMark',
  description: 'Шаблон для NewMark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={roboto.className}>
        <MantineProvider>
          <header>header</header>
          {children}
          <footer>footer</footer>
          <ToastContainer />
        </MantineProvider>
      </body>
    </html>
  );
}

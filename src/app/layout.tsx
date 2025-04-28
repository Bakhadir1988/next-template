import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import '../../node_modules/normalize.css/normalize.css';
import '../shared/styles/index.scss';

const manrope = localFont({
  src: [
    {
      path: './fonts/Manrope/Manrope-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Manrope/Manrope-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Manrope/Manrope-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Manrope/Manrope-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Manrope/Manrope-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Manrope/Manrope-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Manrope/Manrope-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  display: 'swap',
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
      <body className={manrope.className}>
        <MantineProvider>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </MantineProvider>
      </body>
    </html>
  );
}

import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Logo, TelegramIcon } from './components';

export const metadata: Metadata = {
  title: {
    default: 'ThunderHub',
    template: '%s – ThunderHub',
  },
  description:
    'Manage and monitor your lightning network node right inside your browser',
};

const navbar = (
  <Navbar
    logo={<Logo />}
    projectLink="https://github.com/apotdevin/thunderhub"
    chatLink="https://t.me/thunderhub"
    chatIcon={<TelegramIcon />}
  />
);

const footer = (
  <Footer>
    <span>
      Copyright © 2020-{new Date().getFullYear()}. All rights reserved.{' '}
      <a href="https://thunderhub.io/" target="_blank" rel="noreferrer">
        ThunderHub
      </a>
    </span>
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: { dark: 50, light: 40 },
          saturation: { dark: 100, light: 100 },
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/apotdevin/thunderhub-docs/blob/main/"
          feedback={{ labels: 'feedback' }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

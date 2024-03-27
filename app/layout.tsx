import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'JaceVin Fetcher',
  description: 'Collection of API fetchers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

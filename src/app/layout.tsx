import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { SITE_METADATA } from '@/shared/constants';
import 'mapbox-gl/dist/mapbox-gl.css';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = SITE_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={`${poppins.variable} border-box`}>
        {children}
      </body>
    </html>
  );
}

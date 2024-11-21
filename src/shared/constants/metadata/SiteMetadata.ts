import type { Metadata } from 'next';

export const SITE_METADATA: Metadata = {
  title: 'Pulito - Servicios de Limpieza a Domicilio',
  description:
    'Pulito ofrece servicios profesionales de limpieza a domicilio, conectando a clientes con expertos en limpieza de manera rápida y sencilla.',
  keywords: [
    'pulito',
    'limpieza a domicilio',
    'servicios de limpieza',
    'limpieza profesional',
    'hogar limpio',
  ],
  authors: [{ name: 'Pulito Inc.', url: 'https://www.pulito.com' }],
  openGraph: {
    title: 'Pulito - Servicios de Limpieza a Domicilio',
    description:
      'Conecta con profesionales de limpieza para mantener tu hogar impecable. Reserva fácilmente en línea con Pulito.',
    url: 'https://www.pulito.com',
    siteName: 'Pulito',
    images: [
      {
        url: 'https://www.pulito.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pulito - Servicios de Limpieza a Domicilio',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pulito',
    creator: '@pulito',
    title: 'Pulito - Servicios de Limpieza a Domicilio',
    description:
      'Conecta con profesionales de limpieza para mantener tu hogar impecable. Reserva fácilmente en línea con Pulito.',
    images: ['https://www.pulito.com/og-image.jpg'],
  },
};
import Header from '@/components/header/header';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return (
    <section className="py-[20px] container mx-auto px-1">
      <Header />
    </section>
  );
}

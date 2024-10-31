import { routing } from '@/i18n/routing';
import { getLocale } from 'next-intl/server';
import Link from 'next/link';

export const LangSelect = async () => {
    const activeLang = await getLocale(); // nextjs ning ozida use client qilmasdan pathname olish

  return (
    <div>
      {routing.locales.map((lng, i) => (
        <>
        <Link key={i+1} href={`/`+lng} locale={lng} className={activeLang == lng ? 'text-orange' : ""}>
          {lng.toUpperCase()}
        </Link>
        {i + 1 !== routing.locales.length ? <div className='h-full border border-black'></div> : null}
        </>
      ))}
    </div>
  );
};


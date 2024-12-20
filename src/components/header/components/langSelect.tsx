"use client";

import { routing } from "@/i18n/routing";
import Link from "next/link";
import { useActiveLang } from "@/utils";

export const LangSelect = () => {
  // const activeLang = await getLocale(); // nextjs ning ozida use client qilmasdan pathname olish
  const activeLang = useActiveLang();

  return (
    <div>
      {routing.locales.map((lng, i) => (
        <div key={lng} className="flex flex-col items-center">
          <Link
            href={`/` + lng}
            locale={lng}
            className={activeLang === lng ? "text-orange" : ""}
          >
            <span className="transition-all hover:text-orange">
              {lng.toUpperCase()}
            </span>
          </Link>
          {i + 1 !== routing.locales.length && (
            <div
              className="w-full border border-black"
              key={`line-${lng}`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

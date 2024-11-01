"use client";

import { usePathname } from "next/navigation";

export const getPathname = () => {
  const pathname = usePathname();
  const activeLang = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  return activeLang;
};

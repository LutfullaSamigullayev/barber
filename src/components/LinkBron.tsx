import { useTranslations } from "next-intl";

export const LinkBorn = () => {
  const t = useTranslations("Button");

  return (
    <a
      href="#contact"
      className="w-fit bg-white text-black py-5 px-9 shadow-2xl border-2 border-black rounded-full
      transition-all hover:scale-105 hover:text-orange"
    >
      {t("title")}
    </a>
  );
};

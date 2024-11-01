import { useTranslations } from "next-intl";

export const ButtonBron = () => {
  const t = useTranslations("Button");

    return (
        <button className="w-fit py-5 px-9 shadow-2xl  border-2 border-black   rounded-full
         transition-all hover:scale-105 hover:text-orange">
            {t("title")}
        </button>
    )
}
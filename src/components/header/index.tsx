import { Icons } from "@/icons/icons";
import { ButtonBron } from "../buttonBron";
import { LangSelect, Menu } from "./components";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className="containerUz section flex flex-col ">
      <div className="flex justify-between items-center">
        <Menu />
        <LangSelect />
        <ButtonBron />
      </div>
      <div className="flex justify-between pt-10 gap-x-5">
        <div className="flex flex-col gap-y-6 pt-16">
          <h3 className="text-4xl">{t("title")}</h3>
          <h2 className="font-bold text-6xl leading-tight">
            {t("about")}
          </h2>
          <div className="flex items-center gap-x-3">
            <Icons.location />
            <p>{t("address")}</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Icons.phone />
            <p>+99 890 765 43 21</p>
          </div>
          <ButtonBron />
        </div>
        <div className="w-full h-[700px] rounded-3xl overflow-hidden">
          <img src="/headerImage/image.jpg" alt="header" className="w-full h-full object-cover object-top" />
        </div>
      </div>
    </header>
  );
};

import { ButtonBron } from "@/components/buttonBron";
import { Icons } from "@/icons/icons";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Banner = () => {
  const t = useTranslations("Banner");

  return (
    <section id="home" className="containerUz section">
      <div className="sm:flex justify-between gap-x-4">
        <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 pb-4 lg:pt-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl">{t("title")}</h3>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {t("about")}
          </h2>
          <div className="flex items-center gap-x-3;">
            <Icons.location />
            <p>{t("address")}</p>
          </div>
          <div className="flex items-center gap-x-3;">
            <Icons.phone />
            <p>+99890-765-43-21</p>
          </div>
          <ButtonBron onSubmit={() => {}} />
        </div>
        <div className="w-full h-fit md:max-h-[500px] rounded-3xl overflow-hidden">
          <Image
            src="/bannerImage/image.jpg"
            alt="header"
            width={1200}
            height={600}
            className="w-full h-fit object-cover"
          />
        </div>
      </div>
    </section>
  );
};

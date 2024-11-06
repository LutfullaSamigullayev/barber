import { PriceCard } from "./components";
import { LinkBorn } from "@/components";
import { priceItems } from "@/data";
import { useTranslations } from "next-intl";

export const Price = () => {
  const t = useTranslations("Price");

  return (
    <section id="price" className="containerUz section">
      <div className="flex flex-col items-center">
        <h1 className="title">{t("title")}</h1>
        <div className="grid justify-center grid-cols-1 sm:grid-cols-2 py-4 gap-4">
          {priceItems.map((item) => (
            <PriceCard key={item.id} {...item} />
          ))}
        </div>
        <LinkBorn />
      </div>
    </section>
  );
};

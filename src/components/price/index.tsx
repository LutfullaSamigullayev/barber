
import { PriceItems } from "@/types";
import { useTranslations } from "next-intl";
import { PriceCard } from "./components";

export const Price = () => {
  const t = useTranslations("Price");

  const priceItems: PriceItems[] = [
    {
      id: 1,
      title: t("Regular Haircut"),
      price: 40,
    },
    {
      id: 2,
      title: t("shaving"),
      price: 20,
    },
    {
      id: 3,
      title: t("hairCut and shaving"),
      price: 50,
    },
    {
      id: 4,
      title: t("Haircut and Facial"),
      price: 100,
    },
    
  ];

    return (
        <section id="price" className="containerUz section">
            <div className="flex flex-col items-center">
                <h1 className="title">{t("title")}</h1>
                <div className="grid justify-center grid-cols-1 sm:grid-cols-2 gap-4">
                {priceItems.map((item) => (
                    <PriceCard key={item.id} {...item} />
                ))}

                </div>
            </div>
        </section>
    )
}
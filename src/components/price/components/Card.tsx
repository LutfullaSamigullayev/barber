import { PriceItems } from "@/types";
import { useTranslations } from "next-intl";

export const PriceCard = ({ title, price }: PriceItems) => {
    const t = useTranslations("Price");
  return (
    <div className="w-full px-2 flex justify-between border-b border-orange">
      <p className="">{title}</p>
      <span className="w-fit pl-4">{price} {t("money")}</span>
    </div>
  );
};

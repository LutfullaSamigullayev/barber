import { PriceItems } from "@/types";
import { useTranslations } from "next-intl";

export const PriceCard = ({ title, price }: PriceItems) => {
  const t = useTranslations("Price");
  return (
    <div className="w-full px-2 flex items-end justify-between border-b border-orange">
      <p className="">{t(title)}</p>
      <span className="w-fit whitespace-nowrap pl-4">
        {price} {t("money")}
      </span>
    </div>
  );
};

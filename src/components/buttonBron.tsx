import { useTranslations } from "next-intl";

interface ButtonBronProps {
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void; // o'zgartirilgan joy
}

export const ButtonBron = ({ onSubmit }: ButtonBronProps) => {
  const t = useTranslations("Button");

  return (
    <button
      type="button"
      className="w-fit py-5 px-9 shadow-2xl border-2 border-black rounded-full
         transition-all hover:scale-105 hover:text-orange"
      onClick={onSubmit}
    >
      {t("title")}
    </button>
  );
};

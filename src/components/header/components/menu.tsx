import { MenuItems } from "@/types";
import { useTranslations } from "next-intl";

export const Menu = () => {
  const t = useTranslations("Menu");

  const menuItems: MenuItems[] = [
    {
      id: 1,
      link: "#home",
      title: t("home"),
    },
    {
      id: 2,
      link: "#service",
      title: t("service"),
    },
    {
      id: 3,
      link: "#price",
      title: t("price"),
    },
    {
      id: 4,
      link: "#gallery",
      title: t("gallery"),
    },
    {
      id: 5,
      link: "#contact",
      title: t("contact"),
    },
  ];

  return (
    <div className="w-2/3">
      <ul className="flex gap-x-3 justify-between">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { Icons } from "@/icons/icons";
import { MenuItems, MenuProps } from "@/types";
import { useTranslations } from "next-intl";
import { LangSelect } from "./langSelect";
import React from "react";

export const Menu = ({ className, onCancel }: MenuProps) => {
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
    <div className={`hidden p-4 w-fit lg:block ${className ? "open" : ""}`}>
      <ul className="flex flex-col gap-y-4 text-4xl lg:flex-row lg:gap-x-4 lg:text-2xl">
        {menuItems.map((item, i) => (
          <React.Fragment key={item.id}>
            {" "}
            <li className="transition-all hover:text-orange hover:scale-x-110">
              <a onClick={className ? onCancel : () => console.log('No className') } href={item.link}>
                {item.title}
              </a>
            </li>
            {i + 1 !== menuItems.length && (
              <div
                className="hidden w-[1px] border border-black lg:block"
                key={`line-${item.id}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </ul>
      <div className="lg:hidden">
        <button onClick={onCancel}>
          <Icons.cancel />
        </button>
      </div>
    </div>
  );
};

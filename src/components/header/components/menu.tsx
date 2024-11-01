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
    <div className={`menu ${className ? "open" : ""} w-fit`}>
      <ul className="menuItems flex gap-x-5 justify-between">
        {menuItems.map((item, i) => (
          <React.Fragment key={item.id}>
            {" "}
            {/* Fragmentga key berish */}
            <li>
              <a onClick={onCancel} href={item.link}>{item.title}</a>
            </li>
            {i + 1 !== menuItems.length && (
              <div
                className="w-[1px] menuLine border border-black"
                key={`line-${item.id}`}
              ></div> // Har bir chiziqqa noyob key
            )}
          </React.Fragment>
        ))}
      </ul>
      <div className="cancel">
        <LangSelect />
        <button onClick={onCancel}>
          <Icons.cancel />
        </button>
      </div>
    </div>
  );
};

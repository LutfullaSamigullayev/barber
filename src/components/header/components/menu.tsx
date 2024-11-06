import { menuItems } from "@/data";
import { Icons } from "@/icons/icons";
import { MenuProps } from "@/types";
import { useTranslations } from "next-intl";
import React from "react";

export const Menu = ({ className, onCancel }: MenuProps) => {
  const t = useTranslations("Menu");

  return (
    <div className={`hidden p-4 w-fit lg:block ${className ? "open" : ""}`}>
      <ul className="flex flex-col gap-y-4 text-4xl lg:flex-row lg:gap-x-4 lg:text-2xl">
        {menuItems.map((item, i) => (
          <React.Fragment key={item.id}>
            {" "}
            <li className="transition-all hover:text-orange hover:scale-x-110">
              <a
                onClick={
                  className ? onCancel : () => console.log("No className")
                }
                href={item.link}
              >
                {t(item.title)}
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

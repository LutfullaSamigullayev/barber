"use client";

import { Icons } from "@/icons/icons";
import { ButtonBron } from "../buttonBron";
import { LangSelect, Menu } from "./components";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header id="home" className="containerUz section flex flex-col ">
      <div className="menuBox flex justify-between items-center">
        <Menu className={isOpen} onCancel={toggleMenu} />
        <Icons.burger onClick={toggleMenu} className="block lg:hidden" />
        <div className="flex items-center gap-x-5">
          <LangSelect />
          <ButtonBron />
        </div>
      </div>
    </header>
  );
};

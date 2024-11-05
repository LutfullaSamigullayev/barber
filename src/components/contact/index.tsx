"use client";

import { useTranslations } from "next-intl";
import { ButtonBron } from "@/components/buttonBron";
import { useState } from "react";

export const Contact = () => {
  const t = useTranslations("Contact");
  const [nameError, setNameError] = useState(false);
  const [telError, setTelError] = useState(false);

  const changeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const changeInputTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "" && e.target.value.length != 19) {
      setTelError(true);
    } else {
      setTelError(false);
    }
  };
  
  return (
    <section className="containerUz section">
      <div className="min-h-[250px] grid grid-cols-2 bg-[url('/contactImage/bg3.jpg')] bg-cover">
        <div>
          <img src="/contactImage/bg.jpg" alt="contact" />
        </div>
        <div className="flex flex-col justify-center gap-y-10">
          <h1 className="title  ">{t("title")}</h1>
          <form className="flex flex-col justify-center items-center gap-y-1 px-10">
            <input
              name="text"
              type="text"
              className={`w-full text-xl px-8 py-4 rounded-2xl border-2 ${
                nameError ? "border-red-500" : "border-green-500"
              } `}
              placeholder={t("name")}
              onChange={changeInputName}
            />
            <span
              className={`text-red-500 w-full px-9 select-none ${
                nameError ? "opacity-1" : "opacity-0"
              }`}
            >
              {t("nameError")}
            </span>
            <input
              name="tel"
              type="tel"
              className={`w-full text-xl px-8 py-4 rounded-2xl border-2 ${
                telError ? "border-red-500" : "border-green-500"
              } `}
              placeholder={t("tel")}
              onChange={changeInputTel}
            />
            <span
              className={`text-red-500 w-full px-9 select-none ${
                telError ? "opacity-1" : "opacity-0"
              } `}
            >
              {t("telError")}
            </span>
            <ButtonBron />
          </form>
        </div>
      </div>
    </section>
  );
};

"use client";

import { useTranslations } from "next-intl";
import { ButtonBron, Modal } from "@/components";
import { useState } from "react";
import Image from "next/image";

export const Contact = () => {
  const t = useTranslations("Contact");
  const [nameError, setNameError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [tel, setTel] = useState("+998 ");
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameError(e.target.value === "");
  };

  const formatPhoneNumber = (input: string) => {
    const digits = input.replace(/\D/g, "").slice(3); // "+998" prefiksini tashlab ketish
    let formatted = "";
    if (digits.length > 0) formatted += `(${digits.slice(0, 2)}`;
    if (digits.length >= 3) formatted += `)-${digits.slice(2, 5)}`;
    if (digits.length >= 6) formatted += `-${digits.slice(5, 7)}`;
    if (digits.length >= 8) formatted += `-${digits.slice(7, 9)}`;
    return `+998 ${formatted}`;
  };

  const changeInputTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!inputValue.startsWith("+998")) {
      setTel("+998 ");
      return;
    }
    const formattedTel = formatPhoneNumber(inputValue);
    setTel(formattedTel);
    setTelError(formattedTel.length !== 19);
  };

  const handleFocus = () => {
    if (tel === "+998 (XX)-XXX-XX-XX") {
      setTel("+998 ");
    }
  };

  const botToken = "7705601884:AAEYV5geTNUEFhWAJM8pI8VJygf5nREmKZw";
  const chatId = "1325078946";
  // https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
  // chatId olish  U "message" obyektida ko'rinadi.

  const postMessege = async () => {
    const post = `<b>Ism:</b> ${name}\n<b>Telefon raqami:</b> ${tel}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        parse_mode: "html",
        text: post,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameError && !telError && name.length !== 0 && tel.length === 19) {
      postMessege();
      setName("");
      setTel("+998 ");
      setIsModalOpen(true);
    } else {
      setNameError(name === "");
      setTelError(tel.length !== 19);
    }
  };

  return (
    <section className="containerUz section">
      <div className="min-h-[250px] grid grid-cols-1 md:grid-cols-2 bg-[url('/contactImage/bg3.jpg')] bg-cover">
        <div className="hidden md:block">
          <Image
            src="/contactImage/bg.jpg"
            alt="contact"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5">
          <h1 className="title">{t("title")}</h1>
          <form
            className="flex flex-col justify-center items-center gap-y-1 px-1 sm:px-3 md:px-6 lg:px-10"
            onSubmit={handleSubmit}
          >
            <input
              name="text"
              type="text"
              value={name}
              className={`w-full text-base sm:text-lg lg:text-xl px-8 py-2 sm:py-3 lg:py-4 rounded-2xl border-2 
                ${nameError ? "border-red-500" : "border-green-500"}
                ${
                  name.length === 0 ? "text-gray-400 select-none" : "text-black"
                }
                `}
              placeholder={t("name")}
              onFocus={handleFocus}
              onChange={changeInputName}
            />
            <span
              className={`text-red-500 w-full px-2 sm:px-4 lg:px-9 select-none 
                ${nameError ? "opacity-1" : "opacity-0"}`}
            >
              {t("nameError")}
            </span>
            <input
              name="tel"
              type="tel"
              value={tel.length === 5 ? "+998 (XX)-XXX-XX-XX" : tel}
              className={`w-full text-base sm:text-lg lg:text-xl px-8 py-2 sm:py-3 lg:py-4 rounded-2xl border-2 ${
                telError ? "border-red-500" : "border-green-500"
              } ${
                tel.length === 5 ? "text-gray-400 select-none" : "text-black"
              }`}
              onFocus={handleFocus}
              onChange={changeInputTel}
            />
            <span
              className={`text-red-500 w-full px-2 sm:px-4 lg:px-9 select-none 
                ${telError ? "opacity-1" : "opacity-0"}`}
            >
              {t("telError")}
            </span>
            <ButtonBron onSubmit={handleSubmit} />
          </form>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

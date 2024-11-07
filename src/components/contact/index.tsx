"use client";

import { useTranslations } from "next-intl";
import { ButtonBron, Modal } from "@/components";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { priceItems, times } from "@/data";

export const Contact = () => {
  const t = useTranslations("Contact");
  const tPrice = useTranslations("Price");

  const [nameError, setNameError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [tel, setTel] = useState("+998 ");
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // ---------------------------- Services select ------------------------------------
  const handleServiceSelect = (service: string) => setSelectedService(service);

  // ---------------------------- Data select ------------------------------------
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setSelectedTime(null); // Sana o'zgarganda vaqtni reset qilish
  };

  // ---------------------------- Time select ------------------------------------
  const handleTimeSelect = (time: string) => setSelectedTime(time);
  const isTimeDisabled = (time: string) => {
    if (!selectedDate) return false;

    const now = new Date();
    const [hour, minute] = time.split(":").map(Number);
    const timeDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      hour,
      minute
    );

    // Agar tanlangan sana bugungi sana bo'lsa va vaqt hozirgi vaqtdan oldin bo'lsa, disable qilamiz
    return (
      selectedDate.toDateString() === now.toDateString() &&
      timeDate.getTime() <= now.getTime()
    );
  };

  // ---------------------------- FORM START ------------------------------------

  // ---------------------------- Input name ------------------------------------
  const changeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameError(e.target.value === "");
  };
  // ---------------------------- Input end ------------------------------------

  // ---------------------------- Input tel ------------------------------------
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
  // ---------------------------- Input end ------------------------------------

  // ---------------------------- Telegram start ------------------------------------
  const botToken = "7705601884:AAEYV5geTNUEFhWAJM8pI8VJygf5nREmKZw";
  const chatId = "1325078946";
  // https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
  // chatId olish  U "message" obyektida ko'rinadi.
  // ---------------------------- Telegram end ------------------------------------

  // ---------------------------- Post start ------------------------------------
  const postMessege = async () => {
    const post = `<b>Ism:</b> ${name}\n<b>Telefon raqami:</b> ${tel}\n<b>Xizmat:</b> ${
      selectedService ? selectedService : "belgilanmagan"
    } \n<b>Kuni:</b> ${
      selectedDate
        ? selectedDate.toLocaleDateString("en-GB").replace(/\//g, ".")
        : "belgilanmagan"
    } \n<b>Soati:</b> ${selectedTime ? selectedTime : "belgilanmagan"}`;

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
  // ---------------------------- Psot end ------------------------------------

  // ---------------------------- Submit start ------------------------------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameError && !telError && name.length !== 0 && tel.length === 19) {
      postMessege();
      setName("");
      setTel("+998 ");
      setSelectedService(null);
      setSelectedDate(null);
      setSelectedTime(null);
      setIsModalOpen(true);
    } else {
      setNameError(name === "");
      setTelError(tel.length !== 19);
    }
  };
  // ---------------------------- Submit end ------------------------------------

  // ---------------------------- FORM END ------------------------------------

  return (
    <section id="contact" className="containerUz section">
      <h1 className="title">{t("title")}</h1>

      <div className="min-h-[250px] grid gap-y-5 gap-x-5 grid-cols-1 lg:grid-cols-3">
        <div className="w-full">
          <h3 className="contact__title">{t("services")}</h3>
          {priceItems.map((service) => (
            <div
              key={service.id}
              className={`border-b rounded-xl overflow-hidden border-gray-300 p-3 flex gap-x-4 items-center justify-between cursor-pointer transition-all hover:border-slate-600 hover:px-7 ${
                selectedService === tPrice(service.title)
                  ? "border-slate-600 px-7"
                  : ""
              }`}
              onClick={() => handleServiceSelect(tPrice(service.title))}
            >
              <div className="w-full flex justify-between">
                <span>{tPrice(service.title)}</span>
                <span>
                  {service.price} {tPrice("money")}
                </span>
              </div>
              <div
                className={`w-[21px] h-[20px] rounded-full border-2 border-gray-300 ${
                  selectedService === tPrice(service.title)
                    ? "bg-foreground border-background"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>

        <div className="w-full">
          <h3 className="contact__title">{t("date")}</h3>
          <div className="w-full flex justify-center pt-2 text-black">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              className="p-2 border border-gray-300  rounded-lg w-fit"
              minDate={new Date()} // faqat bugungi sana yoki kelajakdagi sanalar tanlanadi
            />
          </div>

          <div className="grid grid-cols-3 gap-3 pt-5 text-black">
            {times.map((time) => (
              <div
                key={time}
                onClick={() => !isTimeDisabled(time) && handleTimeSelect(time)}
                className={`select-none p-2 text-center rounded-lg ${
                  selectedTime === time
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 hover:bg-gray-400"
                } ${
                  isTimeDisabled(time)
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
                    : ""
                }`} // disable holatida ko'rinish
              >
                {time}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col justify-center gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5">
          <h3 className="contact__title">{t("form")}</h3>

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

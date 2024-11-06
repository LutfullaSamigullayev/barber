import { useTranslations } from "next-intl";
import { Card } from "./components";
import Image from "next/image";
import { servicesItems } from "@/data";

export const Services = () => {
  const t = useTranslations("Services");

  return (
    <div className=" bg-gradient-to-br from-slate-400 from-10% via-slate-500 via-30% to-neutral-500 to-90%">
      <section id="service" className="containerUz section">
        <div className="">
          <h1 className="title text-white">{t("title")}</h1>
          <div className="max-h-[550px] grid md:grid-cols-2 grid-rows-1 gap-8 ">
            <div className=" hidden md:block rounded-3xl overflow-hidden">
              <Image
                src="/servicesImage/barberServices.jpg"
                alt="barber"
                width={600}
                height={550}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
              {servicesItems.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>

    // bg-[url('/servicesImage/image1.jpg')] bg-cover
  );
};

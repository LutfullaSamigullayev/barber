import { ServicesItems } from "@/types";
import { useTranslations } from "next-intl";
import { Card } from "./components";

export const Services = () => {
  const t = useTranslations("Services");

  const servicesItems: ServicesItems[] = [
    {
      id: 1,
      image: "/servicesImage/hairCut.jpg",
      title: t("hairCut"),
    },
    {
      id: 2,
      image: "/servicesImage/shaving.jpg",
      title: t("shaving"),
    },
    {
      id: 3,
      image: "/servicesImage/breadTrim.jpg",
      title: t("breadTrim"),
    },
    {
      id: 4,
      image: "/servicesImage/kidsHairCut.jpg",
      title: t("kidsHairCut"),
    },
  ];

  return (
    <div className="bg-[url('/servicesImage/image1.jpg')] bg-cover">
      <section id="service" className="containerUz section">
        <div className="">
          <h1 className="title">
            {t("title")}
          </h1>
          <div className="max-h-[550px] grid md:grid-cols-2 grid-rows-1 gap-8 ">
            <div className=" hidden md:block rounded-3xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/servicesImage/barberServices.jpg"
                alt="barber"
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
  );
};

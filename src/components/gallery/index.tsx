import { useTranslations } from "next-intl";

export const Gallery = () => {
  const t = useTranslations("Menu");

  return (
    <div className="bg-[url('/galleryImage/bg2.jpg')] bg-cover">
      <section id="gallery" className="containerUz section">
        <h1 className="title text-white">{t("gallery")}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-6 overflow-hidden">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="rounded-3xl overflow-hidden">
              <img
                src={`/galleryImage/${index + 1}.jpg`}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

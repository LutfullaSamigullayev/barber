import { ServicesItems } from "@/types";
import Image from "next/image";

export const Card = ({ title, image }: ServicesItems) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <div className="h-4/5 overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center text-center leading-4 backdrop: break-words h-1/5 text-lg sm:text-xl lg:text-2xl py-2 rounded-b-lg bg-white">
        {title}
      </div>
    </div>
  );
};

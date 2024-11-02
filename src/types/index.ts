import { SVGProps } from "react";

export interface MenuItems {
  id: number;
  link: string;
  title: string;
}
export interface ServicesItems {
  id: number;
  image: string;
  title: string;
}
export interface PriceItems {
  id: number;
  title: string;
  price: number;
}

export type IconProps = SVGProps<SVGSVGElement>;

export interface MenuProps {
  className?: boolean;
  onCancel: () => void; // Callback funksiyasi
}
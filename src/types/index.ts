import { SVGProps } from "react";

export interface MenuItems {
  id: number;
  link: string;
  title: string;
}

export type IconProps = SVGProps<SVGSVGElement>;

export interface MenuProps {
  className?: boolean;
  onCancel: () => void; // Callback funksiyasi
}
import { MenuItems, PriceItems, ServicesItems } from "@/types"; // `PriceItems` tipini import qilish

export const menuItems: MenuItems[] = [
  {
    id: 1,
    link: "#home",
    title: "home",
  },
  {
    id: 2,
    link: "#service",
    title: "service",
  },
  {
    id: 3,
    link: "#price",
    title: "price",
  },
  {
    id: 4,
    link: "#gallery",
    title: "gallery",
  },
  {
    id: 5,
    link: "#contact",
    title: "contact",
  },
];

export const servicesItems: ServicesItems[] = [
  {
    id: 1,
    image: "/servicesImage/hairCut.jpg",
    title: "hairCut",
  },
  {
    id: 2,
    image: "/servicesImage/shaving.jpg",
    title: "shaving",
  },
  {
    id: 3,
    image: "/servicesImage/breadTrim.jpg",
    title: "breadTrim",
  },
  {
    id: 4,
    image: "/servicesImage/kidsHairCut.jpg",
    title: "kidsHairCut",
  },
];

export const priceItems: PriceItems[] = [
  {
    id: 1,
    title: "regular haircut",
    price: 40,
  },
  {
    id: 2,
    title: "haircut",
    price: 30,
  },
  {
    id: 3,
    title: "shaving",
    price: 20,
  },
  {
    id: 4,
    title: "hairCut and shaving",
    price: 50,
  },
  {
    id: 5,
    title: "facial",
    price: 30,
  },
  {
    id: 6,
    title: "wedding",
    price: 150,
  },
];

export const times = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

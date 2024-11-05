"use client";

import { Icons } from "@/icons/icons";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Agar bosilgan joy modalning tashqarisi bo'lsa, onClose'ni chaqir
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick} // Tashqariga bosganda modalni yopish
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-50 ${
        isOpen ? "opacity-1 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 bg-white rounded-lg max-w-sm w-full flex flex-col items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-transparent border-none"
        >
          <Icons.cancel2 />
        </button>
        <div className="w-36 h-36 mb-4">
          <Icons.done />
        </div>
        <p className=" text-green-800 mb-6 text-center text-lg">
          Tabriklaymiz!
        </p>
        <p className=" text-gray-600 mb-6 text-center text-base">
          Buyurtmangiz muvaffaqiyatli bo’ldi, siz bilan tez orada bog’lanamiz.
        </p>
        <a
          href="#home"
          onClick={onClose}
          className="py-4 px-8 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Bosh sahifaga o&apos;tish
        </a>
      </div>
    </div>
  );
};

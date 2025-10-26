// components/Header.js
"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex justify-start pt-6">
      <Image
        src="/images/PHOTO-2025-09-30-21-49-13.jpg"
        alt="IndusLink Logo"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
  );
}
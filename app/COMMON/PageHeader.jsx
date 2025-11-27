"use client";
import Image from "next/image";

export default function PageHeader({ title }) {
  return (
    <section className="relative w-full h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden bg-black">

      <Image
        src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764165607/Rectangle_259_pswsam.png"
        alt="Background"
        fill
        className="object-cover object-center opacity-80"
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-center text-white">
        <h1 className="text-[42px] md:text-[54px] font-extrabold mb-2">
          {title}
        </h1>

        <p className="text-[18px] md:text-[20px] font-medium">
          Home / {title}
        </p>
      </div>
    </section>
  );
}

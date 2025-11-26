"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full h-full"
      >
        {/* ==== SLIDE 1 ==== */}
        <SwiperSlide>
          <BannerSlide image="https://res.cloudinary.com/dd9tagtiw/image/upload/v1764137766/31a3ed3ca2aef0a187e3fb1ebde87adf32f2bca9_otd86h.jpg" />
        </SwiperSlide>

        {/* ==== SLIDE 2 ==== */}
        <SwiperSlide>
          <BannerSlide image="https://res.cloudinary.com/dd9tagtiw/image/upload/v1764137820/abb17429272c9df59c0b55bc1208898e8b9c89ca_wbszlf.jpg " />
        </SwiperSlide>

        {/* ==== SLIDE 3 ==== */}
        <SwiperSlide>
          <BannerSlide image="https://res.cloudinary.com/dd9tagtiw/image/upload/v1764137766/31a3ed3ca2aef0a187e3fb1ebde87adf32f2bca9_otd86h.jpg" />
        </SwiperSlide>
      </Swiper>

      <style jsx global>{`
        /* DOTS CUSTOM STYLE EXACT SAME AS IMAGE */
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          border: 2px solid white;
          background: transparent;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #00e6ff !important;
          border-color: #00e6ff !important;
        }
      `}</style>
    </section>
  );
}

function BannerSlide({ image }) {
  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center text-center">

      {/* Background Image */}
      <Image
        src={image}
        alt="DJ Banner"
        fill
        priority
        className="object-cover brightness-90"
      />

      {/* Dark blue overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-20 max-w-[900px] px-4">
        <h3 className="text-white text-3xl md:text-4xl font-light italic mb-3">
          Tonight
        </h3>

        <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-wide">
          PROGRESSIVE
        </h1>

        <h2 className="text-white text-4xl md:text-5xl font-bold mt-1">
          TRANCE NIGHT
        </h2>

        <p className="text-white/90 text-md md:text-lg leading-relaxed mt-6">
          Dive into the <span className="font-semibold">heart of live</span> music with a band
          that blends <span className="font-semibold">energy</span>, emotion, and artistry. 
          From intimate vibes to festival anthems, <br />
          we bring every moment to life.
        </p>
      </div>
    </div>
  );
}

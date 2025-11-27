"use client";
import Image from "next/image";

export default function HomeServices() {
  const services = [
    {
      title: "Harmony Wedding Dj",
      desc: "The citation ceremony at RVS was graced by our chief guest, Dr.Amna Mirza, an eminent academician, author, entrepreneur and curator of ideas. She motivated the students with her wise words and wished them a bright future.",
      img: "https://res.cloudinary.com/demo/image/upload/wedding.jpg",
    },
    {
      title: "Birthday Parties",
      desc: "The citation ceremony at RVS was graced by our chief guest, Dr.Amna Mirza, an eminent academician, author, entrepreneur and curator of ideas. She motivated the students with her wise words and wished them a bright future.",
      img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1764149841/Rectangle_234_lkwaph.png",
    },
    {
      title: "Festivals Cultural Events",
      desc: "The citation ceremony at RVS was graced by our chief guest, Dr.Amna Mirza, an eminent academician, author, entrepreneur and curator of ideas. She motivated the students with her wise words and wished them a bright future.",
      img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1764149841/Rectangle_234_lkwaph.png",
    },
    {
      title: "Corporate Events",
      desc: "The citation ceremony at RVS was graced by our chief guest, Dr.Amna Mirza, an eminent academician, author, entrepreneur and curator of ideas. She motivated the students with her wise words and wished them a bright future.",
      img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1764149841/Rectangle_234_lkwaph.png",
    },
  ];

  return (
    <section className="w-full bg-[#F7EFF2] py-20">

      {/* Heading */}
      <div className="text-center mb-16">
        <h3 className="text-[32px] italic text-black">Service</h3>
        <h2 className="text-[42px] font-extrabold text-black">Our Services</h2>
      </div>

      {/* ACCURATE STAGGERED LAYOUT */}
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-40">

        {services.map((service, index) => (
          <div 
            key={index}
            className={`relative ${
              index === 1 ? "md:mt-28" : ""   // ONLY second item moves down (same as screenshot)
            } ${
              index === 3 ? "md:-mt-16" : "" // Align last item slightly up to match screenshot
            }`}
          >
            
            {/* IMAGE BOX */}
            <div className="w-full h-[300px] md:h-[320px] relative rounded-xl overflow-hidden shadow-md">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-24 bg-white w-[85%] md:w-[78%] rounded-xl shadow-xl p-6">
              <h3 className="text-[20px] font-semibold mb-2 text-black">
                {service.title}
              </h3>
              <p className="text-[16px] text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}

      </div>

      <div className="h-[200px]"></div>
    </section>
  );
}

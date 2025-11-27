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
  ];
const customLeft = {
  2: "left-[40%]",  // 3rd card
  3: "left-[60%]"   // 4th card
};
  return (
    <section className="w-full bg-[#F7EFF2] py-20">

      <div className="text-center mb-16">
        <h3 className="text-[32px] italic text-black">Service</h3>
        <h2 className="text-[42px] font-extrabold text-black">Our Services</h2>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-15">

        {services.map((service, index) => (
          <div
            key={index}
            className={`
              relative
              ${index % 2 === 0 ? "md:mt-18" : "md:mt-0"}
            `}
          >

            {/* IMAGE */}
            <div className="w-full h-[300px] md:h-[330px] relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* FIXED PERFECT DESCRIPTION POSITION */}
            <div
             className={`
  absolute -translate-x-1/2
  ${
    customLeft[index] 
      ? customLeft[index] 
      : index % 2 !== 0 
        ? "left-60" 
        : "left-[60%]"
  }
  ${index % 2 !== 0 ? "-bottom-10" : "-bottom-24"}
  bg-white w-[88%] md:w-[80%]
  rounded-xl shadow-xl p-6
`}
            >
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

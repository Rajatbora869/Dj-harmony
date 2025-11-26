"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function HomeAbout() {
  const points = [
    "Bridging Hearts Through Melodies",
    "Fostering a Legacy of Creativity",
    "Innovating Musical Expressions",
    "Empowering Passionate Musicians",
  ];

  return (
    <section className="w-full bg-[#eef6f8] py-20">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h3 className="text-[42px] italic font-light text-black mb-2">About</h3>

          <h2 className="text-[48px] md:text-[54px] font-extrabold text-black leading-tight mb-6">
            DJ HARMONY BEATS
          </h2>

          <p className="text-[18px] text-gray-700 leading-[1.8] max-w-[650px] mb-8">
            DJ Harmony Beats a skilled based in Ghaziabad, Well known for
            Professional DJing and Music. DJ Harmony Beats was started in the
            year 2014 and has successfully completed more than 10 years in the
            art of playing. DJ Mohit Monga is the founder and CEO of DJ Harmony
            Beats. DJ Mohit Monga has always made sure of keeping the DJ Harmony
            updated with latest technologies, equipment, DJ Console and social
            connect with other top level and professional DJs of the industry.
          </p>

          {/* CHECKMARKS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {points.map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-[#00c777] text-[22px] mt-1" />
                <span className="text-[18px] font-medium text-gray-800">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full h-full">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <image
              src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1764136265/about-img.jpg" 
              alt="Studio Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

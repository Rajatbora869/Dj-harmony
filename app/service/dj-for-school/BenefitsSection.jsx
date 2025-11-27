"use client";
import Image from "next/image";

export default function BenefitsSection() {
  return (
    <section className="w-full px-5 md:px-16 lg:px-24 py-14">
      
      {/* -------------------- Heading -------------------- */}
      <h2 className="text-[48px] font-bold leading-tight mb-10">
        Benefits of choosing DJ Harmony <br /> Beats for your event
      </h2>

      {/* -------------------- List + Images -------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

        {/* Left Side – Bullet Points */}
        <ul className="space-y-3 text-[18px] leading-7 lg:pl-3 md:pr-8 list-inside font-medium">
          <li className="list-disc">This is our profession.</li>
          <li className="list-disc">#Years of experience.</li>
          <li className="list-disc">Interest in the quality of work.</li>
          <li className="list-disc">Excellent technical equipment.</li>
          <li className="list-disc">Bonuses for regular customers.</li>
          <li className="list-disc">Bring events to life with music.</li>
          <li className="list-disc">Create memories with live tunes.</li>
        </ul>

        {/* Image 1 */}
        <div className="w-full">
          <Image
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764243598/Rectangle_274_ogrxdg.png"
            alt="Event Image"
            width={500}
            height={300}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="w-full">
          <Image
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764243598/Rectangle_274_ogrxdg.png"
            alt="Event Image"
            width={500}
            height={300}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* -------------------- Second Heading -------------------- */}
      <h2 className="text-[48px]  font-bold leading-tight mt-16 mb-6">
        Why DJ Harmony Beats for School/college events
      </h2>

      {/* -------------------- Paragraph Section -------------------- */}
      <p className="text-[20px] leading-7 text-#101010-700 max-w-8xl mb-8 leading-relaxed">
        The range of services of an DJ Harmony Beats is qualitatively different from
        other DJs. We are very professionals and experienced in this field. We know
        how to adapt to different situations that may arise at the event, easily
        and quickly change the style and energy of the music to suit the mood of
        the audience, be an improvising artist and set the entertaining atmosphere
        of the event. Services of a professional DJ with extensive experience in
        School and College events.
      </p>

      {/* -------------------- Numbered Points -------------------- */}
      <div className="space-y-5 mt-10">
        {/* 1 */}
        <div className="flex items-center gap-4 mt-5">
          <span className="text-[18px] bg-[#0b0520] text-white px-5 py-3  font-bold">
            1
          </span>
          <p className="text-[32px] font-semibold">
            Music that matches the theme of the events.
          </p>
        </div>

        {/* 2 */}
        <div className="flex items-center gap-4">
          <span className="text-[18px] bg-[#0e0727] text-white px-5 py-3 font-bold">
            2
          </span>
          <p className="text-[32px] font-semibold">
            We do all music arrangement
          </p>
        </div>

        {/* 3 */}
        <div className="flex items-center gap-4">
          <span className="text-[18px] bg-[#0b0520] text-white px-5 py-3 font-bold">
            3
          </span>
          <p className="text-[32px] font-semibold">
            Assistance in selection of the necessary equipment.
          </p>
        </div>
      </div>
    </section>
  );
}

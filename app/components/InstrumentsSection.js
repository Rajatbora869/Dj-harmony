"use client";

import Image from "next/image";

export default function InstrumentsSection() {
    return (
        <section className="w-full bg-[#F2F2F2] py-20">

            {/* TOP TEXT */}
            <div className="text-center max-w-[1100px] mx-auto px-6">
                <h3 className="text-[32px] md:text-[38px] italic text-black mb-3">
                    Music Instruments
                </h3>

                <h2 className="text-[42px] md:text-[54px] font-extrabold text-black leading-snug mb-6">
                    DJ Harmony Beats Instruments
                </h2>

                <p className="text-[18px] md:text-[20px] text-gray-700 leading-[1.8]">
                    Industrial Standard and Professional gears such as Speakers , Subs,
                    <br />
                    Line Array, Mixing Consoles, DJ Controllers, Amplifiers, Microphones,
                    <br />
                    Lighting DJ Floors and Trussing.
                </p>
            </div>

            {/* BIG INSTRUMENT IMAGE WITH ADJUSTED GRADIENT OVERLAY */}
            <div className="max-w-[1400px] mx-auto mt-14 px-4">
                <div className="relative w-full h-[420px] md:h-[520px] rounded-xl overflow-hidden shadow-lg bg-black">

                    {/* IMAGE
          - mobile: object-contain to avoid critical crop
          - md+: object-cover for hero look
          - object-center to keep focus centered
      */}
                    <Image
                        src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764153867/63f5ab3a6aece517088462e4__D4S9117.optimised_20_1_-p-2000.jpg_x5b5ev.png"
                        alt="DJ Instruments"
                        fill
                        priority
                        className="object-contain md:object-cover object-center"
                    />

                    {/* GRADIENT OVERLAY - tuned so image stays visible */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(0,0,0,0) 15%, rgba(0,0,0,0.66) 60%, rgba(0,0,0,1) 100%)"
                            /* if you prefer exact hex stops you asked earlier, use:
                               linear-gradient(180deg, #00000000 15%, #000000A8 60%, #000000 100%)
                            */
                        }}
                    />

                    {/* OPTIONAL: subtle top highlight so top of image doesn't look flat */}
                    <div
                        className="absolute inset-x-0 top-0 h-16 pointer-events-none"
                        style={{
                            background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0))"
                        }}
                    />
                </div>
            </div>

        </section>


    );
}

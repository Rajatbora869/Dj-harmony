"use client";
import Image from "next/image";

export default function HomeGallery() {
    return (
        <section className="w-full bg-white py-20 relative">

            {/* FIXED CYAN VERTICAL LINE — TOUCHING TOP EXACT */}
            <div
                className="
    absolute 
    top-0 
    left-4        /* mobile */
    sm:left-8     /* small devices */
    md:left-5    /* tablets */
    lg:left-[80px] /* desktop exact */
    h-[300px]     /* mobile height */
    sm:h-[380px]
    md:h-[450px]
    lg:h-[500px]  /* large screens exact height */
    w-[5px] 
    bg-[#28E7F7] 
    rounded-full
  "
            ></div>

            {/* ===== TOP ROW EXACT SCREENSHOT ===== */}
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT BLOCK */}
                <div className="lg:pl-24 pl-5 pr-10">
                    {/* correct padding to align with line */}

                    <h3 className="text-[32px] italic text-black font-light mb-4 leading-snug">
                        Get ready to party
                    </h3>

                    <h2 className="text-[48px] md:text-[66px] font-extrabold text-black leading-tight mb-10">
                        Work Gallery
                    </h2>

                    {/* View All Button */}
                    <button className="px-12 py-4 bg-[#28E7F7] text-black rounded-full text-[16px] font-semibold shadow-md hover:opacity-90 transition">
                        View All
                    </button>
                </div>

                {/* RIGHT LARGE IMAGE */}
                <div className="w-full h-[450px] relative rounded-[40px] overflow-hidden shadow-xl">
                    <Image
                        src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764151319/Rectangle_202_btzjgb.png"
                        alt="Gallery Main"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* BOTTOM PART SAME */}
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">

                <div className="w-full h-[380px] relative rounded-3xl overflow-hidden shadow-lg">
                    <Image
                        src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764151319/Rectangle_210_u2wffs.png"
                        alt="Gallery 1"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="w-full h-[380px] relative rounded-3xl overflow-hidden shadow-lg">
                    <Image
                        src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764151391/Rectangle_209_e7bumj.png"
                        alt="Gallery 2"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* BOTTOM BUTTONS */}
            <div className="w-full flex justify-center gap-10 mt-16">
                <button className="px-10 py-3 rounded-full border-2 border-[#FF37C9] text-[#FF37C9] text-[16px] font-semibold bg-white hover:bg-[#ff37c914] transition">
                    Book Now
                </button>

                <button className="px-10 py-3 rounded-full bg-[#28E7F7] text-black text-[16px] font-semibold hover:opacity-90 transition">
                    Call Now
                </button>
            </div>
        </section>
    );
}

"use client"
import React from 'react'

function GalleryCard() {
    return (
        <div>
            <section className="w-full lg:py-20 py-10 px-5 bg-white">
                <div className="max-w-[1500px] mx-auto px-4">

                    <div
                        className="
        columns-1
        sm:columns-2
        lg:columns-3
        gap-6
        space-y-6
      "
                    >

                        {/* IMAGE 1 - Wedding Couple */}
                        <div className="break-inside-avoid overflow-hidden rounded-xl shadow-md">
                            <img
                                src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764166734/Rectangle_254_lsg7o8.png"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>

                        {/* IMAGE 2 - Party Crowd */}
                        <div className="break-inside-avoid overflow-hidden rounded-xl shadow-md">
                            <img
                                src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764166730/Rectangle_261_om7y87.png"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>

                        {/* IMAGE 3 - Big Stage */}
                        <div className="break-inside-avoid overflow-hidden rounded-xl shadow-md">
                            <img
                                src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764166736/Rectangle_256_vbsqdc.png"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>

                        {/* IMAGE 4 - Headphones */}
                        <div className="break-inside-avoid overflow-hidden rounded-xl shadow-md">
                            <img
                                src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764166730/Rectangle_257_ulmpat.png"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>

                        {/* IMAGE 5 - DJ Controller Close-up */}

                        {/* IMAGE 6 - Hand With Watch on DJ Deck */}
                        <div className="break-inside-avoid overflow-hidden rounded-xl shadow-md">
                            <img
                                src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764167155/Rectangle_262_bv7997.png"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>

                        {/* IMAGE 7 - DJ Girl */}


                        <div className="break-inside-avoid overflow-hidden rounded-xl shadow-md">
                            <img
                                src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764166730/Rectangle_260_qrhicl.png"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>

                        <div className="break-inside-avoid overflow-hidden rounded-xl shadow-md">
                            <img
                                src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764166730/Rectangle_259_1_aqhmzm.png"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>


                    </div>
                </div>
            </section>



        </div>
    )
}

export default GalleryCard

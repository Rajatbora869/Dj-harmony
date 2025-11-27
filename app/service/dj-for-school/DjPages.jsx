"use client";
import Image from "next/image";
import React from "react";

export default function DjPages() {
    return (
        <section className="w-full px-4 md:px-10 lg:px-20 py-10">
            {/* Heading */}
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-10">
                DJ, PA ,Sound & Light for school/College events
            </h1>

            {/* Image */}
            <div className="w-full">
                <Image
                    src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764242437/back1_1_y44pdw.png" // ← apni image dal dena
                    width={1600}
                    height={900}
                    alt="dj image"
                    className="rounded-lg w-full object-cover"
                />
            </div>

            {/* Text Content */}
            <div className=" mt-8 lg:text-[20px] md:text-[16px] leading-7 text-gray-800 space-y-4 max-w-8xl">
                <p className="leading-relaxed">
                    We are <span className="font-bold">DJ Harmony Beats</span>, has been
                    DJing since 2024. One of our popular services is the DJ booking for a
                    school/college event. Musical accompaniment is of great importance
                    when holding an event of any format: disco, corporate parties,
                    anniversaries, advertising campaigns, presentations, political rallies
                    etc. It can be spoiled by sound quality & tasteless music that does
                    not fit the status or theme of the evening. Even such moments as the
                    lack of a suitable soundtrack from a DJ can negate a good mood.
                    Therefore, do not underestimate the work of the DJ, since it also
                    depends on him what impression the event will make on the guests. We
                    are professionals in this field and we are able to ignite any
                    audience, choose the background music for an event of various status.
                    In the program, everything is thought out to the smallest detail, so
                    overlaps and awkward moments are excluded. We advise you to order a DJ
                    for a graduation, banquet, anniversary and a great mood is guaranteed
                    to absolutely everyone. However, each school/ college event needs its
                    own which often largely depends on high-quality music.
                </p>

                <p className="leading-relaxed">By contacting <span className="font-bold">DJ Harmony Beats</span> for an event, you will get a person who is passionately loved by all the Ghaziabad. with professional equipment and the desire to bring freshness and richness to any important event for you and leave pleasant memories. DJ services include setting up high-quality sound, light and video projection design throughout the event. The DJ Harmony Beats has an excellent technical specialist who has his own set of DJ equipment. Opportunity to receive a comprehensive service for renting all the necessary equipment (Sound, light music etc.) at a price lower than in professional rental. The selection of the musical format, style, mood for the event is carried out based on the request of the client. An experienced DJ to be able to work with different customers: from modern non-standard trends to sound in traditional styles. The experience of working at different venues is also important: open air , a spacious room, a small hall, a loft, a cottage, a club, a restaurant, and more.</p>
            </div>
        </section>
    );
}

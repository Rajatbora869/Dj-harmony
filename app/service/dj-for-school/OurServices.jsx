"use client";

export default function OurServices() {
  const services = [
    {
      title: "DJ For Corporate Party",
      desc: "We put our clients first, always listening to their needs and tailoring our services to create the perfect vibe for their event.",
    },
    {
      title: "Diplomatic Training Programs",
      desc: "We show up on time, fully prepared, and ready to make every event a success. Our word is our commitment.",
    },
    {
      title: "Governance Solutions",
      desc: "We are deeply passionate about music and its power to connect people, creating memorable moments that last a lifetime.",
    },
    {
      title: "Campaign Management",
      desc: "We maintain a high standard of professionalism, from our appearance to our interactions, ensuring a smooth and enjoyable experience for all involved.",
    },
    {
      title: "Thought Leadership",
      desc: "We adapt to any situation, remaining calm under pressure and ready to make adjustments to keep the energy flowing and the crowd engaged.",
    },
    {
      title: "DJ For School/College Events",
      desc: "We believe in being honest, transparent, and ethical in all our business dealings, always delivering on our promises.",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-14 px-4 md:px-10 lg:px-20">

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
        Our Services
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-[24px]  font-bold mb-3 leading-6">
              {item.title}
            </h3>
            <p className="mt-5 text-[20px] text-#101010-400 leading-7 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

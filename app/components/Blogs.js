"use client";
import Image from "next/image";

export default function HomeBlogs() {
  const blogs = [
    {
      date: "31 January 2015",
      title: "Freaks from Space Party with Danny Tenaglia",
      img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1764151319/Rectangle_210_u2wffs.png",
    },
    {
      date: "31 January 2015",
      title: "Freaks from Space Party with Danny Tenaglia",
      img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1764151319/Rectangle_210_u2wffs.png",
    },
    {
      date: "31 January 2015",
      title: "Freaks from Space Party with Danny Tenaglia",
      img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1764151319/Rectangle_210_u2wffs.png",
    },
    {
      date: "31 January 2015",
      title: "Freaks from Space Party with Danny Tenaglia",
      img: "https://res.cloudinary.com/dal5dlztv/image/upload/v1764151319/Rectangle_210_u2wffs.png",
    },
  ];

  return (
    <section className="w-full bg-[#F7F7F7] py-20">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h3 className="text-[32px] italic text-gray-700 mb-3">Latest post</h3>
        <h2 className="text-[48px] md:text-[54px] font-extrabold text-black">
          DJ Harmony Beats blogs
        </h2>
      </div>

      {/* 2×2 GRID */}
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="relative w-full h-[360px]  overflow-hidden group">

            {/* IMAGE */}
            <Image
              src={blog.img}
              alt={blog.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />

            {/* OVERLAY LAYER (dark fade) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80"></div>

            {/* BLOG DATE */}
            <p className="absolute top-4 left-4 text-white text-[16px]">
              {blog.date}
            </p>

            {/* BLOG TITLE */}
            <h3 className="absolute bottom-6 left-4 right-4 text-white text-[24px] leading-snug font-semibold">
              {blog.title}
            </h3>

          </div>
        ))}
      </div>

    </section>
  );
}

"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function BlogSection() {
    // === MAIN BLOG LIST ===
    const blogs = [
        {
            id: 1,
            title: "Why DJ important for wedding?",
            author: "Admin",
            date: "30 May 2025",
            image: "https://res.cloudinary.com/dal5dlztv/image/upload/v1764228881/Rectangle_264_th672s.png",
        },
        {
            id: 2,
            title: "Top things to check while hiring DJ services",
            author: "Admin",
            date: "30 May 2025",
            image: "https://res.cloudinary.com/dal5dlztv/image/upload/v1764228881/Rectangle_265_llmfd6.png",
        },
        {
            id: 3,
            title: "How to choose the perfect DJ for any event?",
            author: "Admin",
            date: "30 May 2025",
            image: "https://res.cloudinary.com/dal5dlztv/image/upload/v1764228881/Rectangle_266_a3qvo8.png",
        },
        {
            id: 4,
            title: "Why DJ matters for corporate events?",
            author: "Admin",
            date: "01 June 2025",
            image: "https://res.cloudinary.com/dal5dlztv/image/upload/v1764228881/Rectangle_264_th672s.png",
        },
        {
            id: 5,
            title: "Best music genres for weddings",
            author: "Admin",
            date: "01 June 2025",
            image: "https://res.cloudinary.com/dal5dlztv/image/upload/v1764228881/Rectangle_266_a3qvo8.png",
            
        },
        {
            id: 6,
            title: "How DJ creates mood in events",
            author: "Admin",
            date: "02 June 2025",
            image: "https://res.cloudinary.com/dal5dlztv/image/upload/v1764228881/Rectangle_265_llmfd6.png",
        },
    ];

    const sidebarBlogs = blogs.slice(0, 3);

    // pagination
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(blogs.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className="w-full bg-[#190224] py-0 px-4 lg:pl-16 lg:pr-0">

            {/* THREE COLUMN GRID — LEFT | LINE | RIGHT */}
            <div className="max-w-[1420] m-auto grid grid-cols-1 lg:grid-cols-[2fr_1px_1fr] gap-10">

                {/* ---------------- LEFT MAIN BLOG AREA ---------------- */}
                <div>
                    <div className="flex flex-col gap-10 lg:py-14">
                        {currentBlogs.map((blog, index) => {
                            const isReverse = index % 2 === 1;

                            return (
                                <div
                                    key={blog.id}
                                    className={`w-[100%] grid lg:grid-cols-2 gap-10 items-center ${isReverse ? "lg:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* IMAGE */}
                                    <div className={`${isReverse ? "order-1 lg:order-2" : ""} lg:w-[100%]`}>
                                        <Image
                                            src={blog.image}
                                            width={1000}
                                            height={600}
                                            alt="blog image"
                                            className="w-[100%] h-[350px] object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* TEXT */}
                                    <div className={`${isReverse ? "order-2 lg:order-1" : ""} text-white`}>
                                        <h2 className="text-3xl lg:text-2xl font-semibold leading-snug mb-5">
                                            {blog.title}
                                        </h2>

                                        <div className="flex items-center gap-5 text-[#b7b7c7] mb-8">
                                            <span className="lg:text-[22px] text-[#e4e4e7]">{blog.author}</span>
                                            <span className="w-px h-5 bg-[#6b6b7a]"></span>
                                            <span className="lg:text-[22px] text-[#dbdbe0]">{blog.date}</span>
                                        </div>

                                        <button className="px-8 py-3 border border-[#00D1F9] text-[#7ae7fd] rounded-full font-medium hover:bg-[#00D1F9] hover:text-black transition">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* pagination */}
                    <div className="flex justify-center items-center gap-4 mt-12 mb-12">
                        <button
                            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                            className="w-10 h-10 flex items-center justify-center bg-white text-black rounded"
                        >
                            &#10094;
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`w-10 h-10 flex items-center justify-center border rounded 
                ${currentPage === index + 1
                                        ? "bg-[#00D1F9] text-black border-[#00D1F9]"
                                        : "text-white border-gray-400"
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                            className="w-10 h-10 flex items-center justify-center bg-white text-black rounded"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>

                {/* ---------------- VERTICAL LINE ---------------- */}
                <div className="hidden lg:block relative">
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[0.5px] bg-[#c6c4c8]"></div>
                </div>


                {/* ---------------- RIGHT SIDEBAR ---------------- */}
                <div className="flex flex-col gap-10 lg:py-12">
                    {sidebarBlogs.slice(0, 2).map((blog) => (
                        <div
                            key={blog.id}
                            className=" p-4 rounded-lg shadow-md flex flex-col"
                        >
                            <Image
                                src={blog.image}
                                width={600}
                                height={350}
                                alt="sidebar"
                                className="w-full h-[300px] object-cover rounded-md"
                            />

                            <h3 className="text-white lg:text-[22px] font-semibold mt-6 leading-snug">
                                {blog.title}
                            </h3>

                            {/* <div className="text-[#b7b7c7] text-sm mt-1">{blog.date}</div> */}
                            <div className="flex items-center gap-5 text-[#b7b7c7] mb-3 mt-3">
                                            <span className="lg:text-[18px] text-[#dbdbe0]">{blog.author}</span>
                                            <span className="w-px h-5 bg-[#6b6b7a]"></span>
                                            <span className="lg:text-[18px] text-[#dbdbe0]">{blog.date}</span>
                                        </div>

                            <button className="mt-3 w-fit px-6 py-3 border border-[#2cd8fa] text-[#aaeefb] rounded-full text-sm hover:bg-[#00D1F9] hover:text-black transition">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

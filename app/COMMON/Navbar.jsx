"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io"; // cross icon

export default function Navbar() {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1186) {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-transparent ">
            <div className="bg-white mx-auto flex items-center justify-between lg:px-14 px-4 py-1">

                {/* LEFT SIDE — Logo + Menu */}
                <div className="flex items-center gap-10">
                    {/* Logo */}
                    <Image
                        src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1764136265/6fbbaed1ecec6d5cfb354fcd0454b0eeafdd1454_i28ozg.png"
                        alt="Logo"
                        width={85}
                        height={85}
                        className="object-contain"
                    />

                    {/* Desktop Menu */}
                    <ul className="desktop-menu items-center gap-8 text-black font-medium text-[18px]">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>

                        <li className="relative group cursor-pointer">
                            <span className="flex items-center gap-1">
                                Services <IoIosArrowDown />
                            </span>

                            {/* Dropdown */}
                            <div className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100  
                bg-white/80 backdrop-blur-lg p-4 rounded-lg mt-3 min-w-[180px] z-50 transition">
                                <Link href="/service/dj-for-school" className="block py-2 px-3 hover:text-[#ffff]">DJ Services</Link>
                                <Link href="/wedding" className="block py-2 px-3 hover:text-[#ffff]">Wedding</Link>
                                <Link href="/party" className="block py-2 px-3 hover:text-[#ffff]">Party</Link>
                            </div>
                        </li>

                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/blogs">Blog</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* RIGHT BUTTONS */}
                <div className="desktop-actions items-center gap-4">
                    <button className="px-7 py-2 border border-[#4dd2ff] text-[#4dd2ff] rounded-full text-[18px] hover:bg-[#4dd2ff]/20 transition">
                        Book Now
                    </button>

                    <button className="px-7 py-2 bg-[#3FFAFF] text-[#101010] rounded-full text-[18px] hover:bg-[#3be8f3] transition">
                        Call Now
                    </button>
                </div>

                {/* Mobile Hamburger / Cross Button */}
                <button
                    className="hamburger-icon lg:hidden text-black text-4xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <IoMdClose /> : "☰"}
                </button>
            </div>

            {/* BACKDROP */}
            {open && (
                <div
                    className="fixed inset-0   z-40 transition-opacity duration-300"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* LEFT SLIDE SIDEBAR */}
            <div
                className={`fixed top-20 left-0 h-full w-full bg-white shadow-xl z-50 p-8 pt-10
    transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
    ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex flex-col space-y-7 text-black text-[18px] font-medium">

                    <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
                    <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
                    <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
                    <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
                    <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>

                    <button className="w-full mt-4 py-2 border border-[#4dd2ff] text-[#4dd2ff] rounded-full">
                        Book Now
                    </button>

                    <button className="w-full py-2 bg-[#4df5ff] text-black rounded-full">
                        Call Now
                    </button>

                </div>
            </div>


        </nav>
    );
}

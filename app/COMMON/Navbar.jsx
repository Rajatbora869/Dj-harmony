"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent py-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1764136265/6fbbaed1ecec6d5cfb354fcd0454b0eeafdd1454_i28ozg.png"
            alt="Logo"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium text-[18px]">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>

          <li className="relative group cursor-pointer">
            <span style={{display:'flex', alignItems: 'center', gap:'5px'}}>Services <IoIosArrowDown /></span>
            <div className="hidden group-hover:block absolute bg-black/80 backdrop-blur-md p-4 rounded-lg mt-2 min-w-[180px]">
              <Link href="/dj" className="block py-2 px-3 hover:text-blue-400">DJ Services</Link>
              <Link href="/wedding" className="block py-2 px-3 hover:text-blue-400">Wedding</Link>
              <Link href="/party" className="block py-2 px-3 hover:text-blue-400">Party</Link>
            </div>
          </li>

          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-7 py-2 border border-[#4dd2ff] text-[#4dd2ff] rounded-full text-[18px] font-semibold hover:bg-[#4dd2ff]/20 transition">
            Book Now
          </button>

          <button className="px-7 py-2 bg-[#4df5ff] text-black rounded-full text-[18px] font-semibold hover:bg-[#3be8f3] transition">
            Call Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl p-6 mt-4 space-y-4 text-white text-lg">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>

          <button className="w-full mt-2 py-2 border border-[#4dd2ff] text-[#4dd2ff] rounded-full">
            Book Now
          </button>

          <button className="w-full py-2 bg-[#4df5ff] text-black rounded-full">
            Call Now
          </button>
        </div>
      )}
    </nav>
  );
}

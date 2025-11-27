"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoMdCall, IoMdMail,  } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F6F6F6] pt-16 text-[#1E1E1E]">
      <div className="max-w-[1450px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LOGO */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="https://res.cloudinary.com/dal5dlztv/image/upload/v1764157895/Group_19616_gzveud.png"
            alt="logo"
            className="w-27 h-27 object-contain"
          />
        </div>

        {/* QUICK LINK + SERVICES */}
        <div className="grid grid-cols-2 gap-10 text-black">

          {/* QUICK LINK */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">QUICK LINK</h3>
            <ul className="space-y-3 text-[16px] font-normal">
              <li>Home</li>
              <li>About us</li>
              <li>Work Gallery</li>
              <li>Video Gallery</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* OUR SERVICE */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">OUR SERVICE</h3>
            <ul className="space-y-3 text-[16px] font-normal">
              <li>DJ For School Events</li>
              <li>DJ For Corporate Party</li>
              <li>DJ For Cultural Events</li>
              <li>DJ For Birthday Party</li>
              <li>DJ For Wedding Party</li>
            </ul>
          </div>
        </div>

        {/* OFFICE */}
        <div className="text-black">
          <h3 className="text-lg font-semibold mb-6 tracking-wide">OFFICE</h3>

          <p className="text-[16px] leading-7 mb-6 font-normal">
            MB-27 Basement, Regalia Heights,<br />
            Shipra Suncity, Ghaziabad, (U.P.)<br />
            201014
          </p>

          <div className="flex items-center gap-3 mb-4">
            <IoMdMail size={22} />
            <p className="text-[16px] font-normal">djharmonybeats@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <IoMdCall size={22} />
            <p className="text-[16px] font-normal">
              +91 9056377665 / +91 9878549476
            </p>
          </div>
        </div>
      </div>

      {/* LINE */}
      <div className="max-w-[1350px] mx-auto border-t border-black mt-14"></div>

      {/* COPYRIGHT + SOCIAL */}
      <div className="max-w-[1450px] mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-black">

        <p className="text-[15px] font-normal">
          Copyright © 2025 <span className="font-semibold">DJ Harmony Beats</span> All Rights Reserved.
          Design by Kusheldigi
        </p>

        <div className="flex items-center gap-4">
          <span className="text-[15px] font-medium">FOLLOW US :</span>

          <div className="flex items-center gap-5 text-[20px]">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
}

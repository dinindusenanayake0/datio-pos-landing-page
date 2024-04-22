import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiMail, CiLogin } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";

/*
Design Mini Navigation Section
*/
function MiniNav() {
  return (
    <div>
      <div className="bg-[#339999]">
        <ul className="flex flex-wrap items-center justify-center gap-4 p-2 text-sm text-white lg:justify-end lg:mr-12">
          <li className="text-[#FFE925] font-geist-medium">
            *Special Financing Pay ZERO Interest on Amazon.com
          </li>
          <li className="text-[#FFE925] font-geist-medium">
            No Contract, Cancel Subscription Anytime
          </li>
          <li className="flex items-center gap-1 font-geist-regular">
            <IoCallOutline />
            408-643-0990
          </li>
          <li className="flex items-center gap-1 font-geist-regular">
            <CiMail />
            support@datiopos.com
          </li>
          <li className="flex items-center gap-1 cursor-pointer font-geist-regular">
            <BsCart />
            Shop Now
          </li>
          <li className="flex items-center gap-1 cursor-pointer font-geist-regular">
            <MdOutlineSupportAgent />
            Support
          </li>
          <li className="flex items-center gap-1 cursor-pointer font-geist-regular">
            <CiLogin />
            LOGIN
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MiniNav;

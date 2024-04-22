import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

/*
Design Navigation Section
*/
function Nav() {
  return (
    <div>
      <div className="bg-[#F3F3F3]">
        <ul className="flex flex-wrap items-center justify-center lg:justify-end gap-5 p-2 text-[#236767] font-geist-regular lg:mr-12 cursor-pointer">
          <h1 className="font-geist-bold text-[#339999] grow text-3xl lg:text-4xl ml-10 pl-7">
            DATIO POS
          </h1>
          <li className="pr-2 my-1 font-geist-regular lg:my-0 hover:text-[#339999] hover:text-lg">
            <a href="#store-types">Store Types</a>
          </li>
          <li className="my-1 font-geist-regular lg:my-0 hover:text-[#339999] hover:text-lg">
            <a href="#benefits">Benefits</a>
          </li>
          <li className="my-1 font-geist-regular lg:my-0 hover:text-[#339999] hover:text-lg">
            <a href="#hardware">Hardware</a>
          </li>
          <li className="my-1 font-geist-regular lg:my-0 hover:text-[#339999] hover:text-lg">
            <a href="#app-preview">App Preview</a>
          </li>
          <li className="my-1 font-geist-regular lg:my-0 hover:text-[#339999] hover:text-lg">
            <a href="#pricing">Pricing</a>
          </li>
          <button className="bg-[#236767] font-geist-medium hover:bg-[#339999] text-white lg:w-[12rem] px-5 lg:max-w-[12rem] py-3 my-5 lg:my-0 lg:ml-10 ml-0 rounded-3xl flex items-center justify-center">
            Get a free Demo
            <span className="ml-2">
              <IoIosArrowRoundForward />
            </span>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

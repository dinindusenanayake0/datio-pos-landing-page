import React from "react";
import Hardware1 from "../../assests/hardware 1.png";
import Hardware2 from "../../assests/hardware 2.png";
import Hardware3 from "../../assests/hardware 3.jpeg";
import Hardware4 from "../../assests/hardware 4.png";
import Hardware5 from "../../assests/hardware 5.jpg";

/*
Design Hardware Section
*/
function Hardware() {
  return (
    <div className="w-full min-h-screen p-5 md:p-20 bg-[#F3F3F3]" id="hardware">
      <div className="flex flex-col">
        <div className="h-auto md:h-[30vh]">
          <div className="h-[20vh] text-center">
            <h1 className="text-[#236767] font-geist-semibold text-[43px] mt-10">
              HARDWARE
            </h1>
            <h5 className="text-[#236767] font-geist-regular">
              Choose the right hardware for your business
            </h5>
          </div>
        </div>
        <div className="flex flex-row h-auto px-10 mt-5 mb-10 md:flex-row sm:flex-col">
          <div className="w-full md:w-1/2">
          <div className="w-full md:w-1/2">
            <img
              src={Hardware1}
              alt="Hardware1"
              className="w-[40%] md:w-[50%] mx-auto pb-10 sm:w-full lg:hidden md:hidden"
            />
          </div>
            <p className="mt-10 text-left md:mt-0 font-geist-regular">
              The Datio Base Station simplifies the installation and use. The
              credit card reader, barcode reader, customer display, receipt
              printer and cash drawer are all included. There are no complicated
              cable connections to make and no messy cables on your counter
              where you are interacting with customers. The base station
              supports the 9.7” iPads with the lightning (8pin connector).
            </p>
            <button className="bg-[#236767] font-geist-regular hover:bg-[#339999] text-white p-3 rounded-3xl px-5 mt-4 text-sm">
              SHOP NOW
            </button>
          </div>
          <div className="w-full md:w-1/2 sm:hidden">
            <img
              src={Hardware1}
              alt="Hardware1"
              className="w-[40%] md:w-[50%] mx-auto pb-10 "
            />
          </div>
        </div>
        <div className="flex flex-row h-auto px-10 mb-10 md:flex-row sm:flex-col">
          <div className="w-full md:w-1/2">
            <img
              src={Hardware2}
              alt="Hardware2"
              className="w-[40%] md:w-[50%] mx-auto pb-10 sm:w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-10 text-left md:mt-0 font-geist-regular">
              Datio Point of Sale Credit Card Reader is a slim profile card
              reader that can be attached to an iPad and used with Datio POS
              software to accept credit cards. The Datio Reader is portable so
              it can be used at checkout stations, kiosks, or carried for line
              busting or roaming sales. Our software is best in class supporting
              cafes, delis, order at the counter restaurants and all types of
              retail shops.Reader is for iPads with 8 pin lightning connector
              including iPad 4, Air, Air 2 and 9.7"/13" Pro or iPad Mini, iPad
              not included.
            </p>
            <button className="bg-[#236767] font-geist-regular hover:bg-[#339999] text-white p-3 rounded-3xl px-5 mt-4 text-sm">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="flex flex-row h-auto px-10 mb-10 md:flex-row sm:flex-col">
          <div className="w-full md:w-1/2">
          <div className="w-full md:w-1/2">
            <img
              src={Hardware3}
              alt="Hardware1"
              className="w-[40%] md:w-[50%] mx-auto pb-10 sm:w-full lg:hidden md:hidden"
            />
          </div>
            <p className="mt-10 text-left md:mt-0 font-geist-regular">
              Datio Point of Sale EMV Chip Card Reader IPP320 supports latest
              payment options of ApplePay, Android Pay, and EMV Chip Cards
            </p>
            <button className="bg-[#236767] font-geist-regular hover:bg-[#339999] text-white p-3 rounded-3xl px-5 mt-4 text-sm">
              SHOP NOW
            </button>
          </div>
          <div className="w-full md:w-1/2 sm:hidden">
            <img
              src={Hardware3}
              alt="Hardware1"
              className="w-[40%] md:w-[50%] mx-auto pb-10"
            />
          </div>
        </div>
        <div className="flex flex-row h-auto px-10 mb-10 md:flex-row sm:flex-col">
          <div className="w-full md:w-1/2">
            <img
              src={Hardware4}
              alt="Hardware1"
              className="w-[40%] md:w-[50%] mx-auto pb-10 sm:w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-10 text-left md:mt-0 font-geist-regular">
              Datio Kitchen Network Printer is an ideal packaged solution for
              quick serve restaurants and full restaurants. It is easy to use
            </p>
            <button className="bg-[#236767] font-geist-regular hover:bg-[#339999] text-white p-3 rounded-3xl px-5 mt-4 text-sm">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="flex flex-row h-auto px-10 mb-10 md:flex-row sm:flex-col">
          <div className="w-full md:w-1/2">
          <div className="w-full md:w-1/2 lg:hidden md:hidden">
            <img
              src={Hardware5}
              alt="Hardware1"
              className="w-[40%] md:w-[50%] mx-auto sm:w-full "
            />
          </div>
            <p className="mt-10 text-left md:mt-0 font-geist-regular">
              Hand Held Scanner for our stores that need the extra freedom to
              scan large items or want different setup than the Datio Base
              Station Scanner
            </p>
            <button className="bg-[#236767] font-geist-regular hover:bg-[#339999] text-white p-3 rounded-3xl px-5 mt-4 text-sm">
              SHOP NOW
            </button>
          </div>
          <div className="w-full md:w-1/2 sm:hidden">
            <img
              src={Hardware5}
              alt="Hardware1"
              className="w-[40%] md:w-[50%] mx-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hardware;

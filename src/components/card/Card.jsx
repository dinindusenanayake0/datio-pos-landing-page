import React from "react";
import { TiTick } from "react-icons/ti";

// Store Types Card Design
export const Card = ({ title, img, description }) => {
  return (
    <div className="bg-[#EBF1F1] hover:scale-104 p-7 drop-shadow-lg py-10 text-center items-center justify-center rounded-xl">
      <h3 className="text-xl font-geist-semibold">{title}</h3>
      <img
        src={img}
        className="items-center justify-center p-5 mx-auto text-center"
        alt="store icon"
      />
      <p className="text-gray-700 font-geist-regular">{description}</p>
    </div>
  );
};

// Benefits Card Design
export const Card2 = ({ title, img, description }) => {
  return (
    <div className="justify-center w-80">
      <img src={img} className="pb-2" alt="benefit icon" />
      <h3 className="pb-1 text-xl font-geist-semibold">{title}</h3>
      <p className="text-gray-700 font-geist-regular">{description}</p>
    </div>
  );
};

// Subscription Card Design
export const Card3 = ({
  title,
  price,
  type,
  items,
  includes1,
  includes2,
  includes3,
  includes4,
  includes5,
}) => {
  return (
    <div className="bg-[#EBF1F1] md:h-[70vh]  hover:scale-110 cursor-pointer p-7 drop-shadow-lg py-10 text-center items-center justify-center rounded-xl">
      <div className="flex flex-col gap-1 ">
        <h3 className="text-xl mb-9 font-geist-semibold">{title}</h3>
        <h1 className="text-[48px] mb-5 font-geist-semibold leading-7">
          {price}
        </h1>
        <h3 className="text-lg mb-1 font-geist-medium text-[#7A7A7A]">
          {type}
        </h3>
        <h3 className="mb-5 text-lg font-geist-regular ">{items}</h3>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-1">
            <span className="text-[#236767]">
              <TiTick />
            </span>
            <h3 className="text-left text-gray-700 text-[16px] font-geist-semibold">
              {includes1}
            </h3>
          </div>
          <div className="flex flex-row items-center gap-1">
            <span className="text-[#236767]">
              <TiTick />
            </span>
            <h3 className="text-left text-gray-700 text-[16px] font-geist-semibold ">
              {includes2}
            </h3>
          </div>
          <div className="flex flex-row items-center gap-1">
            <span className="text-[#236767]">
              <TiTick />
            </span>
            <h3 className="text-left text-gray-700 text-[16px] font-geist-semibold ">
              {includes3}
            </h3>
          </div>
          <div className="flex flex-row items-center gap-1">
            <span className="text-[#236767]">
              <TiTick />
            </span>
            <h3 className="text-left text-gray-700 text-[16px] font-geist-semibold ">
              {includes4}
            </h3>
          </div>
          <div className="flex flex-row items-center gap-1">
            <span className="text-[#236767]">
              <TiTick />
            </span>
            <h3 className="text-left text-gray-700 text-[16px] font-geist-semibold ">
              {includes5}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// Subscription Plus Card Design
export const Card4 = ({
  title,
  price,
  type,
  items,
  description1,
  description2,
}) => {
  return (
    <div className="bg-[#EBF1F1] md:h-[70vh] hover:scale-110 cursor-pointer p-7 drop-shadow-lg py-10 text-center items-center justify-center rounded-xl">
      <div className="flex flex-col gap-1 ">
        <h3 className="text-xl mb-9 font-geist-semibold">{title}</h3>
        <h1 className="text-[48px] mb-5 font-geist-semibold leading-7">
          {price}
        </h1>
        <h3 className="text-lg mb-1 font-geist-medium text-[#7A7A7A]">
          {type}
        </h3>
        <h3 className="mb-5 text-lg font-geist-regular ">{items}</h3>
        <div className="flex flex-col gap-4 text-gray-700 text-[16px] font-geist-semibold">
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
      </div>
    </div>
  );
};

// Reviews Card Design
export const Card5 = ({ name, img, description }) => {
  return (
    <div className="bg-[#EBF1F1] hover:scale-110 p-7 drop-shadow-lg py-10 rounded-2xl">
      <p className="text-[#090914] mb-5 font-geist-regular">{description}</p>
      <h3 className="text-[16px] font-geist-medium">{name}</h3>
      <img src={img} alt="stars" />
    </div>
  );
};

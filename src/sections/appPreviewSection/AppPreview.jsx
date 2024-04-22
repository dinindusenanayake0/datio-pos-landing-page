import React, { useState } from "react";
import Main1 from "../../assests/1.png";
import Main2 from "../../assests/2.png";
import Main3 from "../../assests/3.png";
import Main4 from "../../assests/4.png";
import Main5 from "../../assests/5.png";
import Main6 from "../../assests/6.png";
import Main7 from "../../assests/7.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

/*
Design Carasoul of APP PREVIEW Section
*/
function AppPreview() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    [Main1, Main2, Main3],
    [Main4, Main5, Main6],
    [Main7, Main1, Main2],
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-white"
      id="app-preview"
    >
      <div className="bg-[#174848] p-20 pt-12 text-center rounded-3xl">
        <div className="pb-12">
          <h1 className="mb-2 text-[43px] font-geist-semibold text-white">
            APP PREVIEW
          </h1>
          <h5 className="text-[#d1d1d1] font-geist-regular">
            Explore a sneak peek of our app's features and interface in this
            quick preview.
          </h5>
        </div>
        <div className="relative w-full max-w-full overflow-hidden h-40vh px-[5rem]">
          <div className="flex justify-center mx-auto transition-transform duration-500 ease-in-out ">
            {slides.map((slidePair, index) => (
              <div
                key={index}
                className={`flex gap-12  ${
                  index === currentSlide ? "" : "hidden"
                }`}
              >
                {slidePair.map((slide, innerIndex) => (
                  <img
                    key={innerIndex}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-[50%] hover:scale-110 "
                  />
                ))}
              </div>
            ))}
          </div>
          <IoIosArrowBack
            className="absolute left-0 text-3xl text-white transform -translate-y-1/2 cursor-pointer top-1/2 hover:text-5xl"
            onClick={prevSlide}
          />
          <IoIosArrowForward
            className="absolute right-0 text-3xl text-white transform -translate-y-1/2 cursor-pointer top-1/2 hover:text-5xl"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
}

export default AppPreview;

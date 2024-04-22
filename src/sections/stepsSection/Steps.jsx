import React from "react";

/*
Design Steps Section
*/
function Steps() {
  return (
    <div className="w-[100%] sm:px-8 ">
      <div className="bg-[#F3F3F3] sm:">
        <div className="flex flex-col justify-between max-w-screen-lg px-4 mx-auto sm:px-6 lg:px-8 px-auto">
          <div className="h-[20vh]  text-center">
            <h1 className="text-[#236767]   font-geist-semibold text-[43px] sm:text-[38px] mt-20">
              GET STARTED IN SIMPLE 4 STEPS
            </h1>
          </div>

          <div className="mt-20 sm:pt-10">
            <ul className="">
              <li className="mb-10 text-left">
                <div className="flex flex-row items-start sm:flex-col sm:pt-10">
                  <div className="flex flex-col items-center justify-center mr-5">
                    <div className="flex items-center font-geist-regular justify-center w-20 h-20 text-xl font-semibold text-white bg-[#339999] border-4 border-white rounded-full">
                      1
                    </div>
                    <span className="text-gray-500 font-geist-regular">STEP</span>
                  </div>
                  <div className="p-5 pb-10 bg-gray-100 ">
                    <h4 className="text-lg leading-6 text-gray-900 font-geist-semibold">
                      Download the App
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500 font-geist-regular">
                      Please note you only need one app either Retail App or
                      Salon App or Quick Serve App or Restaurant App or Pizza
                      App, not all five
                    </p>
                    <button className="bg-[#339999] font-geist-regular hover:bg-[#236767] text-white p-3 rounded-3xl ml-10 mt-4 px-6">
                      RETAIL APP
                    </button>
                    <button className="bg-[#339999] font-geist-regular hover:bg-[#236767] text-white p-3 rounded-3xl ml-10 mt-4 px-6">
                      SALON APP
                    </button>
                    <button className="bg-[#339999] font-geist-regular hover:bg-[#236767] text-white p-3 rounded-3xl ml-10 mt-4 px-6">
                      PIZZA APP
                    </button>
                    <button className="bg-[#339999] font-geist-regular hover:bg-[#236767] text-white p-3 rounded-3xl ml-10 mt-4 px-6">
                      QUICK SERVE RESTAURANT APP
                    </button>
                    <button className="bg-[#339999] font-geist-regular hover:bg-[#236767] text-white p-3 rounded-3xl ml-10 mt-4 px-6">
                      FULL SERVICE RESTAURANT APP
                    </button>
                  </div>
                </div>
              </li>
              <li className="mb-10 text-left">
                <div className="flex flex-row items-start sm:flex-col">
                  <div className="flex flex-col items-center justify-center mr-5">
                    <div className="flex items-center font-geist-regular justify-center w-20 h-20 text-xl font-semibold text-white bg-[#339999] border-4 border-white rounded-full">
                      2
                    </div>
                    <span className="text-gray-500 font-geist-regular">STEP</span>
                  </div>
                  <div className="p-5 pb-10 bg-gray-100 ">
                    <h4 className="text-lg leading-6 text-gray-900 font-geist-semibold">
                      Signup for Credit Card Processing
                    </h4>
                    <button className="bg-[#339999] font-geist-regular hover:bg-[#236767] text-white p-3 rounded-3xl ml-10 mt-4 px-6">
                      CREDIT CARD PROCCESSING CALL
                      <br />
                      VANTIV AT 303-362-2738 / 800-846-4472
                    </button>
                    <button className="bg-[#339999] font-geist-regular hover:bg-[#236767] text-white p-3 rounded-3xl ml-10 mt-4 px-6">
                      EXISTING CREDIT CARD PROCESSER SEE TERMINAL CREDIT
                    </button>
                  </div>
                </div>
              </li>
              <li className="mb-10 text-left">
                <div className="flex flex-row items-start sm:flex-col">
                  <div className="flex flex-col items-center justify-center mr-5">
                    <div className="flex items-center font-geist-regular justify-center w-20 h-20 text-xl font-semibold text-white bg-[#339999] border-4 border-white rounded-full">
                      3
                    </div>
                    <span className="text-gray-500 font-geist-regular">STEP</span>
                  </div>
                  <div className="p-5 pb-10 bg-gray-100 ">
                    <h4 className="text-lg leading-6 text-gray-900 font-geist-semibold">
                      Buy the POS Hardware
                    </h4>
                    <button className="bg-[#339999] font-geist-regular hover:bg-[#236767] text-white p-3 rounded-3xl ml-10 mt-4 px-6">
                      BUY FROM AMAZON
                    </button>
                  </div>
                </div>
              </li>
              <li className="mb-10 text-left">
                <div className="flex flex-row items-start sm:flex-col">
                  <div className="flex flex-col items-center justify-center mr-5">
                    <div className="flex items-center justify-center font-geist-regular w-20 h-20 text-xl font-semibold text-white bg-[#339999] border-4 border-white rounded-full">
                      4
                    </div>
                    <span className="text-gray-500 font-geist-regular">STEP</span>
                  </div>
                  <div className="p-5 pb-10 bg-gray-100 ">
                    <h4 className="text-lg leading-6 text-gray-900 font-geist-semibold">
                      Subscribe to our Monthly Service
                    </h4>
                    <button className="bg-[#339999] font-geist-regular hover:bg-[#236767] text-white p-3 rounded-3xl ml-10 mt-4 px-6">
                      SUBSCRIPTION
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;

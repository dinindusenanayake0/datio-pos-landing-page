// import React from "react";
// import Main from "../../assests/headesec.png";
// import { IoIosArrowRoundForward } from "react-icons/io";

// /*
// Design Header Section
// */
// function Header() {
//   return (
//     <div className="w-full ">
//       <div className="flex flex-col lg:flex-row bg-[#F3F3F3] w-full h-5/6 lg:h-[85vh] px-5 lg:px-10">
//         <div className="w-full lg:w-1/2">
//           <h1 className="pt-12 pl-5 lg:pl-10 mt-12 text-2xl lg:text-4xl font-geist-bold font-lato text-[#236767]">
//             Elevate Your Business with Datio's POS: Ideal for Retail, Cafes,
//             Restaurants, Pizza Shops, and <br/>Salons
//           </h1>
//           <p className="pl-5 lg:pl-10 mt-4 font-geist-regular text-[#236767] pb-5">
//             The Datio Base Station has a cash drawer, printer, scanner, and
//             credit card
//             <br /> reader included. Our software is easy to use and has the
//             <br /> features you need.
//           </p>
//           <button className="bg-[#236767] hover:bg-[#339999] font-geist-medium text-white lg:w-[12rem] w-full lg:max-w-[12rem] py-3 lg:my-0 lg:ml-10 ml-0 rounded-3xl flex items-center justify-center">
//             Get Started
//             <span className="ml-2">
//               <IoIosArrowRoundForward />
//             </span>
//           </button>
//           <div className="pt-10 mt-20 ml-10 cursor-pointer ">
//             <svg
//               width="238"
//               height="43"
//               viewBox="0 0 238 43"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g filter="url(#filter0_b_27_2286)">
//                 <circle cx="21.0359" cy="21.0359" r="21.0359" fill="#236767" />
//               </g>
//               <g filter="url(#filter1_b_27_2286)">
//                 <circle cx="86.3197" cy="21.0359" r="21.0359" fill="#236767" />
//               </g>
//               <g filter="url(#filter2_b_27_2286)">
//                 <circle cx="151.604" cy="21.0359" r="21.0359" fill="#236767" />
//               </g>
//               <g filter="url(#filter3_b_27_2286)">
//                 <circle cx="216.887" cy="21.0359" r="21.0359" fill="#236767" />
//               </g>
//               <path
//                 d="M19.339 33.2701V21.0906H15.3591V17.0307H19.339V14.8506C19.339 10.7228 21.3101 8.91107 24.6731 8.91107C26.284 8.91107 27.1357 9.03287 27.5386 9.08869V12.9709H25.2452C23.8174 12.9709 23.3189 13.7392 23.3189 15.2962V17.0307H27.5028L26.9347 21.0906H23.3189V33.2701H19.339Z"
//                 fill="white"
//               />
//               <path
//                 d="M97 12.01C97 12.01 94.982 13.202 93.86 13.54C93.2577 12.8475 92.4573 12.3567 91.567 12.1339C90.6767 11.9112 89.7395 11.9672 88.8821 12.2944C88.0247 12.6217 87.2884 13.2044 86.773 13.9637C86.2575 14.723 85.9877 15.6223 86 16.54V17.54C84.2426 17.5856 82.5013 17.1958 80.931 16.4054C79.3607 15.6151 78.0103 14.4486 77 13.01C77 13.01 73 22.01 82 26.01C79.9405 27.408 77.4872 28.1089 75 28.01C84 33.01 95 28.01 95 16.51C94.9993 16.2313 94.9727 15.9547 94.92 15.68C95.94 14.674 97 12.01 97 12.01Z"
//                 fill="white"
//                 stroke="white"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M148.053 33.72C149.333 34.1067 150.627 34.3333 152 34.3333C155.536 34.3333 158.928 32.9286 161.428 30.4281C163.929 27.9276 165.333 24.5362 165.333 21C165.333 19.249 164.989 17.5152 164.318 15.8976C163.648 14.2799 162.666 12.81 161.428 11.5719C160.19 10.3338 158.72 9.35167 157.103 8.68161C155.485 8.01155 153.751 7.66667 152 7.66667C150.249 7.66667 148.515 8.01155 146.898 8.68161C145.28 9.35167 143.81 10.3338 142.572 11.5719C140.072 14.0724 138.667 17.4638 138.667 21C138.667 26.6667 142.227 31.5333 147.253 33.4533C147.133 32.4133 147.013 30.6933 147.253 29.5067L148.787 22.92C148.787 22.92 148.4 22.1467 148.4 20.92C148.4 19.08 149.547 17.7067 150.853 17.7067C152 17.7067 152.533 18.5467 152.533 19.6267C152.533 20.7733 151.773 22.4133 151.387 23.9867C151.16 25.2933 152.08 26.44 153.413 26.44C155.787 26.44 157.627 23.9067 157.627 20.3333C157.627 17.1333 155.333 14.9467 152.04 14.9467C148.28 14.9467 146.067 17.7467 146.067 20.6933C146.067 21.84 146.44 23 147.053 23.76C147.173 23.84 147.173 23.9467 147.133 24.1467L146.747 25.6C146.747 25.8267 146.6 25.9067 146.373 25.7467C144.667 25 143.68 22.5733 143.68 20.6133C143.68 16.4 146.667 12.5733 152.427 12.5733C157.013 12.5733 160.587 15.8667 160.587 20.24C160.587 24.8267 157.747 28.5067 153.68 28.5067C152.387 28.5067 151.12 27.8133 150.667 27L149.773 30.16C149.467 31.3067 148.627 32.84 148.053 33.76V33.72Z"
//                 fill="white"
//               />
//               <path
//                 d="M214.5 24.75L220.987 21L214.5 17.25V24.75ZM228.95 14.9625C229.112 15.55 229.225 16.3375 229.3 17.3375C229.388 18.3375 229.425 19.2 229.425 19.95L229.5 21C229.5 23.7375 229.3 25.75 228.95 27.0375C228.637 28.1625 227.913 28.8875 226.788 29.2C226.2 29.3625 225.125 29.475 223.475 29.55C221.85 29.6375 220.363 29.675 218.988 29.675L217 29.75C211.762 29.75 208.5 29.55 207.213 29.2C206.088 28.8875 205.363 28.1625 205.05 27.0375C204.888 26.45 204.775 25.6625 204.7 24.6625C204.613 23.6625 204.575 22.8 204.575 22.05L204.5 21C204.5 18.2625 204.7 16.25 205.05 14.9625C205.363 13.8375 206.088 13.1125 207.213 12.8C207.8 12.6375 208.875 12.525 210.525 12.45C212.15 12.3625 213.637 12.325 215.012 12.325L217 12.25C222.237 12.25 225.5 12.45 226.788 12.8C227.913 13.1125 228.637 13.8375 228.95 14.9625Z"
//                 fill="white"
//               />
//               <defs>
//                 <filter
//                   id="filter0_b_27_2286"
//                   x="-66"
//                   y="-66"
//                   width="174.072"
//                   height="174.072"
//                   filterUnits="userSpaceOnUse"
//                   color-interpolation-filters="sRGB"
//                 >
//                   <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                   <feGaussianBlur in="BackgroundImageFix" stdDeviation="33" />
//                   <feComposite
//                     in2="SourceAlpha"
//                     operator="in"
//                     result="effect1_backgroundBlur_27_2286"
//                   />
//                   <feBlend
//                     mode="normal"
//                     in="SourceGraphic"
//                     in2="effect1_backgroundBlur_27_2286"
//                     result="shape"
//                   />
//                 </filter>
//                 <filter
//                   id="filter1_b_27_2286"
//                   x="-0.716187"
//                   y="-66"
//                   width="174.072"
//                   height="174.072"
//                   filterUnits="userSpaceOnUse"
//                   color-interpolation-filters="sRGB"
//                 >
//                   <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                   <feGaussianBlur in="BackgroundImageFix" stdDeviation="33" />
//                   <feComposite
//                     in2="SourceAlpha"
//                     operator="in"
//                     result="effect1_backgroundBlur_27_2286"
//                   />
//                   <feBlend
//                     mode="normal"
//                     in="SourceGraphic"
//                     in2="effect1_backgroundBlur_27_2286"
//                     result="shape"
//                   />
//                 </filter>
//                 <filter
//                   id="filter2_b_27_2286"
//                   x="64.5676"
//                   y="-66"
//                   width="174.072"
//                   height="174.072"
//                   filterUnits="userSpaceOnUse"
//                   color-interpolation-filters="sRGB"
//                 >
//                   <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                   <feGaussianBlur in="BackgroundImageFix" stdDeviation="33" />
//                   <feComposite
//                     in2="SourceAlpha"
//                     operator="in"
//                     result="effect1_backgroundBlur_27_2286"
//                   />
//                   <feBlend
//                     mode="normal"
//                     in="SourceGraphic"
//                     in2="effect1_backgroundBlur_27_2286"
//                     result="shape"
//                   />
//                 </filter>
//                 <filter
//                   id="filter3_b_27_2286"
//                   x="129.852"
//                   y="-66"
//                   width="174.072"
//                   height="174.072"
//                   filterUnits="userSpaceOnUse"
//                   color-interpolation-filters="sRGB"
//                 >
//                   <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                   <feGaussianBlur in="BackgroundImageFix" stdDeviation="33" />
//                   <feComposite
//                     in2="SourceAlpha"
//                     operator="in"
//                     result="effect1_backgroundBlur_27_2286"
//                   />
//                   <feBlend
//                     mode="normal"
//                     in="SourceGraphic"
//                     in2="effect1_backgroundBlur_27_2286"
//                     result="shape"
//                   />
//                 </filter>
//               </defs>
//             </svg>
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2  sm:w-[10%]">
//           <img
//             src={Main}
//             alt="main"
//             className="w-[40%] mx-auto mt-5 lg:w-[70%] sm:w-full md:w-full "
//           />
//           <div className="pl-20 ml-[34rem] cursor-pointer">
//             <svg
//               width="68"
//               height="68"
//               viewBox="0 0 68 68"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g filter="url(#filter0_b_27_2298)">
//                 <circle cx="34" cy="34" r="34" fill="#339999" />
//               </g>
//               <path
//                 d="M18.7404 49.177L24.6242 47.227L25.684 47.7389C28.1366 48.921 30.9395 49.5508 34.0002 49.5508C44.1232 49.5508 51.3738 42.3665 51.3738 33.7327C51.3738 25.0672 44.1753 17.9145 34.0002 17.9145C23.825 17.9145 16.6266 25.0672 16.6266 33.7327C16.6437 37.0488 17.743 40.27 19.7596 42.913L20.7383 44.2072L18.7404 49.1741V49.177ZM16.6932 52.887C16.4311 52.9742 16.1494 52.9851 15.8814 52.9184C15.6133 52.8517 15.3701 52.7102 15.1804 52.5106C14.9907 52.311 14.8625 52.0617 14.8109 51.792C14.7593 51.5224 14.7865 51.2437 14.8892 50.9889L17.446 44.6415C15.0519 41.5003 13.7483 37.6724 13.731 33.7327C13.731 24.2015 21.497 15.0385 34.0002 15.0385C46.5034 15.0385 54.2694 24.2015 54.2694 33.7327C54.2694 43.2638 46.4223 52.4269 34.0002 52.4269C30.3952 52.4269 27.1752 51.6561 24.4215 50.3274L16.6903 52.887H16.6932Z"
//                 fill="white"
//               />
//               <defs>
//                 <filter
//                   id="filter0_b_27_2298"
//                   x="-66"
//                   y="-66"
//                   width="200"
//                   height="200"
//                   filterUnits="userSpaceOnUse"
//                   color-interpolation-filters="sRGB"
//                 >
//                   <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                   <feGaussianBlur in="BackgroundImageFix" stdDeviation="33" />
//                   <feComposite
//                     in2="SourceAlpha"
//                     operator="in"
//                     result="effect1_backgroundBlur_27_2298"
//                   />
//                   <feBlend
//                     mode="normal"
//                     in="SourceGraphic"
//                     in2="effect1_backgroundBlur_27_2298"
//                     result="shape"
//                   />
//                 </filter>
//               </defs>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;


import React from "react";
import Main from "../../assests/headesec.png";
import { IoIosArrowRoundForward } from "react-icons/io";

function Header() {
  return (
    <div className="w-full bg-[#F3F3F3] p-5 lg:px-10 flex flex-col lg:flex-row justify-between items-center lg:h-[85vh]">
      {/* Left Section */}
      <div className="w-full text-center lg:w-1/2 lg:text-left md:px-10 sm:px-10">
        <h1 className="text-2xl lg:text-4xl font-geist-bold text-[#236767] mt-12">
          Elevate Your Business with Datio's POS: Ideal for Retail, Cafes,
          Restaurants, Pizza Shops, and Salons
        </h1>
        <p className="text-[#236767] mt-4 font-geist-regular">
          The Datio Base Station has a cash drawer, printer, scanner, and credit card reader included. Our software is easy to use and has the features you need.
        </p>
        <div className="flex justify-center mt-6 lg:justify-start">
          <button className="bg-[#236767] hover:bg-[#339999] font-geist-medium text-white w-40 py-3 rounded-3xl flex items-center justify-center">
            Get Started
            <span className="ml-2">
              <IoIosArrowRoundForward />
            </span>
          </button>
        </div>
        <div className="flex justify-center mt-10 lg:justify-start">
          <svg
            width="238"
            height="43"
            viewBox="0 0 238 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center w-full mt-10 lg:w-1/2 lg:mt-0">
        <img
          src={Main}
          alt="main"
          className="w-1/2 lg:w-[70%] sm:w-full "
        />
        {/* <div className="pl-20 ml-[34rem] cursor-pointers sm:p-10 sm:mx-auto">
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_27_2298)">
                <circle cx="34" cy="34" r="34" fill="#339999" />
              </g>
              <path
                d="M18.7404 49.177L24.6242 47.227L25.684 47.7389C28.1366 48.921 30.9395 49.5508 34.0002 49.5508C44.1232 49.5508 51.3738 42.3665 51.3738 33.7327C51.3738 25.0672 44.1753 17.9145 34.0002 17.9145C23.825 17.9145 16.6266 25.0672 16.6266 33.7327C16.6437 37.0488 17.743 40.27 19.7596 42.913L20.7383 44.2072L18.7404 49.1741V49.177ZM16.6932 52.887C16.4311 52.9742 16.1494 52.9851 15.8814 52.9184C15.6133 52.8517 15.3701 52.7102 15.1804 52.5106C14.9907 52.311 14.8625 52.0617 14.8109 51.792C14.7593 51.5224 14.7865 51.2437 14.8892 50.9889L17.446 44.6415C15.0519 41.5003 13.7483 37.6724 13.731 33.7327C13.731 24.2015 21.497 15.0385 34.0002 15.0385C46.5034 15.0385 54.2694 24.2015 54.2694 33.7327C54.2694 43.2638 46.4223 52.4269 34.0002 52.4269C30.3952 52.4269 27.1752 51.6561 24.4215 50.3274L16.6903 52.887H16.6932Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_27_2298"
                  x="-66"
                  y="-66"
                  width="200"
                  height="200"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="33" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_27_2298"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_27_2298"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div> */}
      </div>
    </div>
  );
}

export default Header;

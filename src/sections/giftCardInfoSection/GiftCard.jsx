import React from "react";
import Gift from "../../assests/GIFT.png";

/*
Design Gift Card Section
*/
function GiftCard() {
  return (
    <div className="w-full pb-12">
      <div className="flex flex-row w-full px-5 mt-12 bg-white md:flex-col md:items-center md:mx-auto">
        <div className="w-full md:w-1/2 sm:p-5">
          <div className="w-full font-bold md:w-full sm:w-full lg:hidden xl:hidden">
            <img src={Gift} alt="main" className="w-3/4 mx-auto mt-5 " />
          </div>
          <h1 className="pt-3 pl-5 mt-6 text-4xl font-geist-semibold md:pl-10 md:mt-0 text-[#236767]">
            Gift Card Giveaways: Bringing Joy to
            <br /> Your Doorstep
          </h1>
          <p className="pl-5 mt-4 md:pl-10 font-geist-regular text-[#236767]">
            Excited to announce our joy-spreading gift card giveaways! Thanking
            our community with delightful experiences for special occasions or
            daily boosts. Stay tuned for updates on our website and socials.
            Join us in spreading happiness, one gift card at a time.
          </p>
        </div>
        <div className="w-full font-bold md:w-1/2 md:hidden sm:hidden">
          <img src={Gift} alt="main" className="w-3/4 mx-auto mt-5 md:w-3/5" />
        </div>
      </div>
    </div>
  );
}

export default GiftCard;

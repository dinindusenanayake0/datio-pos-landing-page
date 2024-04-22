import React from "react";
import { Card2 } from "../../components/card/Card";
import ItemSetUp from "../../assests/svg/item set up.svg";
import Payment from "../../assests/svg/payment.svg";
import Dashboard from "../../assests/svg/dashboard.svg";
import Tag from "../../assests/svg/tag.svg";
import Tips from "../../assests/svg/tips.svg";
import Sales from "../../assests/svg/sales users.svg";


/*
Design Benefits Section
*/
function Benefits() {
  return (
    <div className="w-full  bg-[#F3F3F3] sm:pb-15 " id="benefits">
      <div className="py-24 sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-20 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="sm:text-center">
              <p className="mt-2 text-[#236767] font-geist-semibold text-[43px] sm:text-4xl ">
                BENEFITS
              </p>
              <p className="mt-2 text-base leading-7 font-geist-regular text-[#236767]">
                Learn more about this feature packed App
              </p>
            </div>
            <div class="grid grid-cols-2 ml-12 gap-x-[30rem] gap-y-20 sm:grid-cols-1 md:grid-cols-1 ">
              <div>
                <Card2
                  title={"Item Set Up"}
                  img={ItemSetUp}
                  description={
                    "Effortlessly add, alert inventory, modify, sell by weight, categorize, and prompt for prices efficiently."
                  }
                />
              </div>
              <div>
                <Card2
                  title={"Payment"}
                  img={Payment}
                  description={
                    "Effortlessly add, alert inventory, modify, sell by weight, categorize, prompt prices for efficient setup"
                  }
                />
              </div>
              <div><Card2
                  title={"Reporting & Dashboard"}
                  img={Dashboard}
                  description={
                    "View sales reports online, analyze items, associates, taxes, and tips. POS app offers seamless monitoring."
                  }
                /></div>
              <div><Card2
                  title={"Color Tagging"}
                  img={Tag}
                  description={
                    "Effortlessly categorize items with color tags, enhancing navigation for quick product access."
                  }
                /></div>
              <div><Card2
                  title={"Tips"}
                  img={Tips}
                  description={
                    "Customize tipping options to boost revenue: default percentages, on iPad or printed receipts."
                  }
                /></div>
              <div><Card2
                  title={"Sales Associate"}
                  img={Sales}
                  description={
                    "We support tracking your sales via sales associates. Split sales to more than one stylist in your salon for one transaction"
                  }
                /></div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;

import React from "react";
import { Card3, Card4 } from "../../components/card/Card";

/*
Design Subscription Section
*/
function Subscription() {
  return (
    <div className="w-[100%]" id="pricing">
      <div className="flex items-center justify-center px-20 bg-white ">
        <div className="mb-10 text-center ">
          <h1 className="text-[#236767] font-geist-semibold text-[43px] pt-12 mt-5">
            MONTHLY SUBSCRIPTION
          </h1>
          <h5 className="text-[#236767] py-5 font-geist-regular">
            Includes software, updates, warranty and service. Try the app for
            free, pay only when you are ready to use for your business.
          </h5>
          <div class="grid grid-cols-5 gap-4 md:grid-cols-3 sm:grid-cols-1">
            <div>
              <Card3
                title={"Retail & Quick Serve"}
                price={"$64"}
                type={"Per Month"}
                items={"1 POS Terminal"}
                includes1={"No Contract"}
                includes2={"Cancel Anytime"}
                includes3={"Tech Support"}
                includes4={"Unlimited Items"}
                includes5={"Sales Associate"}
              />
            </div>
            <div>
              <Card3
                title={"Salon"}
                price={"$66"}
                type={"Per Month"}
                items={"1 POS Terminal"}
                includes1={"No Contract"}
                includes2={"Cancel Anytime"}
                includes3={"Tech Support"}
                includes4={"Unlimited Items"}
                includes5={"Sales Associate"}
              />
            </div>
            <div>
              <Card3
                title={"Restaurant"}
                price={"$76"}
                type={"Per Month"}
                items={"1 POS Terminal"}
                includes1={"No Contract"}
                includes2={"Cancel Anytime"}
                includes3={"Tech Support"}
                includes4={"Unlimited Items"}
                includes5={"Sales Associate"}
              />
            </div>
            <div>
              <Card3
                title={"Pizza"}
                price={"$88"}
                type={"Per Month"}
                items={"1 POS Terminal"}
                includes1={"No Contract"}
                includes2={"Cancel Anytime"}
                includes3={"Tech Support"}
                includes4={"Unlimited Items"}
                includes5={"Sales Associate"}
              />
            </div>
            <div>
              <Card4
                title={"Plus"}
                price={"$33"}
                type={"Per Month"}
                items={"1 POS Terminal"}
                description1={"For each additional terminal"}
                description2={
                  "Supports unlimited number of Terminals in a store"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;

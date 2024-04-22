import React from "react";
import { Card } from "../../components/card/Card";
import Retail from "../../assests/svg/retail.svg";
import QuickServe from "../../assests/svg/quick serve.svg";
import Salon from "../../assests/svg/salon.svg";
import ConvenienceStore from "../../assests/svg/convenience store.svg";
import FullServiceResturant from "../../assests/svg/convenience store.svg";
import Pizza from "../../assests/svg/pizza.svg";
import FoodTruck from "../../assests/svg/truck.svg";
import IceCreamShop from "../../assests/svg/ice cream.svg";

/*
Design Store Types Section
*/
function StoreTypes() {
  return (
    <div>
      <div
        className="flex flex-col gap-5 px-5 py-5 mx-5 md:px-10 md:py-10 md:mx-10"
        id="store-types"
      >
        <div className="h-auto py-12 text-center">
          <h1 className="text-[#236767] font-geist-semibold text-[43px] ">
            STORE TYPES
          </h1>
          <h5 className="text-[#236767] ">
            Store Types we support for your business point of sale solution
          </h5>
        </div>
        <div class="grid grid-cols-4 gap-5 md:grid-cols-2 sm:grid-cols-1">
          <div>
            <Card
              title={"Retail"}
              img={Retail}
              description={
                "Retail support: clothing, candy, housewares. Features: color, discounts, tracking, inventory."
              }
            />
          </div>
          <div>
            <Card
              title={"Quick Serve"}
              img={QuickServe}
              description={
                "POS for cafes, delis, quick-serve spots: Simplifies orders, improves kitchen communication, boosts tips."
              }
            />
          </div>
          <div>
            <Card
              title={"Salon"}
              img={Salon}
              description={
                "Salon POS tracks sales by stylist, split transactions, set tips by service, simplifying varied payments."
              }
            />
          </div>
          <div>
            <Card
              title={"Convenience Store"}
              img={ConvenienceStore}
              description={
                "Streamline large inventory with alerts, scanner, remote viewing, and pricing prompts for efficiency."
              }
            />
          </div>
          <div>
            <Card
              title={"Full Service Resturant"}
              img={FullServiceResturant}
              description={
                "Datio Restaurant App streamlines full-service operations with order, kitchen, payment, and tip solutions."
              }
            />
          </div>
          <div>
            <Card
              title={"Pizzeria"}
              img={Pizza}
              description={
                "Pizza POS: Budget-friendly, customize pizzas, manage orders, track sales remotely, access reports."
              }
            />
          </div>
          <div>
            <Card
              title={"Food Truck"}
              img={FoodTruck}
              description={
                "Datio Base Station: Food truck POS. Streamlined, tracks sales, accepts cash/credit, reports, mobile-friendly."
              }
            />
          </div>
          <div>
            <Card
              title={"Ice Cream Shop"}
              img={IceCreamShop}
              description={
                "Quick checkout, on-screen tips increase tipping by 60%, track and distribute tips by employees."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreTypes;

import React from "react";
import Payment from "../../assests/payment.png";

/*
Design Card Payment Section
*/
function CardPayment() {
  return (
    <div className="w-full h-auto mt-12">
      <div className="flex flex-row md:flex-col md:items-center sm:flex-col  bg-[#F3F3F3] w-full h-auto pb-[10%] pt-[10%]">
        <div className="w-full font-geist-semibold md:w-4/5">
          <img
            src={Payment}
            alt="main"
            className="w-1/2 mx-auto mt-5 md:w-2/5"
          />
        </div>

        <div className="w-full md:w-1/2 sm:p-5">
          <h1 className="pt-12 pl-10 mt-12 text-4xl font-geist-semibold text-[#236767]">
            Secure and Convenient: Embracing
            <br /> Card Payments for Seamless
            <br /> Transactions
          </h1>
          <p className="pl-10 mt-4 text-[#236767] font-geist-regular">
            Discover the ease and security of card payments on our platform.
            <br />
            From streamlined transactions to enhanced security features,
            <br /> embrace the convenience of modern payment solutions for your
            <br /> business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardPayment;

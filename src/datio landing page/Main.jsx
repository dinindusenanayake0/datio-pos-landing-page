import React from "react";
import '../../src/index.css';
import Nav from "../components/navBar/Nav";
import Header from "../sections/headerSection/Header";
import StoreTypes from "../sections/storeTypesSection/StoreTypes";
import CardPayment from "../sections/paymentInfoSection/CardPayment";
import AppPreview from "../sections/appPreviewSection/AppPreview";
import Benefits from "../sections/benefitsSection/Benefits";
import GiftCard from "../sections/giftCardInfoSection/GiftCard";
import Hardware from "../sections/hardwareSection/Hardware";
import Subscription from "../sections/subscription/Subscription";
import Steps from "../sections/stepsSection/Steps";
import Reviews from "../sections/customerReviewsSection/Reviews";
import Footer from "../components/footer/Footer";
import MiniNav from "../components/navBar/MiniNav";

/*
Components import for Full Page Design
*/
function Main() {
  return (
    <div>
      <MiniNav/>
      <Nav />
      <Header />
      <StoreTypes />
      <CardPayment />
      <AppPreview />
      <Benefits />
      <GiftCard />
      <Hardware />
      <Subscription />
      <Steps />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Main;

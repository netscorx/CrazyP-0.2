import React from "react";
import Header from "../../Components/Header/Header";
import HeaderRescription from "../../Components/Header/HeaderRescription";
import About from "../../Components/About/About";
import Benefits from "../../Components/Benefits/Benefits";
import Variants from "../../Components/Benefits/Variants";
import HowItsWorks from "../../Components/HowItsWorks/HowItsWorks";
import Question from "../../Components/Question/Question";
import ShowCase from "../../Components/Showcase/ShowCase";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import BurgerModal from "../../Components/Modal/BurgerModal";

export default function Main() {
  const burger = useSelector((state) => state.helpers.burger);

  return (
    <div>
      <div class="bg-headImage bg-co bg-cover bg-center">
        <Header />
        {burger && <BurgerModal />}
        <HeaderRescription />
      </div>
      <div class="bg-gradient-to-b from-f-white to-t-pink flex justify-center flex-col pb-[80px]">
        <About />
        <HowItsWorks />
      </div>
      <div class="bg-questionImage  bg-[length:100%_3024px]">
        <Question />
        <ShowCase />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

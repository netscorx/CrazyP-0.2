import React from "react";

export default function About() {
  return (
    <div class="flex justify-between  pr-[67px] mt-[104px] mb-[64px] max-[420px]:px-[10%]">
      <div class="ml-[10%] max-[420px]:ml-[8%]  max-[420px]:absolute  max-[420px]:z-0  max-[420px]:left-[10px] max-[420px]:w-[60px]">
        <img src={require("../Theme/Img/Samurai1.png")} alt="samurai" />
      </div>
      <div class="max-w-[720px] max-[420px]:z-[2]">
        <h2 class="font-mainText text-regular text-[64px] leading-[77px] mb-[24px] max-[420px]:ml-[50px] max-[420px]:text-[24px]">
          About
        </h2>
        <p class="font-textSec text-[20px] pb-[20px] text-white max-[420px]:text-[12px]">
          CrazyPrints is an innovative storybook creator that uses AI technology
          to create personalized, one-of-a-kind books for children and adults
          alike. Our mission is to help people become the hero of their own
          story by creating books that are tailored to their interests and
          preferences.
        </p>
        <p class="font-textSec text-[20px] pb-[20px] text-white max-[420px]:text-[12px]">
          Our team of developers and illustrators have worked tirelessly to
          perfect our AI algorithms, which generate unique stories and
          illustrations that are completely personalized to each user. Our
          high-quality printing ensures that every book we create is a keepsake
          that can be treasured for years to come.
        </p>
        <p class="font-textSec text-[20px] text-white max-[420px]:text-[12px] ">
          At CrazyPrints, we believe that every person has a unique story to
          tell, and we are dedicated to helping them tell it in the most
          beautiful and personalized way possible. We are constantly updating
          and improving our technology to bring you the best possible
          experience.
        </p>
        <p class="font-textSec text-[20px] text-white max-[420px]:text-[12px] max-[420px]:pt-[20px]">
          So why wait? Get started on your own personalized storybook today and
          become the hero of your own story with CrazyPrints!
        </p>
      </div>
    </div>
  );
}

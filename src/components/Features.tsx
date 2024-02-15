import Image from "next/image";
import React from "react";
import MobileImg from "@/app/asserts/phone_large.png";
import TradinCard from "@/app/asserts/tradingcard.png";
import Payment from "@/app/asserts/paymentmethod.png";
import SecureImg from "@/app/asserts/securitycard.png";

export default function Features(): JSX.Element {
  return (
    <section className=" mx-auto my-16 ">
      <div className="flex justify-center items-center w-[100%] space-x-16 ">
        <div className="flex flex-col">
          <div className="flex justify-center items-center w-[41rem] ">
            <Image src={TradinCard} alt="card" />
            <div className="flex flex-col">
              <h1 className="font-bold">Easy to Trade</h1>
              <p>
                Lorem Ipsum is dummy text often used in printing and web design
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-[41rem] ">
            <Image src={Payment} alt="card" />
            <div className="flex flex-col">
              <h1 className="font-bold">Many Payment Methods</h1>
              <p>
                Lorem Ipsum is dummy text often used in printing and web design
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center w-[41rem]  ">
            <Image src={SecureImg} alt="card" />
            <div className="flex flex-col">
              <h1  className="font-bold">100% Secure</h1>
              <p>
                Lorem Ipsum is dummy text often used in printing and web design
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="">
            <Image src={MobileImg} alt="mobile" />
          </div>
        </div>
      </div>
    </section>
  );
}

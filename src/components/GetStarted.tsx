import React from "react";

export default function GetStarted(): JSX.Element {
  return (
    <section className="my-12 ">
      <div className="w-[80%] shadow-xl h-[18rem] mx-auto  rounded-xl bg-gradient-to-bl from-gray-500 via-gray-900 to-gray-900">
        <div className="flex justify-evenly items-center  ">
          <div className="flex flex-col py-20">
            <h1 className="w-[41rem] text-[3rem] font-semibold mb-2">Let’s try our service now!</h1>
            <p className="w-[23rem] text-gray-400">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
          <div className="flex">
            <button className="w-[10rem] mt-4 py-2 rounded-xl bg-[#9DEDF0] text-black font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

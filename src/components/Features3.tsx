import Image, { StaticImageData } from "next/image";
import React from "react";
import Author1 from "@/app/asserts/Author1.png";
import Author2 from "@/app/asserts/Author2.png";
import Author3 from "@/app/asserts/Author3.png";
import GroupLogo from "@/app/asserts/GroupLogo.png";

interface Testimonial {
  symbol: string;
  param: string;
  pic: StaticImageData;
  name: string;
  role: string;
}

const Testimonials: React.FC<Testimonial & { index: number }> = ({
  symbol,
  param,
  pic,
  name,
  role,
  index,
}) => {
  const testimonialClass =
    index === 0
      ? "bg-gradient-to-br from-white via-gray-600 to-gray-900 shadow-inner"
      : "";
  return (
    <section className={` w-[22rem] h-[24rem] rounded-2xl ${testimonialClass}`}>
      <div className="flex flex-col py-12 mx-6">
        <h1 className="text-[3.6rem] text-[#00D9F5]">{symbol}</h1>
        <p className="w-[18rem] text-[1.2rem]">{param}</p>
        <div className="flex mt-6 space-x-3">
          <Image src={pic} alt="author" />
          <div className="flex flex-col">
            <h1 className="font-bold">{name}</h1>
            <p className="text-gray-400">{role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Features3(): JSX.Element {
  return (
    <section className="my-16">
      <div className="flex justify-center items-center w-[100%] ">
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-48 py-4">
            <h1 className="w-[29rem] text-5xl leading-snug">
              What people are saying about us
            </h1>
            <p className="w-[23rem] text-gray-400 ">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto mt-12">
        <div className="grid grid-cols-3 gap-4">
          <Testimonials
            index={0}
            symbol="''"
            param="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
            pic={Author1}
            name="Herman Jensen"
            role="Founder & Leader"
          />
          <Testimonials
            index={1}
            symbol="''"
            param="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
            pic={Author2}
            name="Herman Jensen"
            role="Founder & Leader"
          />{" "}
          <Testimonials
            index={2}
            symbol="''"
            param="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
            pic={Author3}
            name="Herman Jensen"
            role="Founder & Leader"
          />
        </div>
      </div>
      <div>
        <div className="my-20 justify-center items-center">
          <Image src={GroupLogo} alt="logos" className=" mx-auto" />
        </div>
      </div>
    </section>
  );
}

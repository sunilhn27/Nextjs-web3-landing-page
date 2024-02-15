import Image, { StaticImageData } from "next/image";
import React from "react";
import Star from "@/app/asserts/Star.png";
import Send from "@/app/asserts/Send.png";
import Privacy from "@/app/asserts/Privacy.png";

interface Feature {
  image: StaticImageData;
  header: string;
  para: string;
}

const FeatureCard: React.FC<Feature> = ({ image, header, para }) => {
  return (
    <section>
      <div className="flex space-x-6">
        <Image src={image} alt="star" className="w-[3rem] h-[3rem] " />
        <div className="flex flex-col ">
          <h1 className="text-[1.2rem] font-extrabold">{header}</h1>
          <p className="text-gray-400 w-[22rem]">{para}</p>
        </div>
      </div>
    </section>
  );
};

export default function Features2(): JSX.Element {
  return (
    <section className="my-16 ">
      <div className="flex justify-center items-center px-6 ">
        <div className="flex flex-col mb-6">
          <h1 className="w-[36rem] text-[3rem] font-bold">
            You do the business, we’ll handle the money.
          </h1>
          <p className="w-[35rem] text-gray-400 my-6">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <button className="w-[10rem] mt-4 py-2 rounded-xl bg-[#9DEDF0] text-black font-bold">
            Get Started
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <FeatureCard
            image={Star}
            header="Rewards"
            para="The best credit cards offer some tantalizing combinations of promotions and prizes"
          />

          <FeatureCard
            image={Privacy}
            header="100% Secured"
            para="The best credit cards offer some tantalizing combinations of promotions and prizes"
          />

          <FeatureCard
            image={Send}
            header="100% Secured"
            para="The best credit cards offer some tantalizing combinations of promotions and prizes"
          />
        </div>
      </div>
    </section>
  );
}

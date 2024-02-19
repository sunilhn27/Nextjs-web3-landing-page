import Image, { StaticImageData } from "next/image";
import React from "react";
import HeroImg from "@/app/asserts/Heroimg.png";
import CoinSlider from "@/app/asserts/coinslider.png";
import Swapbtc from "@/app/asserts/swapbtc.png";

interface CoinSwap {
  image: StaticImageData;
  header: string;
  para: string;
  txt: string;
}

const Card: React.FC<CoinSwap> = ({ image, header, para, txt }) => {
  return (
    <div className="w-[23.3rem] h-[10.75rem] border-2 rounded-xl">
      <div className="flex flex-row items-center justify-evenly p-5">
        <div>
          <Image src={image} alt="btc" />
        </div>
        <div className="flex flex-col ">
          <h1 className="font-extrabold text-[1.4rem]">{header}</h1>
          <p className="w-[11rem] h-[2rem] mb-6">{para}</p>
          <button className="bg-[#FFF] text-[#3EA0EB] w-[5rem] h-[1.8rem] rounded-xl ">
            {txt}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function HeroSection(): JSX.Element {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-start">
          <h1 className="text-[5rem] w-[47rem] h-[12rem] font-extrabold">
            Buy & Sell Crypto, Trade
          </h1>
          <p className="mt-12 text-slate-100 w-[27rem]">
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
          <button className=" w-[8.2rem] h-[2.5rem] mt-4 rounded-xl bg-gradient-to-br from-blue-200 to-teal-400">
            Sign Up
          </button>
        </div>
        <div className="flex  ">
          <Image
            src={HeroImg}
            className="bg-gradient-to-tr"
            alt="heropic"
          ></Image>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Image src={CoinSlider} alt="coinslide" />
      </div>
      <div className="flex justify-center items-center mt-12 gap-6">
        <Card
          image={Swapbtc}
          header="COIN SWAP"
          para="Lorem Ipsum is dummy text 
often used "
          txt="Swap"
        />
        <Card
          image={Swapbtc}
          header="COIN SWAP"
          para="Lorem Ipsum is dummy text 
often used "
          txt="Swap"
        />{" "}
        <Card
          image={Swapbtc}
          header="COIN SWAP"
          para="Lorem Ipsum is dummy text 
often used "
          txt="Swap"
        />
      </div>
    </section>
  );
}

import React from "react";

export default function Numbers(): JSX.Element {
  return (
    <section className="my-24">
      <div className="flex md:flex-row justify-center items-center gap-24">
        <div className="flex space-x-4 justify-center items-center">
            <h1 className="font-extrabold text-[2rem]">3800+</h1>
            <p className="text-teal-400">User Active</p>
        </div>
        <div className="flex space-x-4 justify-center items-center">
            <h1 className="font-extrabold text-[2rem]">230+</h1>
            <p className="text-teal-400">TRUSTED BY COMPANY</p>
        </div>
        <div className="flex space-x-4 justify-center items-center">
            <h1 className="font-extrabold text-[2rem]">$230M+</h1>
            <p className="text-teal-400">TRANSACTION</p>
        </div>
      </div>
    </section>
  );
}

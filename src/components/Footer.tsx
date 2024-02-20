import Link from "next/link";
import React from "react";

export default function Footer(): JSX.Element {
  return (
    <section className="my-20">
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col">
            <h1 className="text-[2rem] mb-3 font-bold">LOGO</h1>
            <p className="w-[19rem] text-start pl-8 text-gray-500">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>

          <div className="flex flex-col">
            <h1 className="text-[1.2rem] font-bold mb-4">Usefull Links</h1>
            <div className="flex flex-col space-y-1 text-gray-500">
              <Link href={""}>Content</Link>
              <Link href={""}>How it Works</Link>
              <Link href={""}>Create</Link>
              <Link href={""}>Explore</Link>
              <Link href={""}>Terms & Services</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-[1.2rem] font-bold mb-4">Community</h1>
            <div className="flex flex-col space-y-1 text-gray-500">
              <Link href={""}>Help Center</Link>
              <Link href={""}>Partners</Link>
              <Link href={""}>Suggestions</Link>
              <Link href={""}>Blog</Link>
              <Link href={""}>Newsletters</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-[1.2rem] font-bold mb-4">Partner</h1>
            <div className="flex flex-col space-y-1 text-gray-500">
              <Link href={""}>Our Partner</Link>
              <Link href={""}>Become a Partner</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <section className="my-6">
      <div>
        <nav className="flex flex-row justify-between md:mx-16 2xl:mx-12 ">
          <Link href={"/"}>LOGO</Link>
          <div className="flex text-center items-center gap-8">
            <Link href={"/"}>Sign in</Link>
            <Link href={"/"} className="bg-[#DEF9FA]">Sign Up</Link>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;

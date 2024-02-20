import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <section className="my-6">
      <div>
        <nav className="flex flex-row justify-between md:mx-20 2xl:mx-80">
          <Link href={"/"} className="text-[1.4rem] font-bold">
            LOGO
          </Link>
          <div className="flex text-center items-center gap-8">
            <Link href={"/"} className="py-1 px-3">
              Sign in
            </Link>
            <Link
              href={"/"}
              className="rounded-xl bg-gradient-to-br from-blue-200 to-teal-400 py-1 px-3"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;

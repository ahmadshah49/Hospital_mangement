"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ButtonDark from "../ButtonDark/ButtonDark";
import ButtonLight from "../ButtonLight/ButtonLight";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = ({ scrollThreshold = 50 }) => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > scrollThreshold;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return (
    <>
      <div
        className={`flex fixed w-full justify-between items-center max-sm:px-2 max-sm:py-3 sm:px-3 sm:py-4  md:px-4 md:py-4  lg:mx-auto lg:ml-auto lg:mr-auto z-50 ${
          scrolled
            ? "bg-[white] shadow-md shadow-black/40 transition ease-linear"
            : ""
        }`}
      >
        <div className="flex items-center space-x-2 max-sm:space-x-1">
          <Image
            src={"/logo.png"}
            width={500}
            height={500}
            className="lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-6 sm:h-6 max-sm:w-6 max-sm:h-6"
          />
          <Link href={"/"} className=" md:text-base  max-sm:text-sm font-bold">
            MediLab Hospital
          </Link>
        </div>
        <ul className=" items-center space-x-2 sm:hidden max-sm:hidden md:flex">
          <li>
            <Link
              className="focus:bg-[#3f6db1] active:text-white duration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="focus:bg-[#3f6db1] active:text-white duration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold"
              href={"/Appointment"}
            >
              Appointment
            </Link>
          </li>
          <li>
            <Link
              className="focus:bg-[#3f6db1] active:text-white duration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold"
              href={"/"}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="focus:bg-[#3f6db1] active:text-white duration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold"
              href={"/AboutUs"}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="focus:bg-[#3f6db1] active:text-whiteduration-300 hover:bg-[#C5DCFF] lg:p-2 md:p-1  rounded-md font-semibold"
              href={"/ContactUs"}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="md:flex sm:hidden max-sm:hidden space-x-2">
          <ButtonLight btnText={"Sign in"} hrefProp={"/ContactUs"} />
          <ButtonDark btnText={"Register"} hrefProp={"/ContactUs"} />
        </div>
        <div
          onClick={() => setNav((prev) => !prev)}
          className="max-md:block hidden"
        >
          {nav ? <IoClose size={20} /> : <FaBars size={20} />}
        </div>
      </div>
      <div
        className={
          nav
            ? " bg-[#C5DCFF] w-[60%] h-screen fixed top-0 right-0 left-0 bottom-0  duration-1000  z-50 lg:hidden"
            : "bg-[#C5DCFF] w-[60%] h-screen fixed top-0 right-0 left-[-100%] bottom-0 z-50  duration-1000"
        }
      >
        <div className="px-2 py-4">
          <div className="flex items-center space-x-2 max-sm:space-x-1">
            <Image
              src={"/logo.png"}
              width={500}
              height={500}
              className="md:hidden sm:w-10 sm:h-10 max-sm:w-10 max-sm:h-10"
            />
            <Link
              href={"/"}
              className="lg:hidden md:text-base  max-sm:text-sm font-bold"
            >
              MediLab Hospital
            </Link>
          </div>
          <ul className="  space-y-10 md:hidden max-sm:flex flex-col py-10 justify-between w-full ">
            <li className="active:bg-[#9083D5] border-b border-[#9083D5] hover:text-white active:text-white duration-300 py-2 px-4 w-11/12   font-semibold">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="active:bg-[#9083D5] border-b border-[#9083D5] hover:text-white active:text-white duration-300 py-2 px-4 w-11/12   font-semibold">
              <Link href={"/Appointment"}>Appointment</Link>
            </li>
            <li className="active:bg-[#9083D5] border-b border-[#9083D5] hover:text-white active:text-white duration-300 py-2 px-4 w-11/12   font-semibold">
              <Link href={"/"}>Services</Link>
            </li>
            <li className="active:bg-[#9083D5] border-b border-[#9083D5] hover:text-white active:text-white duration-300 py-2 px-4 w-11/12   font-semibold">
              <Link href={"/AboutUs"}>About Us</Link>
            </li>
            <li className="active:bg-[#9083D5] border-b border-[#9083D5] hover:text-white active:text-white duration-300 py-2 px-4 w-11/12   font-semibold">
              <Link href={"/ContactUs"}>Contact Us</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-2  bottom-5">
            <ButtonLight btnText={"Sign in"} hrefProp={"/signIn"} />
            <ButtonDark btnText={"Register"} hrefProp={"/register"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

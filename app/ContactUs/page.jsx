"use client";
import { useState } from "react";
import Hero from "../Components/Hero/Hero";
import ButtonDark from "../Components/ButtonDark/ButtonDark";
import Image from "next/image";

const page = () => {
  const [signIn, setSignIn] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Hero src={"/contact.png"} />
      <div className="mx-4 max-sm:mt-96 mt-20">
        <div className="mx-8 max-sm:mx-2">
          <h1 className="text-7xl max-md:text-5xl max-sm:3xl   text-[#5f5f5f]  font-extrabold py-4">
            {signIn ? "Sign in" : "Sign up"}
          </h1>
          <h1 className="text-4xl max-md:text-2xl max-sm:xl   text-[#5f5f5f]  font-extrabold py-4">
            {signIn
              ? "Please Sign in To Continue"
              : "Please Sign Up To Continue"}
          </h1>
          <p className="text-[#5f5f5f]  text-left  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Esse
            quaerat soluta aut at? Qui unde aliquid maiores, reiciendis iusto
            quod?
          </p>
          <button
            onClick={() => setSignIn((prev) => !prev)}
            className="bg-[#9083D5] my-4 sm:py-4 w-fit sm:px-6 max-sm:py-3 max-sm:px-4 md:py-2 md:px-2 md:text-center lg:py-3 lg:px-6  rounded-xl text-white font-semibold shadow-black/30 shadow-inner "
          >
            {signIn ? "Sign up" : "Sign in"}
          </button>
        </div>
        <form
          onSubmit={onSubmitHandler}
          className="my-8 flex flex-col items-center"
        >
          
            {signIn ? (
              <div className="flex max-sm:flex-col  items-center w-[95%]">
                <div className="flex flex-col w-[50%] max-sm:w-full">
                  <input
                    type="password"
                    name="passsword"
                    id="password"
                    placeholder="Password"
                    className="border w-[70%] max-sm:w-full my-4 outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md"
                  />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Confirm password"
                    className="border w-[70%] max-sm:w-full my-4 outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md"
                  />
                  <button className="bg-[#9083D5] sm:py-4 w-fit sm:px-6 max-sm:py-3 max-sm:px-4 md:py-2 md:px-2 md:text-center lg:py-3 lg:px-6  rounded-xl text-white font-semibold shadow-black/30 shadow-inner ">
                    {signIn && "Sign in"}
                  </button>
                </div>
                
                  <Image src={"/sign.png"} width={500} height={500} />
                
              </div>
            ) : (
              <div  className="grid grid-cols-2 items-center mx-8 w-[95%] max-sm:w-full  my-4 gap-6">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className="border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md"
                />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className="border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md"
                />
                <input
                  type="number"
                  name="mobileNumber"
                  id="mobileNumber"
                  placeholder="Mobile Number"
                  className="border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md"
                />
                <input
                  type="number"
                  name="NIC"
                  id="NIC"
                  placeholder="NIC"
                  className="border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md"
                />
                <input
                  type="date"
                  name="birth"
                  id="birth"
                  placeholder="Date of birth"
                  className="border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md"
                />
                <input
                  type="password"
                  name="passsword"
                  id="password"
                  placeholder="Password"
                  className="border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Confirm password"
                  className="border outline-none border-black/40 max-sm:py-2 py-2 px-2 rounded-md"
                />
              </div>
            )}
          
          {!signIn && (
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Address"
              className="border mb-8 outline-none border-black/40 py-2 px-2 rounded-md w-[95%] max-sm:w-full  "
            ></textarea>
          )}
          {!signIn && (
            <button className="bg-[#9083D5] sm:py-4 w-fit sm:px-6 max-sm:py-3 max-sm:px-4 md:py-2 md:px-2 md:text-center lg:py-3 lg:px-6  rounded-xl text-white font-semibold shadow-black/30 shadow-inner ">
              Register
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default page;

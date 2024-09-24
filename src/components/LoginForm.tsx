"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";

export default function LoginForm() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { fullname, email, password });
  };

  return (
    <div className="relative flex flex-col h-screen lg:flex-row">
      {/* Left Side */}
      <div className="relative w-full lg:w-[40%] flex flex-col items-center justify-center p-6 lg:p-8">
        <div className="absolute cursor-pointer top-0 left-0 mt-4 -ml-2">
          <Image
          src="/Logo.png"
          alt="Logo"
          width={200} 
          height={80} 
          className="w-40 h-60px sm:w-40 lg:w-[204px] lg:h-[83px]"
        />
        </div>

        <h1 className="mt-40 sm:mt-10 text-3xl sm:text-4xl lg:text-[85px] leading-tight lg:leading-[105px] font-bold text-white text-center font-nunito">
          Welcome Back!
        </h1>
        <p className="mt-2 w-full sm:w-4/5 text-center text-base sm:text-lg lg:text-[25px] leading-tight text-white font-bold font-nunito">
        Ready to pick up where you left off? Log in to access your account and continue taking charge of your health.
        </p>
      </div>

      {/* Right Side */}
      <div className="mb-0 bottom-0 w-full lg:w-[70%] flex flex-col justify-center bg-[#F2F7FF] px-4 sm:px-6 lg:px-28 py-6 sm:py-8 lg:py-8 shadow-2xl rounded-t-[5%] lg:rounded-l-[5%] relative drop-shadow-[-10_0px_60px_rgba(0,0,0,0.25)] h-full lg:h-screen">
        {/* Moved the select dropdown further down */}
        <div className="absolute top-20 right-6 sm:top-24 sm:right-10">
          <select className="text-gray-500 border-[1px] border-gray-500 bg-white rounded-full p-1 text-sm sm:text-sm lg:text-lg">
            <option value="en" className="text-lg leading-7">
              English (UK)
            </option>
          </select>
        </div>
        <h2 className="mb-6 sm:mt-8 lg:mb-12 text-2xl sm:text-3xl lg:text-5xl leading-tight lg:leading-[64px] font-bold text-center lg:text-left">
          Log in
        </h2>
        <div className="mb-4 lg:mb-2 w-full sm:w-2/3 lg:w-full sm:mx-auto flex flex-col gap-4 lg:flex-row lg:space-x-4 lg:gap-x-10">
          <button className="flex items-center justify-center text-gray-500 hover:text-white text-sm sm:text-lg lg:text-2xl font-medium rounded-full bg-white hover:bg-blue-700 transition duration-200 border border-current px-6 sm:px-10 py-2 transform hover:scale-110 leading-[34.1px] hover:shadow-2xl">
            <Image src="/google.png" alt="Google" width={20} height={20} />
            <span className="ml-2">Sign in with Google</span>
          </button>
          <button className="flex items-center justify-center text-gray-500 hover:text-white text-sm sm:text-lg lg:text-2xl font-medium rounded-full bg-white hover:bg-blue-700 transition duration-200 border border-current px-6 sm:px-10 py-2 transform hover:scale-110 leading-[34.1px] hover:shadow-2xl">
            <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
            <span className="ml-2">Sign in with Facebook</span>
          </button>
        </div>

        <div className="my-4 lg:my-5 w-full sm:w-full lg:w-3/4 text-center text-[#000000]/[0.5] font-semibold text-lg sm:text-2xl lg:text-4xl leading-[50px]">
          -OR-
        </div>
        <form onSubmit={handleSubmit} className="w-full sm:w-2/3 lg:w-2/3 lg:mx-0 mx-auto">
          <div className="space-y-4 sm:space-y-6 lg:space-y-12">
            <div className="space-y-2">
              <label htmlFor="full-name" className="sr-only">
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full font-medium leading-[40.92px] border-black border-opacity-50 placeholder:text-black/50 border-b-[2px] sm:border-b-[3px] focus:outline-none focus:border-gray-500 text-base sm:text-lg lg:text-3xl bg-transparent"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="sr-only">
                E-Mail Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="E-Mail Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full font-medium leading-[40.92px] border-black border-opacity-50 placeholder:text-black/50 border-b-[2px] sm:border-b-[3px] focus:outline-none focus:border-gray-500 text-base sm:text-lg lg:text-3xl bg-transparent"
                required
              />
            </div>
            <div className="space-y-2 relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full font-medium leading-[40.92px] border-black border-opacity-50 placeholder:text-black/50 border-b-[2px] sm:border-b-[3px] focus:outline-none focus:border-gray-500 text-base sm:text-lg lg:text-3xl bg-transparent"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-0 text-gray-500"
              >
                <Image
                  src={
                    showPassword
                      ? "/heroicons-outline_eye.png"
                      : "/heroicons-outline_eye-off.png"
                  }
                  alt={showPassword ? "Hide Password" : "Show Password"}
                  width={35}
                  height={35}
                />
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 lg:mt-14 mx-auto flex items-center justify-center bg-[#017BFC] text-white font-medium text-base sm:text-xl lg:text-3xl py-2 px-8 sm:px-16 lg:px-32 leading-[40.92px] rounded-full hover:bg-blue-700 hover:scale-125 transition-all duration-200 ease-in-out hover:shadow-2xl"
          >
            Log in
          </button>
        </form>
        <p className="mt-6 sm:mt-8 text-gray-500 font-medium text-base sm:text-2xl lg:text-3xl text-center lg:text-left">
            Don’t have an Account?{" "}
          <a
            href="/signup"
            className="text-[#017BFC] hover:text-blue-700 text-base sm:text-xl lg:text-3xl font-medium inline-block transition-transform duration-200 ease-in-out transform hover:scale-110 hover:drop-shadow-2xl"
          >
            Create Now!
          </a>
        </p>
      </div>
    </div>
  );
}

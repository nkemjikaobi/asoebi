import Link from "next/link";
import React from "react";

import Icon from "@components/atoms/Icons";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-asoebiPurple-500">
      <Icon name="tempLogo" />
      <form className="w-[23rem] h-auto pt-[1.438rem] px-[1.5rem] pb-8 mb-4 mt-[1.971rem] bg-white rounded-lg border-[0.063rem] border-asoebiGray-500">
        <p className="font-bold text-16 mb-[1.438rem]">Create new account</p>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstname">
            First Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-asoebiPurple-800 focus:invalid:border-pink-500"
            id="firstname"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastname">
            Last Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-asoebiPurple-800 focus:invalid:border-pink-500"
            id="lastname"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
            Email Address
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-asoebiPurple-800 focus:invalid:border-pink-500"
            id="username"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phonenumber">
            Phone Number
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-asoebiPurple-800 focus:invalid:border-pink-500"
            id="phonenumber"
            type="tel"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-asoebiPurple-800 focus:invalid:border-pink-500"
            id="password"
            type="password"
          />
          {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
        </div>
        <button className="w-full py-2 font-bold text-white rounded-lg bg-asoebiPurple-800 hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
          Create Account
        </button>
        <div className="text-center mt-[1.438rem]">
          <p>Already have an account?</p>
          <Link href="/auth/login">
            <p className="text-asoebiPurple-800 mt-[1.438rem]">Login</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

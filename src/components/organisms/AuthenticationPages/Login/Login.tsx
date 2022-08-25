import Link from "next/link";
import React from "react";

import Icon from "@components/atoms/Icons";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-asoebiPurple-500">
      <Icon name="tempLogo" />
      <form className="w-[23rem] h-[27rem] pt-[1.438rem] px-[1.5rem] pb-8 mb-4 mt-[1.971rem] bg-white rounded-lg border-[0.063rem] border-asoebiGrey-500">
        <p className="font-bold text-16 mb-[1.438rem]">Welcome, Login to your account.</p>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
            Email Address
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-asoebiPurple-800 focus:invalid:border-pink-500"
            id="email"
            type="email"
          />
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <a className="inline-block text-sm font-bold align-baseline text-asoebiPurple-800 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-asoebiPurple-800 focus:invalid:border-pink-500"
            id="password"
            type="password"
          />
          {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
        </div>
        <button className="w-full py-2 font-bold text-white rounded-lg bg-asoebiPurple-800 hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
          Login
        </button>
        <div className="text-center mt-[1.438rem]">
          <p>New to Aso-Ebi</p>
          <Link href="/auth/signup">
            <p className="text-asoebiPurple-800 mt-[1.438rem]">Create new account</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

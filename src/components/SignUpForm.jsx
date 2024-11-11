import React, { useState } from "react";
import InputField from "./InputField";
import { IoIosArrowBack } from "react-icons/io";
import { login } from "../services/loginApi";
import Banner from "./Banner";
import formImage from "../assets/form_image.png";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="w-full md:w-1/2 h-screen flex items-center justify-center relative">
      <div className="absolute top-4 left-6 md:top-6 lg:left-5 xl:left-48 flex items-center text-[#A3AED0] cursor-pointer w-20 text-sm">
        <IoIosArrowBack />
        Back
      </div>
      <div className="w-full max-w-[380px] h-auto md:h-[524px] flex flex-col px-6 md:px-0 left-div">
        <p className="text-3xl md:text-4xl font-bold text-[#E92928]">Sign In</p>
        <div className="text-[#A3AED0] my-2">
          Enter your email and password to sign in!
        </div>
        <div className="flex items-center justify-between my-2">
          <div className="border border-[#E0E5F2] flex-grow h-0"></div>
          <div className="text-[#A3AED0] font-semibold mx-2">or</div>
          <div className="border border-[#E0E5F2] flex-grow h-0"></div>
        </div>

        <form className="my-4" onSubmit={handleSubmit}>
          {/*InputField components */}
          <InputField
            label="Email"
            type="text"
            placeholder="mail@simmmple.com"
            isRequired
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Min. 8 characters"
            isRequired
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
               className="w-[16px] h-[16px] cursor-pointer accent-[#E92928]"
              />
              <div className="text-[#2B3674]">Keep me logged in</div>
            </div>
            <div className="text-[#E92928] cursor-pointer mt-2 md:mt-0">
              Forget password?
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#E92928] rounded-xl py-3 px-5 text-white text-center cursor-pointer hover:bg-[#e92828d5] mb-4 w-full"
            >
              Sign In
            </button>
          </div>

          <div className="text-[#2B3674]">
            Not registered yet?{" "}
            <span className="text-[#E92928] cursor-pointer font-semibold">
              Create an Account
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

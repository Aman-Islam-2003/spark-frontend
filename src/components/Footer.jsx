import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-around left-div mt-[-50px] text-xs">
      <div className="text-[#A3AED0]">
        © 2023 Spark Drive. All Rights Reserved.
      </div>
      <div className="md:flex text-white w-1/6 justify-between hidden">
        <div>License</div>
        <div>Terms of Use</div>
        <div>Blog</div>
      </div>
    </div>
  );
};

export default Footer;

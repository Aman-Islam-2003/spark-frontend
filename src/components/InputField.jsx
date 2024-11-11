import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const InputField = ({ label, type, placeholder, isRequired, value, onChange }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
      setPasswordVisible((prevState) => !prevState);
    };
  
    return (
      <div className="mb-4 relative">
        <label className="text-[#2B3674] font-semibold">
          {label}{isRequired && <span className="text-[#E92928]">*</span>}
        </label>
        <div className="relative">
          <input
            type={type === 'password' && !isPasswordVisible ? 'password' : 'text'}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full md:w-[380px] border border-[#E0E5F2] rounded-2xl py-3 px-5 outline-none mt-2 pr-10"
          />
          {type === 'password' && (
            <div
              className="absolute right-3 top-1/2 bottom-1/2 transform translate-y-1/2 cursor-pointer text-[#A3AED0]"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ?<FaEye />: <FaEyeSlash /> }
            </div>
          )}
        </div>
      </div>
    );
  };
  

export default InputField

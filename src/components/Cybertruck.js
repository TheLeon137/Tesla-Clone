import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Cybertruck = () => {
  return (
    <div className="relative bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg')] h-screen bg-cover bg-center">
      <div className="absolute inset-x-0 top-[15%] text-center"></div>

      <div className="flex flex-col items-center justify-center text-sn lg:flex-row absolute inset-x-0 bottom-[10%]">
        <a href="https://www.tesla.com/cybertruck/design">
          {" "}
          <button className="bg-[#393c41] rounded-md w-96 lg:w-64 lo:mx-4 h-10 mt-2 text-white">
            Custom Order
          </button>{" "}
        </a>
        <a href="https://www.tesla.com/cybertruck">
          {" "}
          <button className="bg-[#f4f4f4] rounded-md w-96 lg:w-64 lo:mx-4 h-10 mt-2 ">
            Learn More
          </button>{" "}
        </a>
      </div>

      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
        <FiChevronDown size={24} />
      </div>
    </div>
  );
};

export default Cybertruck;

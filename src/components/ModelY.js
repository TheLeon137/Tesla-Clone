import React from "react";
import { FiChevronDown } from "react-icons/fi";

const ModelY = () => {
  return (
    <div className="relative bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop')] h-screen bg-cover bg-center">
      <div className="absolute inset-x-0 top-[15%] text-center">
        <h1 className="text-4xl font-bold">Model Y</h1>
        <p className="p-2 text-sn">
          Order Online for{" "}
          <a href="https://shop.tesla.com">
            {" "}
            <span className="underline underline-offset-4">
              {" "}
              touchless Delivery{" "}
            </span>
          </a>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-sn lg:flex-row absolute inset-x-0 bottom-[10%]">
        <a href="https://www.tesla.com/modely/design#overview">
          {" "}
          <button className="bg-[#393c41] rounded-md w-96 lg:w-64 lo:mx-4 h-10 mt-2 text-white">
            Custom Order
          </button>{" "}
        </a>
        <a href="https://www.tesla.com/drive?selectedModel=Modely">
          {" "}
          <button className="bg-[#f4f4f4] rounded-md w-96 lg:w-64 lo:mx-4 h-10 mt-2 ">
          Demo Drive
          </button>{" "}
        </a>
      </div>

      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
        <FiChevronDown size={24} />
      </div>
    </div>
  );
};

export default ModelY;

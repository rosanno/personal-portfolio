import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#242424]">
      <InfinitySpin width="200" color="#2f6351" />
    </div>
  );
};

export default Loader;

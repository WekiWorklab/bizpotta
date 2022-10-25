import React from "react";

const PlainFooter = () => {
  return (
    <div className="w-full sticky bottom-0 bg-[#FFFFFF] border border-[1px] border-[#94F236] border-opacity-[0.06] px-4 sm:px-20 flex justify-between h-[50px] items-center z-[100]">
      <div className="text-[#151522] text-[13px] text-opacity-[0.65] flex items-center gap-x-1">
        <p>2022</p>
        <div className="w-4 h-4 flex items-center justify-center border rounded-full">
          c
        </div>
        <p>Bizpotta</p>
      </div>

      <div className="text-[#151522] text-[13px] text-opacity-[0.65] flex items-center gap-x-4">
        <p>Terms</p>
        <p>Privacy</p>
        <p>Help</p>
      </div>
    </div>
  );
};

export default PlainFooter;

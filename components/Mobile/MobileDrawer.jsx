import React from "react";

const MobileDrawer = ({ handleDrawerMenuClick }) => {
  return (
    <div className="flex flex-col p-10 bg-white border-2">
      <div className="flex justify-end my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
          onClick={handleDrawerMenuClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <ul className="text-[#000] flex flex-col gap-5 text-[24px] font-[500] tracking-[0.64px]">
        <li>Marketplace</li>
        <li>Resource</li>
        <li>About</li>
      </ul>

      <section className="flex flex-col gap-5 mt-5">
        <button className="bg-[#3D00B7] rounded-[60px] inline-flex justify-center items-center gap-[10px] px-[40px] h-[50px] text-[#FFFFFF]">
          Upload
        </button>
        <button className="inline-flex px-[22px] h-[50px] justify-center rounded-[60px] items-center gap-[10px] border-[2px] border-[#3D00B7]">
          Connect Wallet
        </button>
      </section>
    </div>
  );
};

export default MobileDrawer;

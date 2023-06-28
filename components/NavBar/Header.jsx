import React from "react";

const Header = ({ handleDrawerMenuClick }) => {
  return (
    <header className="w-[90%] sticky lg:w-[75%] flex  py-12 justify-between lg:gap-16 gap-5 lg:px-0 h-[5vh] lg:h-[78px] items-center">
      <section className="text-[#3D00B7] text-[20px] lg:text-[24px] font-[700] uppercase font-['Integral CF']">
        NFTERS
      </section>

      <div className="w-[1px] h-[47px] bg-[#F4F4F4]"></div>

      <section className="hidden lg:block">
        <ul className="text-[#000]  flex gap-10 text-[16px] font-[500] tracking-[0.64px]">
          <li>Marketplace</li>
          <li>Resource</li>
          <li>About</li>
        </ul>
      </section>

      <section className="flex rounded-[100px] border-[2px] border-[#EFEFEF] hover:border-gray-400 bg-[#FFF] w-[250px] h-[40px]  lg:w-[300px] lg:h-[50px]  justify-between px-5  items-center">
        <div className="text-[#C0C0C0] w-full h-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full text-[#333] focus:outline-none"
          />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-[#757575]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </section>

      <section className="hidden gap-10 lg:flex">
        <button className="bg-[#3D00B7] rounded-[60px] inline-flex justify-center items-center gap-[10px] px-[40px] h-[50px] text-[#FFFFFF]">
          Upload
        </button>
        <button className="inline-flex px-[22px] h-[50px] justify-center rounded-[60px] items-center gap-[10px] border-[2px] border-[#3D00B7]">
          Connect Wallet
        </button>
      </section>

      <section className="flex lg:hidden ">
        <div onClick={handleDrawerMenuClick} className="border-[1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </section>
    </header>
  );
};

export default Header;

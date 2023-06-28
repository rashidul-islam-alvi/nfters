import React from "react";

const AmazeNFT = () => {
  const h2style =
    "text-[20px] font-['DM Sans'] bg-inherit  lg:font-[700] text-[#000]";
  const pstyle =
    "text-[14px] hidden  text-[#696969] font-['DM Sans'] bg-inherit w-[240px] lg:flex  flex-shrink ";

  return (
    <div className=" bg-slate-50 lg:h-[330px]  flex items-center justify-center ">
      <div className="flex flex-col lg:flex-row py-10 lg:py-0 items-center lg:items-start gap-10 bg-inherit w-[90%]  lg:w-[75%] justify-between">
        <section className="flex items-center text-center uppercase lg:text-left bg-inherit">
          <h2 className="text-[20px] lg:text-[28px] bg-inherit font-['IntegralCF']  lg:w-[400px] lg:flex lg:flex-shrink font-[700] text-[#000]">
            The amazing NFT art of the world here
          </h2>
        </section>
        <section className="flex flex-col lg:flex-row gap-x-5">
          <div className="flex justify-center lg:block lg:justify-normal ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 lg:w-9 lg:h-9 bg-inherit"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
          </div>
          <div className="bg-inherit">
            <h2 className={h2style}>Fast Transaction</h2>
            <p className={pstyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-x-5 ">
          <div className="flex justify-center lg:block lg:justify-normal ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 lg:w-9 lg:h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
          </div>
          <div className="bg-inherit">
            <h2 className={h2style}>Growth Transaction</h2>
            <p className={pstyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AmazeNFT;

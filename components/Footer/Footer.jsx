import Image from "next/image";
import React from "react";

const Footer = () => {
  const h2Style = "text-[#000] text-[18px]  font-bold capitalize";
  return (
    <div className="lg:h-[40vh] mb-10 lg:mb-0 flex  items-center justify-center ">
      <div className="lg:w-[75%] w-[90%] flex flex-col gap-10 lg:gap-0 lg:flex-row">
        <section className="flex-[2] flex flex-col gap-5 lg:gap-10">
          <h2 className="text-2xl text-[#000] font-bold font-['fff']">
            NFTERS
          </h2>

          <p className="text-[#565656] text-sm w-[70%]">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <div className="flex gap-5">
            <Image
              src="/assets/facebook.svg"
              width={36}
              height={36}
              alt="fb"
              loading="lazy"
            />
            <Image
              src="/assets/twitter.svg"
              width={36}
              height={36}
              alt="fb"
              loading="lazy"
            />
            <Image
              src="/assets/linkedin.svg"
              width={36}
              height={36}
              alt="fb"
              loading="lazy"
            />
          </div>
        </section>
        <section className="flex-[1] flex flex-col gap-5">
          <h2 className={h2Style}>Market Place</h2>
          <div className="flex flex-col gap-2 text-[14px] font-semibold text-[#3d3d3d]">
            <span>All NFTS</span>
            <span>New</span>
            <span>Art</span>
            <span>Sports</span>
            <span>Utility</span>
            <span>Music</span>
            <span>Domain Name</span>
          </div>
        </section>
        <section className="flex-[1]  flex flex-col gap-5">
          <h2 className={h2Style}>Market Place</h2>
          <div className="flex flex-col gap-2 text-[14px] font-semibold text-[#3d3d3d]">
            <span>Profile</span>
            <span>Favorite</span>
            <span>My Collections</span>
            <span>Settings</span>
          </div>
        </section>
        <section className="flex-[2] flex flex-col gap-10">
          <h2 className={h2Style}>Stay in the loop</h2>
          <p className="text-[#565656] text-sm ">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>

          <div className="rounded-md lg:rounded-[45px] flex  items-center justify-between h-[60px] border-[2px] border-[#F1f1f1]">
            <input
              type="text"
              className="px-5 outline-none"
              placeholder="Enter your email address"
            />
            <button className="text-[#fff] text-[13px] inline-flex justify-center items-center mx-[2px] px-[10px] lg:px-[30px] py-[14px] lg:py-[14px] bg-[#2639ED] rounded-lg lg:rounded-[45px]">
              Subscribe Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;

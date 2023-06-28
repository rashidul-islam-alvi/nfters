import React from "react";
import { featuredNFTS } from "./data";
import FeaturedCard from "./FeaturedCard";

const FeaturedNFT = () => {
  return (
    <div className="lg:h-[70vh] bg-slate-50 flex items-center justify-center my-10 lg:my-0 ">
      <div className="lg:w-[75%] w-[90%] text-center lg:text-left py-10 lg:py-0 ">
        <h2 className=" uppercase text-[#000] lg:mb-20 mb-10 text-[20px] lg:text-[28px] font-['fff'] font-bold">
          Collection Featured NFTs
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {featuredNFTS.map((nfts) => (
            <FeaturedCard key={nfts.id} data={nfts} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedNFT;

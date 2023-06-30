import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const DiscoverCard = ({ data }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-[#fff] gap-5 lg:p-3  p-2 rounded-md hover:shadow-md  lg:rounded-[14px] cursor-pointer "
    >
      <div className="relative">
        <Image
          src={data.img}
          style={{ objectFit: "contain" }}
          width={320}
          height={290}
          alt="s1"
          loading="lazy"
        />

        <Image
          src="/assets/avatar1.png"
          className="absolute bottom-0 translate-y-3 bg-transparent border-2 rounded-full translate-x-7"
          width={32}
          height={32}
          alt="a1"
          loading="lazy"
        />
        <Image
          src="/assets/avatar2.png"
          className="absolute bottom-0 translate-x-12 translate-y-3 bg-transparent border-2 rounded-full"
          width={32}
          height={32}
          alt="a1"
          loading="lazy"
        />
        <Image
          src="/assets/avatar7.png"
          className="absolute bottom-0 translate-x-16 translate-y-3 bg-transparent rounded-full"
          width={32}
          height={32}
          alt="a1"
          loading="lazy"
        />

        <Image
          src="/assets/avatar7.png"
          className="absolute bottom-0 translate-x-20 translate-y-3 bg-transparent rounded-full"
          width={32}
          height={32}
          alt="a1"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-[#000] text-[16px] lg:text-[20px] font-bold leading-[20px]">
          {data.title}
        </h2>
        <div className="flex justify-between">
          <span className="flex items-center text-[12px] lg:text-[14px] text-[#00AC4F]">
            <Image
              src="/assets/ethereumgreen.png"
              width={9}
              height={15}
              alt={`image-ethereum`}
              className="mr-3"
              loading="lazy"
            />
            0.25 ETH
          </span>

          <span className="text-[#838383] text-[12px] lg:text-[14px]">
            1 of 321
          </span>
        </div>
        <div className="flex flex-col justify-between gap-2 lg:gap-0 lg:flex-row">
          <span className="inline-flex font-semibold justify-center items-center py-2 lg:px-[10px] lg:py-[5] rounded-md lg:rounded-[110px] bg-[#f5f5f5] text-[11px] text-[#5539A8]">
            3h 50m 2s left
          </span>
          <span className="cursor-pointer inline-flex  justify-center lg:justify-normal  font-semibold text-[14px] lg:text-[16px] border-[#5539A8] border-[1px] lg:border-0 text-[#5539A8]">
            Place a bid
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default DiscoverCard;

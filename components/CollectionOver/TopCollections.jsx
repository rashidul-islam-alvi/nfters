import Image from "next/image";
import React from "react";

const TopCollections = ({ topCollections }) => {
  return (
    <section className="flex flex-col justify-between flex-1 ">
      <div className="mb-5 text-center lg:text-left ">
        <h2 className="uppercase text-[#000] font-['FFFF'] text-[20px] font-bold">
          Top Collections over
        </h2>
        <p className="text-[#3D00B7] font-bold text-[18px]">Last 7 days</p>
      </div>
      <div className="flex flex-col gap-5">
        {topCollections.map((topCollection) => (
          <div
            key={topCollection.id}
            className={`flex items-center justify-between lg:justify-normal  lg:gap-10 p-2 lg:pb-2  ${
              topCollection.id === 5 ? "border-b-0" : "border-b-[1px]"
            }`}
          >
            <h2 className="text-[#000] font-bold text-2xl">
              {topCollection.id}
            </h2>
            <div className="flex gap-5 lg:flex-1">
              <Image
                src={topCollection.avatar}
                width={60}
                height={60}
                className="rounded-full"
                alt={`image-${topCollection.id}`}
                loading="lazy"
              />
              <div>
                <p>{topCollection.title}</p>
                <span className="flex items-center">
                  <Image
                    src="/assets/ethereum.svg"
                    width={15}
                    height={24}
                    alt={`image-ethereum`}
                    className="mr-3"
                    loading="lazy"
                  />
                  {topCollection.value}
                </span>
              </div>
            </div>

            <h2
              className={`${
                topCollection.hasIncrease ? "text-[#14c8b0]" : "text-[#FF002E]"
              } lg:text-[20px] text-[17px] lg:flex-1 font-[600] lg:leading-[103%]  lg:tracking-[-0.5px] `}
            >
              {topCollection.change}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCollections;

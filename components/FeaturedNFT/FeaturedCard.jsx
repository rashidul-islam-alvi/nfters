import Image from "next/image";
import React from "react";

const FeaturedCard = ({ data }) => {
  return (
    <div
      className={`flex flex-col gap-5 py-10 ${
        data.id === 3 ? "border-b-0" : "border-b-[1px]"
      } lg:py-0 lg:border-b-0`}
    >
      <section className="flex justify-between gap-5 lg:gap-0 ">
        <Image
          src={data.collections[0].img}
          width={320}
          height={250}
          loading="lazy"
          alt={`image-1`}
        />
        <div className="flex flex-col gap-5 bg-inherit">
          {data.collections.slice(1).map((collection) => (
            <Image
              src={collection.img}
              key={collection.id}
              width={110}
              height={95}
              loading="lazy"
              alt={`image-${collection.id}`}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="hidden lg:flex text-[#000] text-xl font-bold">
          Amazing Collection
        </h2>
        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-2 lg:gap-5">
            <Image
              width={40}
              height={38}
              alt="avatar"
              src={data.avatar}
              loading="lazy"
            />
            <p className="bg-slate-50 text-[15px] lg:text[20px] font-semibold lg:font-normal">
              by {data.owner}
            </p>
          </div>
          <button className="text-[#2639ED] flex justify-center items-center px-5 rounded-[60px] py-[5px] lg:py-[10px] border-[1px] border-[#2639ed]">
            Total 54 Items
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturedCard;

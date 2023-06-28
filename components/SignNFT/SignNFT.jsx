import Image from "next/image";
import React from "react";

const SignNFT = () => {
  return (
    <div className="flex lg:h-[80vh] items-center justify-center">
      <div className="lg:w-[75%] w-[90%] flex flex-col-reverse lg:flex-row gap-10 lg:gap-20">
        <section className="flex-1 gap-10 lg:flex">
          <div className="flex flex-col items-start gap-10 lg:items-end">
            <div className="relative">
              <Image
                src="/assets/s1.png"
                width={300}
                height={300}
                alt="s1"
                loading="lazy"
              />
              <Image
                className="absolute bottom-0 right-0 border-[#fff] translate-x-5 translate-y-5 border-[3px] rounded-full"
                width={80}
                height={80}
                src="/assets/avatar1.png"
                alt="a1"
                loading="lazy"
              />
            </div>
            <div className="relative flex justify-end w-full lg:w-fit lg:justify-normal ">
              <Image
                src="/assets/s3.png"
                width={200}
                height={200}
                alt="s1"
                loading="lazy"
              />
              <Image
                className="absolute bottom-0 right-0 translate-x-[-165px] translate-y-4 rounded-full"
                width={60}
                height={60}
                src="/assets/avatar7.png"
                alt="a1"
                loading="lazy"
              />
            </div>
          </div>
          <div className="relative items-center justify-center hidden lg:flex ">
            <Image
              src="/assets/s2.png"
              width={250}
              height={250}
              alt="s1"
              loading="lazy"
            />
            <Image
              className="absolute bottom-[22%] right-0  translate-x-7 translate-y-5   rounded-full"
              width={80}
              height={80}
              src="/assets/avatar7.png"
              alt="a1"
              loading="lazy"
            />
          </div>
        </section>
        <section className="flex flex-col justify-center flex-1 gap-16 text-center lg:text-left">
          <h2 className="lg:text-4xl text-2xl uppercase font-bold text-[#000] font-['ffff']">
            Create and sell your NFTs
          </h2>
          <p className="lg:text-[18px] text-[16px] lg:leading-[160%] text-[#636363] lg:w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <div>
            <button className="inline-flex px-[40px] py-[10px] lg:py-[15px] justify-center items-center rounded-[50px] bg-[#3d00b7] text-[#fff]">
              Sign Up Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignNFT;

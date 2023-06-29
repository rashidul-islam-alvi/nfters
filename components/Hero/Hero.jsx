import Image from "next/image";
import React from "react";

const Hero = () => {
  const h2Style =
    "text-[#000] text-[20px]  lg:text-[40px] font-['Integral CF'] font-[700] tracking-[2px]";

  const pStyle = "text-[#565656] text-[13px]  lg:text-[20px] leading-[160%]";

  return (
    <div className="flex justify-center gap-10 py-5 lg:py-20">
      <div className="flex w-[90%] lg:w-[75%]">
        <section className="flex flex-col gap-8 text-center lg:text-left lg:flex-1">
          <h2 className="text-[25px] lg:text-[40px] font-bold uppercase font-['IntegralCF'] lg:tracking-[2px] text-[#000]">
            Discover, and collect Digital Art NFTs
          </h2>
          <p className="text-[15px] lg:text-[20px] font-['DM Sans'] text-[#565656] lg:leading-[160%]">
            Digital marketplace for crypto collectibles and <br /> non-fungible
            tokens (NFTs). Buy, Sell, and discover
            <br /> exclusive digital assets.
          </p>
          <div>
            <button className="inline-flex lg:py-[20px] py-[15px] px-[40px] items-center justify-center gap-[10px] rounded-[60px] bg-[#3D00B7] text-[#FFFFFF]">
              Explore Now
            </button>
          </div>
          <div className="flex justify-center gap-10 lg:justify-start">
            <div>
              <h2 className={h2Style}>98K+</h2>
              <p className={pStyle}>Artwork</p>
            </div>
            <div>
              <h2 className={h2Style}>12K+</h2>
              <p className={pStyle}>Auction</p>
            </div>
            <div>
              <h2 className={h2Style}>15K+</h2>
              <p className={pStyle}>Artist</p>
            </div>
          </div>
        </section>

        <section className="relative justify-end flex-1 hidden lg:flex ">
          <Image
            className="absolute rounded-[24px] translate-y-[20px] "
            width={300}
            height={420}
            src="/assets/heroimage3.png"
            alt="herobg3"
            loading="lazy"
          />

          <Image
            className="absolute   rounded-[24px] translate-x-[-30px] translate-y-[10px]"
            width={350}
            height={420}
            src="/assets/heroimage2.png"
            alt="herobg2"
            loading="lazy"
          />
          <div className="relative w-[400px] h-[420px]">
            <div className="z-20 w-[101px]  translate-x-[-110px] translate-y-[170px] absolute h-[101px] rotate-[30deg] rounded-full bg-[#FFE0D4]"></div>
            <Image
              className="absolute rounded-[24px] translate-x-[-60px] "
              width={400}
              height={420}
              src="/assets/heroimage1.png"
              alt="herobg1"
              loading="lazy"
            />
            <div className="absolute flex flex-col justify-between  gap-5 px-5 py-5 w-full h-full  translate-x-[-60px] ">
              <div className="flex flex-col gap-5">
                <h2 className="text-[#fff] text-[28px] font-bold ">
                  Abstr Gradient NFT
                </h2>
                <div className="flex gap-5">
                  <div className="w-[32px] h-[32px] relative">
                    <Image
                      className="absolute"
                      fill
                      src="/assets/avatar1.png"
                    />
                  </div>
                  <h2 className="text-[#fff] text-[20px] font-bold  ">
                    Arkhan17
                  </h2>
                </div>
              </div>

              <div className="flex rounded-xl p-5 justify-between bg-[#ffffff33] backdrop-blur-xl text-[#fff]">
                <div>
                  <p>Current Bid</p>
                  <p className="font-bold">0.25 ETH</p>
                </div>
                <div>
                  <p>Ends in</p>
                  <p>12h 43m 42s</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;

import Image from "next/image";
import React, { useState } from "react";

const Bidding = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleClick = (image) => {
    setCurrentImage(images[image.id - 1]);
  };

  return (
    <section className="hidden lg:flex flex-[2]  gap-20">
      <div className="flex flex-col justify-between">
        <div className="relative h-[400px] w-[400px]">
          <Image
            src={currentImage.img}
            className="absolute "
            fill
            alt="image-1"
            loading="lazy"
          />
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center gap-3">
            <div className="relative rounded-full w-[48px] h-[48px]">
              <Image
                src={currentImage.avatar}
                fill
                className="absolute "
                alt={`avatar-${currentImage.id}`}
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-[20px] font-[700] text-[#000]">
                {currentImage.title}
              </h2>
              <p className="text-[#363639] text-[14px]">
                {currentImage.stock} in the stock
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#3A3A3A] text-[12px] font-[500]">Highest Bid</p>
            <p className="flex text-[16px] text-[#3A3A3A] font-[700] gap-2">
              <Image
                src="/assets/ethereum.svg"
                alt="ethereum"
                width={13}
                height={21}
                loading="lazy"
              />
              {currentImage.highestBid} ETH
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-6">
        {images.slice(1).map((image) => (
          <div key={image.id} className="flex gap-10">
            <Image
              onClick={() => handleClick(image)}
              src={image.img}
              width={147}
              height={147}
              alt="image-2"
              loading="lazy"
            />

            <div className="flex flex-col justify-between">
              <h2 className="text-[20px] text-[#000] font-bold ">
                {image.title}
              </h2>
              <div className="flex gap-2">
                <Image
                  src={image.avatar}
                  width={40}
                  height={32}
                  className="rounded-full"
                  loading="lazy"
                  alt={`avatar-${currentImage.id}`}
                />

                <button className="text-[#00AC4F] border-[1px] p-2 flex justify-center items-center rounded-md border-[#00AC4F]  ">
                  <Image
                    src="/assets/ethereumgreen.png"
                    alt="ethereum"
                    width={9}
                    height={14}
                    className="mr-3"
                    loading="lazy"
                  />
                  {image.highestBid} ETH
                </button>
              </div>
              <button className="hover:bg-[#3D00b7] ease-in-out duration-300 hover:text-[#fff] inline-flex justify-center items-center px-[20px] py-[14px] rounded-[50px] border-[2px] border-[#3D00B7]">
                Place a bid
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[1px] h-full bg-[#ECECEC]" />
    </section>
  );
};

export default Bidding;

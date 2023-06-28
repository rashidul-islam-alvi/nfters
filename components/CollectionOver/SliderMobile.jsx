import Image from "next/image";
import React, { useState } from "react";

const SliderMobile = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftClick = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((index) => index - 1);
    } else {
      setCurrentImageIndex(3);
    }
  };

  const handleRightClick = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((index) => index + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const sliderActiveImage = images[currentImageIndex];

  return (
    <section className="relative flex justify-center my-10 lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute w-10 h-10 top-[50%] left-0"
        onClick={handleLeftClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>

      <Image
        src={sliderActiveImage.img}
        width={300}
        height={300}
        alt="image-1"
        className="p-5"
        loading="lazy"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute w-10 h-10 top-[50%] right-0"
        onClick={handleRightClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </section>
  );
};

export default SliderMobile;

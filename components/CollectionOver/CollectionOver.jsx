import React, { useState } from "react";

import { images, topCollections } from "./data.js";
import Image from "next/image.js";
import Bidding from "./Bidding.jsx";
import SliderMobile from "./SliderMobile.jsx";
import TopCollections from "./TopCollections.jsx";

const CollectionOver = () => {
  return (
    <div className="flex justify-center lg:h-[70vh]items-center ">
      <div className="lg:w-[75%] h-[75%] lg:py-10 justify-between flex flex-col lg:flex-row w-[90%]">
        <SliderMobile images={images} />

        <Bidding images={images} />

        <TopCollections topCollections={topCollections} />
      </div>
    </div>
  );
};

export default CollectionOver;

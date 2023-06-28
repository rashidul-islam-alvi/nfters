import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import DiscoverCard from "./DiscoverCard";
import FilterCategories from "./FilterCategories";
import { categories, nftsCollection } from "./data";

const DiscoverNFT = () => {
  const [filteredCollections, setFilteredCollections] =
    useState(nftsCollection);

  const [category, setCategory] = useState("");

  return (
    <div className="flex justify-center py-10 my-10 lg:my-0 bg-slate-50">
      <div className="w-[90%] lg:w-[75%]">
        <h2 className="uppercase text-[25px] lg:text-left text-center lg:text-[34px] font-bold text-[#000] font-['fff']">
          Discover more NFTs
        </h2>
        <div className="my-10">
          <FilterCategories
            categories={categories}
            nftsCollection={nftsCollection}
            category={category}
            setCategory={setCategory}
            setFilteredCollections={setFilteredCollections}
          />
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-4"
        >
          <AnimatePresence>
            {filteredCollections.map((nft) => (
              <DiscoverCard key={nft.id} data={nft} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default DiscoverNFT;

import React, { useEffect, useState } from "react";

const FilterCategories = ({
  nftsCollection,
  category,
  setCategory,
  setFilteredCollections,
  categories,
}) => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (category == "All Categories") {
      setFilteredCollections(nftsCollection);
      return;
    }

    const filtered = nftsCollection.filter((nft) =>
      nft.category.includes(category)
    );
    setFilteredCollections(filtered);
  }, [category]);

  const handleClick = (item) => {
    setActive(item.id);
    setCategory(item.title);
  };

  return (
    <div className="flex justify-between my-5">
      <ul className="grid grid-cols-3 gap-5 lg:gap-10 lg:flex">
        {categories.map((item) => (
          <li
            onClick={() => handleClick(item)}
            key={item.id}
            className={`${
              item.id === active ? "bg-[#3D00B7] text-[#fff]" : "bg-slate-100"
            } ${
              item.id === 1 ? "py-0" : "py-3"
            } flex text-[12px] lg:text-[15px] lg:px-[20px]  text-center px-10 lg:py-[10px] justify-center rounded-md items-center lg:rounded-[100px] hover:bg-[#3D00B7] ease-in duration-300 hover:text-[#fff] `}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex">
        <button className="flex px-[20px] py-[10px] justify-center items-center rounded-[100px] bg-slate-100 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2 bg-inherit"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
          All Filter
        </button>
      </div>
    </div>
  );
};

export default FilterCategories;

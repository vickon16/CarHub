"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdBuild } from "react-icons/md";

const Search = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (manufacturer === "" && carModel === "") {
      return alert("Inputs Cannot be empty");
    }

    const newSearchParams = new URLSearchParams(window.location.search);

    carModel
      ? newSearchParams.set("model", carModel.toLowerCase())
      : newSearchParams.delete("model");
    manufacturer
      ? newSearchParams.set("make", manufacturer.toLowerCase())
      : newSearchParams.delete("make");

    const newPathname = `${
      window.location.pathname
    }?${newSearchParams.toString()}`;

    router.push(newPathname);
    setManufacturer("");
    setCarModel("");
  };

  return (
    <form
      className="flex gap-x-1 md:gap-x-3 items-center bg-slate-200/80 px-3 md:px-6 w-full max-w-[500px] h-[50px] sm:h-[60px] rounded-full"
      onSubmit={handleSearchSubmit}
    >
      <span className="inline-flex items-center px-3 text-gray-500 cursor-pointer gap-x-2 flex-nowrap">
        <MdBuild className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]" />
        <input
          className="border-none outline-none h-[30px] w-full bg-transparent"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          placeholder="Manufacturer"
        />
      </span>
      <span className="inline-flex items-center px-3 text-gray-500 cursor-pointer gap-x-2 flex-nowrap">
        <AiFillCar className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]" />
        <input
          className="border-none outline-none h-[30px] w-full bg-transparent"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          placeholder="Car Model"
        />
      </span>
      <button className="p-2 ml-auto bg-white rounded-full cursor-pointer sm:p-3">
        {/* search */}
        <FaSearch className="w-[18px] sm:w-[22px] h-[18px] sm:h-[22px] fill-blue-600" />
      </button>
    </form>
  );
};

export default Search;

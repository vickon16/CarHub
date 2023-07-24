"use client";

import React from "react";
import { useSelector } from "react-redux";
import { selectCars} from "@/store/carSlice";
import CarsDisplay from "./CarsDisplay";

const FavoriteSection = () => {
  const { allCarData } = useSelector(selectCars);
  const favoriteCars = allCarData.filter(cars => cars.isFavorite === true);

  return (
    <section className="mt-8">
      <h2 className="mb-1 font-semibold text-clampBase">Favorite Cars</h2>
      <div className="flex flex-wrap items-center justify-between w-full gap-3">
        <p className="text-gray-500 text-clampSm ">
          Explore out cars that you may like
        </p>

        {/* <div className="flex flex-wrap items-center sm:justify-end gap-3 w-fit">
          <Filters title="fuel_type" options={fuels} />
          <Filters title="make" options={makes} />
          <Filters title="year" options={yearsOfProduction} />
        </div> */}
      </div>

      {/* Cars sections */}
      <CarsDisplay type="favorite" carsData={favoriteCars} />
    </section>
  );
};

export default FavoriteSection;

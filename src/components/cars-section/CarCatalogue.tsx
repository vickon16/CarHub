"use client";
import Filters from "@/components/Filters";
import { fuels, makes, yearsOfProduction } from "@/data/filters";

import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, setAllCarData } from "@/store/carSlice";
import { nanoid } from "nanoid";
import CarsDisplay from "./CarsDisplay";
import CarCardLoader from "../loaders/CarCardLoader";

interface FavoriteSectionProps {
  searchParams: FilterDataType;
  carsData: CarDataType[];
}

const CarCatalogue: FC<FavoriteSectionProps> = ({ carsData, searchParams }) => {
  const {allCarData} = useSelector(selectCars)
  const dispatch = useDispatch();
  
  useEffect(() => {
    const mappedData = carsData.map((item) => ({
      ...item, id: nanoid(), isFavorite: false,
    }));
    dispatch(setAllCarData(mappedData));
  }, [carsData, dispatch])
  

  return (
    <section className="mt-8">
      <h2 className="mb-1 font-semibold text-clampBase">Car Catalogue</h2>
      <div className="flex flex-wrap items-center justify-between w-full gap-3">
        <p className="text-gray-500 text-clampSm ">
          Explore out cars that you may like
        </p>

        <div className="flex flex-wrap items-center sm:justify-end gap-3 w-fit">
          <Filters title="fuel_type" options={fuels} />
          <Filters title="make" options={makes} />
          <Filters title="year" options={yearsOfProduction} />
        </div>
      </div>

      {/* Cars sections */}
      {allCarData.length === 0 ? (
        <div className="grid w-full grid-cols-1 gap-6 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 pt-14">
          {Array.from({length: 10}, (_, i) => (
            <CarCardLoader key={i} />
          ))}
        </div>
      ) : (
        <CarsDisplay
          type="catalogue"
          carsData={allCarData}
          searchParams={searchParams}
        />
      )
      }
      
        
    </section>
  );
};

export default CarCatalogue;

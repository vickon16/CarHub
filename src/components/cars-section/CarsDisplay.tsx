import { updateSearchParams } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import CarCard from "./CarCard";
import { BiSolidCar } from "react-icons/bi";
import Button from "../Button";

interface CarDisplayProp {
  type : string;
  carsData: CarDataType[];
  searchParams?: FilterDataType;
}

const CarsDisplay: FC<CarDisplayProp> = ({ type, carsData, searchParams }) => {
  const router = useRouter();
  const page = (Number(searchParams?.limit) || 10) / 10
  const isPaginate = (Number(searchParams?.limit) || 10) > carsData.length

  const handleShowMoreCars = () => {
    const newPageLimit = (page + 1) * 10;

    const newPathname = updateSearchParams("limit", `${newPageLimit}`);
    router.push(newPathname);
  };

  const carsEmpty = !Array.isArray(carsData) || carsData.length === 0;

  return (
    <>
      {!carsEmpty ? (
        <section>
          <div className="grid w-full grid-cols-1 gap-6 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 pt-14">
            {carsData?.map((carData) => (
              <CarCard carData={carData} key={carData.id} />
            ))}
          </div>

          {/* stop showing cards after 30 data displays */}
          {type === "catalogue" && !isPaginate ? (
            <div className="flex items-center justify-center w-full my-12">
              <Button onClick={handleShowMoreCars} label="Show More Cars" />
            </div>
          ) : null}
        </section>
      ) : (
        <div className="flex items-center justify-center gap-2 my-16">
          <h2 className="text-xl font-light text-black">
            ...Oops, no results!...
          </h2>
          <BiSolidCar size={20} />
        </div>
      )}
    </>
  );
};

export default CarsDisplay;

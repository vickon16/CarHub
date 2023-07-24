"use client";
import Image from "next/image";

import { generateImageUrl } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { carModalOpen } from "@/store/modalSlice";
import { GiSteeringWheel } from "react-icons/gi";
import { RiSettings5Fill } from "react-icons/ri";
import { BsFuelPumpFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Button from "../Button";
import { setFavorite, removeFavorite } from "@/store/carSlice";

interface CarCardProps {
  carData: CarDataType;
}

const CarCard = ({ carData }: CarCardProps) => {
  const { id, isFavorite, make, transmission, drive, city_mpg, model } = carData;
  const dispatch = useDispatch();

  const handleOpen = (carData: CarDataType) => {
    dispatch(carModalOpen(carData));
  };

  return (
    <div className="flex p-5 flex-col justify-center bg-blue-100/40 hover:bg-white hover:shadow-md rounded-3xl group cursor-pointer">
      <div className="flex items-center justify-between gap-x-2 w-full">
        <h2 className="text-clampSm font-semibold capitalize">
          {make} {model}
        </h2>
        {isFavorite ? (
          <AiFillHeart
            size={20}
            className="fill-red-500"
            onClick={() => dispatch(removeFavorite(id))}
          />
        ) : (
          <AiOutlineHeart size={20} onClick={() => dispatch(setFavorite(id))} />
        )}
      </div>

      <p className="flex mt-4 text-clampBase font-extrabold">
        <span className="self-start text-sm font-semibold">$</span>
        42
        <span className="self-end text-sm font-medium">/day</span>
      </p>

      <div className="relative object-contain w-full h-40 my-3">
        <Image
          src={generateImageUrl(carData)}
          alt="car-image"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="flex items-center mt-2 justify-between w-full px-2 group-hover:hidden">
        <div className="flex flex-col items-center justify-center gap-2">
          <GiSteeringWheel size={20} className="fill-orange-400" />
          <p className="text-sm">
            {transmission === "a" ? "Automatic" : "Manual"}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <RiSettings5Fill size={20} className="fill-blue-500" />
          <p className="text-sm">{drive.toUpperCase()}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <BsFuelPumpFill size={20} className="fill-emerald-500" />
          <p className="text-sm">{city_mpg} MPG</p>
        </div>
      </div>

      <div className="hidden group-hover:flex items-center justify-center w-full">
        <Button label="View more" onClick={() => handleOpen(carData)} />
      </div>
    </div>
  );
};

export default CarCard;

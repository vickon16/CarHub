"use client";

import React, { FC } from "react";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import Button from "../Button";
import { generateImageUrl } from "@/lib/utils";

interface ModalContentProps {
  modalContentData : CarDataType;
  onClick: () => void;
}


const ModalContent: FC<ModalContentProps> = ({ onClick, modalContentData }) => {
  const {city_mpg, class : carClass, combination_mpg, cylinders,drive,fuel_type, highway_mpg, make, model, transmission, year} = modalContentData

  return (
    <section>
      {/* modal header */}
      <div className="flex justify-between items-center gap-x-3 bg-blue-100/70 px-4 sm:px-6 py-3">
          <p className="font-semibold">More info</p>
          <MdOutlineClose
            onClick={onClick}
            size={24}
            className="cursor-pointer"
          />
        </div>

      {/* modal body */}
      <div className="flex flex-wrap">
        {/* left side */}
        <aside className="left-side w-full sm:w-4/6">
          {/* modal body */}
          <div className="px-4 sm:px-6 py-8 flex flex-col gap-y-6">
            <div>
              <h2 className="text-clampSm font-semibold mb-1 capitalize">{make} {model}</h2>
              <p className="text-gray-500 font-light text-sm capitalize">
                {make} City {model} 10342 - {year}
              </p>
            </div>

            <div className="flex items-center justify-between w-full gap-4 text-sm">
              {/* first five */}
              <div className="flex flex-col gap-y-3 jus">
                <div className="flex min-w-[170px] max-w-[400px] items-center justify-between gap-x-1">
                  <span className="text-gray-600 font-light">Type Car</span>
                  <b className="text-end">{carClass}</b>
                </div>
                <div className="flex min-w-[170px] max-w-[400px] items-center justify-between gap-x-1">
                  <span className="text-gray-600 font-light">Cylinders</span>
                  <b className="text-end">{cylinders}</b>
                </div>
                <div className="flex min-w-[170px] max-w-[400px] items-center justify-between gap-x-1">
                  <span className="text-gray-600 font-light">City MPG</span>
                  <b className="text-end">{city_mpg}</b>
                </div>
                <div className="flex min-w-[170px] max-w-[400px] items-center justify-between gap-x-1">
                  <span className="text-gray-600 font-light">Drive</span>
                  <b className="text-end">{drive}</b>
                </div>
                <div className="flex min-w-[170px] max-w-[400px] items-center justify-between gap-x-1">
                <span className="text-gray-600 font-light">Make</span>
                <b className="text-end">{make}</b>
              </div>
              </div>

              <div className="flex flex-col gap-y-3">
                {/* second five */}
                <div className="flex min-w-[170px] max-w-[400px] items-center justify-between gap-x-1">
                  <span className="text-gray-600 font-light">Fuel Type</span>
                  <b className="text-end">{fuel_type}</b>
                </div>
                <div className="flex min-w-[170px] max-w-[400px] items-center justify-between gap-x-1">
                  <span className="text-gray-600 font-light">Highway MPG</span>
                  <b className="text-end">{highway_mpg}</b>
                </div>
                <div className="flex min-w-[170px] max-w-[400px] items-center justify-between gap-x-1">
                  <span className="text-gray-600 font-light">Transmission</span>
                  <b className="text-end">{transmission}</b>
                </div>
                <div className="flex min-w-[170px] max-w-[400px] items-center justify-between gap-x-1">
                  <span className="text-gray-600 font-light">Combination MPG</span>
                  <b className="text-end">{combination_mpg}</b>
                </div>
                <div className="flex min-w-[170px] max-w-[400px] items-center justify-between gap-x-1">
                <span className="text-gray-600 font-light">Model</span>
                <b className="text-end">{model}</b>
              </div>
              </div>
            </div>
          </div>
        </aside>

        {/* right side */}
        <aside className="right-side h-[200px] w-full sm:w-2/6 self-start">
          <div className="relative w-full h-[200px]">
            <Image src={generateImageUrl(modalContentData)} alt="car-image" fill className="object-contain" />
          </div>
        </aside>
      </div>

      {/* modal footer */}
      <div className="bg-blue-600 px-4 sm:px-6 py-2.5 flex justify-between">
        <div>
          <p className="text-white font-semibold">$80.00/ <small className="text-xs font-light">days</small></p>
          <small className="text-white text-xs font-light">$100.00</small>
        </div>
        <Button label="Rent Now" whiteBg onClick={() => {}} small />
      </div>
    </section>
  );
};

export default ModalContent;

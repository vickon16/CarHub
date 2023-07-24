"use client";

import React from 'react';
import {AiFillCar} from "react-icons/ai";

const Logo = () => {
  return (
    <div className='flex items-center gap-x-1'>
        <AiFillCar className='fill-blue-600 w-[25px] h-[25px]'  /> 
      <span className='font-semibold text-clampMd'>CarHub</span>
    </div>
  )
}

export default Logo
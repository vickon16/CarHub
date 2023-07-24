import React from 'react'

const CarCardLoader = () => {
  return (
    <div className="flex p-5 flex-col justify-center bg-blue-100/40 hover:bg-white hover:shadow-md rounded-3xl group cursor-pointer">
      <div className="flex items-center justify-between gap-x-2 w-full">
        <h2 className="text-clampSm font-semibold capitalize w-[80%] h-[20px] animate-pulse bg-blue-100/80"></h2>
      </div>

      <p className="flex mt-4 text-clampBase font-extrabold w-[40%] h-[25px] animate-pulse bg-blue-100/80">
      </p>

      <div className="relative object-contain w-full h-40 my-3 animate-pulse bg-blue-100/80">
      </div>

      <div className="flex items-center mt-2 justify-between w-full px-2 group-hover:hidden">
        <div className="flex flex-col items-center justify-center gap-2 w-full h-[20px] animate-pulse bg-blue-100/80">
        </div>
        <div className="flex flex-col items-center justify-center gap-2 full h-[20px] animate-pulse bg-blue-100/80">
        </div>
        <div className="flex flex-col items-center justify-center gap-2 full h-[20px] animate-pulse bg-blue-100/80">
        </div>
      </div>
    </div>
  )
}

export default CarCardLoader
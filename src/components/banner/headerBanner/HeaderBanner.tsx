import React from "react";

export default function HeaderBanner() {
  return (
    <div className="flex flex-row w-full gap-4">
      <div className=" w-full  md:basis-2/3 bg-blue-600 text-white p-4 rounded h-[481px]  flex flex-col	">
        <div
          className=" basis-3/5 md:basis-4/5 "
          style={{ border: "2px solid red" }}
        >
          movie swiper
        </div>
        <div className=" basis-2/5 md:basic-1/5 border-2 flex-1 ">
          movie info
        </div>
      </div>
      <div className="basis-1/3 bg-pink-500 text-white p-4 rounded h-[400px] hidden md:flex">
        swiper column
      </div>
    </div>
  );
}

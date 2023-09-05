import React from "react";
import Image from "next/image";
import Avatar from "../../public/avatars/avatar1.png";
const RightHeader = () => {
  return (
    <>
      <div className="flex mt-16">
        <Image
          src={Avatar}
          className="rounded-full relative mr-10"
          width="86"
          height="86"
          alt="asd"
        />
        <div className="flex justify-between w-full">
          <div className="names">
            <p className="text-gray-800 text-xl">ryonwasis</p>
            <p className="text-gray-400 text-2xl">RyonWasis</p>
          </div>
          <div className="mr-1">
            <button className=" justify-center text-blue-600 dark:text-blue-500 dark:hover:bg-gray-600">
              Switch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightHeader;

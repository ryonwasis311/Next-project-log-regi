"use client";

import React, { Component } from "react";
import Image from "next/image";
import Avatar1 from "../../public/avatars/avatar1.png";
import Avatar2 from "../../public/avatars/avatar2.png";
import Avatar3 from "../../public/avatars/avatar3.png";
import Avatar4 from "../../public/avatars/avatar4.png";
import Avatar5 from "../../public/avatars/avatar5.png";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";
import Slider from "react-slick";
const AvatarList = () => {
  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...setting}>
        <div >
          <Image
            src={Avatar1}
            className="rounded-full relative mr-10"
            width="86"
            height="86"
            alt="asd"
          />
          <div className="fullname ml-[11px] mt-[15px]">
            <p className="font-semibold">fullname</p>
          </div>
        </div>
        <div>
          <Image
            src={Avatar2}
            className="rounded-full relative mr-10"
            width="86"
            height="86"
            alt="asd"
          />
          <div className="fullname ml-[11px] mt-[15px]">
            <p className="font-semibold">fullname</p>
          </div>
        </div>
        <div>
          <Image
            src={Avatar3}
            className="rounded-full relative mr-10"
            width="86"
            height="86"
            alt="asd"
          />
          <div className="fullname ml-[11px] mt-[15px]">
            <p className="font-semibold">fullname</p>
          </div>
        </div>
        <div>
          <Image
            src={Avatar4}
            className="rounded-full c mr-10"
            width="86"
            height="86"
            alt="asd"
          />
          <div className="fullname ml-[11px] mt-[15px]">
            <p className="font-semibold">fullname</p>
          </div>
        </div>
        <div>
          <Image
            src={Avatar5}
            className="rounded-full relative mr-10"
            width="86"
            height="86"
            alt="asd"
          />
          <div className="fullname ml-[11px] mt-[15px]">
            <p className="font-semibold">fullname</p>
          </div>
        </div>
        <div>
          <Image
            src={Avatar1}
            className="rounded-full relative mr-10"
            width="86"
            height="86"
            alt="asd"
          />
          <div className="fullname ml-[11px] mt-[15px]">
            <p className="font-semibold">fullname</p>
          </div>
        </div>
        <div>
          <Image
            src={Avatar2}
            className="rounded-full relative mr-10"
            width="86"
            height="86"
            alt="asd"
          />
          <div className="fullname ml-[11px] mt-[15px]">
            <p className="font-semibold">fullname</p>
          </div>
        </div>
        <div>
          <Image
            src={Avatar3}
            className="rounded-full relative mr-10"
            width="86"
            height="86"
            alt="asd"
          />
          <div className="fullname ml-[11px] mt-[15px]">
            <p className="font-semibold">fullname</p>
          </div>
        </div>
        <div>
          <Image
            src={Avatar4}
            className="rounded-full relative mr-10"
            width="86"
            height="86"
            alt="asd"
          />
          <div className="fullname ml-[11px] mt-[15px]">
            <p className="font-semibold">fullname</p>
          </div>
        </div>
        <div>
          <Image
            src={Avatar5}
            className="rounded-full relative mr-10"
            width="86"
            height="86"
            alt="asd"
          />
          <div className="fullname ml-[11px] mt-[15px]">
            <p className="font-semibold">fullname</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AvatarList;

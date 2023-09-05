"use client";

import React, { Component } from "react";
import Image from "next/image";
import Avatar1 from "../../public/avatars/avatar1.png";
import Avatar2 from "../../public/avatars/avatar2.png";
import Avatar3 from "../../public/avatars/avatar3.png";
import Avatar4 from "../../public/avatars/avatar4.png";
import Avatar5 from "../../public/avatars/avatar5.png";
import { Carousel } from "@material-tailwind/react"
import Link from "next/link";
import Slider from "react-slick";
 const AvatarList = () => {
  const setting  = {
    dots: true,
    infinite: true,
    speed:500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div>
<h2>hello</h2>
<Slider {...setting}>
  <div><Image src={Avatar1}  className="rounded-full relative mr-10" width="86" height="86" alt="asd" />
  </div>
  <div>
    <Image src={Avatar2}  className="rounded-full relative mr-10" width="86" height="86" alt="asd" />
  </div>
  <div>
    <Image src={Avatar3}  className="rounded-full relative mr-10" width="86" height="86" alt="asd" />
  </div>
  <div>
    <Image src={Avatar4}  className="rounded-full relative mr-10" width="86" height="86" alt="asd" />
  </div>
  <div>
    <Image src={Avatar5}  className="rounded-full relative mr-10" width="86" height="86" alt="asd" />
  </div>
  <div>
    <Image src={Avatar1}  className="rounded-full relative mr-10" width="86" height="86" alt="asd" />
  </div>
  <div>
    <Image src={Avatar2}  className="rounded-full relative mr-10" width="86" height="86" alt="asd" />
  </div>
  <div>
    <Image src={Avatar3}  className="rounded-full relative mr-10" width="86" height="86" alt="asd" />
  </div>
  <div>
    <Image src={Avatar4}  className="rounded-full relative mr-10" width="86" height="86" alt="asd" />
  </div>
  <div>
    <Image src={Avatar5}  className="rounded-full relative mr-10" width="86" height="86" alt="asd" />
  </div>
</Slider>
    </div>
    );
    
};

export default AvatarList;

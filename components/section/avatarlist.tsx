"use client";
import React, { Component } from "react";
import Image from "next/image";
import Avatar1 from "../../public/avatars/avatar1.png";
import Avatar2 from "../../public/avatars/avatar2.png";
import Avatar3 from "../../public/avatars/avatar3.png";
import Avatar4 from "../../public/avatars/avatar4.png";
import Avatar5 from "../../public/avatars/avatar5.png";
import Slider from "react-slick";

import Link from "next/link";
const AvatarList = () => {
  // const setting = {
  //   dots: true,
  //   inifinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  // };
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
      
    
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
    
};

export default AvatarList;

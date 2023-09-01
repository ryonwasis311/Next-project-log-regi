'use client'
import { useState, useRef, Fragment } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import TestimonialImage from "../public/images/avatar8.png"

interface MoalVideoProps {
    thumb : StaticImageData
    thumbWidth: number
    thumHeight:number
    thumbAlt:string
}

const Modal = ( {thumb, thumbWidth, thumHeight, thumbAlt}: MoalVideoProps ) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div>
      {/* Video thumbnail */}
      <div>
        <div
          className="relative flex justify-center mb-8"
          data-aos="zoom-y-out"
          data-aos-delay="450"
        >
          <div className="flex flex-col justify-center">
            <Image
              src={TestimonialImage}
              width={thumbWidth}
              height={thumHeight}
              alt={thumbAlt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

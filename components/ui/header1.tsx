"use client";
import { useState, useEffect } from "react";
import Logo from "./logo";
import Link from "next/link";
import MobileMenu1 from "./mobile-menu1";
import Title from "../../public/Icons/Logo.png";
import Image from "next/image";
import searchicon from "../../public/Icons/Search.png";

const Header1 = () => {
  const [top, setTop] = useState<boolean>(true);

  //detect whether user has scrolled the page down by 10px

  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <>
      <header
        className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
        }`}
      >
        <div className="max-w-[935px] mx-auto flex">
          <div className="flex items-center  h-16 md:h-20 w-full justify-between">
            {/* Site Title */}
            <div className="shrink-0">
              <Link href="/">
                <Image
                  className="relative "
                  src={Title}
                  width={103}
                  height={29}
                  alt="Testimonial 01"
                />
              </Link>
            </div>
            {/* search bar */}

            <div className="">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-4 inset-x-14 flex items-center pointer-events-none">
                    <Image
                      className="relative rounded-full opacity-20"
                      src={searchicon}
                      width={28}
                      height={20}
                      alt="search 01 "
                    />
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 outline-none border-gray-200 text-black-50 text-sm rounded-lg block w-full pl-8 p-1.5  dark:bg-gray-150  dark:placeholder-gray-400 dark:text-black "
                    placeholder="            Search..."
                    required
                  />
                </div>
              </form>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex ">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap gap-5 items-center">
                <li>
                  <Link href="/">
                    <button
                    type="button"
                    className="  hover:text-white font-medium text-sm p-0 text-center inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2_34)">
                        <path
                          d="M20.8542 22H13.7959C13.4292 22 13.1084 21.6792 13.1084 21.3125V15.675C13.1084 14.4833 12.1459 13.5667 11 13.5667C9.85421 13.5667 8.89171 14.5292 8.89171 15.675V21.3125C8.89171 21.6792 8.57087 22 8.20421 22H1.14587C0.779207 22 0.458374 21.6792 0.458374 21.3125V10.5417C0.458374 10.3583 0.550041 10.175 0.641707 10.0375L10.4959 0.183331C10.7709 -0.0916687 11.2292 -0.0916687 11.4584 0.183331L21.3125 10.0375C21.45 10.175 21.4959 10.3583 21.4959 10.5417V21.3125C21.5417 21.6792 21.2209 22 20.8542 22Z"
                          fill="#262626"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_34">
                          <rect width="22" height="22" fill="black" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="sr-only">Icon description</span>
                  </button>
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-white font-medium text-sm p-0 text-center inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_461_2450)">
                        <path
                          d="M16.5918 7.65418L13.2918 10.175C13.0627 10.3583 12.7418 10.3583 12.5127 10.175L10.0377 8.34168C9.30433 7.79168 8.25016 7.97501 7.746 8.75418L4.62933 13.6583C4.3085 14.1167 4.90433 14.6667 5.36266 14.3458L8.7085 11.825C8.93766 11.6417 9.2585 11.6417 9.48766 11.825L11.9627 13.6583C12.696 14.2083 13.7502 14.025 14.2543 13.2458L17.371 8.34168C17.646 7.83751 17.0502 7.33334 16.5918 7.65418ZM11.0002 0.458344C5.04183 0.458344 0.458496 4.81251 0.458496 10.6792C0.458496 13.75 1.696 16.4083 3.7585 18.2417C3.94183 18.3792 4.0335 18.6083 4.0335 18.8375L4.12516 20.7167C4.12516 21.175 4.53766 21.5417 4.95016 21.5417C5.04183 21.5417 5.17933 21.5417 5.271 21.45L7.37933 20.5333C7.471 20.4875 7.6085 20.4417 7.70016 20.4417C7.79183 20.4417 7.83766 20.4417 7.92933 20.4875C8.89183 20.7625 9.90016 20.9 11.0002 20.9C16.9585 20.9 21.5418 16.5458 21.5418 10.6792C21.5418 4.81251 16.9585 0.458344 11.0002 0.458344ZM11.0002 19.525C10.0835 19.525 9.16683 19.3875 8.296 19.1583C8.11266 19.1125 7.92933 19.0667 7.70016 19.0667C7.37933 19.0667 7.10433 19.1125 6.7835 19.25L5.4085 19.8458V18.7917C5.4085 18.1958 5.1335 17.6458 4.67516 17.2333C2.84183 15.5833 1.8335 13.2458 1.8335 10.6792C1.8335 5.63751 5.77516 1.83334 11.0002 1.83334C16.2252 1.83334 20.1668 5.63751 20.1668 10.6792C20.1668 15.7208 16.2252 19.525 11.0002 19.525Z"
                          fill="#262626"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_461_2450">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-white font-medium text-sm p-0 text-center inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_461_2453)">
                        <path
                          d="M14.575 22H7.425C4.4 22 3.025 21.2667 1.87917 20.1667C0.733333 18.975 0 17.6 0 14.575V7.425C0 4.4 0.733333 3.025 1.83333 1.87917C3.025 0.733333 4.4 0 7.425 0H14.575C17.6 0 18.975 0.733333 20.1208 1.83333C21.2667 3.025 22 4.4 22 7.425V14.575C22 17.6 21.2667 18.975 20.1667 20.1208C18.975 21.2667 17.6 22 14.575 22ZM7.425 1.375C4.58333 1.375 3.575 2.10833 2.79583 2.84167C2.10833 3.575 1.375 4.58333 1.375 7.425V14.575C1.375 17.4167 2.10833 18.425 2.84167 19.2042C3.575 19.9375 4.58333 20.625 7.425 20.625H14.575C17.4167 20.625 18.425 19.8917 19.2042 19.1583C19.9375 18.425 20.625 17.4167 20.625 14.575V7.425C20.625 4.58333 19.8917 3.575 19.1583 2.79583C18.425 2.10833 17.4167 1.375 14.575 1.375H7.425Z"
                          fill="#262626"
                        />
                        <path
                          d="M16.6373 11.6875H5.3623C4.99564 11.6875 4.6748 11.3667 4.6748 11C4.6748 10.6333 4.99564 10.3125 5.3623 10.3125H16.6373C17.004 10.3125 17.3248 10.6333 17.3248 11C17.3248 11.3667 17.004 11.6875 16.6373 11.6875Z"
                          fill="#262626"
                        />
                        <path
                          d="M11 17.325C10.6333 17.325 10.3125 17.0042 10.3125 16.6375V5.36249C10.3125 4.99582 10.6333 4.67499 11 4.67499C11.3667 4.67499 11.6875 4.99582 11.6875 5.36249V16.6375C11.6875 17.0042 11.3667 17.325 11 17.325Z"
                          fill="#262626"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_461_2453">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-white font-medium text-sm p-0 text-center inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_461_2458)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11 0C4.95 0 0 4.95 0 11C0 17.05 4.95 22 11 22C17.05 22 22 17.05 22 11C22 4.95 17.05 0 11 0ZM11 20.625C5.68333 20.625 1.375 16.3167 1.375 11C1.375 5.68333 5.68333 1.375 11 1.375C16.3167 1.375 20.625 5.68333 20.625 11C20.625 16.3167 16.3167 20.625 11 20.625ZM15.675 5.40833L8.89167 8.61667C8.75417 8.6625 8.61667 8.8 8.57083 8.9375L5.3625 15.7208C5.225 15.9958 5.27083 16.3167 5.5 16.5C5.6375 16.6375 5.82083 16.6833 6.00417 16.6833C6.09583 16.6833 6.1875 16.6833 6.27917 16.6375L13.0625 13.4292C13.2 13.3833 13.3375 13.2458 13.3833 13.1083L16.5917 6.325C16.7292 6.05 16.6833 5.72917 16.4542 5.54583C16.2708 5.31667 15.95 5.27083 15.675 5.40833ZM12.2833 12.2833L9.7625 9.7625L14.575 7.47083L12.2833 12.2833Z"
                          fill="#262626"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_461_2458">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-white font-medium text-sm p-0 text-center inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_461_2461)">
                        <path
                          d="M15.8583 2.79584C18.4708 2.79584 20.625 5.17917 20.625 8.06667C20.625 11.1833 17.9208 13.1083 15.3542 15.4C12.7875 17.6917 11.4583 18.9292 11 19.2042C10.4958 18.8833 8.84583 17.3708 6.64583 15.4C4.03333 13.1083 1.375 11.1833 1.375 8.06667C1.375 5.17917 3.52917 2.79584 6.14167 2.79584C8.06667 2.79584 9.12083 3.7125 9.85417 4.76667C10.725 5.95834 10.8625 6.55417 11 6.55417C11.1375 6.55417 11.275 5.95834 12.1458 4.76667C12.8792 3.7125 13.9333 2.79584 15.8583 2.79584ZM15.8583 1.42084C13.7958 1.42084 12.2375 2.24584 11 3.9875C9.7625 2.29167 8.20417 1.46667 6.14167 1.46667C2.75 1.42084 0 4.4 0 8.06667C0 11.4125 2.475 13.5667 4.85833 15.6292C5.13333 15.8583 5.45417 16.1333 5.72917 16.4083L6.78333 17.325C8.8 19.1125 9.80833 20.0292 10.2667 20.3042C10.4958 20.4417 10.7708 20.5333 11 20.5333C11.275 20.5333 11.5042 20.4417 11.7333 20.3042C12.1917 20.0292 13.0167 19.2958 15.3083 17.1875L16.225 16.3625C16.5458 16.0875 16.8208 15.8125 17.1417 15.5833C19.5708 13.5667 22 11.4583 22 8.06667C22 4.4 19.25 1.42084 15.8583 1.42084Z"
                          fill="#262626"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_461_2461">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <MobileMenu1 />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;

"use client";
import { useState, useEffect } from "react";
import Logo from "./logo";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
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
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex ">
          <div className="flex items-center  h-16 md:h-20 w-full justify-between ">
            {/* Site Title */}
            <div className="shrink-0 ml-4">
              <Image
                className="relative rounded-full"
                src={Title}
                width={96}
                height={96}
                alt="Testimonial 01"
              />
            </div>
            {/* search bar */}

            <div>
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-4 inset-x-14 flex items-center pointer-events-none">
                    <Image
                      className="relative rounded-full opacity-20"
                      src={searchicon}
                      width={20}
                      height={20}
                      alt="search 01 "
                    />
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border outline-none border-gray-200 text-black-50 text-sm rounded-lg block w-full pl-8 p-1.5  dark:bg-gray-150 dark:border-gray-120 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  <button
                    type="button"
                    className="text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-500"
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
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="sr-only">Icon description</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-gray-700 border hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2_57)">
                        <path
                          d="M15.8583 1.42084C13.7958 1.42084 12.2375 2.24584 11 3.9875C9.7625 2.29167 8.20417 1.46667 6.14167 1.46667C2.75 1.42084 0 4.4 0 8.06667C0 11.4125 2.475 13.5667 4.85833 15.6292C5.13333 15.8583 5.45417 16.1333 5.72917 16.4083L6.78333 17.325C8.8 19.1125 9.80833 20.0292 10.2667 20.3042C10.4958 20.4417 10.7708 20.5333 11 20.5333C11.2292 20.5333 11.5042 20.4417 11.7333 20.3042C12.1917 20.0292 13.0167 19.2958 15.3083 17.1875L16.225 16.3625C16.5458 16.0875 16.8208 15.8125 17.1417 15.5833C19.5708 13.5667 22 11.4583 22 8.06667C22 4.4 19.25 1.42084 15.8583 1.42084Z"
                          fill="#262626"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_57">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-gray-700 border hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2_52)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.67504 13.6583C4.35421 14.1167 4.95004 14.6667 5.40837 14.3458L8.75421 11.825C8.98337 11.6417 9.30421 11.6417 9.53337 11.825L12.0084 13.6583C12.7417 14.2083 13.7959 14.025 14.3 13.2458L17.4167 8.34166C17.7375 7.88333 17.1417 7.33333 16.6834 7.65416L13.2917 10.175C13.0625 10.3583 12.7417 10.3583 12.5125 10.175L10.0375 8.34166C9.30421 7.79166 8.25004 7.975 7.74587 8.75416L4.67504 13.6583ZM11 0.458328C16.9584 0.458328 21.5417 4.81249 21.5417 10.6792C21.5417 16.5458 16.9584 20.9 11 20.9C9.94587 20.9 8.89171 20.7625 7.92921 20.4875C7.74587 20.4417 7.56254 20.4417 7.37921 20.5333L5.27087 21.45C4.76671 21.725 4.12504 21.3125 4.12504 20.7167L4.07921 18.8375C4.07921 18.6083 3.98754 18.3792 3.80421 18.2417C1.69587 16.4083 0.458374 13.75 0.458374 10.6792C0.458374 4.81249 5.04171 0.458328 11 0.458328Z"
                          fill="#262626"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_52">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>  
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-gray-700 border hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2_53)">
                        <path
                          d="M14.575 22H7.425C4.4 22 3.025 21.2667 1.87917 20.1667C0.733333 18.975 0 17.6 0 14.575V7.425C0 4.4 0.733333 3.025 1.83333 1.87917C3.025 0.733333 4.4 0 7.425 0H14.575C17.6 0 18.975 0.733333 20.1208 1.83333C21.2667 3.025 22 4.4 22 7.425V14.575C22 17.6 21.2667 18.975 20.1667 20.1208C18.975 21.2667 17.6 22 14.575 22ZM7.425 1.375C4.58333 1.375 3.575 2.10833 2.79583 2.84167C2.10833 3.575 1.375 4.58333 1.375 7.425V14.575C1.375 17.4167 2.10833 18.425 2.84167 19.2042C3.575 19.9375 4.58333 20.625 7.425 20.625H14.575C17.4167 20.625 18.425 19.8917 19.2042 19.1583C19.9375 18.425 20.625 17.4167 20.625 14.575V7.425C20.625 4.58333 19.8917 3.575 19.1583 2.79583C18.425 2.10833 17.4167 1.375 14.575 1.375H7.425Z"
                          fill="#262626"
                        />
                        <path
                          d="M16.6375 11.6875H5.36255C4.99588 11.6875 4.67505 11.3667 4.67505 11C4.67505 10.6333 4.99588 10.3125 5.36255 10.3125H16.6375C17.0042 10.3125 17.325 10.6333 17.325 11C17.325 11.3667 17.0042 11.6875 16.6375 11.6875Z"
                          fill="#262626"
                        />
                        <path
                          d="M11 17.325C10.6333 17.325 10.3125 17.0042 10.3125 16.6375V5.3625C10.3125 4.99584 10.6333 4.675 11 4.675C11.3667 4.675 11.6875 4.99584 11.6875 5.3625V16.6375C11.6875 17.0042 11.3667 17.325 11 17.325Z"
                          fill="#262626"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_53">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-gray-700 border hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2_57)">
                        <path
                          d="M15.8583 1.42084C13.7958 1.42084 12.2375 2.24584 11 3.9875C9.7625 2.29167 8.20417 1.46667 6.14167 1.46667C2.75 1.42084 0 4.4 0 8.06667C0 11.4125 2.475 13.5667 4.85833 15.6292C5.13333 15.8583 5.45417 16.1333 5.72917 16.4083L6.78333 17.325C8.8 19.1125 9.80833 20.0292 10.2667 20.3042C10.4958 20.4417 10.7708 20.5333 11 20.5333C11.2292 20.5333 11.5042 20.4417 11.7333 20.3042C12.1917 20.0292 13.0167 19.2958 15.3083 17.1875L16.225 16.3625C16.5458 16.0875 16.8208 15.8125 17.1417 15.5833C19.5708 13.5667 22 11.4583 22 8.06667C22 4.4 19.25 1.42084 15.8583 1.42084Z"
                          fill="#262626"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_57">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;

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
                    className="bg-gray-50 border border-gray-200 text-black-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-1.5  dark:bg-gray-150 dark:border-gray-120 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    s<span className="sr-only">Icon description</span>
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
                    s<span className="sr-only">Icon description</span>
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
                    s<span className="sr-only">Icon description</span>
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
                    s<span className="sr-only">Icon description</span>
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

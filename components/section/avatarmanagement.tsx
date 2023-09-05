import Image from "next/image";
import Link from "next/link";
import Avatar from "../../public/avatars/Avatar-Circle.svg";
import Hero from "../../public/avatars/1.svg";

import { IconButton } from "@material-tailwind/react";
const AvatarMangement = () => {
  return (
    <>
      {/* Avatar-Detail */}
      <div className="title flex justify-between mt-16 ml-10 mr-10 mb-4">
        <div className="flex gap-2">
          <Image src={Avatar} width={55} height={55} alt="Avatar" />
          <h4 className="h4 mt-2 ml-3">I'm Steel Man</h4>
        </div>
        <div className="buttons">
          <button
            id="dropdownMenuIconHorizontalButton"
            data-dropdown-toggle="dropdownDotsHorizontal"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-100 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-black  dark:bg-gray-100 dark:hover:bg-gray-700 "
            type="button"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          <div
            id="dropdownDotsHorizontal"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-100 dark:divide-gray-600"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownMenuIconHorizontalButton"
            >
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </Link>
              </li>
            </ul>
            <div className="py-2">
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Separated link
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Avatar */}
      <Image className=" w-full" src={Hero} alt="Avatar" />
      {/* Tools */}
      <div className="flex justify-between">
        <div className="icons ml-4 mt-4">
          <IconButton variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M17.3 3.20493C20.15 3.20493 22.5 5.80493 22.5 8.95493C22.5 12.3549 19.55 14.4549 16.75 16.9549C13.95 19.4549 12.5 20.8049 12 21.1049C11.45 20.7549 9.65 19.1049 7.25 16.9549C4.4 14.4549 1.5 12.3549 1.5 8.95493C1.5 5.80493 3.85 3.20493 6.7 3.20493C8.8 3.20493 9.95 4.20493 10.75 5.35493C11.7 6.65493 11.85 7.30493 12 7.30493C12.15 7.30493 12.3 6.65493 13.25 5.35493C14.05 4.20493 15.2 3.20493 17.3 3.20493ZM17.3 1.70493C15.05 1.70493 13.35 2.60493 12 4.50493C10.65 2.65493 8.95 1.75493 6.7 1.75493C3 1.70493 0 4.95493 0 8.95493C0 12.6049 2.7 14.9549 5.3 17.2049C5.6 17.4549 5.95 17.7549 6.25 18.0549L7.4 19.0549C9.6 21.0049 10.7 22.0049 11.2 22.3049C11.45 22.4549 11.75 22.5549 12 22.5549C12.3 22.5549 12.55 22.4549 12.8 22.3049C13.3 22.0049 14.2 21.2049 16.7 18.9049L17.7 18.0049C18.05 17.7049 18.35 17.4049 18.7 17.1549C21.35 14.9549 24 12.6549 24 8.95493C24 4.95493 21 1.70493 17.3 1.70493Z"
                fill="#262626"
              />
            </svg>
          </IconButton>
          <IconButton variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <g clip-path="url(#clip0_246_1754)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.75 23.2049L22.35 17.7049C23.25 16.0549 23.75 14.1549 23.75 12.1549C23.75 5.65494 18.5 0.404938 12 0.404938C5.5 0.404938 0.25 5.65494 0.25 12.1549C0.25 18.6549 5.5 23.9049 12 23.9049C14 23.9049 15.9 23.4049 17.55 22.5049L23.05 23.9049C23.45 24.0049 23.85 23.6049 23.75 23.2049ZM22.25 12.1549C22.25 14.1549 21.75 15.6549 20.95 17.1549C20.85 17.3549 20.8 17.6049 20.85 17.8549L21.9 22.0549L17.75 21.0049C17.5 20.9549 17.25 20.9549 17.05 21.1049C16.15 21.6049 14.45 22.4049 12.05 22.4049C6.35 22.4049 1.75 17.8049 1.75 12.1549C1.75 6.50494 6.35 1.90494 12 1.90494C17.65 1.90494 22.25 6.50494 22.25 12.1549Z"
                  fill="#262626"
                />
              </g>
              <defs>
                <clipPath id="clip0_246_1754">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.154938)"
                  />
                </clipPath>
              </defs>
            </svg>
          </IconButton>
          <IconButton variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <g clip-path="url(#clip0_246_1757)">
                <path
                  d="M23.9 2.05494C23.75 1.80494 23.5 1.65494 23.25 1.65494H0.75C0.45 1.70494 0.15 1.90494 0.05 2.15494C-0.05 2.40494 0 2.75494 0.2 3.00494L8.15 10.8049L10.9 22.1049C10.95 22.4049 11.2 22.6049 11.5 22.6549H11.6C11.85 22.6549 12.1 22.5049 12.25 22.3049L23.85 2.80494C24.05 2.60494 24.05 2.30494 23.9 2.05494ZM2.6 3.20494H20.35L9 9.50494L2.6 3.20494ZM11.95 20.0049L9.75 10.8049L21.2 4.45494L11.95 20.0049Z"
                  fill="#262626"
                />
              </g>
              <defs>
                <clipPath id="clip0_246_1757">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.154938)"
                  />
                </clipPath>
              </defs>
            </svg>
          </IconButton>
        </div>
        <div className="save mr-4 mt-4">
          <IconButton variant="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <g clip-path="url(#clip0_246_1761)">
                <path
                  d="M21.75 24.1549C21.55 24.1549 21.35 24.0549 21.2 23.9549L12 14.6549L2.8 23.9549C2.6 24.1549 2.25 24.2549 2 24.1049C1.7 24.0049 1.5 23.7049 1.5 23.4049V0.904938C1.5 0.504938 1.85 0.154938 2.25 0.154938H21.75C22.15 0.154938 22.5 0.504938 22.5 0.904938V23.4049C22.5 23.7049 22.3 24.0049 22.05 24.1049C21.95 24.1549 21.85 24.1549 21.75 24.1549ZM12 13.1549C12.4 13.1549 12.8 13.3049 13.1 13.6049L21 21.6049V1.65494H3V21.6049L10.9 13.6049C11.2 13.3049 11.6 13.1549 12 13.1549Z"
                  fill="#262626"
                />
              </g>
              <defs>
                <clipPath id="clip0_246_1761">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.154938)"
                  />
                </clipPath>
              </defs>
            </svg>
          </IconButton>
        </div>
      </div>
      {/* comment-group */}
      <div className="comment_group ml-4">
        {/* following_number */}
        <div className="followingnumber">
          <h4 className="text-xl text-gray-1000">1060 likes</h4>
        </div>
        {/* commets */}
        <div className="comments">
          Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti
          pellentesque
        </div>
        {/* view_comments */}
        <div className="viewcomment">
          <h4 className="text-md text-gray-500">View all 100 comments</h4>
        </div>
        {/* timezone */}
        <div className="timezone">
          <p className="text-sm text-gray-500">1 HOURS AGO</p>
        </div>
      </div>
    </>
  );
};

export default AvatarMangement;

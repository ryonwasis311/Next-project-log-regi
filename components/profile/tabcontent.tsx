"use client";
import { Alert } from "flowbite-react";
import Image from "next/image";
import Avatar from "../../public/avatars/avatar2.png";
import Avatar1 from "../../public/avatars/avatar1.png";
import Avatar2 from "../../public/avatars/avatar3.png";
import Avatar3 from "../../public/avatars/avatar4.png";
import Avatar4 from "../../public/avatars/avatar5.png";
import Avatar5 from "../../public/avatars/avatar6.png";

const TabContent = () => {
  return (
    <div className="max-w-[935px] mx-auto sm:px-0">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex justify-around -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
              id="post-tab"
              data-tabs-target="#post"
              type="button"
              role="tab"
              aria-controls="post"
              aria-selected="false"
            >
              <div className="flex">
                <div className="icon">
                  <svg
                    className="mt-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_461_2802)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.25 0.375H0.75C0.55 0.375 0.375 0.55 0.375 0.75V11.25C0.375 11.45 0.55 11.625 0.75 11.625H11.25C11.45 11.625 11.625 11.45 11.625 11.25V0.75C11.625 0.55 11.45 0.375 11.25 0.375ZM1.125 1.125H3.875V3.875H1.125V1.125ZM1.125 4.625H3.875V7.375H1.125V4.625ZM3.875 10.875H1.125V8.125H3.875V10.875ZM7.375 10.875H4.625V8.125H7.375V10.875ZM7.375 7.375H4.625V4.625H7.375V7.375ZM7.375 3.875H4.625V1.125H7.375V3.875ZM10.875 10.875H8.125V8.125H10.875V10.875ZM10.875 7.375H8.125V4.625H10.875V7.375ZM10.875 3.875H8.125V1.125H10.875V3.875Z"
                        fill="#262626"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_461_2802">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="ml-[6px] w-[36px] h-[18px]">POSTS</p>
              </div>
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="Photos-tab"
              data-tabs-target="#Photos"
              type="button"
              role="tab"
              aria-controls="Photos"
              aria-selected="false"
            >
              <div className="flex">
                <div className="icon">
                  <svg
                    className="mt-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_461_2811)">
                      <path
                        d="M6 12H5.925L0.3 10.75C0.125 10.7 0 10.55 0 10.375V0.374991C0 0.249991 0.05 0.149991 0.15 0.0749908C0.25 -9.15676e-06 0.35 -0.0250092 0.45 -9.1549e-06L6.075 1.24999C6.25 1.29999 6.375 1.44999 6.375 1.62499V11.625C6.375 11.75 6.325 11.85 6.225 11.925C6.175 11.975 6.075 12 6 12ZM0.75 10.075L5.625 11.15V1.92499L0.75 0.849991V10.075Z"
                        fill="#8E8E8E"
                      />
                      <path
                        d="M6 12C5.925 12 5.825 11.975 5.775 11.925C5.675 11.85 5.625 11.75 5.625 11.625V1.62499C5.625 1.44999 5.75 1.29999 5.925 1.24999L11.55 -9.1549e-06C11.65 -0.0250092 11.775 -9.15676e-06 11.875 0.0749908C11.95 0.149991 12 0.249991 12 0.374991V10.375C12 10.55 11.875 10.7 11.7 10.75L6.075 12H6ZM6.375 1.92499V11.15L11.25 10.075V0.849991L6.375 1.92499Z"
                        fill="#8E8E8E"
                      />
                      <path
                        d="M7.625 9.70001C7.45 9.70001 7.3 9.57501 7.25 9.40001C7.2 9.20001 7.325 9.00001 7.525 8.95001L9.9 8.42501C10.1 8.37501 10.3 8.50001 10.35 8.70001C10.4 8.90001 10.275 9.10001 10.075 9.15001L7.7 9.67501C7.675 9.70001 7.65 9.70001 7.625 9.70001ZM4.375 9.70001H4.3L1.925 9.17501C1.725 9.12501 1.6 8.92501 1.65 8.72501C1.7 8.52501 1.9 8.40001 2.1 8.45001L4.475 8.97501C4.675 9.02501 4.8 9.22501 4.75 9.42501C4.7 9.57501 4.55 9.70001 4.375 9.70001ZM4.375 6.20001H4.3L1.925 5.67501C1.75 5.62501 1.625 5.47501 1.625 5.30001V2.67501C1.625 2.55001 1.675 2.45001 1.775 2.37501C1.875 2.30001 1.975 2.27501 2.1 2.30001L4.475 2.82501C4.65 2.87501 4.775 3.02501 4.775 3.20001V5.82501C4.775 5.95001 4.725 6.05001 4.625 6.12501C4.55 6.17501 4.45 6.20001 4.375 6.20001ZM2.375 5.00001L4 5.35001V3.50001L2.375 3.15001V5.00001ZM7.625 6.20001C7.55 6.20001 7.45 6.17501 7.4 6.12501C7.3 6.05001 7.25 5.95001 7.25 5.82501V3.20001C7.25 3.02501 7.375 2.87501 7.55 2.82501L9.925 2.30001C10.025 2.27501 10.15 2.30001 10.25 2.37501C10.35 2.45001 10.4 2.55001 10.4 2.67501V5.30001C10.4 5.47501 10.275 5.62501 10.1 5.67501L7.725 6.20001H7.625ZM8 3.50001V5.35001L9.625 5.00001V3.15001L8 3.50001ZM7.625 8.20001C7.45 8.20001 7.3 8.07501 7.25 7.90001C7.2 7.70001 7.325 7.50001 7.525 7.45001L9.9 6.92501C10.1 6.87501 10.3 7.00001 10.35 7.20001C10.4 7.40001 10.275 7.60001 10.075 7.65001L7.7 8.17501C7.675 8.20001 7.65 8.20001 7.625 8.20001Z"
                        fill="#8E8E8E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_461_2811">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="ml-[6px] w-[36px] h-[18px]">GUIDES </p>
              </div>
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="Videos-tab"
              data-tabs-target="#Videos"
              type="button"
              role="tab"
              aria-controls="Videos"
              aria-selected="false"
            >
              <div className="flex">
                <div className="icon">
                  <svg
                    className="mt=[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_461_2831)">
                      <path
                        d="M6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6C12 2.7 9.3 0 6 0ZM6 11.25C3.1 11.25 0.75 8.9 0.75 6C0.75 3.1 3.1 0.75 6 0.75C8.9 0.75 11.25 3.1 11.25 6C11.25 8.9 8.9 11.25 6 11.25ZM8.5 5.35L5.1 3.4C4.85 3.25 4.6 3.25 4.35 3.4C4.15 3.55 4 3.75 4 4.05V7.95C4 8.2 4.15 8.45 4.4 8.6C4.5 8.65 4.65 8.7 4.8 8.7C4.95 8.7 5.05 8.65 5.2 8.6L8.6 6.65C8.85 6.5 9 6.25 9 6C9 5.75 8.75 5.5 8.5 5.35ZM4.75 7.95V4.05L8.15 6L4.75 7.95Z"
                        fill="#8E8E8E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_461_2831">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="ml-[6px] w-[36px] h-[18px]">VIDEOS </p>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className="rounded-lg bg-gray-50 dark:bg-gray-800"
          id="post"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="flex flex-wrap justify-center gap-4 w-full sm:justify-around md:gap-[28px]">
            <Image src={Avatar} width="293" height="293" alt="avatar" />
            <Image src={Avatar1} width="293" height="293" alt="avatar1" />
            <Image src={Avatar2} width="293" height="293" alt="avatar2" />
            <Image src={Avatar3} width="293" height="293" alt="avatar3" />
            <Image src={Avatar4} width="293" height="293" alt="avatar1" />
            <Image src={Avatar5} width="293" height="293" alt="avatar5" />
          </div>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="Photos"
          role="tabpanel"
          aria-labelledby="Photos-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            PHOTOS{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tabs associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="Videos"
          role="tabpanel"
          aria-labelledby="Videos-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            VIDEOS{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tabs associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabContent;

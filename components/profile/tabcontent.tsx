"use client";
import { Alert } from "flowbite-react";
import Image from "next/image";
import Avatar from "../../public/avatars/avatar2.png"
import Avatar1 from "../../public/avatars/avatar1.png"
import Avatar2 from "../../public/avatars/avatar3.png"
import Avatar3 from "../../public/avatars/avatar4.png"
import Avatar4 from "../../public/avatars/avatar5.png"
import Avatar5 from "../../public/avatars/avatar6.png"


const TabContent = () => {
  return (
    <div className="max-w-[935px] mx-auto sm:px-0">
      <Alert color="info">Alert!</Alert>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
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
              Posts
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
              Photos
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
              Videos
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
          <div className="flex flex-wrap w-full gap-[28px]">
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

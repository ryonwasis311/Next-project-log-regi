import Image from "next/image";
import Avatar from "../../public/avatars/avatar8.png";

const Brief = () => {
  return (
    <div className="max-w-[935px] mx-auto px-4 sm:px-6 ">
      <div className="flex">
        <Image
          src={Avatar}
          className="rounded-full ml-16"
          width="150"
          height="150"
          alt="avatar"
        />
        <div className="pesonal-information mt-8 ml-24 w-full">
          {/* fullname&&events */}
          <div className="flex gap-7">
            <h3 className="text-gray-800 text-3xl">FullName</h3>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 rounded-md focus:ring-blue-300  font-medium px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              follow
            </button>
            <button
              data-dropdown-toggle="dropdownMenuIconHorizontalButton"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-700 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-black dark:bg-gray-100 dark:hover:bg-gray-700"
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
          </div>
          {/* following numbers */}
          <div className="flex gap-8">
            <div className="posts flex dark:text-gray-200 gap-2">
              <p className="text-gray-900 dark:text-gray-200 text-md">
                numbers
              </p>
              <p className="text-gray-600 dark:text-gray-200 text-md">posts</p>
            </div>
            <div className="followers flex dark:text-gray-200 gap-2">
              <p className="text-gray-900 dark:text-gray-200 text-md">
                numbers
              </p>
              <p className="text-gray-600 dark:text-gray-200 text-md">
                followers
              </p>
            </div>
            <div className="followings flex dark:text-gray-200 gap-2">
              <p className="text-gray-900 dark:text-gray-200 text-md">
                numbers
              </p>
              <p className="text-gray-600 dark:text-gray-200 text-md">
                followings
              </p>
            </div>
          </div>
          {/* fullname */}
          <div className="fullname mt-6">
            <p className="font-semibold text-sm">FullName</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brief;

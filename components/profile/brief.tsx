import Image from "next/image";
import Avatar from "../../public/avatars/avatar8.png";

const Brief = () => {
  return (
    <div className= "max-w-[935px] mx-auto ">
      <div className="flex sm:flex md:flex  md:ml-[71px]">
        <Image
          src={Avatar}
          className="ml-1 flex rounded-full mt-[22px]"
          width="150"
          height="150"
          alt="avatar"
        />
        <div className="pesonal-information  mt-3 sm:mt-[10px]  md:mt-[40px] md:ml-[101px] w-full">
          {/* fullname&&events */}
          <div className=" ml-10 sm:flex sm:mt-3 sm:ml-10  md:flex gap-[20px]">
            <p className="text-gray-800 text-[28px]">FullName
              </p>
            <button className=" mr-4 text-white w-[90px] h-[30px] bg-blue-500 hover:bg-blue-700 focus:ring-2 rounded-md focus:ring-blue-300  dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-700 py-[6px] px-[24px]  ">
              <p className="font-[600px] text-sm">Follow</p>
            </button>
            <button
              data-dropdown-toggle="dropdownMenuIconHorizontalButton"
              className="inline-flex items-center  text-sm font-medium text-center text-gray-700 bg-white hover:bg-gray-100  dark:text-black dark:bg-gray-100 dark:hover:bg-gray-700"
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
          <div className=" ml-10 sm:mt-3 sm:ml-10 md:flex md:gap-[40px] md:mt-[24px] md:mb-[20px]">
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
          <div className=" ml-10 sm:mt-3 sm:ml-10 fullname">
            <p className="font-semibold text-sm">FullName</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brief;

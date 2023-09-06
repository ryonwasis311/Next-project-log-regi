import Image from "next/image";
import Avatar from "../../public/avatars/avatar4.png";
const PersonalCard = () => {
  return (
    <div className="px-6">
      {/* title */}
      <div className="ml-3 title flex justify-between">
        <p className="text-xl text-gray-600 mt-5">Suggetions For You</p>
        <button className="text-black">See All</button>
      </div>
      {/* cards */}
      <div className="flex mt-8">
        <Image src={Avatar} className="rounded-full mr-10"
        width="50"
        height="50"
        alt="avatar" />
        <div className="flex justify-between w-full">
            <div className="names">
                <p className="text-gray-800 text-md-center">steelman</p>
                <p className="text-gray-400 text-md-center">SteelMan</p>
            </div>
            <div className="mr-1">
                <button className="justify-center text-blue-600 dark:text-blue-600  dark:hover:bg-gray-600">Follow</button>
            </div>
        </div>
      </div>

      <div className="flex mt-8">
        <Image src={Avatar} className="rounded-full mr-10"
        width="50"
        height="50"
        alt="avatar" />
        <div className="flex justify-between w-full">
            <div className="names">
                <p className="text-gray-800 text-md-center">steelman</p>
                <p className="text-gray-400 text-md-center">SteelMan</p>
            </div>
            <div className="mr-1">
                <button className="justify-center text-blue-600 dark:text-blue-600  dark:hover:bg-gray-600">Follow</button>
            </div>
        </div>
      </div>

      <div className="flex mt-8">
        <Image src={Avatar} className="rounded-full mr-10"
        width="50"
        height="50"
        alt="avatar" />
        <div className="flex justify-between w-full">
            <div className="names">
                <p className="text-gray-800 text-md-center">steelman</p>
                <p className="text-gray-400 text-md-center">SteelMan</p>
            </div>
            <div className="mr-1">
                <button className="justify-center text-blue-600 dark:text-blue-600  dark:hover:bg-gray-600">Follow</button>
            </div>
        </div>
      </div>
      <div className="details">
        <p className="text-md text-gray-400 mt-6">when you throw up dependence on others, you will find your right way!</p>
      </div>
    </div>
  );
};

export default PersonalCard;

import Image from "next/image";
import AvatarImage from "../../public/avatars/ProfilePic.svg";
import Smile from "../../public/icons/Smiley.svg";
import Gif from "../../public/icons/Gif.svg";
import Chart from "../../public/icons/Stats.svg";
import Message from "../../public/icons/Image.svg";
import Line from "../../public/icons/Line 1.png";
import Ellipse from "../../public/icons/Ellipse 1.svg";
import MainCta from "../../public/icons/Main CTA.svg";
import Plus from "../../public/icons/+.svg";
Customize;
import Customize from "../../public/icons/Customize.svg";

const Typing1 = () => {
  return (
    <form>
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="title flex justify-between mt-16 ml-10 mr-10">
      <h1 className="h4">Home</h1>
        <div>
        <Image
          src={Customize}
          width={35 }
          height={35}
          alt="Customize"
        />
        </div>
      </div>
      <div className="flex items-center px-3 py-2 bg-gray-180 dark:bg-gray-200 mt-3">
        <Image
          className="relative rounded-full ml-7"
          src={AvatarImage}
          width={96}
          height={96}
          alt="Testimonial 01"
        />

        <textarea
          id="chat"
          rows="1"
          className="block mx-4 p-2.5 w-full text-md-start text-gray-800 bg-white rounded-lg border border-gray-180 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-2500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="What's happening."
        ></textarea>
      </div>
      <div className="flex justify-between items-center px-3 py-2  bg-gray-180 dark:bg-gray-200">
        <div className="image-group flex ml-20">
          <Image
            className="relative"
            src={Message}
            width={35}
            height={35}
            alt="Message"
          />
          <Image
            className="relative ml-8"
            src={Gif}
            width={35}
            height={35}
            alt="Gif"
          />
          <Image
            className="relative ml-8"
            src={Chart}
            width={35}
            height={35}
            alt="Chart"
          />
          <Image
            className="relative ml-8"
            src={Smile}
            width={35}
            height={35}
            alt="Smile"
          />
        </div>
        <div className="button-groups flex mr-0">
          <button>
            <Image src={Ellipse} width={35} height={35} alt="Ellipse" />
          </button>
          <button>
            <Image
              className="ml-7"
              src={Plus}
              width={35}
              height={35}
              alt="Plus"
            />
          </button>
          <button className="">
            <Image
              className="ml-7 mt-6"
              src={MainCta}
              width={130}
              height={50}
              alt="MainCta"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Typing1;

"use client";

import AddComment from "./addcomment";
import AvatarList from "./avatarlist";
import AvatarMangement from "./avatarmanagement";
import Typing1 from "./typing1";

const Section = () => {
  return (
    <>
      <Typing1 />
      <div className="max-w-[430px] mx-auto px-[44px] sm:px-6 mt-[44px] mb-[91px]">
        <AvatarList />
      </div>
      <AvatarMangement />
      <AddComment />
    </>
  );
};

export default Section;

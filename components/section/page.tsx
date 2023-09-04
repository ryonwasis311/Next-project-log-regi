'use client'


import AddComment from "./addcomment";
import AvatarList from "./avatarlist";
import AvatarMangement from "./avatarmanagement";
import Typing1 from "./typing1";



const Section = () => {
    return (
        <>
        <Typing1 />
        <AvatarList />
        <AvatarMangement />
        <AddComment />
        </>
    );
}

export default Section;
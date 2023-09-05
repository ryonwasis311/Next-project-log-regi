import Brief from "@/components/profile/brief";
import AvatarList from "@/components/section/avatarlist";
import TabContent from "@/components/profile/tabcontent";

export const metadata = {
  title: "Profile",
  description: "Page description",
};

const Profile = () => {
  return (
    <section className="relative mt-20 ">
      <Brief />
      <div className="max-w-[800px] mx-auto px-[48] sm:px-6 mt-11 mb-11">
        <AvatarList />
      </div>
      <TabContent />
    </section>
  );
};

export default Profile;

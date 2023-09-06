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
      <div className="max-w-[835px] mx-auto px-[44px] sm:px-6 mt-[44px] mb-[91px]">
        <AvatarList />
      </div>
      <TabContent />
    </section>
  );
};

export default Profile;

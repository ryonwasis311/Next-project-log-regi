export const metadata = {
  title: "Dashboard",
  description: "Page description",
};

import Section from "@/components/section/page";
import RightSide from "@/components/rightside/page";

const Dashboard = () => {
  return (
    <section className="relative">
      <div className=" max-w-6xl mx-auto px-4  sm:px-6">
        <div className="grid sm:grid-cols-12 gap-2 md:py-12 border-t border-gray-200">
          {/* setion */}
          <div className="sm:col-span-6  md:col-span-9 lg:col-span-9">
            <Section />
          </div>

          {/* rightside */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <RightSide />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

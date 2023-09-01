export const metadata = {
  title: "Home",
  description: "Page description",
};

import Hero from "../../components/hero";
import Testimonials from "@/components/testimonials";
import Modal from "@/components/modal";

const Page = () => {
  return (
    <>
      <Hero />
      <Modal />
      <Testimonials />
    </>
  );
};

export default Page;

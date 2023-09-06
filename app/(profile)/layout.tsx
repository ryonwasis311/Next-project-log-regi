"use client";

import Header1 from "@/components/ui/header1";
import { motion } from "framer-motion";
const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grow">
      <Header1 />
      {/* animation effect */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.7,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </main>
  );
};
export default ProfileLayout;

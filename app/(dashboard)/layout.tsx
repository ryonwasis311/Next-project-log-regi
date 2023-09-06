"use client";

import Header0 from "@/components/ui/header0";
import { motion } from "framer-motion";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grow">
      <Header0 />
      {/* animation effect */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: [1, 1.8, 1.2],
            rotate: [0, 10, -10, 0],
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

export default AuthLayout;

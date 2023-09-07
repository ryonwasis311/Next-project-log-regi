"use client";
import React from "react";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/ui/header";
import { Provider } from "react-redux";
import { store } from "../../store";
import Footer from "../../components/ui/footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
          <main className="grow">
            <Header />
            {children}
            <Footer />
          </main>
        </Provider>
      </React.StrictMode>
    </>
  );
};

export default DefaultLayout;

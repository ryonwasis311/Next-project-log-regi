"use client";
import "./css/style.css";

import React from "react";
import { Inter } from "next/font/google";
import Banner from "../components/banner";

import { Provider } from "react-redux";
import { store } from "../slices/store";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "My Next App",
  decription: "Geterated by next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <body
          className={`${inter.variable}  font-inter antialiased bg-white text-gray-900 tracking-tight`}
        >
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip: ">
            <React.StrictMode>
              <Provider store={store}>
                {children}
                <Banner />
              </Provider>
            </React.StrictMode>
          </div>
        </body>
      </html>
    </>
  );
};

export default RootLayout;

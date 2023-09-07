"use client"
import Header from "@/components/ui/header";
import { BrowserRouter } from "react-router-dom";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grow">
      <Header />
      <BrowserRouter>{children}</BrowserRouter>
    </main>
  );
};

export default AuthLayout;

import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-black">
      <Header />
      <main> {children} </main>
      <Footer />
    </div>
  );
}

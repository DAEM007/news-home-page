"use client";
import { useState } from "react";
import "./page.scss";
import { NavBar } from "./components/nav/NavBar";

export default function Home() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div className={`home container ${navActive ? "overlay" : ""}`}>
      <header>
        <NavBar toggleNav={toggleNav} navActive={navActive} />
      </header>
    </div>
  );
}

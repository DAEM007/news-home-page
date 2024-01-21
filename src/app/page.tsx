"use client";
import { useState } from "react";
import Link from "next/link";
import "./page.scss";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Logo from "../assets/images/logo.svg";
import { menuItems } from "./data";
import { NavItemProps } from "./data";
import { ModalOpen } from "./data";

export default function Home() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div className={`home container ${navActive ? "overlay" : ""}`}>
      <header>
        <nav className={`nav-mobile`}>
          <div className="logo">
            <Image src={Logo} alt="logo-pic" />
          </div>
          <RxHamburgerMenu
            className={`${navActive ? "cross" : "cross-block"}`}
            fontSize={40}
            fontWeight={800}
            onClick={toggleNav}
          />
          {navActive && <Modal toggleNav={toggleNav} navActive={navActive} />}
        </nav>
      </header>
    </div>
  );
}

export const Modal: React.FC<ModalOpen> = ({ toggleNav, navActive }) => {
  return (
    <nav className={`modal ${navActive ? "active" : ""}`}>
      <ul className="nav-links">
        <RxCross2
          className={`cross-active ${navActive ? "cross-block" : "cross"}`}
          fontSize={40}
          fontWeight={800}
          onClick={toggleNav}
        />
        {menuItems.map((item, index) => (
          <NavItem
            key={item.href}
            href={item.href}
            label={item.label}
            // active={index === activeIdx}
            // onClick={() => handleItemClick(index)}
          />
        ))}
      </ul>
    </nav>
  );
};

export const NavItem = ({ href, label, active }: NavItemProps) => {
  // handle active styles later...
  return (
    <div className="nav-link">
      <Link href={href} className={`nav-item ${active ? "active" : ""}`}>
        {label}
      </Link>
    </div>
  );
};

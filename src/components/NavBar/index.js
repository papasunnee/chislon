import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import "./index.css";
import { NavbarBrand, NavItem, NavLink } from "reactstrap";

const Menus = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Latest News", href: "/latest-news" },
  { label: "Contact", href: "/contact" }
];

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-default bg-dark">
      <NavbarBrand href="/">
        <img src="/static/images/whitelogo.png" className="img-fluid" />
      </NavbarBrand>
      <Menu right>
        {Menus.map(({ href, label }, index) => {
          return (
            <NavItem key={index}>
              <Link href={href} passHref>
                <NavLink>{label}</NavLink>
              </Link>
            </NavItem>
          );
        })}
      </Menu>
    </nav>
  );
};

export default Index;

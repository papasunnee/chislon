import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import "./index.css";
import { NavbarBrand, NavItem, NavLink } from "reactstrap";

const Menus = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    submenus: [
      { label: "about 1", href: "/" },
      { label: "about 2", href: "/" },
      { label: "about 3", href: "/" },
      { label: "about 4", href: "/" },
      { label: "about 5", href: "/" },
    ],
  },
  { label: "Citizenship By Investment", href: "/citizenship-by-investment" },
  { label: "Citizenship By Residence", href: "/citizenship-by-residence" },
  { label: "High Networth", href: "/high-networth-investors" },
  { label: "Work Abroad", href: "/work-abroad" },
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Healthcare Abroad", href: "/healthcare-abroad" },
  { label: "International Partners", href: "/international-partner" },
  // { label: "Countries", href: "/country" },
  // { label: "About", href: "/about" },
  // { label: "Services", href: "/services" },
  // { label: "Partners", href: "/partners" },
  // { label: "Latest News", href: "/latest-news" },
  { label: "Contact Us", href: "/contact" },
];

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="navbar navbar-default"
      style={{ backgroundColor: "#002531" }}
    >
      <NavbarBrand href="/">
        <img src="/static/images/whitelogo.png" className="img-fluid" />
      </NavbarBrand>
      <Menu right isOpen={isOpen}>
        {Menus.map(({ href, label, submenus }, index) => {
          return (
            <NavItem key={index}>
              <Link href={href} passHref>
                <NavLink onClick={() => setIsOpen(false)}>
                  {label} {submenus && <Submenus submenus={submenus} />}
                </NavLink>
              </Link>
            </NavItem>
          );
        })}
      </Menu>
    </nav>
  );
};

export default Index;

const Submenus = ({ submenus = [] }) => {
  return (
    <div className="dropdown">
      {submenus.map((submenu, index) => (
        <Link href={submenu.href} passHref key={index}>
          <NavLink>{submenu.label}</NavLink>
        </Link>
      ))}
    </div>
  );
};

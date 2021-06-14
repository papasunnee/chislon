import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import "./index.css";
import { NavbarBrand, NavItem, NavLink } from "reactstrap";

const Menus = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenus: [
      { label: "Student Recruitment", href: "/student-recruitment" },
      { label: "Exam Preps", href: "/exam-preps" },
    ],
  },
  { label: "Partners", href: "/partners" },
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
        <img
          src="/static/images/whitelogo.png"
          className="img-fluid"
          style={{ maxWidth: "200px" }}
        />
      </NavbarBrand>
      <SocialMedia />
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

const SocialMedia = () => {
  return (
    <div>
      <NavItem>
        <NavLink>Whatsapp</NavLink>
      </NavItem>
    </div>
  );
};

const handles = [
  { name: "Whatsapp" },
  { name: "Facebook" },
  { name: "Twitter" },
  { name: "LinkedIn" },
  { name: "Email" },
];

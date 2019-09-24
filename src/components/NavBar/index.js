import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import "./index.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Menus = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Latest News", href: "/latest-news" },
  { label: "Contact", href: "/contact" }
];

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-default bg-dark">
        <NavbarBrand href="/">
          <img src="/static/images/whitelogo.png" className="img-fluid" />
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}

        {/* <Collapse isOpen={isOpen} navbar> */}
        {/* <Nav className="ml-auto" navbar>
        
          <NavItem className="">
            <Link href="/login" passHref>
              <NavLink style={{ color: "#FFDA42" }}>Login</NavLink>
            </Link>
          </NavItem>
        </Nav> */}
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

          {/* <NavItem className="login">
            <Link href="/login" passHref>
              <NavLink style={{ color: "#FFDA42 !important" }}>Login</NavLink>
            </Link>
          </NavItem> */}
        </Menu>
        {/* </Collapse> */}
      </nav>
    </div>
  );
};

export default Index;

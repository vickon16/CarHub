import React, { FC } from "react";
import Container from "../Container";
import Logo from "./Logo";
import NavbarItems from "./NavbarItems";
import NavbarFunctions from "./NavbarFunctions";

interface NavbarProps {}

const Navbar : FC<NavbarProps> = async () => {

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white z-[5] shadow-sm">
      <div className="py-3">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <NavbarItems />
            <NavbarFunctions />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;

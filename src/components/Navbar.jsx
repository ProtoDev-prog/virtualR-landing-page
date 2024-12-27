import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  window.addEventListener("resize", (e) => {
    if (window.innerWidth > 768) {
      setToggleMenu(false);
    }
  });
  return (
    <nav className="sticky top-0 z-10 py-2 px-[2%] flex justify-between items-center border-b border-gray-500 backdrop-blur-lg">
      <div className="left flex items-center gap-2">
        <img src={logo} alt="" width={50} />
        <h1 className="text-2xl max-md:text-xl">
          Virtual<span className="text-themeColor">R</span>
        </h1>
      </div>
      <ul className="flex items-center gap-5 max-md:hidden">
        {navItems.map((ele) => (
          <li>
            <a href={ele.href}>{ele.label}</a>
          </li>
        ))}
      </ul>
      {toggleMenu ? (
        <ul className="top-[110%] left-0 absolute flex flex-col items-center gap-5 backdrop-blur-md w-[100%] p-10">
          {navItems.map((ele) => (
            <li>
              <a href={ele.href}>{ele.label}</a>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="btns flex items-center gap-6 max-md:hidden">
        <button className="btn border border-white">Sign In</button>
        <button className="btn bg-gradient-to-tr from-themeColor to-themeColor2">
          Create Account
        </button>
      </div>
      <button
        className="hidden max-md:block"
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      >
        {toggleMenu ? <X /> : <Menu />}
      </button>
    </nav>
  );
};

export default Navbar;

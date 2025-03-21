import { useState } from "react";
import { NavLink } from "react-router-dom";

import { BsList } from "react-icons/bs";
import { NavDropDown } from "../../molecules";
import { Button } from "../../atom/button";

export const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const isDropDown = () => {
    setDropDown(!dropDown);
  };

  const navList = [
    {
      id: 1,
      navItem: "home",
      link: "/",
    },
    // {
    //   id: 2,
    //   navItem: "about",
    //   link: "/about",
    // },
    {
      id: 3,
      navItem: "awards",
      link: "/awards",
    },
    {
      id: 4,
      navItem: "skills",
      link: "/skills",
    },
    {
      id: 5,
      navItem: "experience",
      link: "/experience",
    },
    {
      id: 6,
      navItem: "project",
      link: "/projects",
    },
    // {
    //   id: 6,
    //   navItem: "interest",
    //   link: "/interest",
    // },
  ];

  const navClass = ({ isActive }) => {
    return isActive
      ? `capitalize  text-black text-white  -slate-100 duration-300 ease-out`
      : ` capitalize font-medium duration-200  hover:text-gray-700 hover:-slate-300 -black hover:text-slate-100 hover:border-slate-100 duration-300 ease-out `;
  };

  const hamNavClass = ({ isActive }) => {
    return isActive
      ? `capitalize rounded-md text-black bg-slate-200 bg-slate-500 text-slate-100 duration-300 ease-out`
      : `capitalize font-medium duration-100 rounded-md hover:text-black bg-white bg-zinc-900 text-slate-200 hover:text-slate-100 duration-300 ease-out`;
  };

  return (
    <header
      className={`w-full flex fixed items-center justify-between md:px-16 px-8 font-semibold bg-zinc-900 duration-300 ease-out text-slate-500  h-[8vh] z-50`}
    >
      <NavLink to="/">
        <figure>
          <figcaption
            className={`text-lg w-[8vw]  font-mono font-bold text-slate-200`}
          >
            luthfiahmdf
          </figcaption>
        </figure>
      </NavLink>
      <nav className="hidden md:block">
        <ul className="flex gap-x-6">
          {navList.map((nav) => (
            <li key={nav.id}>
              <NavLink to={nav.link} className={navClass}>
                {nav.navItem}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      <nav className="block md:hidden">
        <Button
          click={isDropDown}
          className={`flex items-center  rounded-md text-white  hover:bg-slate-500`}
        >
          <BsList />
        </Button>
        <NavDropDown className={`-mx-[40vw] rounded-md`} isDropDown={dropDown}>
          <ul
            className="flex flex-col rounded-md gap-2"
            onMouseLeave={isDropDown}
          >
            {navList.map((nav) => (
              <NavLink to={nav.link} key={nav.id} className={hamNavClass}>
                <li className="w-[45vw] px-4 py-1 rounded-md  hover:bg-slate-500 duration-300 ease-out">
                  {nav.navItem}
                </li>
              </NavLink>
            ))}
          </ul>
        </NavDropDown>
      </nav>
    </header>
  );
};

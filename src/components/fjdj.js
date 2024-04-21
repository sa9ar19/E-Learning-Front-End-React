import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { useState } from "react";

export const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <header>
        <nav
          x-data="{ open: false }"
          className="flex h-auto w-auto bg-white shadow-lg rounded-lg justify-between md:h-16">
          <div className="flex w-full justify-between ">
            <div className="flex px-6 w-1/2 items-center font-semibold md:w-1/5 md:px-1 md:flex md:items-center md:justify-center">
              <Link To="/">
                <img className="w-auto h-16" src={logo} alt=""></img>
              </Link>
            </div>

            <div className="flex flex-col w-full h-auto md:hidden">
              <div className="flex flex-col items-center justify-center gap-2">
                <Link To="/">Home</Link>
                <Link To="">About Us</Link>
                <Link To="courses">Courses</Link>
                <Link To="">Contact</Link>
                <button
                  className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true">
                  Login
                </button>
                <button className="">Sign Up</button>
              </div>
            </div>
            <div
              className="hidden w-3/5 items-center justify-evenly font-semibold
          md:flex">
              <Link to={"/"}>Home</Link>
              <Link To="">About Us</Link>
              <Link to="/courses">Courses</Link>
              <Link To="">Contact</Link>
            </div>
            <div
              className="hidden w-1/5 items-center justify-evenly font-semibold
          md:flex">
              <button
                className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true">
                Login
              </button>
              <button
                className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true">
                Sign Up
              </button>
            </div>
            <button
              className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white md:hidden"
              onClick = {setToggle(!true)} >
              <span className="sr-only">Open main menu</span>
              <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out">..</span>
                <span
                  aria-hidden="true"
                  className="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out">..</span>
                <span
                  aria-hidden="true"
                  className="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out">..</span>
              </div>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

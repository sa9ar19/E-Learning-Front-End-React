"use client";

import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import logo from "../Assets/logo.png";

export const Header = () => {
  return (
    <Navbar fluid rounded >
      <Navbar.Brand as={Link} href="">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-2xl" active>Home</Navbar.Link>
        <Navbar.Link href="/courses" className="text-2xl">Courses</Navbar.Link>
        <Navbar.Link href="#" className="text-2xl">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="text-2xl">Contact</Navbar.Link>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

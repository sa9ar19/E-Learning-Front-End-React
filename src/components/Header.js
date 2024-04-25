"use client";

import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import logo from "../Assets/logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <Navbar fluid rounded className="mt-4">
      <Navbar.Brand as={Link} href="">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-2xl">
          Home
        </Navbar.Link>
        <Navbar.Link href="/aboutUs" className="text-2xl">
          About Us
        </Navbar.Link>
        <Navbar.Link href="/courses" className="text-2xl">
          Courses
        </Navbar.Link>
        <Navbar.Link href="/contact" className="text-2xl">
          Contact
        </Navbar.Link>

        <Navbar.Brand as={Link} to="/cart" className="mr-4">
          <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
        </Navbar.Brand>

        <Link to="/login">
          <button
            className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true">
            Login
          </button>
        </Link>
        <Link to="signup">
          <button
            className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true">
            Sign Up
          </button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

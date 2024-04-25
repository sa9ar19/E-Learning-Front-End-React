import React from "react";
import courseImg from "../Assets/Course-1.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export const Card = ({ course }) => {


  const handleCartAdd = () => {

    Cookies.set("cartItem", JSON.stringify(course));
    console.log("Course added to cart:", course);
  }
  return (
    <div className="relative">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <Link to={`/courseInfo/${course.name}`} state={course}>
            <div className="relative">
              <img
                className="rounded-t-lg p-8 h-40 w-auto"
                src={course.img}
                alt="product image"></img>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100">
                <p className="text-white font-semibold text-lg">View more</p>
              </div>
            </div>
          </Link>
          <div className="px-5 pb-5">
            
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                {course.name}
              </h3>
              <h2 className="text-gray-900 font-semibold text-l tracking-tight dark:text-white">
                {course.instructorName}
              </h2>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {course.pricing}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={handleCartAdd}
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                Add to cart
              </button>
              <Link to="/cart">
                <button className="rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// BottomBar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const location = useLocation();
  return (
    <div className=" bg-secondary backdrop-blur-md text-black">
      <div className="container mx-auto px-6 py-1  flex items-center md:gap-6 sm:gap-1  ">
        <Link
          to="/"
          className={`flexCenter rounded-full px-3 py-1  ${
            location.pathname === "/" ? " bg-white text-black" : ""
          }`}
          title="Home"
        >
          Home
        </Link>

        <div className="flex  flex-1 item-center justify-between ">
          <div className=" flexCenter  md:gap-4 sm:gap-0.5">
            <Link
              to="/products"
              className={`flexCenter rounded-full md:px-3 sm:px-1.5 py-1 ${
                location.pathname === "/products" ? " bg-white text-black" : ""
              }`}
              title="Categories"
            >
              Categories
            </Link>
            <Link
              to="/offers"
              className={`flexCenter rounded-full md:px-3 sm:px-1.5 py-1 ${
                location.pathname === "/offers" ? "bg-white text-black" : ""
              }`}
              title="Offers"
            >
              Offers
            </Link>
            <Link
              to="/contact"
              className={`flexCenter rounded-full md:px-3 sm:px-1.5 py-1 ${
                location.pathname === "/contact" ? "bg-white text-black" : ""
              }`}
              title="Contact"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className={`flexCenter rounded-full md:px-3 sm:px-1.5 py-1 ${
                location.pathname === "/about" ? "bg-white text-black" : ""
              }`}
              title="Abouts"
            >
              About
            </Link>
          </div>
          <div className="text-sm flexCenter sm:hidden md:flex">
            Need help ?{" "}
            <span className="text-hightlight ml-2">
              <a href="mailto:support@kaptai.com">support@kaptai.com</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar px-5 bg-gray-500 text-white font-serif">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu bg-gray-500 text-white menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            <li>
              <Link>Media</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">Message</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl font-mono bg-blue-500 hover:bg-blue-500">
          Communicate
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link>Media</Link>
          </li>
          <li tabIndex={0}>
            <Link>Message</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn hover:bg-blue-500 bg-blue-500 border-0 text-white">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav>
        <div className="flex justify-between items-center mx-auto max-w-7xl">
          {/* LEFT → Logo */}
          <Link to="/" className="flex items-center">
            <img src="file:///Users/vedanttiwari/Downloads/c1927983-912d-4c7f-b2c5-e852e0f47091.png" alt="Logo" className="mr-3 h-12" />
          </Link>

          {/* CENTER → Nav Links */}
          <ul className="flex space-x-10 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/game"
                className={({ isActive }) =>
                  `duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } hover:text-orange-700`
                }
              >
                FlagGame
              </NavLink>
            </li>
          </ul>

          {/* RIGHT → Login */}
          <div className="flex items-center gap-2">
            <Link
              to="#"
              className="text-gray-800 font-medium rounded-lg hover:bg-gray-50 px-4 py-2.5 hover:text-orange-700"
            >
              Log In
            </Link>

            <Link
              to="#"
              className="text-gray-800 font-medium rounded-lg hover:bg-gray-50 px-4 py-2.5  hover:text-orange-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

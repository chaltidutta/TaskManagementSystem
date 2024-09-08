import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // State to manage the visibility of the mobile navigation menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open or close the mobile navigation menu
  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  // Array of navbar links with their paths and labels
  const navLinks = [
    { path: "/", label: "Home", id: 1 },
    { path: "/", label: "Assign Task", id: 2 },
    { path: "/", label: "Complete Task", id: 3 },
    { path: "/login", label: "Login", id: 4 },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      {/* Navbar container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand name/logo */}
        <Link to="/">
          <h1 className="text-white text-xl md:text-2xl font-bold">
            Task Manager
          </h1>
        </Link>

        {/* Desktop Navigation: Hidden on small screens and displayed on medium+ screens */}
        <ul className="text-white hidden md:flex md:space-x-6">
          {navLinks.map((link) => (
            <li key={link.id} className="block py-2 md:py-0">
              <Link to={link.path} className="hover:text-yellow-500">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon (hamburger icon) */}
        <div className="block md:hidden">
          <button onClick={handleNav} className="text-white">
            {/* Hamburger icon for opening/closing mobile menu */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu (displayed when the state isOpen is true) */}
        <div className="fixed md:hidden">
          {/* Overlay to close the menu when clicked outside */}
          <div
            className={
              isOpen
                ? "fixed md:hidden left-0 top-0 w-[100%] h-full ease-in-out duration-500"
                : "ease-in-out w-[100%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
            onClick={handleNav}
          ></div>
          {/* Sliding navigation menu for mobile */}
          <div
            className={
              isOpen
                ? "fixed md:hidden left-0 top-0 w-[50%] max-sm:w-[60%] h-full bg-gray-800 ease-in-out duration-500"
                : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            {/* Brand name/logo in mobile view */}
            <Link to="/">
              <h1 className="text-white text-xl md:text-2xl font-bold p-4">
                Task Manager
              </h1>
            </Link>
            {/* Mobile navigation links */}
            <ul className="text-white">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="border-b hover:bg-yellow-500 duration-300 hover:text-black cursor-pointer border-gray-600 my-2"
                >
                  {/* Close the menu when a link is clicked */}
                  <Link
                    to={link.path}
                    className="p-4 block"
                    onClick={handleNav}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { FaSun, FaMoon, FaBars } from "react-icons/fa"; // Import FaBars for the menu icon

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className="bg-[#f4efe3] dark:bg-gray-800 p-3 relative">
      <div className="container mx-auto flex justify-between items-center xl:justify-start">
        <div className="flex items-center xl:mr-auto">
          <Link href="/" className="flex items-center">
            <Image src="/logo6.png" alt="Logo" width={170} height={50} />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 ml-auto">
          <NavItem href="/" text="Home" onClick={handleCloseSidebar} />
          <NavItem
            href="/products"
            text="Products"
            onClick={handleCloseSidebar}
          />
          <NavItem
            href="/our-story"
            text="Our Story"
            onClick={handleCloseSidebar}
          />
          <NavItem
            href="/contact"
            text="Contact Us"
            onClick={handleCloseSidebar}
          />
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-600 text-black dark:text-white p-2 rounded"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button> */}
        </div>
        <div className="md:hidden ml-4 flex items-center space-x-4">
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-600 text-black dark:text-white p-2 rounded"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button> */}
          <button
            className="bg-gray-200 dark:bg-gray-600 text-black dark:text-white p-2 rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 z-40" onClick={handleCloseSidebar}>
          <div
            className="fixed top-0 right-0 h-full w-1/2 bg-white dark:bg-gray-800 z-50 p-6 transform transition-transform duration-300"
            style={{
              transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4">
              <NavItemMobile
                href="/"
                text="Home"
                onClick={handleCloseSidebar}
              />
              <NavItemMobile
                href="/products"
                text="Products"
                onClick={handleCloseSidebar}
              />
              <NavItemMobile
                href="/our-story"
                text="Our Story"
                onClick={handleCloseSidebar}
              />
              <NavItemMobile
                href="/contact"
                text="Contact Us"
                onClick={handleCloseSidebar}
              />
              {/* <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-gray-200 dark:bg-gray-600 text-black dark:text-white p-2 rounded"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ href, text, onClick }) => (
  <Link
    href={href}
    className="text-black dark:text-white hover:text-gray-700 dark:hover:text-white font-semibold"
    onClick={onClick}
  >
    {text}
  </Link>
);

const NavItemMobile = ({ href, text, onClick }) => (
  <Link
    href={href}
    className="block px-4 py-2 text-black dark:text-white hover:text-gray-700 dark:hover:text-white font-semibold"
    onClick={onClick}
  >
    {text}
  </Link>
);

export default Navbar;

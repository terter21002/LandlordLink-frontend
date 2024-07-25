import React from "react";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaSignOutAlt } from "react-icons/fa";
import { classNames } from "../../libs/utils.lib";
import { useAuth } from "../../AuthContext";

const Navigation: React.FC = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const adminEmail = "l3Admin@email.com";

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="company.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-4 py-2 text-sm font-medium"
                        )
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/news"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-4 py-2 text-sm font-medium"
                        )
                      }
                    >
                      News
                    </NavLink>
                    {user?.email === adminEmail && (
                      <NavLink
                        to="/category"
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-4 py-2 text-sm font-medium"
                          )
                        }
                      >
                        Category
                      </NavLink>
                    )}
                    <NavLink
                      to="/blogs"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-4 py-2 text-sm font-medium"
                        )
                      }
                    >
                      Blogs
                    </NavLink>
                    <NavLink
                      to="/forums"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-4 py-2 text-sm font-medium"
                        )
                      }
                    >
                      Forum
                    </NavLink>
                    <NavLink
                      to="/portal"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-4 py-2 text-sm font-medium"
                        )
                      }
                    >
                      Landlord Portal
                    </NavLink>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-4 py-2 text-sm font-medium"
                        )
                      }
                    >
                      Services
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-4 py-2 text-sm font-medium"
                        )
                      }
                    >
                      Contact Us
                    </NavLink>
                  </div>
                </div>
              </div>
              {isLoggedIn && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={logout}
                  >
                    <FaSignOutAlt className="h-5 w-5" aria-hidden="true" />
                    <span className="ml-2">Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
              <NavLink
                to="/"
                className={({ isActive, isPending }) => {
                  return classNames(
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  );
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/news"
                className={({ isActive, isPending }) => {
                  return classNames(
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  );
                }}
              >
                News
              </NavLink>
              {user?.email === adminEmail && (
                <NavLink
                  to="/category"
                  className={({ isActive, isPending }) => {
                    return classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    );
                  }}
                >
                  Category
                </NavLink>
              )}
              <NavLink
                to="/blogs"
                className={({ isActive, isPending }) => {
                  return classNames(
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  );
                }}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/forums"
                className={({ isActive, isPending }) => {
                  return classNames(
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  );
                }}
              >
                Forum
              </NavLink>
              <NavLink
                to="/portal"
                className={({ isActive, isPending }) => {
                  return classNames(
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  );
                }}
              >
                Landlord Portal
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive, isPending }) => {
                  return classNames(
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  );
                }}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) => {
                  return classNames(
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  );
                }}
              >
                Contact Us
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;

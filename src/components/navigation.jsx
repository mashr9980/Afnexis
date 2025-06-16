"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Navigation() {
  const router = useRouter();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //   FOR DESKTOP MENU
  const dropdownRef = useRef(null);

  //  For Mobile MENU
  const mobileMenuRef = useRef(null);

  const pathname = usePathname();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const services = [{ name: "Portfolio", href: "/services/portfolio" }];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "VaultMind", href: "/vaultmind" },
    // { name: "Services", href: "#", subItems: services },
    { name: "About Us ", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false);
  };

  const handleLinkClick = (href) => {
    router.push(href); // Navigate without a full reload
    setIsServicesOpen(false); // Close the dropdown
  };

  const NavLink = ({ item }) => (
    <div className="relative group " ref={dropdownRef}>
      {item.subItems ? (
        <>
          <button
            className="flex items-center space-x-1 text-gray-300 hover:text-primary transition-colors"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            <span className="text-[13px]">{item.name}</span>
            <ChevronDown
              className={`h-4 w-4 transform transition-transform ${
                isServicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-background-black/90 backdrop-blur-sm "
              >
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {item.subItems.map((subItem, i) => (
                    <Link
                      key={i}
                      href={subItem?.href}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        handleLinkClick(subItem.href); // Use Next.js router for navigation
                      }}
                      className="block px-4 z-50 py-3 text-[13px] text-gray-300 hover:text-primary transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Link
          href={item.href}
          onClick={() => handleLinkClick(item.href)}
          className={`relative text-[13px] text-gray-300 hover:text-primary transition-colors ${
            pathname === item.href ? "text-primary" : ""
          }`}
        >
          {item.name}
          {pathname === item.href && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4">
              <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground"></div>
            </div>
          )}
        </Link>
      )}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-black/80 backdrop-blur-sm h-[80px]  ">
      <div className="max-w-full mx-auto px-4 ">
        <div className="flex items-center justify-between sm:justify-start h-20">
          <div className="flex-shrink-0">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Afnexis Logo" 
                className="h-16 w-auto hover:scale-[1.1] transition-transform duration-500"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none "
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
            ref={mobileMenuRef}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-foreground/80 backdrop-blur-sm sm:px-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <>
                      <button
                        className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary  focus:outline-none focus:text-white "
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                      >
                        {item.name}
                        <ChevronDown
                          className={`float-right h-5 w-5 transform transition-transform ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1"
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary "
                                onClick={() => {
                                  setIsServicesOpen(false);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname === item.href
                          ? "text-white "
                          : "text-gray-300 hover:text-primary "
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

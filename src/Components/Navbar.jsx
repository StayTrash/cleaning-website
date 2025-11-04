"use client";
import React, { useState, useRef, useEffect } from "react";
import Logo from "@/Components/Icons/Logo";
import PrimaryButton from "@/Components/PrimaryButton";
import { useNavigateToSection } from "@/utils/navigation";
import Star from "./Icons/Star";

import DropdownArrowIcon from "./Icons/DropdownArrowIcon";
import MobileMenuIcon from "./Icons/MobileMenuIcon";

const Navbar = () => {
  const navigateToSection = useNavigateToSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const navbarRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset services dropdown when closing mobile menu
    if (isMobileMenuOpen) {
      setIsMobileServicesOpen(false);
    }
  };

  const handleHomeClick = () => {
    // Just scroll to top - we're on landing page only
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = () => {
    // Just scroll to services section - no routing needed for landing page
    navigateToSection("services-section");
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileMenuOpen(false);
  };



  // Click outside detection for mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav ref={navbarRef} className="fixed top-0 left-0 right-0 z-50  w-full">
      <div className="max-w-[1074px] mx-auto pt-[2.3rem] px-4">
        <div className="bg-[#FAFFFA] border border-[#B5DDC2] rounded-full px-7 py-1.5 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <div
              onClick={handleHomeClick}
              className="w-24 h-10 flex items-center cursor-pointer"
            >
              <Logo />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              onClick={handleHomeClick}
              className="text-[#00603A] flex items-center gap-0 font-work-sans cursor-pointer text-lg font-normal hover:text-primary transition-all duration-300 group relative "
            >
              <div className="flex items-center">
                <Star
                  size={16}
                  color="#01502E"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                />
                <span className="transition-all duration-300 transform group-hover:translate-x-2">
                  Home
                </span>
              </div>
            </a>
            <a
              onClick={() => navigateToSection("our-story")}
              className="text-[#00603A] flex items-center gap-0 font-work-sans cursor-pointer text-lg font-normal hover:text-primary transition-all duration-300 group relative "
            >
              <div className="flex items-center">
                <Star
                  size={16}
                  color="#01502E"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                />
                <span className="transition-all duration-300 transform group-hover:translate-x-2">
                  About
                </span>
              </div>
            </a>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <a
                onClick={() => navigateToSection("services-section")}
                className="text-[#00603A] flex items-center gap-0 font-work-sans cursor-pointer text-lg font-normal hover:text-primary transition-all duration-300 group relative "
              >
                <div className="flex items-center">
                  <Star
                    size={16}
                    color="#01502E"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                  />
                  <span className="transition-all duration-300 transform group-hover:translate-x-2">
                    Services
                  </span>
                </div>
              </a>

              {/* Services Dropdown - Removed for landing page only */}
              {isServicesDropdownOpen && (
                <div className="">
                  <div className="h-2"></div>
                  <div className="absolute top-full left-0 z-50 w-80 bg-[#FAFFFA] border border-[#B5DDC2] rounded-2xl shadow-lg py-4 px-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    <div
                      onClick={handleServiceClick}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer hover:bg-[#E1F1E7] transition-all duration-200 group"
                    >
                      <div className="flex-1">
                        <h3 className="text-[#00603A] font-semibold text-sm group-hover:text-primary transition-colors duration-200">
                          View All Services
                        </h3>
                        <p className="text-[#00603A]/70 text-xs mt-1">
                          Explore our complete range of cleaning services
                        </p>
                      </div>
                      <Star
                        size={14}
                        color="#01502E"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Us Button - Desktop Only */}
          <div
            // onClick={() => scrollToSection("contact-us")}
            className="hidden md:!block md:flex items-center"
          >
            <a>
              <div onClick={() => navigateToSection("contact-us")}>
                <PrimaryButton
                  variant="secondary"
                  href="#contact-us"
                  className="cursor-pointer"
                >
                  Contact Us
                </PrimaryButton>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#00603A] p-2 transition-transform duration-200"
              aria-label="Toggle mobile menu"
            >
            <MobileMenuIcon
              isOpen={isMobileMenuOpen}
              color="#00603A"
              className="w-6 h-6"
            />
            </button>
          </div>
        </div>

        {/* Mobile Menu - Only shows when hamburger is clicked */}
        {isMobileMenuOpen && (
          <div className="w-full flex justify-end mt-4 pr-4">
            <div className="md:hidden w-[14rem]  bg-[#FAFFFA] rounded-2xl p-4 py-6 space-y-1 animate-in slide-in-from-top-2 duration-200">
              <a
                onClick={() => {
                  handleHomeClick();
                  setIsMobileMenuOpen(false);
                }}
                className="block text-[#00603A] flex items-center gap-0 font-work-sans cursor-pointer text-lg font-normal py-2 hover:text-primary transition-all duration-300 group relative "
              >
                <div className="flex items-center">
                  <Star
                    size={16}
                    color="#01502E"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                  />
                  <span className="transition-all duration-300 transform group-hover:translate-x-2">
                    Home
                  </span>
                </div>
              </a>
              <a
                onClick={() => {
                  navigateToSection("our-story");
                  setIsMobileMenuOpen(false);
                }}
                className="block text-[#00603A] flex items-center gap-0 font-work-sans cursor-pointer text-lg font-normal py-2 hover:text-primary transition-all duration-300 group relative "
              >
                <div className="flex items-center">
                  <Star
                    size={16}
                    color="#01502E"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                  />
                  <span className="transition-all duration-300 transform group-hover:translate-x-2">
                    About
                  </span>
                </div>
              </a>
              <div>
                <a
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="block text-[#00603A] flex items-center gap-0 font-work-sans cursor-pointer text-lg font-normal py-2 hover:text-primary transition-all duration-300 group relative "
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <Star
                        size={16}
                        color="#01502E"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                      />
                      <span className="transition-all duration-300 transform group-hover:translate-x-2">
                        Services
                      </span>
                    </div>
                    <div>
                      <DropdownArrowIcon
                        className={`w-5 h-5 transform transition-transform duration-300 ease-in-out ${
                          isMobileServicesOpen ? "rotate-90" : ""
                        }`}
                        color="#00603A"
                      />
                    </div>
                  </div>
                </a>

                {/* Mobile Services Submenu */}
                {isMobileServicesOpen && (
                  <div className="ml-6 mt-2 space-y-2 animate-in slide-in-from-top-2 duration-200">
                    <div
                      onClick={handleServiceClick}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-[#E1F1E7] transition-all duration-200 border border-[#B5DDC2]"
                    >
                      <div>
                        <p className="text-[#00603A] font-medium text-sm">View All Services</p>
                        <p className="text-[#00603A]/60 text-xs">See our complete service overview</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* <div className="pt-4">
              <div
                onClick={() => {
                  navigateToSection("contact-us");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 transition-all duration-200"
              >
                <PrimaryButton
                  variant="secondary"
                  className="cursor-pointer w-full"
                >
                  Contact Us
                </PrimaryButton>
              </div>
            </div> */}
              <a
                onClick={() => {
                  navigateToSection("contact-us");
                  setIsMobileMenuOpen(false);
                }}
                className="block text-[#00603A] flex items-center gap-0 font-work-sans cursor-pointer text-lg font-normal py-2 hover:text-primary transition-all duration-300 group relative "
              >
                <div className="flex items-center">
                  <Star
                    size={16}
                    color="#01502E"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                  />
                  <span className="transition-all duration-300 transform group-hover:translate-x-2">
                    Contact Us
                  </span>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

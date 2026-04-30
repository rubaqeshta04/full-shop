import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 mt-12 border-t-4 border-(--main_color)">
      <div className="container mx-auto px-4 md:px-8 max-w-[1350px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-3xl font-bold font-['Rubik'] tracking-wide"
            >
              NEXORA
            </Link>
            <p className="text-gray-200 text-sm leading-relaxed mt-2">
              Discover a wide range of products tailored to your needs. Shop
              with confidence, knowing you're getting the best quality at the
              most competitive prices.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-(--main_color) hover:text-white transition-all duration-300 text-gray-200"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-(--main_color) hover:text-white transition-all duration-300 text-gray-200"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-(--main_color) hover:text-white transition-all duration-300 text-gray-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-(--main_color) hover:text-white transition-all duration-300 text-gray-200"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold font-['Rubik'] mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-(--main_color) after:rounded-full text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-200 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-xs text-(--main_color)">➔</span> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-200 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-xs text-(--main_color)">➔</span> About
                  Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-200 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-xs text-(--main_color)">➔</span> Our
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/accessories"
                  className="text-gray-200 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-xs text-(--main_color)">➔</span>{" "}
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="text-gray-200 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-xs text-(--main_color)">➔</span> Contact
                  Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold font-['Rubik'] mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-(--main_color) after:rounded-full text-white">
              Customer Service
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="#"
                  className="text-gray-200 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-xs text-(--main_color)">➔</span> Help &
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-200 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-xs text-(--main_color)">➔</span> Return
                  Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-200 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-xs text-(--main_color)">➔</span>{" "}
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-200 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-xs text-(--main_color)">➔</span> Privacy
                  Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-200 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-xs text-(--main_color)">➔</span> Terms &
                  Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold font-['Rubik'] mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-(--main_color) after:rounded-full text-white">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <LocationOnIcon
                  className="text-(--main_color) mt-0.5"
                  fontSize="small"
                />
                <span className="text-gray-200 text-sm leading-relaxed">
                  123 Commerce Street, Shop City,
                  <br /> NY 10001, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="text-(--main_color)" fontSize="small" />
                <span className="text-gray-200 text-sm">+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon className="text-(--main_color)" fontSize="small" />
                <span className="text-gray-200 text-sm">
                  support@ecommerce.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-gray-300">
            &copy; {currentYear} Roxana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

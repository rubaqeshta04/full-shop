import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { api } from "../../api/api";

// MUI Icons
import Container from "@mui/material/Container";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SettingsInputComponentOutlinedIcon from "@mui/icons-material/SettingsInputComponentOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const NavLinks = [
  {
    title: "Home",
    path: "/",
    id: 1,
    icon: <HomeOutlinedIcon fontSize="small" />,
  },
  {
    title: "About",
    path: "/about",
    id: 2,
    icon: <InfoOutlinedIcon fontSize="small" />,
  },
  {
    title: "Accessories",
    path: "/accessories",
    id: 3,
    icon: <SettingsInputComponentOutlinedIcon fontSize="small" />,
  },
  {
    title: "Blog",
    path: "/blog",
    id: 4,
    icon: <ArticleOutlinedIcon fontSize="small" />,
  },
  {
    title: "Contact",
    path: "/contact",
    id: 5,
    icon: <PhoneOutlinedIcon fontSize="small" />,
  },
];

export default function BottomHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef();
  let timeoutId = useRef(null);

  useEffect(() => {
    api
      .get("products/categories")
      .then((response) => setCategories(response.data));
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(timeoutId.current);
      setIsCategoriesOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      timeoutId.current = setTimeout(() => {
        setIsCategoriesOpen(false);
      }, 300);
    }
  };

  return (
    <div className="bg-[var(--main_color)] text-white relative">
      <Container
        maxWidth="xl"
        className="py-2 md:py-3 flex flex-row justify-between items-center w-full gap-4"
      >
        <div
          className="relative flex items-center gap-2 cursor-pointer group text-white shrink-0"
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdownRef}
        >
          <span className="text-sm md:text-xl !text-white font-medium whitespace-nowrap">
            Browse Category
          </span>

          <ArrowDropDownSharpIcon className="text-white! hidden sm:block" />

          <div
            className={`absolute top-full left-0 mt-2 w-64 bg-white text-black flex-col shadow-2xl rounded-md z-[100] max-h-80 overflow-y-auto py-2 transition-all ${
              isCategoriesOpen
                ? "flex opacity-100 visible"
                : "hidden opacity-0 invisible"
            }`}
          >
            {categories.map((item, index) => (
              <Link
                to={`/category/${item.slug}`}
                key={item.id || item.slug || index}
                className="px-4 py-2 hover:bg-gray-100 transition-colors text-sm capitalize"
                onClick={() => setIsCategoriesOpen(false)}
              >
                {item.title || item.name || item}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden lg:flex items-center gap-4 text-white text-md">
            {NavLinks.map((link, index) => (
              <li
                key={index}
                className={`list-none px-3 py-1 rounded-md ${
                  location.pathname === link.path
                    ? "bg-white/20 text-white"
                    : ""
                }`}
              >
                <Link
                  to={link.path}
                  key={index || link.id || link.slug}
                  className="hover:text-gray-200 text-sm font-medium"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              to="/signin"
              aria-label="Sign in"
              className="hidden md:inline-flex text-white"
            >
              <LoginSharpIcon />
            </Link>
            <Link
              to="/signup"
              aria-label="Sign up"
              className="hidden md:inline-flex text-white"
            >
              <PersonAddAltSharpIcon />
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-1.5 text-white transition-all hover:bg-white/10 md:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <MenuSharpIcon />
            </button>
          </div>
        </div>
      </Container>

      <div
        className={`md:hidden absolute top-full left-0 w-full z-50 bg-(--main_color) border-t border-white/10 transition-all duration-300 shadow-xl overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 visible pb-6"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-4 pt-5 space-y-2">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-white transition-all duration-200 active:scale-[0.98] ${
                location.pathname === link.path
                  ? "bg-white/20 shadow-inner"
                  : "hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          <div className="pt-6 pb-2 border-t border-white/10 mt-6 space-y-3">
            <Link
              to="/signin"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-4 py-4 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LoginSharpIcon fontSize="small" />
              Sign in
            </Link>
            <Link
              to="/signup"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--main_color)] px-4 py-4 text-sm font-bold text-white shadow-lg transition-all active:scale-[0.98] hover:bg-[var(--main_color)]/90 border border-transparent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <PersonAddAltSharpIcon fontSize="small" />
              Sign Up For Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

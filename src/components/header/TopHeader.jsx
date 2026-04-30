import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.webp";
import SearchBox from "./SearchBox";

// MUI
import Container from "@mui/material/Container";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartContext } from "../context/CartContext";

export default function TopHeader() {
  const { cartItems, favorites } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Container className="pt-3 pb-3 md:py-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Row 1: Logo and Actions on mobile */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* logo */}
          <div className="max-w-[120px] md:max-w-[200px] shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-auto max-h-[70px] md:max-h-[90px] object-contain block"
              />
            </Link>
          </div>

          {/* Actions (Cart + Favorite) for Mobile */}
          <div className="flex md:hidden items-center gap-4">
                      <Link to="/favorites" aria-label="View favorites" className="relative cursor-pointer">
              <FavoriteBorderOutlinedIcon className="text-[28px] text-gray-700" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full h-[16px] w-[16px] flex items-center justify-center font-bold">
                {favorites.length}
              </span>
            </Link>
            <Link to="/cart" aria-label="View shopping cart" className="relative cursor-pointer">
              <ShoppingCartOutlinedIcon className="text-[28px] text-gray-700" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full h-[16px] w-[16px] flex items-center justify-center font-bold">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>

        {/* Search */}
        <div className="w-full max-w-2xl order-3 md:order-2">
          <SearchBox />
        </div>

        {/* Actions (Cart + Favorite) for Desktop */}
        <div className="hidden md:flex items-center gap-6 order-2 md:order-3">
                    <Link
            to="/favorites"
            aria-label="View favorites"
            className="relative cursor-pointer hover:scale-110 transition-transform"
          >
            <FavoriteBorderOutlinedIcon className="text-[32px] text-gray-700 hover:text-(--main_color)" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full h-[18px] w-[18px] flex items-center justify-center font-bold shadow-sm">
              {favorites.length}
            </span>
          </Link>
          <Link
            to="/cart"
            aria-label="View shopping cart"
            className="relative cursor-pointer hover:scale-110 transition-transform"
          >
            <ShoppingCartOutlinedIcon className="text-[32px] text-gray-700 hover:text-(--main_color)" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full h-[18px] w-[18px] flex items-center justify-center font-bold shadow-sm">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </div>
    </Container>
  );
}

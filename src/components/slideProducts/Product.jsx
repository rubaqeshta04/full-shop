import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

// MUI
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import CheckIcon from "@mui/icons-material/Check";

function Product({ item }) {
  const {
    cartItems = [],
    addToCart = () => { },
    removeFromCart = () => { },
    favorites = [],
    addToFavorites = () => { },
    removeFromFavorites = () => { },
    showSnackbar,
  } = useContext(CartContext) ?? {};

  if (!item) {
    return null;
  }

  const isInCart = cartItems.some((i) => i?.id === item.id);
  const isInFavorites = favorites.some((i) => i?.id === item.id);

  const handleCartToggle = () => {
    if (isInCart) {
      removeFromCart(item.id);
      return;
    }
    addToCart(item);
  };

  const handleAddToFavorites = () => {
    if (isInFavorites) {
      removeFromFavorites(item.id);
      showSnackbar({
        message: `${item.title} removed from favorites`,
        actionLabel: "Undo",
        onAction: () => addToFavorites(item),
      });
      return;
    }
    addToFavorites(item);
    showSnackbar({
      message: `${item.title} added to favorites`,
    });
  };
  return (
    <div
      className={`${
        isInCart ? "border-(--main_color)" : ""
      } w-full group bg-(--surface_color) overflow-hidden relative py-1 px-1 md:py-5 md:px-4 border border-solid border-(--border_color) transition duration-300 hover:border-(--main_color) hover:shadow-lg rounded-lg shadow-sm`}
    >
      <Link to={`/products/${item.id}`} className="block relative">
        <span
          className={`${
            isInCart
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3 pointer-events-none"
          } absolute top-0 left-0 z-10 flex items-center justify-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-br-md border-b border-r border-gray-100 transition-all duration-500 ease-out`}
        >
          <CheckIcon className="text-green-700 !text-xs" />
          <span className="text-[10px] font-bold text-green-700">In Cart</span>
        </span>

        <div className="relative flex justify-center items-center overflow-hidden rounded-md bg-gray-50/50 h-[80px] md:h-[150px] w-full mt-0 mb-1">
          <img
            src={item.images[0]}
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
            alt={item.title}
            loading="lazy"
            width="150"
            height="150"
          />
        </div>

        <p className="text-(--color_heading) font-semibold w-full overflow-hidden text-ellipsis whitespace-nowrap mb-1 text-sm md:text-base">
          {item.title}
        </p>

        <div className="flex gap-1 text-[#f8d941] my-1 text-[10px] md:text-sm">
          <StarIcon fontSize="inherit" />
          <StarIcon fontSize="inherit" />
          <StarIcon fontSize="inherit" />
          <StarIcon fontSize="inherit" />
          <StarHalfIcon fontSize="inherit" />
        </div>

        <p className="font-bold text-base md:text-xl text-green-800">$ {item.price}</p>
      </Link>

      {/* icons */}
      <div className="gap-1.5 md:gap-2 absolute top-1/2 -translate-y-1/2 flex flex-col right-1 md:right-2 opacity-100 translate-x-0 md:opacity-0 md:translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-20">
        <span
          role="button"
          aria-label={isInCart ? "Remove from cart" : "Add to cart"}
          onClick={handleCartToggle}
          className={`w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full transition
              ${isInCart
              ? "bg-(--main_color) text-white opacity-80 cursor-pointer"
              : "bg-(--bg_color) cursor-pointer hover:bg-(--main_color) hover:text-white"
            }`}
        >
          <ShoppingCartOutlinedIcon className="scale-75 md:scale-100" />
        </span>

        <span
          role="button"
          aria-label={isInFavorites ? "Remove from favorites" : "Add to favorites"}
          className={`w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full transition
              ${isInFavorites
              ? "bg-(--main_color) text-white opacity-80 cursor-pointer"
              : "bg-(--bg_color) cursor-pointer hover:bg-(--main_color) hover:text-white"
            }`}
          onClick={handleAddToFavorites}
        >
          <FavoriteBorderOutlinedIcon className="scale-75 md:scale-100" />
        </span>

        <span
          role="button"
          aria-label="Share product"
          className="w-7 h-7 md:w-10 md:h-10 bg-(--bg_color) flex items-center justify-center rounded-full cursor-pointer hover:bg-(--main_color) hover:text-white transition"
        >
          <ReplyRoundedIcon className="scale-75 md:scale-100" />
        </span>
      </div>
    </div>
  );
}

export default Product;


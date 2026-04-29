import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";

// MUI
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";

export default function ProductInfo({ product }) {
  const {
    cartItems = [],
    addToCart = () => {},
    removeFromCart = () => {},
    favorites = [],
    addToFavorites = () => {},
    removeFromFavorites = () => {},
    showSnackbar,
  } = useContext(CartContext) ?? {};
  const isInCart = cartItems.some((i) => i.id === product.id);
  const isInFavorites = favorites.some((i) => i?.id === product.id);

  const handleAddToFavorites = () => {
    if (isInFavorites) {
      removeFromFavorites(product.id);
      showSnackbar({
        message: `${product.title} removed from favorites`,
        actionLabel: "Undo",
        onAction: () => addToFavorites(product),
      });
      return;
    }
    addToFavorites(product);
    showSnackbar({
      message: `${product.title} added to favorites`,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        {product.title}
      </h1>

      {/* stars */}
      <div className="flex items-center gap-1 text-yellow-400">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarHalfIcon />
        <span className="text-gray-500 text-sm ml-2">(4.5)</span>
      </div>

      {/* price */}
      <p className="text-2xl font-semibold text-green-600">${product.price}</p>

      {/* state */}
      <div className="text-sm text-gray-600 space-y-1">
        <p>
          Availability:
          <span className="ml-2 font-medium text-green-500">
            {product.availabilityStatus}
          </span>
        </p>

        <p>
          Brand:
          <span className="ml-2 font-medium text-gray-800">
            {product.brand}
          </span>
        </p>
      </div>

      {/* description */}
      <p className="text-gray-600 leading-relaxed">{product.description}</p>

      <p className="text-red-500 font-medium">
        Hurry Up! Only {product.stock} left in stock.
      </p>

      <button
        onClick={() => {
          if (!isInCart) {
            addToCart(product);
          }
        }}
        disabled={isInCart}
        className={`btn w-full md:w-max transition-all duration-300 ${
          isInCart
            ? "opacity-70 cursor-not-allowed !bg-green-600 !text-white"
            : "hover:scale-[1.02] active:scale-95"
        }`}
      >
        {isInCart ? "In Cart" : "Add to Cart"}
        <ShoppingCartOutlinedIcon className="text-xl" />
      </button>

      <div className="flex gap-3 mt-2">
        <span
          title="Add to Favorites"
          className={`w-11 h-11 flex items-center justify-center rounded-full shadow-sm border border-solid border-(--border_color) transition-all duration-300
              ${
                isInFavorites
                  ? "bg-red-50 text-red-500 border-red-200"
                  : "bg-white text-gray-600 hover:bg-(--main_color) hover:text-white hover:border-(--main_color)"
              } cursor-pointer`}
          onClick={handleAddToFavorites}
        >
          <FavoriteBorderOutlinedIcon />
        </span>
        <span
          title="Share"
          className="w-11 h-11 bg-white text-gray-600 flex items-center justify-center rounded-full shadow-sm border border-solid border-(--border_color) cursor-pointer hover:bg-(--main_color) hover:text-white hover:border-(--main_color) transition-all duration-300"
        >
          <ReplyRoundedIcon />
        </span>
      </div>
    </div>
  );
}

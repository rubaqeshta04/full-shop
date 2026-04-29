import React, { Children, createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // Favorites
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favoritesItems");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const addToFavorites = (item) => {
    setFavorites((prevItems) => {
      const exists = prevItems.some((i) => i.id === item.id);

      if (exists) {
        const updated = prevItems.filter((i) => i.id !== item.id);

        showSnackbar({
          message: `${item.title} removed from favorites`,
          actionLabel: "Undo",
          onAction: () => {
            setFavorites((prev) => [...prev, item]);
          },
        });

        return updated;
      }

      showSnackbar({
        message: `${item.title} added to favorites!`,
        actionLabel: "View Favorites",
        actionLink: "/favorites",
      });

      return [...prevItems, item];
    });
  };
  useEffect(() => {
    localStorage.setItem("favoritesItems", JSON.stringify(favorites));
  }, [favorites]);

  const removeFromFavorites = (id) => {
    setFavorites((prev) => {
      const removedItem = prev.find((i) => i.id === id);
      if (removedItem) {
        showSnackbar({
          message: `${removedItem.title} removed from favorites`,
          actionLabel: "Undo",
          onAction: () => {
            setFavorites((current) => [...current, removedItem]);
          },
        });
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  // cart
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    id: 0,
  });

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((i) => i.id === item.id);

      if (exists) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: Number(i.quantity) + 1 } : i,
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });

    setSnackbar({
      open: true,
      message: `${item.title} added to cart!`,
      id: Date.now(),
      actionLabel: "View Cart",
      actionLink: "/cart",
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Number(item.quantity + 1) }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: Math.max(item.quantity - 1) }
          : item,
      ),
    );
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const removedItem = prev.find((item) => item.id === id);
      if (removedItem) {
        showSnackbar({
          message: `${removedItem.title} removed from cart`,
          actionLabel: "Undo",
          onAction: () => {
            setCartItems((current) => [...current, removedItem]);
          },
        });
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const showSnackbar = ({
    message,
    actionLabel,
    actionLink,
    onAction,
  } = {}) => {
    setTimeout(() => {
      setSnackbar({
        open: true,
        message,
        id: Date.now(),
        actionLabel,
        actionLink,
        onAction,
      });
    }, 50);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        snackbar,
        closeSnackbar,
        showSnackbar,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

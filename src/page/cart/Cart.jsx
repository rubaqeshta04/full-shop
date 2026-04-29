import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import ConfirmDialog from "../../components/Dialog/ConfirmDialog";
import PageTransition from "../../components/PageTransition";

// MUI
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function Cart() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedItem(null);
  };
  const handleConfirmDelete = () => {
    removeFromCart(selectedItem.id);
    handleCloseDialog();
  };
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Shopping Cart
          </h1>

          <div className="space-y-5">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center py-10">
                Your cart is empty 🛒
              </p>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 border-(--border_color) rounded-xl hover:shadow-md transition"
                >
                  {/* image */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-xl border-(--border_color)"
                  />

                  {/* content */}
                  <div className="flex-1">
                    <h2 className="text-base font-semibold text-gray-800 line-clamp-1">
                      {item.title}
                    </h2>

                    <p className="text-green-600 font-semibold mt-1">
                      $ {item.price}
                    </p>

                    {/* quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        -
                      </button>

                      <span className="px-3 font-medium">{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* delete */}
                  <button
                    onClick={() => handleOpenDialog(item)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <DeleteOutlineOutlinedIcon />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-24">
          <h2 className="text-xl font-bold text-gray-800 mb-5">
            Order Summary
          </h2>

          <div className="space-y-3 text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-800">
              <span>Total</span>
              <span className="text-green-600">${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-(--main_color) hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition shadow-md">
            Place Order
          </button>
        </div>
        <ConfirmDialog
          open={open}
          handleClose={handleCloseDialog}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </PageTransition>
  );
}

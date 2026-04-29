import React, { useContext } from "react";
import { Snackbar, Alert, Slide } from "@mui/material";
import { CartContext } from "./context/CartContext";
import { useNavigate } from "react-router-dom";

// MUI Icons
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function GlobalSnackbar() {
  const { snackbar, closeSnackbar } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Snackbar
      key={snackbar.id}
      open={snackbar.open}
      autoHideDuration={4000}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      TransitionComponent={(props) => <Slide {...props} direction="left" />}
      sx={{
        bottom: { xs: 20, sm: 30 },
        right: { xs: 20, sm: 30 },
        zIndex: 9999,
      }}
    >
      <div className="flex items-center gap-2 sm:gap-4 bg-white/95 backdrop-blur-md border border-gray-100 p-2 sm:p-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-max max-w-[calc(100vw-40px)] sm:max-w-md animate-in fade-in slide-in-from-right-10 duration-300">
        <div className="flex items-center gap-2">
          <div className="bg-green-100 p-1 sm:p-1.5 rounded-full text-green-600 shrink-0">
            <CheckCircleOutlineIcon className="!text-[16px] sm:!text-[20px]" />
          </div>

          <div className="flex-1 pr-2">
            <p className="font-bold sm:font-semibold text-gray-900 text-[10px] sm:text-sm leading-tight line-clamp-1">
              {snackbar.message}
            </p>
          </div>
        </div>

        {snackbar.actionLabel && (
          <button
            onClick={() => {
              if (snackbar.onAction) {
                snackbar.onAction();
              } else if (snackbar.actionLink) {
                navigate(snackbar.actionLink);
              }
              closeSnackbar();
            }}
            className="shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 bg-(--main_color) hover:bg-(--main_color_dark) !text-white text-[9px] sm:text-xs font-bold rounded-lg transition-all active:scale-[0.95] shadow-sm shadow-blue-900/10 whitespace-nowrap"
          >
            {snackbar.actionLabel}
          </button>
        )}

        <button
          onClick={closeSnackbar}
          className="absolute -top-2 -right-2 bg-white border border-gray-200 rounded-full text-gray-400 hover:text-gray-600 p-0.5 shadow-sm hidden sm:block"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </Snackbar>
  );
}

export default GlobalSnackbar;

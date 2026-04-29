import React, { useEffect } from "react";
import { useState } from "react";
import { api } from "../../api/api";

// MUI
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link, useNavigate } from "react-router-dom";

export default function SearchBox() {
  const [suggestions, setSuggestions] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchItem.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchItem.trim())}`);
    }
    setSuggestions([]);
  };

  useEffect(() => {
    if (!searchItem.trim()) {
      setSuggestions([]);
      return;
    }
    setSuggestions([]);
    const debounce = setTimeout(() => {
      api
        .get(`products/search?q=${encodeURIComponent(searchItem)}`)
        .then(function (response) {
          setSuggestions(response.data.products.slice(0, 5) || []);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          setSuggestions([]);
        });
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchItem]);
  return (
    <div className="relative flex-1 flex justify-center w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="w-full">
        <TextField
          placeholder="Search For Products..."
          variant="outlined"
          autoComplete="off"
          fullWidth
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
              backgroundColor: "var(--bg_color)",
              paddingRight: "6px",
              height: { xs: "42px", md: "48px" },
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--border_color)",
              borderWidth: "1px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--main_color)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--main_color)",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  sx={{
                    backgroundColor: "var(--main_color)",
                    color: "white",
                    width: { xs: "32px", md: "38px" },
                    height: { xs: "32px", md: "38px" },
                    "&:hover": { backgroundColor: "#1e3a8a" },
                  }}
                >
                  <SearchRoundedIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 left-0 right-0 top-full mt-3 max-h-72 overflow-auto rounded-2xl bg-white shadow-xl border border-gray-200">
          {suggestions.map((suggestion) => (
            <Link
              key={suggestion.id}
              to={`/products/${suggestion.id}`}
              onClick={() => setSuggestions([])}
            >
              <li
                key={suggestion.id}
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-gray-50 cursor-pointer"
              >
                <img
                  src={suggestion.thumbnail || suggestion.images?.[0]}
                  alt={suggestion.title}
                  className="h-14 w-14 rounded-lg object-cover border border-gray-200"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {suggestion.title}
                  </p>
                  {suggestion.price != null && (
                    <p className="text-xs text-gray-500">${suggestion.price}</p>
                  )}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

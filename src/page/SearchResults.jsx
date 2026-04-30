import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../api/api";
import PageTransition from "../components/PageTransition";
import Skeleton from "@mui/material/Skeleton";
import { Container } from "@mui/material";
import Product from "../components/slideProducts/Product";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const queryParams = React.useMemo(() => {
    return new URLSearchParams(location.search).get("query") || "";
  }, [location.search]);

  useEffect(() => {
    if (!queryParams) return;
    setLoading(true);
    setResults([]);
    api
      .get(`products/search?q=${encodeURIComponent(queryParams)}`)
      .then(function (response) {
        setResults(response.data.products || []);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }, [queryParams]);
  return (
    <PageTransition key={queryParams}>
      <Container>
        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh] pt-16">
            <Skeleton variant="circular" width={40} height={40} />
          </div>
        ) : results.length > 0 ? (
          <>
            {/* HEADER */}
            <div className="my-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold capitalize text-gray-800">
                Results for: {queryParams}
              </h1>

              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                {results.length} products found matching your search query.
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
              {results.map((item) => (
                <Product key={item.id} item={item} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center py-16">
            <div className="rounded-full bg-gray-100 p-6 mb-6 shadow-sm">
              <SearchOutlinedIcon className="text-5xl font-bold text-(--main_color)" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              No Results Found
            </h2>
            <p className="max-w-xl text-gray-500">
              We couldn’t find any products matching your search. Try another
              term or check the spelling.
            </p>
          </div>
        )}
      </Container>
    </PageTransition>
  );
}

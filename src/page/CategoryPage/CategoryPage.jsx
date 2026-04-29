import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import { Container } from "@mui/material";
import Product from "../../components/slideProducts/Product";
import Skeleton from "@mui/material/Skeleton";
import PageTransition from "../../components/PageTransition";

export default function CategoryPage() {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/products/category/${category}`)
      .then((response) => {
        setCategoryProducts(response.data.products);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] pt-16">
        <Skeleton variant="circular" width={40} height={40} />
      </div>
    );
  }
  return (
    <PageTransition>
      <Container>
        {/* HEADER */}
        <div className="my-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold capitalize text-gray-800">
            {category}
          </h1>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            {categoryProducts[0]?.description}
          </p>

          <div className="mt-4 text-sm text-gray-400">
            {categoryProducts.length} products found
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
          {categoryProducts.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}

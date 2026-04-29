import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import { Container, Skeleton } from "@mui/material";
import PageTransition from "../../components/PageTransition";
import Product from "../../components/slideProducts/Product";

const CATEGORY_SLUG = "mobile-accessories";

const formatCategoryLabel = (slug) =>
  slug
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

export default function Accessories() {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/products/category/${CATEGORY_SLUG}`)
      .then((response) => {
        setAccessories(response.data.products || []);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] pt-16">
        <Skeleton variant="circular" width={40} height={40} />
      </div>
    );
  }

  return (
    <PageTransition>
      <Container className="py-12">
        <div className="mb-10 rounded-2xl border border-(--border_color) bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-(--color_heading)">
                {formatCategoryLabel(CATEGORY_SLUG)}
              </h1>
              <p className="mt-2 text-sm text-gray-600 max-w-2xl">
                Browse the latest mobile phone accessories. You can add the
                product to your basketball or favorites list directly from here.
              </p>
            </div>
            <div className="rounded-full bg-(--main_color) px-4 py-2 text-white text-sm font-semibold shadow-md">
              {accessories.length} products available
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {accessories.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}

import React, { useContext, useState } from "react";
import { CartContext } from "../../components/context/CartContext";
import PageTransition from "../../components/PageTransition";
import { Container } from "@mui/material";
import Product from "../../components/slideProducts/Product";

export default function FavoritesPage() {
  const { favorites } = useContext(CartContext);

  if (favorites.length === 0) {
    return (
      <PageTransition>
        <div className="py-24">
          <Container className="flex min-h-[40vh] items-center justify-center">
            <div className="w-full max-w-xl rounded-3xl border border-(--border_color) bg-(--white_color) p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <p className="text-xl font-semibold text-(--color_heading) mb-2">
                No favorites added yet.
              </p>
              <p className="text-sm text-gray-500">
                Browse products and save your favorite items to see them here.
              </p>
            </div>
          </Container>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="py-24">
        <Container>
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-(--main_color) mb-3">
              Favorites
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-(--color_heading)">
              {favorites.length === 1
                ? "1 Favorite Item"
                : `${favorites.length} Favorite Items`}
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-base text-(--text_color)">
              This is your wishlist. Add products you love and review them later
              any time.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}

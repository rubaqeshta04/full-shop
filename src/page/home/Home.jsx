import React, { useEffect, useState } from "react";
import HeroSider from "../../components/HeroSider";
import "./home.css";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import { api } from "../../api/api";
import Skeleton from "@mui/material/Skeleton";
import PageTransition from "../../components/PageTransition";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
];
function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const productsRes = await api.get(`/products/category/${category}`);

            return {
              [category]: productsRes.data.products,
            };
          }),
        );

        const productsData = Object.assign({}, ...results);

        setProducts(productsData);
      } catch (error) {
        console.error("خطأ في الجلب", error);
      } finally {
        setLoading(false);
      }
    };

    if (categories.length > 0) {
      fetchProducts();
    }
  }, [categories]);
  return (
    <PageTransition>
      <div className="">
        <HeroSider />

        {loading ? (
          <div className="flex justify-center items-center py-20 w-full">
            <Skeleton variant="circular" width={40} height={40} />
          </div>
        ) : (
          categories.map((category) => (
            <SlideProduct
              title={category.replace("-", " ")}
              data={products[category]}
              key={category}
            />
          ))
        )}
      </div>
    </PageTransition>
  );
}

export default Home;

import React, { useEffect, useState, useContext } from "react";
// Product Details Component
import { useParams } from "react-router-dom";
import Product from "../../components/slideProducts/Product";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import Skeleton from "@mui/material/Skeleton";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";

import { api } from "../../api/api";
import { Container } from "@mui/material";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    api
      .get(`/products/category/${product.category}`)
      .then((res) => {
        setRelatedProducts(res.data.products);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoadingRelatedProducts(false);
      });
  }, [product?.category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] pt-16">
        <Skeleton variant="circular" width={40} height={40} />
      </div>
    );
  }

  if (!product) return <p>product not found</p>;

  return (
    <PageTransition key={id}>
      <div>
        <div className="bg-gray-50 py-8 md:py-20 px-0">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 bg-white p-5 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              {/* images */}
              <ProductImages product={product} />

              {/* details */}
              <ProductInfo product={product} />
            </div>
          </Container>
        </div>

        {loadingRelatedProducts ? (
          <div className="flex justify-center items-center py-10 w-full">
            <Skeleton variant="circular" width={40} height={40} />
          </div>
        ) : (
          <SlideProduct
            key={product.category}
            data={relatedProducts}
            title={product.category.replace("-", " ")}
          />
        )}
      </div>
    </PageTransition>
  );
}

export default ProductDetails;

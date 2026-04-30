import React, { lazy, Suspense } from "react";
import TopHeader from "./components/header/TopHeader";
import BottomHeader from "./components/header/BottomHeader";
import { Route, Routes } from "react-router-dom";
import GlobalSnackbar from "./components/GlobalSnackbar";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/footer/Footer";
import Loader from "./components/Loader";

// Lazy loading pages
const Home = lazy(() => import("./page/home/Home"));
const ProductDetails = lazy(() => import("./page/ProductDetails/ProductDetails"));
const Cart = lazy(() => import("./page/cart/Cart"));
const CategoryPage = lazy(() => import("./page/CategoryPage/CategoryPage"));
const SearchResults = lazy(() => import("./page/SearchResults"));
const FavoritesPage = lazy(() => import("./page/favorites/FavoritesPage"));
const Contact = lazy(() => import("./page/Contact/Contact"));
const Accessories = lazy(() => import("./page/Accessories/Accessories"));
const Blog = lazy(() => import("./page/Blog/Blog"));
const About = lazy(() => import("./page/About/About"));

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <TopHeader />
        <div className="border-b border-gray-200"></div>
        <BottomHeader />
      </header>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
      <GlobalSnackbar />
    </>
  );
}

export default App;

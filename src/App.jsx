import TopHeader from "./components/header/TopHeader";
import BottomHeader from "./components/header/BottomHeader";
import Home from "./page/home/Home";
import ProductDetails from "./page/ProductDetails/ProductDetails";
import { Route, Routes } from "react-router-dom";
import GlobalSnackbar from "./components/GlobalSnackbar";
import Cart from "./page/cart/Cart";
import CategoryPage from "./page/CategoryPage/CategoryPage";
import SearchResults from "./page/SearchResults";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import FavoritesPage from "./page/favorites/FavoritesPage";
import Contact from "./page/Contact/Contact";
import Accessories from "./page/Accessories/Accessories";
import Blog from "./page/Blog/Blog";
import About from "./page/About/About";
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
      </AnimatePresence>
      <GlobalSnackbar />
    </>
  );
}

export default App;

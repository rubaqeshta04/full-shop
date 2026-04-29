import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import "./slideProduct.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

import "./slideProduct.css";

function SlideProduct({ title, data }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  return (
    <div className="py-10 slide-product-container">
      <Container>
        <div className="section-title-wrapper pb-3">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-(--main_color) capitalize">
              {title}
            </h2>
            <span className="hidden md:block w-px h-6 bg-gray-300 mx-2"></span>
            <div className="relative group cursor-pointer mt-1" onClick={() => setIsExpanded(!isExpanded)}>
              <p className={`text-sm text-gray-600 max-w-lg transition-all duration-500 leading-relaxed font-medium ${isExpanded ? "" : "line-clamp-1"}`}>
                {data && data[0]?.description}
              </p>
              
              <button className={`mt-2 flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 py-1 px-3 rounded-full ${
                isExpanded 
                ? "text-gray-400 bg-gray-100 hover:bg-gray-200" 
                : "text-(--main_color) bg-(--main_color)/5 hover:bg-(--main_color)/10"
              }`}>
                {isExpanded ? (
                  <>Show Less <span className="rotate-180 transition-transform duration-300">▼</span></>
                ) : (
                  <>Read More <span className="animate-bounce-slow">▼</span></>
                )}
              </button>
            </div>
          </div>
          <Link 
            to={`/category/${title.replace(" ", "-")}`} 
            className="md:hidden text-[10px] font-bold text-(--main_color) hover:underline transition-all flex items-center gap-1 shrink-0 uppercase tracking-tight"
          >
            View All <span>➔</span>
          </Link>
        </div>

        <Swiper
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={data?.length > 5}
          spaceBetween={20}
          navigation={true}
          pagination={false}
          grabCursor={true}
          allowTouchMove={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 2.1, spaceBetween: 10 },
            480: { slidesPerView: 2.5, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
            1280: { slidesPerView: 5, spaceBetween: 25 },
          }}
          className="mySwiper"
        >
          {data?.map((item, index) => (
            <SwiperSlide key={item?.id || `product-${index}`}>
              <div className="h-full py-2">
                <Product item={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

export default SlideProduct;

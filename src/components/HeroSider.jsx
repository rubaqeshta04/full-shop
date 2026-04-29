import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner_Hero1.jpg";
import banner2 from "../assets/banner_Hero2.jpg";
import banner3 from "../assets/banner_Hero3.jpg";

// MUI
import { Container } from "@mui/material";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

function HeroSider() {
  return (
    <>
      {/* hero slider */}
      <div className="hero">
        <Container>
          <Swiper
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>Introduction the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360 Controller{" "}
                </h3>
                <p>Windows 10, 8.1, 8, 7, Vista, XP</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={banner} alt="slider hero 1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introduction the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360 Controller{" "}
                </h3>
                <p>Windows 10, 8.1, 8, 7, Vista, XP</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={banner2} alt="slider hero 2" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introduction the new</h4>
                <h3>
                  Microsoft Xbox <br /> 360 Controller
                </h3>
                <p>Windows 10, 8.1, 8, 7, Vista, XP</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={banner3} alt="slider hero 3" />
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </>
  );
}

export default HeroSider;

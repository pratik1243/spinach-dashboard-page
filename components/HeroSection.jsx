import React from "react";
import Button from "./commonComponents/Button";
import { eventsDataJson } from "../utils/eventsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-inner-section">
        <div className="hero-content-section">
          <h2 className="head-txt1" data-aos="fade">Discover Amazing</h2>
          <h2 className="head-txt2" data-aos="fade" data-aos-delay="100">
            {" "}
            <span>Events</span> Near Yours!
          </h2>
          <p className="para-txt" data-aos="fade" data-aos-delay="200">
            Concerts <span className="category-dot"></span> Workshops{" "}
            <span className="category-dot"></span> Tech Talks{" "}
            <span className="category-dot"></span> Food Festivals & More
          </p>
          <Button
            data-aos="fade"
            data-aos-delay="300"
            className={"check-event-btn"}
            text={"Check Events"}
            background={"#5c38f5"}
            textColor={"#fff"}
            borderColor={"#5c38f5"}
            onClick={() => {}}
          />
        </div>
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          effect={"fade"}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {eventsDataJson.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="event-slider-card">
                <div className="slider-image-sec">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3>{event.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;

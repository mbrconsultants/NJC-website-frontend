import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import SplitType from 'split-type';
import gsap from 'gsap';
import 'swiper/swiper-bundle.css';

interface SliderItem {
  id: number;
  title: string;
  desc: string;
  photo: string;
  bottomImg: string;
  style: string;
}

interface BannerSection8Props {
  mainSlider: SliderItem[];
}

const BannerSection8: React.FC<BannerSection8Props> = ({ mainSlider }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        const currentSlide = swiper.slides[swiper.activeIndex];
        const textsToAnimate = currentSlide.querySelectorAll('.rv-text-anime');
        textsToAnimate.forEach((textToAnimate: HTMLElement) => {
          const animate = new SplitType(textToAnimate, {
            types: 'words,chars',
          });
          gsap.from(animate.chars, {
            opacity: 0,
            x: 100,
            duration: 1.1,
            stagger: { amount: 0.9 },
          });
        });
      });
    }
  }, [swiper]);

  return (
    <section className="rv-18-banner_main_area position-relative">
      <Swiper
        className="rv-18-banner_slider"
        spaceBetween={10}
        autoplay={true}
        slidesPerView={1}
        loop={true}
        pagination={{
          el: '.rv-18-banner-swiper-pagination',
          renderBullet: (index, className) => `<span class="${className}">0${index + 1}</span>`,
        }}
        navigation={{
          nextEl: '.rv-18-banner_slider_next',
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Pagination, Navigation, Thumbs, Autoplay]}
        onSwiper={setSwiper}
      >
        {mainSlider.map((item) => (
         
          <SwiperSlide className={`rv-18-banner_single_slider car_wash_2`} key={item.id}>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h1 className="rv-text-anime">
                    {/* {`http://127.0.0.1:8000${item.photo}`} */}
                    {item.title}
                    <span className="position-absolute">
                      <img src={`http://127.0.0.1:8000${item.photo}`} alt="image" />
                    </span>
                  </h1>
                  <p>{item.desc}</p>
                  <a href="#" className="rv-18-banner_content_btn">
                    Request Quote <i className="fal fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="rv-18-banner-bottom-section">
        <div className="rv-18-banner_slider_next">
          <div className="rv-18-banner-swiper-pagination"></div>
          <p>Luxury Vehicle Grooming Solutions.</p>
          <i className="fas fa-long-arrow-right"></i>
        </div>
        <Swiper
          className="rv-18-banner_slider_bottom_area"
          spaceBetween={10}
          slidesPerView={1}
          freeMode={true}
          loop={true}
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
        >
          {mainSlider.map((item) => (
            <SwiperSlide className="rv-18-banner_slider_bottom_image" key={item.id}>
              <img src={`http://127.0.0.1:8000${item.photo}`} alt="image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSection8;

"use client";
import styles from './SponsorsSlider.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const sponsors = [
  { id: 1, img: "/icons/Frame 628.svg" },
  { id: 2, img: "/icons/Frame 629.svg" },
  { id: 3, img: "/icons/Frame 630.svg" },
  { id: 4, img: "/icons/Frame 631.svg" },
  { id: 5, img: "/icons/Frame 635.svg" },
  { id: 6, img: "/icons/Frame 639 (1).svg" },
  { id: 7, img: "/icons/Frame 639.svg" },
  { id: 8, img: "/icons/Frame 641.svg" },
];

export default function SponsorsSlider() {
  return (
    <section className={styles.sponsors} id="sponsors">
      <h2 className={styles.title}>Спонсоры</h2>

      <div className={styles.sliderWrapper}>
        <button className={`${styles.navBtn} ${styles.prev}`}>←</button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={6}
          breakpoints={{
            1440: {
               slidesPerView: 6,
            },
            1200: {
               slidesPerView: 5,
            },
            800: {
               slidesPerView: 4,
            },
            620: {
               slidesPerView: 3,
            },
            480: {
               slidesPerView: 2,
            },
            440: {
               slidesPerView: 2,
            },
            300: {
               slidesPerView: 1,
            },
          }}
          navigation={{
            prevEl: `.${styles.prev}`,
            nextEl: `.${styles.next}`,
          }}
          loop
          className={styles.swiper}
        >
          {sponsors.map((sponsor) => (
            <SwiperSlide key={sponsor.id} className={styles.slide}>
              <img src={sponsor.img} alt="sponsor" className={styles.img}/>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className={`${styles.navBtn} ${styles.next}`}>→</button>
      </div>
    </section>
  );
}

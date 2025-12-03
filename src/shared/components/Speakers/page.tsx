"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Speakers.module.scss";
import Image from "next/image";
import FileInput from "../Speakers/FileInput/page";
interface Speaker {
  id: number;
  fullName: string;
  image: string;
}

const speakersData: Speaker[] = [
  { id: 1, fullName: "Айжан Калыкова", image: "/images/image (1).svg" },
  { id: 2, fullName: "Бакыт Темирбеков", image: "/images/image (2).svg" },
  { id: 3, fullName: "Алия Нуржанова", image: "/images/image (3).svg" },
  { id: 4, fullName: "Данияр Абдраимов", image: "/images/image (3).svg" },
];

export default function SpeakersPage() {
  const [search, setSearch] = useState("");

  const filteredSpeakers = speakersData.filter((s) =>
    s.fullName.toLowerCase().includes(search.toLowerCase())
  
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Наши <span className={styles.blue}>лучшие спикеры</span> страны!
      </h2>

      <div className={styles.inFio}>
        <p className={styles.fio}>ФИО<span className={styles.star}>*</span></p>
     <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search}
      />
      </div>
      <FileInput />
      {filteredSpeakers.length > 0 ? (
        <Swiper
        //   spaceBetween={10}
        loop={true}
          slidesPerView={3}
          navigation
          className={styles.swiper}
        >
          {filteredSpeakers.map((speaker) => (
            <SwiperSlide key={speaker.id}>
              <div className={styles.card}>
                <Image
                  src={speaker.image}
                  alt={speaker.fullName}
                  width={200}
                  height={250}
                />
                <p className={styles.name}>{speaker.fullName}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className={styles.noResults}>Обязательное поле</p>
      )}
    </div>
  );
}

'use client'
import styles from './footer.module.scss'
import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/Frame 453.svg'
import vue1 from '../../../public/icons/vuesax (1).svg'
import vue2 from '../../../public/icons/vuesax (2).svg'
import vue3 from '../../../public/icons/vuesax (3).svg'
import { useState } from "react";
function page() {
  const [isDefault, setIsDefault] = useState(true);
  const handleClick = () => {
    setIsDefault(!isDefault);
  };
  const scrollToConference = () => {
  const section = document.getElementById('conference');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  };
  const scrollToSponsorsSlider = () => {
    const section = document.getElementById('sponsors');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else{section}{
      console.log("Section  'sponsors' not found.");
    }
  };
  const scrollToContacts = () => {
    const section = document.getElementById('contacts');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }; 
  const scrollToHeader = () => {
    const section = document.getElementById('header');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
      <footer className={styles.footer} id='footer'>
        <div className={styles.wrapper} onClick={handleClick}>
          <img
             key={isDefault ? "default" : "new"}
             src={isDefault ? "/icons/Property 1=Default.svg" : "/icons/Property 1=Variant2.svg"}
             alt="photo"
             className={styles.image}
             onClick={scrollToHeader}
             />
        </div>
        <Image src={logo} alt="logo" className={styles.logo} />
        <div className={styles.header}>
          <p className={styles.p1} onClick={scrollToConference} style={{ cursor: 'pointer' }}>О конференции</p>
          <p className={styles.p1}>Спикеры</p>
          <p className={styles.p1} onClick={scrollToSponsorsSlider} style={{ cursor: 'pointer' }}>Партнёры</p>
          <p className={styles.p1} onClick={scrollToContacts} style={{ cursor: 'pointer' }}>Контакты</p>
        </div>
        <div className={styles.socials}>
          <a
            href="https://wa.me/996999094300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={vue1} alt=""/>
          </a>

          <a
            href="https://www.instagram.com/ncoh.kg/?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={vue2} alt=""/>
          </a>

          <a href="https://youtu.be/2IneynWkYRM"
             target="_blank"
             rel="noopener noreferrer"
          >
            <Image src={vue3} alt=""/>
          </a>

        </div>
        <p className={styles.rights}>© 2025 Medicine conference. Все права защищены.</p>
      </footer>
    </>
  )
}

export default page

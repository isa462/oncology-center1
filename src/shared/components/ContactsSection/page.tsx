"use client";
import styles from "./ContactsSection.module.scss";
import Image from "next/image";
import phon from '../../../../public/icons/phone.svg'
import alternate from '../../../../public/icons/alternate_email.svg'
import marker from '../../../../public/icons/marker-02.svg'
import vue from '../../../../public/icons/vuesax.svg'
import instagram from '../../../../public/icons/instagram.svg'
export default function ContactsSection() {
  return (
    <section className={styles.contactsSection} id="contacts">
     <div className={styles.infoAndMap}>
       <div className={styles.infoCard}>
        <h3>Будь в курсе<br />новых событий</h3>
        <p className={styles.date}>10 СЕНТЯБРЯ</p>

        <ul className={styles.contactList}>
          <li>
            <Image src={phon} alt=""/>
            <a href="tel:+996999094300" className={styles.tele} 
              rel="noopener noreferrer">+996 999 094 300</a>
          </li>

          <li>
            <Image src={alternate} alt=""/>
            <a href="https://nco.kg/?utm_source=chatgpt.com">nco.kg</a>
          </li>

          <li>
            <Image src={marker} alt=""/>
            <a
              href="https://www.google.com/maps?q=Отель+Orion,+г.+Бишкек"
              target="_blank"
              rel="noopener noreferrer"
            >
              Отель Orion, г. Бишкек
            </a>
          </li>
        </ul>

        <div className={styles.socials}>
          <a
            href="https://wa.me/996999094300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={vue} alt=""/>
          </a>

          <a
            href="https://www.instagram.com/ncoh.kg/?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={instagram} alt=""/>
          </a>
        </div>
      </div>
        <div className={styles.mapContainer}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.2543!2d74.600607!3d42.874722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7fca2a36fcd%3A0x3f9d7fef8b54e99e!2sOrion%20Hotel%20Bishkek!5e0!3m2!1sru!2skg!4v1730790000000!5m2!1sru!2skg"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      </div>

       
       <div className={styles.fAM}>
      <div className={styles.mapContainer}>
        <iframe
        className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.2543!2d74.600607!3d42.874722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7fca2a36fcd%3A0x3f9d7fef8b54e99e!2sOrion%20Hotel%20Bishkek!5e0!3m2!1sru!2skg!4v1730790000000!5m2!1sru!2skg"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.infoCard}>
        <h3>Будь в курсе<br />новых событий</h3>
        <p className={styles.date}>11–12 СЕНТЯБРЯ</p>

        <ul className={styles.contactList}>
          <li>
            <Image src={phon} alt=""/>
            <a href="tel:+996999094300">+996 999 094 300</a>
          </li>

          <li>
           <Image src={alternate} alt=""/>
            <a href="mailto:ncogkr@gmail.com">ncogkr@gmail.com</a>
          </li>

          <li>
            <Image src={marker} alt=""/>
            <a
              href="https://www.google.com/maps?q=Отель+Orion,+г.+Бишкек"
              target="_blank"
              rel="noopener noreferrer"
            >
              Отель Orion, г. Бишкек
            </a>
          </li>
        </ul>

        <div className={styles.socials}>

          <a
            href="https://wa.me/996999094300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={vue} alt=""/>
          </a>

          <a
            href="https://instagram.com/your_instagram_here"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={instagram} alt=""/>
          </a>
        </div>
      </div>
       </div>

     
    </section>
  );
}

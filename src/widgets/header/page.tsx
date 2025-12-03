"use client"
import styles from './header.module.scss';
import Image from "next/image";
import maskGroup1svg from '../../../public/icons/Mask group 1.svg';
import profilesvg from '../../../public/icons/profile.svg';
import Link from "next/link";
import menuSvg from '../../../public/icons/Component 2.svg'
import { useState } from "react";
import LoginModal from '@/shared/components/LoginModal/LoginModal';
export default  function Page() {
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
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // закрываем меню после клика
  };
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
  <header className={styles.header}>
  <div className={styles.headerContainer}  id='header'>
     <div className={styles.header}>
       <Link href="/"><Image src={maskGroup1svg} alt='logo'/></Link>
       {/* <Image src={maskGroup1svg} alt='logo'/> */}
       <div className={styles.navLinks}>
          <p className={styles.p1} onClick={scrollToConference} style={{ cursor: 'pointer' }}>О конференции</p>
          <Link href="/speakers"><p className={styles.p1} style={{ textDecoration:"none"}}>Спикеры</p></Link>
          <p className={styles.p1} onClick={scrollToSponsorsSlider} style={{ cursor: 'pointer' }}>Партнёры</p>
          <p className={styles.p1} onClick={scrollToContacts} style={{ cursor: 'pointer' }}>Контакты</p>
       </div>
       
       <div className={styles.profileMenu}>
        {/* <Link href="/login"> */}
         <Image 
           src={profilesvg} 
           alt="profileSvg" 
           className={styles.profileSvg} 
           onClick={() => setLoginOpen(true)}
           style={{ cursor: "pointer" }}
         />
        {/* </Link> */}
            <Image
              src={menuSvg}
              alt="menu"
              className={styles.burgerIcon}
              onClick={toggleMenu}
            />
        </div>
     </div>

       <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
          <p className={styles.p1} onClick={() => scrollToSection('conference')}>О конференции</p>
          <Link href="/speakers"><p className={styles.p1}>Спикеры</p></Link>
          <p className={styles.p1} onClick={() => scrollToSection('sponsors')}>Партнёры</p>
          <p className={styles.p1} onClick={() => scrollToSection('contacts')}>Контакты</p>
        </div>
   </div>
   <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
  </header>
  )
}
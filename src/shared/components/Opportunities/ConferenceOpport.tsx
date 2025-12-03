"use client"
import styles from './ConferenceOpport.module.scss'
import Image from "next/image";
import oppo1 from '../../../../public/images/originalphoto.png'
import { useEffect, useState } from 'react';

const possibilitiesList = [
  'Фармацевтика',
  'Сестринское дело',
  'Стоматология',
  'Педиатрия',
  'Офтальмология',
  'Неврология',
  'Хирургия',
];

function ConferenceOpport() {
   const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % possibilitiesList.length); // сменить текст
        setFade(true);
      }, 500);
    }, 1500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
    <section className={styles.sectionOpport}>
        <div className={styles.oppo1}></div>
        <div className={styles.Opport}>
          <span className={styles.pink}>ВОЗМОЖНОСТИ</span> <span className={styles.span1}>КОНФЕРЕНЦИИ</span>
           <div className={styles.text}>
            <div className={styles.p111}>
              <p>Соберутся ведущие</p>
              <p>медицинские специалисты</p>
              <p>из таких областей, как:</p>
            </div>
            <h4 className={`${fade ? styles.show : styles.hide}`}>{possibilitiesList[current]}</h4>
           </div>
        </div>
      </section>  
    </section>
  )
}

export default ConferenceOpport

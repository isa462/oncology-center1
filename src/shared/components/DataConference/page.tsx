import Image from "next/image";
import styles from './DataConference.module.scss'
import note from '../../../../public/icons/note-2.svg'
import clock from '../../../../public/icons/clock.svg'
import gallery from '../../../../public/icons/gallery.svg'
function page() {
  return (
  <section className={styles.container}>
    <main className={styles.mainContainer}>
        <div className={styles.listContainer}>
          <span className={styles.span1}>Расписание
           <p className={styles.p1}>и программа конференции</p>
          </span>
          <div className={styles.titleLists}>
            <div className={styles.cont}>
                <p className={styles.dataName1}>10-11-12 Сентября, Среда-Пятница </p>
                <div className={styles.palochka1}></div>
            </div>
            <div className={styles.cont}>
                <div className={styles.icons}>
                    <Image src={note} alt=""/>
                    <p className={styles.dataName}>Программа конференции</p>
                </div>
                <div className={styles.palochka}></div>
            </div>
            <div className={styles.cont}>
                <div className={styles.icons}>
                     <Image src={clock} alt=""/>
                     <p className={styles.dataName}>Расписание</p>
                </div>
                <div className={styles.palochka}></div>
            </div>
            <div className={styles.cont}>
                <div className={styles.icons}>
                     <Image src={gallery} alt=""/>
                     <p className={styles.dataName}>Выставка</p>
                </div>
                <div className={styles.palochka}></div>
            </div>
          </div>
        </div>
    </main>
  </section>
  )
}

export default page

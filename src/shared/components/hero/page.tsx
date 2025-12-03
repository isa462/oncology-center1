"use client"
import styles from "./hero.module.scss";
import { useState } from "react";
import RegistrationModal from "../RegistrationModal/RegistrationModal";
import { ParticipantForm } from "../RegistrationModal/ParticipantForm/ParticipantForm";
import { ThesisForm } from "../RegistrationModal/ThesisForm/ThesisForm";
import { GalaForm } from "../RegistrationModal/GalaForm/GalaForm";
import api from '@/api/axios'; // Изменено с 'axios' на '@/api/axios' и переименовано на 'api'

export default  function Page() {
  const [mainModal,setMainModal]=useState(false);
  const [participantOpen,setParticipantOpen]=useState(false);
  const [galaOpen,setGalaOpen]=useState(false);
  const [thesisOpen,setThesisOpen]=useState(false);

  const handleMainSelect = (type: "participant"|"gala"|"thesis")=>{
    setMainModal(false);
    if(type==="participant") setParticipantOpen(true);
    if(type==="gala") setGalaOpen(true);
    if(type==="thesis") setThesisOpen(true);
  };

  const sendParticipant = async (data:any)=>{
    console.log("Sending participant data:", data);
    console.log("Attempting to fetch URL (using api from axios.ts):"); // Обновлено для api
    try {
      const response = await api.post('/participants', data, { headers:{'Content-Type':'application/json'} }); // Изменено на api.post
      console.log("Participant registration response:", response.data); // Добавлено для отладки
      if (response.status !== 200) {
        throw new Error(response.data.error || "Failed to register participant");
      }
      alert('Участник зарегистрирован');
    } catch (error: any) {
      console.error("Participant registration error:", error.message); // Добавлено для отладки
      alert(`Ошибка регистрации участника: ${error.message}`);
    }
  };

  const sendGala = async (data:any, file?:File)=>{
    const fd = new FormData(); fd.append('data', JSON.stringify(data)); if(file) fd.append('file', file);
    await fetch('/api/gala', { method:'POST', body: fd });
    alert('Регистрация на гала-ужин отправлена');
  };

  const sendThesis = async (data:any, file?:File)=>{
    const fd = new FormData(); fd.append('data', JSON.stringify(data)); if(file) fd.append('file', file);
    await fetch('/api/thesis', { method:'POST', body: fd });
    alert('Тезис отправлен');
  };
   const [open, setOpen] = useState(false); // ← исправлено
  return (
   <section className={styles.section}>
    <div className={styles.sectionHeroContainer}>
      <video
      className={styles.vodeo}
      src="/videos/vodeo.mp4"
      width='100%'
      autoPlay
      muted
      loop
      playsInline
      />
      <div className={styles.nameDescription}>
        <h1 className={styles.h1}>Наследие и будущее онкологии:</h1>
        <h2 className={styles.h2}>к 65 Летию Национального Центра</h2>
        <h2 className={styles.h2}>Онкологии и Гематологии.</h2>
        <p className={styles.p1}>Научно-практическая Международная Конференция.</p>
        <div className={styles.dataBishkek}>
          <div className={styles.h3p2}>
             <h3 className={styles.h3}>10-11-12</h3> 
             <p className={styles.p2}>СЕНТЯБРЯ 2025</p>
          </div>
           <p className={styles.p3}>г. Бишкек, Кыргызстан</p>
        </div>
        
        <div className={styles.regBtn}>
          <button className={styles.registerBtn} onClick={()=>setMainModal(true)} >Зарегистрироваться</button>
            {mainModal && <RegistrationModal onClose={()=>setMainModal(false)} onSelect={handleMainSelect}/>}
            {participantOpen && <ParticipantForm onClose={()=>setParticipantOpen(false)} onSubmit={async (d)=>{ await sendParticipant(d); setParticipantOpen(false); }} />}
            {/* {participant && (<ParticipantForm onClose={() => setParticipant(false)} onSubmit={(data) => {console.log("DATA SEND TO BACKEND", data);setParticipant(false);}}/>)} */}
            {galaOpen && <GalaForm onClose={()=>setGalaOpen(false)} onRegister={async (d,f)=>{ await sendGala(d,f); setGalaOpen(false); }} />}
            {thesisOpen && <ThesisForm onClose={()=>setThesisOpen(false)} onSubmit={async (d,f)=>{ await sendThesis(d,f); setThesisOpen(false); }} />}
        </div>

    </div> 
      <div className={styles.Gynecology}>
        <div className={`${styles.boxWrapper} ${open ? styles.open : ""}`}>
          <button
            onClick={() => setOpen(!open)}
            className={styles.gyneButton}
          >
            Гинекология в 2025
          </button>
          <div className={styles.innerBox}>
            <div className={styles.box}>
              <span><span className={styles.label}>Дата:</span> 14.12.2025</span>
            </div>
            <div className={styles.box}>
              <span><span className={styles.label}>Место:</span> ДК (ул. Раззакова 15)</span>
            </div>
            <div className={styles.btn_2}>
            <button>Узнать больше</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}
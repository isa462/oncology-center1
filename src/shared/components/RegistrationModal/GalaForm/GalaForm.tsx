import React, { useState } from "react";
import QRCode from "react-qr-code";
import styles from "./GalaForm.module.scss";
import qrImg from '../../../../../public/images/Vector.svg'
interface GalaData { name:string; email:string; company:string; phone:string }

export function GalaForm({ onClose, onRegister }: { onClose: ()=>void; onRegister: (data:any, file?:File)=>Promise<void>|void }) {
  const [step, setStep] = useState<1|2>(1);
  const [form, setForm] = useState<GalaData>({name:"",email:"",company:"",phone:""});
  const [errors,setErrors]=useState<any>({});
  const [file,setFile]=useState<File|null>(null);
  const [loading,setLoading]=useState(false);

  const validate = () => {
    const e:any={};
    if(!form.name.trim()) e.name="Введите ФИО";
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email="Неверный формат email";
    if(!form.company.trim()) e.company="Введите компанию";
    if(!/^\+?\d{10,15}$/.test(form.phone)) e.phone="Неверный номер";
    setErrors(e);
    return Object.keys(e).length===0;
  };

  const next = ()=>{ if(!validate()) return; setStep(2); };

  const payload = `PAY|GALA|user@example.com|${Date.now()}`;
  const submit = async ()=>{
    if(!file){ setErrors({file:'Прикрепите чек'}); return; }
    setLoading(true);
    try { await onRegister(form,file); } finally { setLoading(false); }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e)=>e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h2>Регистрация на гала-ужин</h2>
        <div className={styles.steps}>Шаг {step} из 2</div>

        {step===1 && <>
          <input placeholder="ФИО" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
          <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
          <input placeholder="Компания" value={form.company} onChange={e=>setForm({...form,company:e.target.value})} />
          {errors.company && <span className={styles.error}>{errors.company}</span>}
          <input placeholder="Номер телефона" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          <button className={styles.primary} onClick={next}>Далее — оплата</button>
        </>}

        {step===2 && <>
          <p>Оплатите вход по QR и прикрепите чек *</p>
         
          <QRCode 
           value={payload}   // данные внутри QR
           size={150}        // размер (px)
           bgColor="white"   // цвет фона
           fgColor="#000000" // цвет самого кода
           level="M"         // уровень коррекции ошибок: L, M, Q, H
           />

          <div className={styles.fileArea}>
            {file && <div className={styles.fileName}>{file.name}</div>}
            <label className={styles.fileBtn}>
              <input type="file" hidden onChange={e=>setFile(e.target.files?.[0] ?? null)} />
              {file ? 'Отправить' : 'Выбрать файл'}
            </label>
            {errors.file && <span className={styles.error}>{errors.file}</span>}
          </div>
          <button className={styles.primary} onClick={submit} disabled={loading}>
            {loading ? 'Отправка...' : (file ? 'Отправить' : 'Выбрать файл')}
          </button>
        </>}
      </div>
    </div>
  );
}

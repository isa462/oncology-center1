import React, { useState } from "react";
import styles from "./ThesisForm.module.scss";

export function ThesisForm({ onClose, onSubmit }: { onClose: ()=>void; onSubmit: (data:any, file?:File)=>Promise<void>|void }) {
  const [form,setForm]=useState({name:"",email:"",company:"",phone:""});
  const [file,setFile]=useState<File|null>(null);
  const [errors,setErrors]=useState<any>({});
  const [loading,setLoading]=useState(false);

  const validate = ()=>{
    const e:any={};
    if(!form.name.trim()) e.name="Введите ФИО";
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email="Неверный формат email";
    if(!form.company.trim()) e.company="Введите компанию";
    if(!/^\+?\d{10,15}$/.test(form.phone)) e.phone="Неверный номер";
    setErrors(e);
    return Object.keys(e).length===0;
  };

  const submit = async ()=>{
    if(!validate()) return;
    if(!file){ setErrors({file:'Выберите файл тезиса'}); return; }
    setLoading(true);
    try { await onSubmit(form,file); } finally { setLoading(false); }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e)=>e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h2>Отправить тезис</h2>

        <input placeholder="ФИО" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
        {errors.name && <span className={styles.error}>{errors.name}</span>}

        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
        {errors.email && <span className={styles.error}>{errors.email}</span>}

        <input placeholder="Компания" value={form.company} onChange={e=>setForm({...form,company:e.target.value})}/>
        {errors.company && <span className={styles.error}>{errors.company}</span>}

        <input placeholder="Номер телефона" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}

        <a className={styles.link} href="/assets/thesisRequire (2).docx" download>Требования к оформлению тезиса</a>
        <p className={styles.note}>Прием тезисов: до 15 июля 2025 года.</p>

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
      </div>
    </div>
  );
}

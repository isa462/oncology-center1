import React, { useState } from "react";
import styles from "./ParticipantForm.module.scss";

interface Props { onClose: () => void; onSubmit: (data: any) => Promise<void> | void; }

export function ParticipantForm({ onClose, onSubmit }: Props) {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "" });
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: any = {};
    if (!form.name.trim()) e.name = "Введите ФИО";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Неверный формат email";
    if (!form.company.trim()) e.company = "Введите компанию";
    if (!/^\+?\d{10,15}$/.test(form.phone)) e.phone = "Неверный номер";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handleSubmit called in ParticipantForm");
    if (!validate()) return;
    setLoading(true);
    try { await onSubmit(form); } finally { setLoading(false); }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e)=>e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h2>Стать участником</h2>

        <form onSubmit={handleSubmit}>
          <input placeholder="ФИО" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
          {errors.name && <span className={styles.error}>{errors.name}</span>}

          <input placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
          {errors.email && <span className={styles.error}>{errors.email}</span>}

          <input placeholder="Компания" value={form.company} onChange={(e)=>setForm({...form, company:e.target.value})} />
          {errors.company && <span className={styles.error}>{errors.company}</span>}

          <input placeholder="Номер телефона" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}

          <button className={styles.submit} type="submit" disabled={loading}>
            {loading ? "Отправка..." : "Отправить"}
          </button>
        </form>
      </div>
    </div>
  );
}

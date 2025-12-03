// frontend/src/shared/LoginModal/LoginModal.tsx 
"use client";

import { useState } from "react";
import styles from "./loginModal.module.scss";
import axios from "axios";
import { useRouter } from "next/navigation";
import { login, register } from "@/api/auth"; // Импортируем register
// import {LoginModal} from "@/shared/components/LoginModal/LoginModal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void; // новый проп
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Состояние для переключения между входом и регистрацией
  
  if (!isOpen) return null;

  function validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password: string) {
    return password.length >= 6;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Введите корректный email.");
      return;
    }
    if (!validatePassword(password)) {
      setError("Пароль должен быть не менее 6 символов.");
      return;
    }

    try {
      setLoading(true);
      if (isRegistering) {
        // Логика регистрации
        await register(email, password);
        alert("Регистрация успешна! Теперь вы можете войти.");
        setIsRegistering(false); // Переключаемся обратно на форму входа
        setEmail(""); // Очищаем email
        setPassword(""); // Очищаем пароль
        setError(""); // Очищаем ошибки
      } else {
        // Логика входа
        const res = await login(email, password, {
          headers: { "Content-Type": "application/json" }
        });
        console.log("Login successful:", res.data);

        localStorage.setItem("token", res.token);

        onClose();
        router.push("/admin");
        onLoginSuccess?.(); // вызываем редирект через пропс
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Ошибка авторизации. Попробуйте снова.");
      }
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{isRegistering ? "Регистрация" : "Вход"}</h2> {/* Заголовок меняется */}

        <form onSubmit={submit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Пароль"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? (isRegistering ? "Регистрация..." : "Вход...") : (isRegistering ? "Зарегистрироваться" : "Войти")}
          </button>
          <button type="button" className={styles.toggleButton} onClick={() => {
            setIsRegistering(!isRegistering);
            setEmail(""); // Очищаем email при переключении
            setPassword(""); // Очищаем пароль при переключении
            setError(""); // Очищаем ошибки при переключении
          }}>
            {isRegistering ? "Уже есть аккаунт? Войти" : "Нет аккаунта? Зарегистрироваться"}
          </button>
        </form>
      </div>
    </div>
  );
}

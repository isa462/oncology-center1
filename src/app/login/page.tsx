
// "use client";

// import { useState } from "react";
// import styles from "./login.module.scss";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// interface LoginModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   if (!isOpen) return null;

//   async function submit(e: React.FormEvent) {
//     e.preventDefault(); // 🚀 отменяем стандартный сабмит формы
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       document.cookie = `token=${res.data.token}; path=/`;
//       onClose();
//       router.push("/admin");
//     } catch (e) {
//       alert("Ошибка авторизации");
//     }
//   }

//   return (
//     <div className={styles.overlay} onClick={onClose}>
//       <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
//         <h2>Вход</h2>

//         <form onSubmit={submit} className="login-form">
//           <label htmlFor="email">Email</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             placeholder="E-mail"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <label htmlFor="password">Пароль</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Пароль"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit">Войти</button>
//         </form>
//       </div>
//     </div>
//   );
// }
// frontend/src/app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginModal from "@/shared/components/LoginModal/LoginModal";

export default function LoginPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Функция для закрытия модалки и редиректа
  const handleLoginSuccess = () => {
    setIsModalOpen(false);
    router.push("/admin"); // редирект после успешного логина
  };

  return (
    <>
      {/* Кнопка для открытия модалки, если она закрыта */}
      {!isModalOpen && (
        <button onClick={() => setIsModalOpen(true)}>Войти</button>
      )}

      {/* Модальное окно логина */}
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={handleLoginSuccess} // передаем функцию в модалку
      />
    </>
  );
}

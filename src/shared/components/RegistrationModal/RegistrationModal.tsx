import React from "react";
import styles from "./RegistrationModal.module.scss";

interface Props {
  onClose: () => void;
  onSelect: (type: "participant" | "gala" | "thesis") => void;
}

export default function RegistrationModal({ onClose, onSelect }: Props) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <div className={styles.buttons}>
          <button onClick={() => onSelect("participant")}>Стать участником</button>
          <button onClick={() => onSelect("gala")}>Гала-ужин</button>
          <button onClick={() => onSelect("thesis")}>Тезис</button>
        </div>
      </div>
    </div>
  );
}

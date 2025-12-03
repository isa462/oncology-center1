import { useState } from "react";
import styles from "./FileInut.module.scss";

export default function FileInput() {
  const [fileName, setFileName] = useState<string>("Файл не выбран");
  const [error, setError] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setError(false);
    } else {
      setFileName("Файл не выбран");
      setError(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.button}>
        <input
          type="file"
          className={styles.input}
          onChange={handleFileChange}
        />
        Выберите файл
      </label>
      <span className={`${styles.fileName} ${error ? styles.error : ""}`}>
        {fileName}
      </span>
    </div>
  );
}

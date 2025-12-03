"use client";
import { useState, useEffect } from "react";
import styles from "./Countdown.module.scss";

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft({ days, hours, minutes });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={styles.countdown}>
      <h3 className={styles.title}>До конференции осталось:</h3>
      <div className={styles.timer}>
        <div className={styles.block}>
          <span className={styles.value}>{timeLeft.days}</span>
          <span className={styles.label}>дней</span>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.block}>
          <span className={styles.value}>{timeLeft.hours}</span>
          <span className={styles.label}>часов</span>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.block}>
          <span className={styles.value}>{timeLeft.minutes}</span>
          <span className={styles.label}>минут</span>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./conference.module.scss";
import { conferenceText } from "./texts";
import Countdown from "./countdownTimer/Countdown";
export default function Expandablet() {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(220);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expanded && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
      // Скроллим к началу блока, когда раскрывается
      setTimeout(() => {
        containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    } else {
      setHeight(220);
    }
  }, [expanded]);

  const paragraphs = conferenceText
    .trim()
    .split(/\n\s*\n/)
    .map((p, i) => (
      <p key={i} style={{ animationDelay: `${i * 0.08}s` }}>
        {p.trim()}
      </p>
    ));

  return (
    <section id="conference">
    <div className={styles.titleToData}>
      <h2 className={styles.contentTitle}>Прием тезисов до 15.07.2025</h2>
    </div>
    <div className={styles.container} ref={containerRef}>
      <div className={styles.textAndBtn}>
        <p className={styles.toConference}>О конференции</p>
       <div
        className={`${styles.text} ${expanded ? styles.expanded : ""}`}
        style={{ maxHeight: `${height}px` }}
        ref={contentRef}
      >
        {paragraphs}
      </div>

      {!expanded && <div className={styles.gradient}></div>}

      <button
        className={`${styles.button} ${expanded ? styles.collapse : ""}`}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Свернуть" : "Читать далее..."}
      </button>
      </div>
      <div className={styles.videoContainer}>
        <video
        className={styles.videoConference}
        src="/videos/originalVideo.mp4"
        controls
        preload="metadata"
        />
      </div>
    </div>
    <section style={{ padding: "50px 0" }}>
      <Countdown targetDate="2025-12-14T00:00:00" />
    </section>
    </section>
  );
}

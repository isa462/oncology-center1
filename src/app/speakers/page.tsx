// app/speakers/page.tsx
"use client";
import Header from "@/widgets/header/page";
import Footer from "@/widgets/footer/page";
import Speakers from "@/shared/components/Speakers/page";
import Hero from '@/shared/components/hero/page';
import styles from './speakers.module.scss'
export default function SpeakersPage() {
  return (
    <main> 
      <Header />
      <Speakers />
    </main>
  );
}

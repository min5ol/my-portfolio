"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Features from "@/components/Features";
import Reflection from "@/components/Reflection";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-900 text-white dark:bg-gray-100 dark:text-black">
      <ThemeToggle /> {/* ✅ 다크모드 버튼 추가 */}
      <HeroSection />
      <TechStack />
      <Projects />
      <Features />
      <Reflection />
    </main>
  );
}

const HeroSection = () => (
  <section className="w-full max-w-6xl text-center py-16">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-800 rounded-3xl shadow-2xl p-12"
    >
      <Image
        src="/avatar.png"
        alt="Developer Avatar"
        width={120}
        height={120}
        className="rounded-full mx-auto"
      />
      <h1 className="text-5xl font-bold text-pink-400 mt-4">🚀 Yangflix</h1>
      <p className="text-lg text-gray-300 mt-2">
        아이돌 콘텐츠를 한 곳에서! 아카이빙 & 평가 플랫폼
      </p>
      <div className="mt-6 space-x-4">
        <Link href="https://github.com/사용자명/Yangflix" className="btn">
          🔗 GitHub
        </Link>
        <Link href="https://yangflix.com" className="btn">
          🚀 배포 사이트
        </Link>
      </div>
    </motion.div>
  </section>
);

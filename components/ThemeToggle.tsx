"use client";

import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark"); // 기본값을 'dark'로 설정
  const [mounted, setMounted] = useState(false); // Hydration 방지

  useEffect(() => {
    setMounted(true); // 컴포넌트가 마운트되었음을 표시

    // 브라우저 환경에서만 실행
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // 테마 변경 함수
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Hydration 오류 방지를 위해 `mounted` 상태 확인 후 렌더링
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 bg-gray-800 text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg shadow-lg transition-all"
    >
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ThemeToggle;

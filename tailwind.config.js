/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ 다크모드 설정 추가
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

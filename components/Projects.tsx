import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { id: "yangflix", name: "Yangflix", desc: "아이돌 콘텐츠 아카이빙 & 평가" },
  { id: "timing", name: "타이밍", desc: "가계부 + 일정 통합 관리 앱" },
  { id: "bigdata", name: "공공 빅데이터 프로젝트", desc: "데이터 시각화 및 분석" },
  { id: "frontend-game", name: "프론트엔드 학습 게임", desc: "웹 개발 개념을 배우는 게임" },
  { id: "ai-language", name: "AI 외국어 학습 웹앱", desc: "AI 챗봇을 활용한 실시간 학습" },
];

const Projects = () => (
  <section className="w-full max-w-6xl text-center py-12">
    <h2 className="text-2xl font-bold text-gray-200">📌 프로젝트 목록</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gray-800 rounded-3xl shadow-2xl p-6 hover:bg-gray-700"
        >
          <Image
            src={`/projects/${project.id}.png`}
            alt={project.name}
            width={300}
            height={200}
            className="mx-auto rounded-lg"
          />
          <h3 className="text-xl font-semibold text-white mt-4">{project.name}</h3>
          <p className="text-gray-300 text-sm mt-2">{project.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;

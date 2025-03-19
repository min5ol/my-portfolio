import Image from "next/image";

const TechStack = () => (
  <section className="text-center py-12">
    <h2 className="text-2xl font-bold text-gray-200">🛠️ 기술 스택</h2>
    <div className="flex justify-center space-x-6 mt-6">
      {["react", "nextjs", "springboot", "mysql", "aws", "docker"].map(
        (tech) => (
          <Image
            key={tech}
            src={`/tech-icons/${tech}.png`}
            alt={tech}
            width={50}
            height={50}
            className="hover:scale-110 transition-transform"
          />
        )
      )}
    </div>
  </section>
);

export default TechStack;

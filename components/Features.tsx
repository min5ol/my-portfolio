import Image from "next/image";

const features = [
  { title: "🔍 콘텐츠 검색", desc: "연도별 콘텐츠 검색 가능", img: "/search.gif" },
  { title: "❤️ 찜하기 기능", desc: "원하는 콘텐츠 저장 가능", img: "/wishlist.gif" },
  { title: "⭐️ 평가 시스템", desc: "콘텐츠 평가 기능", img: "/rating.gif" },
];

const Features = () => (
  <section className="text-center py-12">
    <h2 className="text-2xl font-bold text-gray-200">🎯 주요 기능</h2>
    <div className="flex justify-center gap-6 mt-6">
      {features.map((feature, index) => (
        <div key={index} className="bg-gray-800 rounded-3xl shadow-2xl p-6 hover:bg-gray-700">
          <Image src={feature.img} alt={feature.title} width={100} height={100} />
          <h3 className="text-xl font-semibold text-white mt-4">{feature.title}</h3>
          <p className="text-gray-300 text-sm mt-2">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;

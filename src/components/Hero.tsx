import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-[5]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-4 font-medium">Оптимизатор для Windows</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          УСКОРЬ<br/>СВОЙ ПК
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-10">
          Один клик — и ваш компьютер работает как новый. Очистка, ускорение и защита на максимум.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 uppercase tracking-wide text-sm font-bold transition-all duration-300">
            Скачать бесплатно
          </button>
          <button className="border border-white/50 hover:border-white text-white px-8 py-3 uppercase tracking-wide text-sm transition-all duration-300">
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  );
}
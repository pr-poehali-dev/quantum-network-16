export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-[#060610] py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between border-t border-blue-500/20">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-blue-400 text-xs sm:text-sm tracking-widest">Продукт</h3>
                <a
                  href="#features"
                  className="text-white hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Функции
                </a>
                <a
                  href="#download"
                  className="text-white hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Скачать
                </a>
                <a
                  href="#changelog"
                  className="text-white hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Changelog
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-blue-400 text-xs sm:text-sm tracking-widest">Поддержка</h3>
                <a
                  href="#faq"
                  className="text-white hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Связаться
                </a>
                <a
                  href="#privacy"
                  className="text-white hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Конфиденциальность
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                WIN<span className="text-blue-500">BOOST</span>
              </h1>
              <p className="text-neutral-500 text-sm sm:text-base">{new Date().getFullYear()} WinBoost. Все права защищены.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
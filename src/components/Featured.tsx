const features = [
  { icon: "🧹", title: "Глубокая очистка", desc: "Удаляет мусор, временные файлы и остатки программ — освобождает гигабайты за секунды." },
  { icon: "🚀", title: "Ускорение запуска", desc: "Отключает лишние программы из автозагрузки — Windows стартует в разы быстрее." },
  { icon: "🛡️", title: "Защита реестра", desc: "Находит и исправляет ошибки реестра, которые тормозят систему и вызывают сбои." },
  { icon: "🌡️", title: "Мониторинг температур", desc: "Следит за CPU, GPU и дисками в реальном времени. Предупреждает о перегреве." },
  { icon: "⚙️", title: "Тонкая настройка", desc: "Более 50 твиков Windows — от визуальных эффектов до сетевых параметров." },
  { icon: "🔒", title: "Конфиденциальность", desc: "Блокирует телеметрию Windows и слежку рекламных трекеров одним переключателем." },
];

export default function Featured() {
  return (
    <div className="min-h-screen px-6 py-24 bg-[#0a0a0f]" id="features">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-blue-400 mb-4">Возможности</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Всё что нужно<br/>вашему ПК
        </h2>
        <p className="text-neutral-400 text-lg mb-16 max-w-xl">
          WinBoost объединяет все инструменты оптимизации в одном приложении с интерфейсом в стиле Windows 11.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
          {features.map((f) => (
            <div key={f.title} className="bg-[#0d0d14] p-8 hover:bg-[#111120] transition-colors duration-300 group">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">{f.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-bold flex items-center gap-2">
          <span className="text-blue-400">⚡</span> WinBoost
        </div>
        <nav className="flex gap-8">
          <a
            href="#features"
            className="text-white hover:text-blue-400 transition-colors duration-300 uppercase text-sm"
          >
            Функции
          </a>
          <a
            href="#download"
            className="text-white hover:text-blue-400 transition-colors duration-300 uppercase text-sm"
          >
            Скачать
          </a>
        </nav>
      </div>
    </header>
  );
}
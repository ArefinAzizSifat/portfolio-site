"use client";

import { useState, useEffect } from "react";

export type Theme = "default" | "light" | "dark";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("default");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const themes = [
    { value: "default" as Theme, label: "Gradient", icon: "🎨" },
    { value: "light" as Theme, label: "Light", icon: "☀️" },
    { value: "dark" as Theme, label: "Dark", icon: "🌙" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Theme Options */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-2 min-w-[140px] animate-in fade-in slide-in-from-bottom-2 duration-200">
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => handleThemeChange(t.value)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                  theme === t.value
                    ? "bg-gray-100 dark:bg-gray-700"
                    : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                }`}
              >
                <span className="text-xl">{t.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
          aria-label="Change theme"
        >
          <span className="text-2xl group-hover:rotate-180 transition-transform duration-500">
            {themes.find((t) => t.value === theme)?.icon}
          </span>
        </button>
      </div>
    </div>
  );
}

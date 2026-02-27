"use client";

import { useState, useEffect } from "react";

export type Theme = "default" | "light" | "dark";

type ThemeSwitcherProps = {
  inline?: boolean;
  containerClassName?: string;
  buttonClassName?: string;
  menuClassName?: string;
};

export default function ThemeSwitcher({
  inline = false,
  containerClassName = "",
  buttonClassName = "",
  menuClassName = "",
}: ThemeSwitcherProps) {
  const [theme, setTheme] = useState<Theme>("default");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "default";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const html = document.documentElement;
    
    // Remove all theme classes
    html.classList.remove("dark");
    html.removeAttribute("data-theme");
    
    // Apply new theme
    if (newTheme === "dark") {
      html.classList.add("dark");
    }
    html.setAttribute("data-theme", newTheme);
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

  const containerClasses = inline
    ? `relative ${containerClassName}`
    : `fixed bottom-6 right-6 z-50 ${containerClassName}`;
  const menuPositionClasses = inline
    ? "absolute top-12 right-0"
    : "absolute bottom-16 right-0";
  const buttonClasses = inline
    ? "w-10 h-10"
    : "w-14 h-14";

  return (
    <div className={containerClasses}>
      <div className="relative">
        {/* Theme Options */}
        {isOpen && (
          <div
            className={`${menuPositionClasses} bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-2 min-w-[140px] ${menuClassName}`}
          >
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => handleThemeChange(t.value)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                  theme === t.value
                    ? "bg-slate-100 dark:bg-slate-700"
                    : "hover:bg-slate-50 dark:hover:bg-slate-700/50"
                }`}
              >
                <span className="text-xl">{t.icon}</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${buttonClasses} bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:scale-110 transition-all duration-300 group ${buttonClassName}`}
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

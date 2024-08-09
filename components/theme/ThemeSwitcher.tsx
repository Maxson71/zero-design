"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { PiMoonThin } from "react-icons/pi";
import { PiSunDimThin } from "react-icons/pi";



const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex cursor-pointer" onClick={handleTheme}>
      {
        theme === "dark" ? (
          <PiSunDimThin className="hover:text-warning duration-300 h-6 w-6" />
        ) : (
          <PiMoonThin className="hover:text-warning duration-300 h-6 w-6" />
        )
      }
    </div>
  );
};

export default ThemeSwitcher;

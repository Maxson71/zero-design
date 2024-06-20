"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/switch";
import { MoonIcon } from "@/icons/MoonIcon";
import { SunIcon } from "@/icons/SunIcon";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <button onClick={handleTheme}>
        {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;

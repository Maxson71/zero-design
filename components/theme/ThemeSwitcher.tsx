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

  if(!mounted) return null

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Switch
          defaultSelected
          size="lg"
          color="warning"
          thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                  <SunIcon className={className} />
              ) : (
                  <MoonIcon className={className} />
              )
          }
          onClick={handleTheme}
      >
      </Switch>
    </div>
  );
};

export default ThemeSwitcher;

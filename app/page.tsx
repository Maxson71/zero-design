import Image from "next/image";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import Logo from "@/components/logo/Logo";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col items-center justify-between px-20 py-0">
        <ThemeSwitcher />
        <Logo />
      </main>
    </ThemeProvider>
  );
}

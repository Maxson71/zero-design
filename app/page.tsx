import { ThemeProvider } from "next-themes";
import Hotbar from "@/components/hotbar/Hotbar";

export default function Home() {
  return (
    <ThemeProvider>
      <Hotbar />
      <main className="flex min-h-screen flex-col items-center justify-between px-20 py-0">
        MAIN
      </main>
    </ThemeProvider>
  );
}

import Image from "next/image";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 py-0">
      <svg
        width="31"
        height="32"
        viewBox="0 0 31 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.2515 0.220001L19.6374 19.168H30.7056V31.448H0.561578L10.0995 12.436H0.185028V0.220001H29.2515Z"
          fill="black"
        />
      </svg>
    </main>
  );
}

import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import Logo from "@/components/logo/Logo";
import Link from "next/link";

const Hotbar = () => {
    return (
        <div className="flex w-full items-center justify-between px-16 py-4 shadow-2xl">
            <div className="flex flex-row space gap-8">
                <Logo size={0.9}/>
                <nav className="flex items-center gap-4">
                    <Link href="/" className="text-lg leading-tight">Landing</Link>
                    <Link href="/" className="text-lg leading-tight">Company</Link>
                    <Link href="/" className="text-lg leading-tight">CMS Pages</Link>
                    <Link href="/" className="text-lg leading-tight">Utility</Link>
                </nav>
            </div>
            <ThemeSwitcher />
        </div>
    );
}

export default Hotbar;

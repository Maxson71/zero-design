import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import Logo from "@/components/logo/Logo";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

const Header = () => {
  return (
    <header className="header fixed z-10 top-0 flex w-full items-center justify-between px-16 py-4 shadow-2xl h-appbar-height bg-background">
      <div className="flex flex-row space gap-8">
        <Logo size={0.95} />
        <nav className="flex items-center gap-4 ">
          <Link
            href="#landing"
            className="text-lg leading-tight text-hover"
          >
            Landing
          </Link>
          <Link
            href="#company"
            className="text-lg leading-tight text-hover"
          >
            Company
          </Link>
          <Link
            href="#cms_pages"
            className="text-lg leading-tight text-hover"
          >
            CMS Pages
          </Link>
          <Link
            href="#utility"
            className="text-lg leading-tight text-hover"
          >
            Utility
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/">
          <div className="button">$129 Buy Now</div>
        </Link>
        <ThemeSwitcher />
        <Link href="/">
          <CiSearch className="h-6 w-6 text-hover" />
        </Link>
        <Link href="/">
          <PiShoppingCartThin className="h-6 w-6 text-hover" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

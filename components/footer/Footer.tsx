import Logo from "@/components/logo/Logo";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer z-10 top-0 flex w-full items-center justify-between px-16 py-4 shadow-2xl h-appbar-height bg-background">
      <div className="flex flex-row space gap-8">
        <Logo size={0.95} />
        <nav className="flex items-center gap-4 ">
          <Link
            href="#landing"
            className="text-lg leading-tight hover:text-warning duration-300"
          >
            Landing
          </Link>
          <Link
            href="/"
            className="text-lg leading-tight hover:text-warning duration-300"
          >
            Company
          </Link>
          <Link
            href="/"
            className="text-lg leading-tight hover:text-warning duration-300"
          >
            CMS Pages
          </Link>
          <Link
            href="/"
            className="text-lg leading-tight hover:text-warning duration-300"
          >
            Utility
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/">
          <div className="button">$129 Buy Now</div>
        </Link>
        <Link href="/">
          <CiSearch className="hover:text-warning  duration-300 cursor-pointer h-6 w-6" />
        </Link>
        <Link href="/">
          <PiShoppingCartThin className="hover:text-warning  duration-300 cursor-pointer h-6 w-6" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

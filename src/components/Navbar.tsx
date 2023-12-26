import Link from "next/link";
import Image from "next/image";
import { Heart, Search, SearchCheck, User } from "lucide-react";
const Navbar = () => {
  const navIcons = [
    { src: <Search />, alt: "search" },
    { src: <Heart />, alt: "heart" },
    { src: <User />, alt: "user" },
  ];
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
        <SearchCheck />
          <p className="nav-logo">
            Scan<span className="text-primary">Master</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon, index) => (
            <span key={index}>{icon.src}</span>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

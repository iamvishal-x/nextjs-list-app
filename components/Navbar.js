import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image alt="logo" src="/avatar.png" width={80} height={75} />
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/lists">
        <a>Lists</a>
      </Link>
    </nav>
  );
};

export default Navbar;

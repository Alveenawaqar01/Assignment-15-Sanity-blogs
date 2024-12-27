import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-pink-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-black text-lg font-bold ">
          <Link href="#"> Sanity Blogs</Link>
        </div>
        {/* Navigation Links */}
        <div className="space-x-4">
          <Link href="/About"className="text-black hover:text-blue-300">About</Link>
          <Link href="/Contact" className="text-black hover:text-blue-300">Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

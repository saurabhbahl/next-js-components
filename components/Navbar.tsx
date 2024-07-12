import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white shadow">
      <div className="container mx-auto px-4 py-2 flex justify-center items-center">
        <div className="text-xl font-bold text-center shadow-2xl ">Some Logo</div>
        {/* <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Navbar;

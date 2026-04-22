import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftLinks = [
    { title: 'Tổng quan', href: '#tong-quan' },
    { title: 'Vị trí', href: '#vi-tri' },
    { title: 'Tiện ích', href: '#tien-ich' },
    { title: 'Mặt bằng', href: '#mat-bang' },
  ];

  const rightLinks = [
    { title: 'Tiềm năng', href: '#tiem-nang' },
    { title: 'Tiến độ', href: '#tien-do' },
    { title: 'Tin Tức', href: '#tin-tuc' },
    { title: 'Liên Hệ', href: 'lien-he' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-sm h-20">
      <div className="container mx-auto px-4 h-full relative flex justify-between items-center">

        {/* Mobile/Tablet Logo (Left) with Green Glow */}
        <div className="lg:hidden flex items-center">
          <Link to="/" className="bg-white p-2 rounded-2xl ">
            <img src="/Logo-Newstarland.svg" alt="Logo" className="h-10 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Left Navigation */}
        <nav className="hidden lg:flex flex-1 justify-end space-x-6 pr-24 xl:pr-32">
          {leftLinks.map((link) => (
            <a key={link.title} href={link.href} className="text-[#0a4d34] hover:text-amber-600 font-semibold text-[14px] xl:text-[15px] transition uppercase">
              {link.title}
            </a>
          ))}
        </nav>

        {/* Center Logo (Desktop Only) */}
        <Link to="/">
          <div className="hidden lg:block absolute left-1/2 top-0 transform -translate-x-1/2 bg-white px-6 py-4 rounded-b-[40px] shadow-sm z-10 border border-t-0 border-gray-100 ">
            <img src="/Logo-Newstarland.svg" alt="Logo" className="w-24 md:w-28 lg:w-32 h-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Right Navigation */}
        <nav className="hidden lg:flex flex-1 justify-start space-x-6 pl-24 xl:pl-32">
          {rightLinks.map((link) => (
            <a key={link.title} href={link.href} className="text-[#0a4d34] hover:text-amber-600 font-semibold text-[14px] xl:text-[15px] transition uppercase">
              {link.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button (Right) */}
        <button
          className="lg:hidden text-[#0a4d34] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg py-4 px-6 border-t border-gray-100 flex flex-col space-y-4">
          {[...leftLinks, ...rightLinks].map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#0a4d34] hover:text-amber-600 font-semibold text-lg border-b border-gray-50 pb-2 transition"
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

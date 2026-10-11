import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { DeveloperProfile } from '../types/portfolio';

interface NavbarProps {
  profile: DeveloperProfile;
}

export const Navbar: React.FC<NavbarProps> = ({ profile }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: isHomePage ? '#home' : '/#home' },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Projects', href: isHomePage ? '#projects' : '/#projects' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
        >
          <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.25)] transition-all">
            JA
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors flex items-center gap-2">
              <span>{profile.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block"></span>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono tracking-tight hidden sm:block">
              Kalvium · Applied AI
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/70 border border-zinc-800/90 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs font-medium text-zinc-300 hover:text-emerald-400 px-3.5 py-1.5 rounded-full hover:bg-zinc-800/50 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={isHomePage ? '#contact' : '/#contact'}
            onClick={(e) => handleNavClick(e, isHomePage ? '#contact' : '/#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:border-emerald-500/50 transition-all hover:scale-[1.02]"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 py-5 backdrop-blur-xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-zinc-200 hover:text-emerald-400 hover:bg-zinc-900 px-3.5 py-2.5 rounded-xl transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-zinc-800">
              <a
                href={isHomePage ? '#contact' : '/#contact'}
                onClick={(e) => handleNavClick(e, isHomePage ? '#contact' : '/#contact')}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-semibold"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

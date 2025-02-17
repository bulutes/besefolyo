'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Ana Sayfa', icon: '🏠' },
    { href: '/projects', label: 'Projeler', icon: '💻' },
    { href: '/about', label: 'Hakkımda', icon: '👨‍💻' },
    { href: '/contact', label: 'İletişim', icon: '✉️' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="relative">
        {/* Blur effect background */}
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-lg border-b border-white/10" />
        
        {/* Navbar content */}
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold">
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% auto' }}
              >
                Portfolio
              </motion.span>
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                >
                  <motion.span
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative flex items-center gap-2 group ${
                      pathname === link.href
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="group-hover:animate-bounce">{link.icon}</span>
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-500/10"
                        layoutId="navbar-active"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className="flex flex-col gap-1.5 items-center">
                <motion.span
                  className="w-6 h-0.5 bg-white rounded-full"
                  animate={{ rotateZ: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white rounded-full"
                  animate={{ opacity: isOpen ? 0 : 1 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white rounded-full"
                  animate={{ rotateZ: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-3 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-3 ${
                        pathname === link.href
                          ? 'text-blue-400 bg-blue-500/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
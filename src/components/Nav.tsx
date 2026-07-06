import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SITE } from '../siteConfig';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

export const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6">
        <Link to="/" className="text-label tracking-[0.2em] text-mono glow-moss text-moss-300" onClick={() => setOpen(false)}>
          {SITE.shortName}
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-label flex items-center gap-3 group"
        >
          <span>{open ? 'Close' : 'Menu'}</span>
          <span className="relative w-6 h-4 flex flex-col justify-between">
            <span className={`h-px w-full bg-current transition-transform ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`h-px w-full bg-current transition-transform ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-ink grid-lines scanlines scanlines-animated flex flex-col items-start justify-center px-6 md:px-16 gap-4"
          >
            {LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-huge text-5xl md:text-8xl hover:text-moss-300/70 transition-colors ${
                    location.pathname === link.to ? 'text-white glow-white' : 'text-white/70'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-label text-mono text-moss-300/50 mt-8"
            >
              {SITE.email}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

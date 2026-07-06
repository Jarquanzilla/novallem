import React from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-line px-6 md:px-10">
      <div className="py-16 grid md:grid-cols-3 gap-12">
        <div>
          <p className="text-huge text-3xl mb-3 text-white glow-white">{SITE.name}</p>
          <p className="text-white/40 text-sm max-w-xs">{SITE.tagline}</p>
        </div>

        <div>
          <p className="text-label text-moss-300/40 mb-4">Contact</p>
          <ul className="space-y-2 text-white/50 text-sm text-mono">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-moss-300 transition-colors">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-moss-300 pulse-glow" />
              <span className="text-moss-300/80">{SITE.availability}</span>
            </li>
            <li>Serving {SITE.serviceArea}</li>
            <li>{SITE.responseTime}</li>
          </ul>
        </div>

        <div>
          <p className="text-label text-moss-300/40 mb-4">Site</p>
          <ul className="flex flex-col gap-2 text-label text-white/50">
            <li><Link to="/work" className="hover:text-moss-300 transition-colors">Work</Link></li>
            <li><Link to="/about" className="hover:text-moss-300 transition-colors">About</Link></li>
            <li><Link to="/products" className="hover:text-moss-300 transition-colors">Products</Link></li>
            <li><Link to="/#contact" className="hover:text-moss-300 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="hairline" />

      <div className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-3 text-white/30 text-xs text-mono">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p>
          Concept projects shown in our portfolio are illustrative work, not real clients, unless noted otherwise.
        </p>
      </div>
    </footer>
  );
};

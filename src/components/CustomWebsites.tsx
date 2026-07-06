import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SHOWCASE = [
  { name: 'Crestline Web Studio', trade: 'Interior Design', image: '/work/crestline.jpg', url: 'https://crestlinewebstudio.com' },
  { name: 'Brightline Painting', trade: 'Painting', image: '/work/brightline.jpg', url: 'https://brightline-home-painting.pages.dev' },
  { name: 'Whisker & Bean', trade: 'Cat Cafe', image: '/work/whisker-and-bean.jpg', url: 'https://whisker-and-bean-cafe.pages.dev' },
];

const Frame: React.FC<{ item: (typeof SHOWCASE)[number]; index: number }> = ({ item, index }) => (
  <motion.a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="group block"
  >
    <div className="border border-line bg-charcoal overflow-hidden hover:border-line-strong transition-colors">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-mono text-[0.6rem] text-white/25 truncate">{item.name.toLowerCase().replace(/[^a-z]/g, '')}.com</span>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      </div>
    </div>
    <div className="flex items-center justify-between mt-4">
      <div>
        <h3 className="text-huge text-lg">{item.name}</h3>
        <span className="text-label text-white/30">{item.trade}</span>
      </div>
      <span className="text-label text-white/30 group-hover:text-moss-300 transition-colors">Visit →</span>
    </div>
  </motion.a>
);

export const CustomWebsites: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-10 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-label text-moss-300/50 text-mono">Custom Websites</span>
            <h2 className="text-huge text-4xl md:text-6xl mt-3">
              Designed around your brand — <span className="text-moss-300">never a template.</span>
            </h2>
            <p className="text-white/50 mt-5 leading-relaxed max-w-lg">
              Every site is hand-built from your colors, your photos, and how your customers actually buy.
              No drag-and-drop theme with your logo dropped on top — a site that looks like it was made
              for you, because it was.
            </p>
          </div>
          <Link
            to="/work"
            className="shrink-0 text-label text-mono text-white/50 border border-line px-6 py-3 hover:border-moss-400/50 hover:text-moss-200 transition-colors"
          >
            See all work →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SHOWCASE.map((item, i) => (
            <Frame key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

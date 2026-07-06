import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PricingCalculator } from '../components/PricingCalculator';

const PRODUCTS = [
  {
    tag: '01',
    name: 'Website Build',
    price: 'Flat $500',
    body: 'A custom, hand-coded site — up to 5 pages, mobile-first, SEO-sound, with your contact form wired in. No templates, no tiers to guess between.',
  },
  {
    tag: '02',
    name: 'Maintenance',
    price: 'From $50/mo',
    body: 'Ongoing edits, security patches, and software updates. Standard is 3 hours/month of design & dev; Premium is 6. Your only job is running your business.',
  },
  {
    tag: '03',
    name: 'Missed-Call Text-Back',
    price: 'Add-on',
    body: 'When a call goes unanswered, we auto-text the caller within ~2 minutes so the lead never reaches a competitor. Optional AI can reply and book the job.',
    highlight: true,
  },
];

export const Products: React.FC = () => {
  return (
    <section className="pt-40 pb-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <span className="text-label text-moss-300/50 text-mono">Products &amp; Pricing</span>
        <h1 className="text-huge text-5xl md:text-7xl mt-3 mb-4">What we build.</h1>
        <p className="text-white/40 max-w-lg mb-16">
          Straightforward pricing — pick what fits your business, or estimate a full project below.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-8 border bg-charcoal ${p.highlight ? 'border-moss-400/40 glow-border' : 'border-line'}`}
            >
              <span className="text-mono text-xs text-white/30">{p.tag}</span>
              <h3 className="text-huge text-2xl mt-3">{p.name}</h3>
              <p className="text-moss-300 text-sm text-mono mt-1 mb-4">{p.price}</p>
              <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <PricingCalculator />
          <div className="p-8 md:p-12 border border-line bg-charcoal flex flex-col justify-between h-full">
            <div>
              <p className="text-label text-white/40 mb-3">Ready to start?</p>
              <p className="text-huge text-3xl md:text-4xl mb-4">Let's map the mix that fits your business.</p>
              <p className="text-white/50 leading-relaxed">
                Tell us what you do and where customers slip through the cracks — we'll come back with a
                plan and a fixed quote. No obligation.
              </p>
            </div>
            <Link
              to="/#contact"
              className="inline-block mt-8 px-7 py-3 border border-moss-400/50 text-moss-200 text-sm text-mono hover:bg-moss-400 hover:text-ink transition-colors glow-border self-start"
            >
              Get your quote →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

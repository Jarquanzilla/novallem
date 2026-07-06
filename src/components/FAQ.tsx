import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const FAQS = [
  {
    q: 'How much does a website cost?',
    a: 'Builds are a flat rate — no confusing tiers. The current rate is $500 for up to a 5-page site, including hosting setup and two rounds of revisions. Add-ons like maintenance or missed-call text-back are separate monthly plans. Estimate yours on the Products page.',
  },
  {
    q: 'How long does it take?',
    a: 'Most builds go live within about a week of our intake call. We work in a tight time-box and get your written sign-off before anything ships.',
  },
  {
    q: 'Do I own my website?',
    a: 'Yes. The site is yours. You buy your own domain (about $15/year) and we handle the setup. If you ever leave, the site goes with you.',
  },
  {
    q: 'What is missed-call text-back?',
    a: 'When a customer calls and you can\'t pick up, the system automatically texts them back within about two minutes so the lead doesn\'t call a competitor. It\'s an add-on to any maintenance or premium plan.',
  },
  {
    q: 'What if I need changes after launch?',
    a: 'Pay-as-you-go, or put us on a monthly maintenance plan (from $50/mo) that includes a set number of hours for edits, updates, and security. Your only job is running your business.',
  },
];

const Item: React.FC<{ item: (typeof FAQS)[number]; index: number }> = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="border-b border-line"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="text-huge text-xl md:text-2xl group-hover:text-moss-200 transition-colors">{item.q}</span>
        <span
          className={`shrink-0 text-2xl text-moss-300 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-white/50 leading-relaxed max-w-2xl pb-6">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-10 border-t border-line">
      <div className="max-w-3xl mx-auto">
        <span className="text-label text-moss-300/50 text-mono">Questions, answered</span>
        <h2 className="text-huge text-4xl md:text-6xl mt-3 mb-14">Before you ask.</h2>
        <div>
          {FAQS.map((item, i) => (
            <Item key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

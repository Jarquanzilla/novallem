import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SITE } from '../siteConfig';

// PLACEHOLDER: swap in the deployed novallem-contact-relay Worker URL
// (e.g. 'https://novallem-contact-relay.<subdomain>.workers.dev').
const CONTACT_RELAY_URL = 'https://novallem-contact-relay.nealechristian4.workers.dev';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(CONTACT_RELAY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ site: 'novallem', name, email, business, message }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-10 border-t border-line scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
        <div>
          <span className="text-label text-moss-300/50 text-mono">Start here</span>
          <h2 className="text-huge text-4xl md:text-6xl mt-3">
            Tell us what your <span className="text-moss-300">business needs.</span>
          </h2>
          <p className="text-white/50 mt-6 leading-relaxed max-w-md">
            No obligation, no pressure — just a quick note about your business and where customers
            are slipping through. We reply within one business day.
          </p>

          <ul className="mt-10 flex flex-col gap-4 text-sm">
            <li className="flex items-center gap-3 text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-moss-300 pulse-glow" />
              <span className="text-moss-300/80">{SITE.availability}</span>
            </li>
            <li className="flex items-center gap-3 text-white/50 text-mono">
              <span className="text-white/30">↳</span>
              <a href={`mailto:${SITE.email}`} className="hover:text-moss-300 transition-colors">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-3 text-white/50 text-mono">
              <span className="text-white/30">↳</span> Serving {SITE.serviceArea}
            </li>
          </ul>
        </div>

        {status === 'sent' ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-moss-400/40 glow-border p-10 bg-charcoal"
          >
            <p className="text-huge text-3xl mb-3 text-moss-200">Message sent</p>
            <p className="text-white/50">Thanks — we'll get back to you within 1 business day.</p>
          </motion.div>
        ) : (
          <form className="border border-line p-8 md:p-12 bg-charcoal flex flex-col gap-5" onSubmit={handleSubmit}>
            <p className="text-label text-white/40 mb-2">Send a message</p>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30"
            />
            <input
              type="text"
              name="business"
              placeholder="Business name"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30"
            />
            <textarea
              name="message"
              placeholder="What do you need?"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-transparent border-b border-line py-3 outline-none focus:border-white/60 transition-colors placeholder:text-white/30 resize-none"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="text-label border border-white/30 px-6 py-3 hover:bg-white hover:text-ink transition-colors self-start mt-2 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending…' : 'Send'}
            </button>
            {status === 'error' && (
              <p className="text-red-400/80 text-xs">
                Something went wrong — email {SITE.email} directly instead.
              </p>
            )}
            <p className="text-white/30 text-xs">Goes straight to {SITE.email}.</p>
          </form>
        )}
      </div>
    </section>
  );
};

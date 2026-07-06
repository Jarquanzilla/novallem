import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '62%', label: 'of calls to local businesses go unanswered' },
  { value: '78%', label: 'of customers hire whoever replies first' },
  { value: '2 min', label: 'and the lead has already called a competitor' },
];

const CHAT = [
  { type: 'missed', text: 'Missed call · (918) 555-0142', time: '2:14 PM' },
  { type: 'out', text: "Hey — sorry we missed your call! This is Tulsa Roofing. What can we help you with? Reply here and we'll get right back to you.", time: '2:16 PM' },
  { type: 'in', text: 'Oh awesome — need a quote on a roof leak this week', time: '2:17 PM' },
  { type: 'out', text: 'Perfect, we can come out Thursday. What street are you on?', time: '2:17 PM' },
];

const Bubble: React.FC<{ item: (typeof CHAT)[number]; index: number }> = ({ item, index }) => {
  if (item.type === 'missed') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.5, duration: 0.5 }}
        className="flex flex-col items-center gap-1 py-2"
      >
        <span className="text-mono text-[0.65rem] text-white/30 tracking-wide">{item.text}</span>
        <span className="text-mono text-[0.6rem] text-red-400/60">↖ No answer</span>
      </motion.div>
    );
  }

  const outgoing = item.type === 'out';
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${outgoing ? 'items-end' : 'items-start'}`}
    >
      <div
        className={`max-w-[80%] px-4 py-2.5 text-sm leading-snug ${
          outgoing
            ? 'bg-moss-400 text-ink rounded-2xl rounded-br-md'
            : 'bg-white/10 text-paper rounded-2xl rounded-bl-md'
        }`}
      >
        {item.text}
      </div>
      <span className="text-mono text-[0.58rem] text-white/25 mt-1 px-1">{item.time}</span>
    </motion.div>
  );
};

export const MissedCallProduct: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-10 border-t border-line relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 78% 30%, rgba(148,160,92,0.10), transparent 55%)' }}
      />

      <div className="relative grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Copy */}
        <div>
          <span className="text-label text-moss-300/60 text-mono">New Add-On · Missed-Call Text-Back</span>
          <h2 className="text-huge text-4xl md:text-6xl mt-4">
            Never lose a lead <span className="text-moss-300">to a missed call</span> again.
          </h2>
          <p className="text-white/55 mt-6 leading-relaxed max-w-lg">
            When a call goes unanswered, we automatically text the caller back within two minutes —
            a friendly message from your business that turns a missed ring into a live conversation.
            No app for you to check, no lead left on hold.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-10 max-w-lg">
            {STATS.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l border-line-strong pl-3"
              >
                <div className="text-huge text-2xl md:text-3xl text-moss-300">{s.value}</div>
                <div className="text-white/40 text-xs mt-1 leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <ul className="mt-10 flex flex-col gap-3 max-w-lg">
            {[
              'Fires automatically ~2 minutes after any missed call',
              'Your words, your business name — fully customizable',
              'Replies land as normal texts, straight to your phone',
              'Add-on to any Maintenance or Premium plan',
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-white/60 text-sm">
                <span className="text-moss-400 mt-0.5 shrink-0">→</span>
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-block mt-10 px-7 py-3 border border-moss-400/50 text-moss-200 text-sm text-mono hover:bg-moss-400 hover:text-ink transition-colors glow-border"
          >
            Add it to your site →
          </a>
        </div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[320px] rounded-[2.5rem] border border-line-strong bg-charcoal p-3 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
            <div className="rounded-[2rem] bg-ink border border-line overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-line">
                <div className="w-9 h-9 rounded-full bg-moss-400/20 border border-moss-400/40 flex items-center justify-center text-moss-300 text-mono text-xs">
                  TR
                </div>
                <div>
                  <div className="text-sm text-paper">Tulsa Roofing</div>
                  <div className="text-[0.62rem] text-moss-300/70 text-mono">Auto-reply active</div>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-moss-400 pulse-glow" />
              </div>

              {/* Conversation */}
              <div className="flex flex-col gap-3 px-4 py-6 min-h-[380px]">
                {CHAT.map((item, i) => (
                  <React.Fragment key={i}>
                    {i === 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-2 my-1"
                      >
                        <div className="flex-1 h-px bg-line" />
                        <span className="text-mono text-[0.58rem] text-moss-300/60">2 min later · auto-sent</span>
                        <div className="flex-1 h-px bg-line" />
                      </motion.div>
                    )}
                    <Bubble item={item} index={i} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

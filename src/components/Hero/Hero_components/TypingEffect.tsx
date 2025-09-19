import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

export default function TypingEffect() {
  const { t } = useLanguage();
  const phrases = useMemo(() => t.typingPhrases, [t.typingPhrases]);
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showTyping, setShowTyping] = useState(false);

  // Animation delay before typing starts
  useEffect(() => {
    const timer = setTimeout(() => setShowTyping(true), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showTyping) return;
    const currentPhrase = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentPhrase.slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, 55);
    } else if (!deleting && charIdx === currentPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentPhrase.slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, 35);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIdx((phraseIdx + 1) % phrases.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, showTyping]);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
      className="block text-xl md:text-2xl font-mono text-indigo-300 mt-2"
      style={{ letterSpacing: '0.04em', minHeight: '2.5rem' }}
    >
      {showTyping ? (
        <>
          {displayed}
          <span className="animate-pulse text-indigo-400">|</span>
        </>
      ) : (
        // Empty for animation entrance
        <span>&nbsp;</span>
      )}
    </motion.span>
  );
}

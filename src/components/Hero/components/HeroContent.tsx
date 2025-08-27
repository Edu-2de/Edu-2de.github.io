import { motion } from 'framer-motion';
import TypingEffect from '../components/TypingEffect';
import HeroSocialLinks from '../components/HeroSocialLinks';
import { ArrowDown } from 'lucide-react';

export default function HeroContent({
  nameHover,
  setNameHover,
  centerRef,
  nameRef,
  controls,
  nameVariants,
  textVariants,
  scrollToNext,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <motion.div
      ref={centerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={controls}
      className="relative z-30 flex flex-col items-center text-center px-8"
    >
      <motion.div
        ref={nameRef}
        initial="hidden"
        animate="visible"
        className="relative mb-4"
        onMouseEnter={() => setNameHover(true)}
        onMouseLeave={() => setNameHover(false)}
      >
        <motion.h1
          custom={0}
          variants={nameVariants}
          className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white transition-all duration-300 cursor-default mb-4 ${
            nameHover
              ? 'drop-shadow-[0_0_30px_rgba(148,163,184,0.6)]'
              : 'drop-shadow-[0_0_20px_rgba(148,163,184,0.4)]'
          }`}
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          EDUARDO
        </motion.h1>
        <motion.h2
          custom={0}
          variants={nameVariants}
          className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white transition-all duration-300 cursor-default mb-2 ${
            nameHover
              ? 'drop-shadow-[0_0_30px_rgba(148,163,184,0.6)]'
              : 'drop-shadow-[0_0_20px_rgba(148,163,184,0.4)]'
          }`}
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          PAIM
        </motion.h2>
        <TypingEffect />
      </motion.div>
      <motion.div custom={2} initial="hidden" animate="visible" variants={textVariants} className="mb-12">
        <p className="text-slate-400 text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
          Crafting digital experiences in the <span className="text-slate-300 font-medium">cosmic web</span> of modern technology.
        </p>
      </motion.div>
      {/* Social links below the description */}
      <HeroSocialLinks />
      {/* Explore button below social links */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }}>
        <motion.button
          onClick={scrollToNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-slate-500 hover:text-slate-400 transition-colors duration-200 group flex flex-col items-center mt-8"
        >
          <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Explore
          </span>
          <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
            <ArrowDown size={20} />
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
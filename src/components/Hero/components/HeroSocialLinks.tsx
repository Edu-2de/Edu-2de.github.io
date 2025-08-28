import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSocialLinks() {
  return (
    <motion.div custom={3} initial="hidden" animate="visible" className="mb-1">
      <div className="flex justify-center gap-8">
        {[
          { icon: Github, href: 'https://github.com/Edu-2de', label: 'GitHub' },
          { icon: Linkedin, href: '#', label: 'LinkedIn' },
          { icon: Mail, href: 'mailto:contato@eduardosilva.dev', label: 'Email' },
        ].map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.div key={social.label} className="relative group">
              <motion.a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 2 + index * 0.1 },
                }}
                className="w-16 h-16 border-2 border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-200 backdrop-blur-sm hover:bg-slate-800/30"
              >
                <Icon size={24} />
              </motion.a>
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute top-18 left-1/2 transform -translate-x-1/2 text-sm text-slate-500 font-medium whitespace-nowrap pointer-events-none bg-slate-900/90 px-3 py-1 rounded backdrop-blur-sm"
              >
                {social.label}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
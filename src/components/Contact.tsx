'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function Contact() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-24 bg-neutral-900">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">{t.contactTitle}</h2>
          <div className="w-20 h-px bg-neutral-600 mx-auto mb-8"></div>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">{t.contactDescription}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light text-white mb-6">{t.getInTouch}</h3>
              <p className="text-neutral-400 leading-relaxed mb-8">{t.contactDescription}</p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <motion.a
                href="mailto:contato@eduardosilva.dev"
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-all duration-300 border border-neutral-700 hover:border-neutral-600"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-neutral-300" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Email</div>
                  <div className="text-white font-medium">contato@eduardosilva.dev</div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-all duration-300 border border-neutral-700 hover:border-neutral-600"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-neutral-300" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">WhatsApp</div>
                  <div className="text-white font-medium">+55 11 99999-9999</div>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-medium text-white mb-4">{t.findMeOnline}</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-neutral-800 hover:bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-300 border border-neutral-700 hover:border-neutral-600"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-neutral-800 rounded-2xl p-8 flex flex-col justify-center border border-neutral-700"
          >
            <div className="text-center">
              <h3 className="text-2xl font-light text-white mb-6">{t.readyToStartProject}</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">{t.contactDescription}</p>

              <div className="space-y-4">
                <motion.a
                  href="mailto:contato@eduardosilva.dev?subject=New Project Inquiry"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full bg-white text-neutral-900 py-4 px-6 rounded-lg font-medium hover:bg-neutral-100 transition-all duration-300"
                >
                  {t.startConversation}
                </motion.a>

                <motion.a
                  href="https://calendly.com/eduardosilva"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full border border-neutral-600 text-neutral-300 py-4 px-6 rounded-lg font-medium hover:bg-neutral-700 hover:border-neutral-500 hover:text-white transition-all duration-300"
                >
                  {t.scheduleCall}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-24 pt-12 border-t border-neutral-700"
        >
          <p className="text-neutral-500 text-sm">{t.footerText}</p>
        </motion.div>
      </div>
    </section>
  );
}
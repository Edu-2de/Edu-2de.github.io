import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Eduardo Silva - Full Stack Developer',
  description:
    'Eduardo Silva personal portfolio - Full Stack Developer specialized in React, Next.js, Node.js and modern technologies.',
  keywords: 'Eduardo Silva, Dev, Full Stack, React, Next.js, TypeScript, JavaScript',
  authors: [{ name: 'Eduardo Silva' }],
  robots: 'index, follow',
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
    'Portfólio pessoal de Eduardo Silva - Desenvolvedor Full Stack especializado em React, Next.js, Node.js e tecnologias modernas.',
  keywords: 'Eduardo Silva, Desenvolvedor, Full Stack, React, Next.js, TypeScript, JavaScript',
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import StarField from "./components/StarField";
import AnimatedBackground from "./components/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bese Portfolyosu - Full Stack Geliştirici",
  description: "Modern web teknolojileri ile yaratıcı çözümler üreten bir Full Stack yazılım geliştiricinin portfolyosu",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "İsmail" }],
  openGraph: {
    title: "Bese Portfolyosu - Full Stack Geliştirici",
    description: "Modern web teknolojileri ile yaratıcı çözümler üreten bir Full Stack yazılım geliştiricinin portfolyosu",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#030014" />
      </head>
      <body className="font-sans antialiased relative min-h-screen selection:bg-blue-500/30 selection:text-white">
        <div className="fixed inset-0 overflow-hidden">
          <AnimatedBackground />
          <StarField />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="relative z-10 py-6 mt-auto">
            <div className="container mx-auto px-4 text-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Bese. Tüm hakları saklıdır.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

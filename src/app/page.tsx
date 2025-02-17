'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const skills = [
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { name: 'DevOps', items: ['Docker', 'Git', 'CI/CD', 'AWS'] },
    { name: 'Tools', items: ['VS Code', 'Figma', 'Postman', 'Firebase'] }
  ];

  const achievements = [
    { number: '50+', text: 'Başarılı Proje' },
    { number: '30+', text: 'Mutlu Müşteri' },
    { number: '5+', text: 'Yıl Deneyim' },
    { number: '100%', text: 'Proje Tamamlama' }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 z-10"
          style={{ opacity, scale }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
            <motion.div 
              className="flex-1 text-center md:text-left space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold space-y-3">
                <motion.span 
                  className="block text-blue-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Merhaba, Ben Bese
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient-x"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Full Stack Developer
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Modern web teknolojileri ile yaratıcı ve kullanıcı dostu uygulamalar geliştiriyorum. 
                Her projede en yeni teknolojileri kullanarak performans ve kullanılabilirlik odaklı çözümler üretiyorum.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link 
                  href="/projects" 
                  className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-white transition-all duration-300 transform hover:scale-105"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient" />
                  <span className="relative flex items-center">
                    Projelerimi Gör
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </span>
                </Link>

                <Link 
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:text-white"
                >
                  <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40" />
                  <span className="relative">İletişime Geç</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full max-w-lg mx-auto h-[400px] group">
                <Image
                  src="/globe.svg"
                  alt="3D Globe"
                  fill
                  className="object-contain transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-12"
                  priority
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Teknoloji Yetkinliklerim
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                className="p-6 rounded-xl glass-effect hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.name}</h3>
                <div className="space-y-2">
                  {category.items.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <motion.div
                        className="w-2 h-2 bg-purple-400 rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                      />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.text}
                className="text-center p-6 rounded-xl glass-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  {achievement.number}
                </motion.div>
                <div className="text-gray-400">{achievement.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

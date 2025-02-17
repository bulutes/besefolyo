'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const experiences = [
    {
      year: '2023',
      company: 'Tech Solutions',
      role: 'Senior Full Stack Developer',
      description: 'Büyük ölçekli e-ticaret projelerinde liderlik, mikroservis mimarisi ve cloud çözümleri',
    },
    {
      year: '2021',
      company: 'Digital Agency',
      role: 'Frontend Developer',
      description: 'React ve Next.js ile modern web uygulamaları geliştirme, performans optimizasyonu',
    },
    {
      year: '2019',
      company: 'Startup Hub',
      role: 'Junior Developer',
      description: 'JavaScript ve React ile kullanıcı arayüzleri geliştirme',
    },
  ];

  const education = [
    {
      year: '2019',
      school: 'Bilgisayar Mühendisliği',
      degree: 'Lisans Derecesi',
      description: 'Algoritma, veri yapıları ve yazılım mühendisliği prensipleri üzerine kapsamlı eğitim',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Profil Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <Image
                  src="/globe.svg"
                  alt="Profil"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Hakkımda
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            5 yıllık deneyimli bir Full Stack Developer olarak, modern web teknolojileri konusunda uzmanım. 
            Kullanıcı deneyimini ön planda tutarak, performans odaklı ve ölçeklenebilir uygulamalar geliştiriyorum.
          </p>
        </motion.div>

        {/* İş Deneyimi */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            İş Deneyimi
          </h2>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="relative pl-8 pb-8 group"
              >
                {/* Timeline çizgisi */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 group-last:bg-gradient-to-b group-last:from-gray-800 group-last:to-transparent" />
                
                {/* Timeline noktası */}
                <motion.div
                  className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.5 }}
                />

                <div className="glass-card p-6 rounded-xl">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                    <span className="text-gray-500 text-sm">{exp.year}</span>
                  </div>
                  <div className="text-purple-400 mb-2">{exp.company}</div>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Eğitim */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Eğitim
          </h2>

          <div className="space-y-8">
            {education.map((edu) => (
              <motion.div
                key={edu.school}
                variants={itemVariants}
                className="relative pl-8"
              >
                {/* Timeline noktası */}
                <motion.div
                  className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-purple-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.5 }}
                />

                <div className="glass-card p-6 rounded-xl">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-purple-400">{edu.school}</h3>
                    <span className="text-gray-500 text-sm">{edu.year}</span>
                  </div>
                  <div className="text-blue-400 mb-2">{edu.degree}</div>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
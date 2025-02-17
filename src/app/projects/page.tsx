'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'E-Ticaret Platformu',
      description: 'Modern bir e-ticaret platformu. Next.js ve Node.js kullanılarak geliştirildi. Hızlı performans ve SEO odaklı.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: '/window.svg',
      link: 'https://github.com',
      features: ['Gerçek zamanlı stok takibi', 'Gelişmiş arama', 'Ödeme entegrasyonu'],
      stats: {
        Kullanıcı: '1000+',
        Ürün: '10K+',
        Sipariş: '5K+'
      }
    },
    {
      title: 'Sosyal Medya Uygulaması',
      description: 'Canlı sohbet ve medya paylaşımı yapılabilen modern bir sosyal platform.',
      tech: ['React', 'Firebase', 'TypeScript', 'Material UI'],
      image: '/window.svg',
      link: 'https://github.com',
      features: ['Gerçek zamanlı mesajlaşma', 'Medya paylaşımı', 'Kullanıcı profilleri'],
      stats: {
        Kullanıcı: '5000+',
        Mesaj: '100K+',
        Medya: '20K+'
      }
    },
    {
      title: 'Task Yönetim Sistemi',
      description: 'Ekipler için geliştirilmiş kapsamlı proje ve görev yönetim platformu.',
      tech: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      image: '/window.svg',
      link: 'https://github.com',
      features: ['Gerçek zamanlı güncelleme', 'Takvim entegrasyonu', 'Raporlama'],
      stats: {
        Takım: '200+',
        Görev: '50K+',
        Kullanıcı: '2000+'
      }
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Projelerim
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Modern web teknolojileri kullanarak geliştirdiğim bazı projeler. 
            Her projede en iyi kullanıcı deneyimini sunmak için çalıştım.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Hover efekti için gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Proje görseli */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>
              
              {/* Proje içeriği */}
              <div className="relative p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
                
                {/* Teknolojiler */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-xs border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Özellikler */}
                <div className="space-y-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-300">
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* İstatistikler */}
                <div className="grid grid-cols-3 gap-4 py-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-blue-400 font-bold">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Proje linki */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group"
                >
                  Projeyi İncele
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </a>
              </div>

              {/* Hover border efekti */}
              <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/50 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
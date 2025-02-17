'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simüle edilmiş form gönderimi
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '💻' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '👔' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📸' }
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            İletişime Geç
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Bir projeniz mi var? Birlikte çalışmak ister misiniz? 
            Aşağıdaki form veya sosyal medya hesaplarım üzerinden bana ulaşabilirsiniz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-xl"
          >
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">
              Mesaj Gönder
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  İsim
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white"
                  placeholder="Adınız Soyadınız"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  E-posta
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Mesaj
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white resize-none"
                  placeholder="Mesajınız..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 rounded-lg font-medium text-white transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                style={{
                  background: isSubmitting 
                    ? 'rgb(75, 85, 99)' 
                    : 'linear-gradient(to right, rgb(59, 130, 246), rgb(147, 51, 234))'
                }}
              >
                <span className={`absolute inset-0 h-full w-full flex items-center justify-center transition-all ${isSubmitting ? 'opacity-100' : 'opacity-0'}`}>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                <span className={`transition-all ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                  {submitStatus === 'success' ? 'Gönderildi!' : 'Gönder'}
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Sosyal Medya ve İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* İletişim Bilgileri */}
            <div className="glass-card p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-purple-400">
                İletişim Bilgileri
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">E-posta</div>
                    <a href="mailto:contact@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    📱
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Telefon</div>
                    <a href="tel:+901234567890" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +90 123 456 7890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sosyal Medya Linkleri */}
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6 text-purple-400">
                Sosyal Medya
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="text-gray-300">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Coffee } from 'lucide-react';

import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/birendra72',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/birendra-singh-85a95a299',
    label: 'LinkedIn'
  },
  {
    icon: Twitter,
    href: 'https://x.com/BirendraSi43813',
    label: 'Twitter'
  },
  {
    icon: Mail,
    href: 'mailto:birendrasingh7200@gmail.com',
    label: 'Email'
  }
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Birendra Singh
                </h3>
                <p className="text-muted-foreground mb-2">
                  Future Tech Creator | Exploring, Assembling & Innovating Tech Stacks
                </p>
                <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                  "Technology is not just about using tools, but about connecting them creatively to solve problems."
                </blockquote>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted/50 hover:bg-primary/10 rounded-lg text-muted-foreground hover:text-primary transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">Get In Touch</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-sm hover:text-primary transition-colors duration-300"
                    >
                      birendrasingh7200@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-sm">Agra, Utter Pradesh</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-green-600 dark:text-green-400">
                        Available for opportunities
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container flex flex-col items-center justify-center space-y-2 text-sm text-muted-foreground"
      >
        <div className="flex items-center space-x-2">
          <span>© {new Date().getFullYear()} Birendra Singh. Made with</span>
          
          {/* Pulsing Brain Animation for AI/ML Profile */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <Brain className="w-4 h-4 text-indigo-500" />
          </motion.div>
          
          <span>and data-driven passion.</span>
        </div>
        
        {/* Optional secondary line */}
        <div className="flex items-center text-xs opacity-70">
          <span>Fueled by</span>
          <Coffee className="w-3 h-3 mx-1" />
          <span>and Neural Networks</span>
        </div>
      </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <div className="text-sm text-muted-foreground">
                {/* Built with React, TypeScript & Tailwind CSS */}
              </div>
              <button
                onClick={scrollToTop}
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition-all duration-300 hover:scale-110"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </footer>
  );
};
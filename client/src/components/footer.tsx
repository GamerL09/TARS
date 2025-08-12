import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  const contactInfo = [
    {
      icon: MessageCircle,
      label: 'Discord',
      value: 'frontman.6969',
      color: 'text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'anonymousgroupofeducators@gmail.com',
      color: 'text-purple-400'
    }
  ];

  return (
    <footer className="content-layer bg-black/50 backdrop-blur-sm border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">TARS</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Futuristic Discord bot development with cutting-edge AI automation solutions
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold gradient-text mb-4">Contact Us</h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <contact.icon className={`${contact.color}`} size={20} />
                  <span className="text-gray-300 text-sm">{contact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold gradient-text mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="/services" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Services
              </a>
              <a href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            © 2025 TARS. Crafted with precision for the future of Discord automation.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
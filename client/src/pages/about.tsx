import { motion } from 'framer-motion';
import { Rocket, Handshake, Infinity } from 'lucide-react';

export default function About() {
  const technologies = [
    { name: 'Python', icon: '🐍' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS Cloud', icon: '☁️' },
    { name: 'TensorFlow', icon: '🧠' }
  ];

  const stats = [
    { value: '500+', label: 'Bots Deployed' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' }
  ];

  const whyChooseUs = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We don\'t just follow trends—we create them. Our bots incorporate the latest AI advancements and cutting-edge features.',
      color: 'text-blue-400'
    },
    {
      icon: Handshake,
      title: 'Partnership Approach',
      description: 'We work closely with you to understand your community\'s unique needs and deliver solutions that exceed expectations.',
      color: 'text-purple-400'
    },
    {
      icon: Infinity,
      title: 'Future-Proof Solutions',
      description: 'Our bots are built to evolve and adapt, ensuring they remain relevant and powerful as your community grows.',
      color: 'text-green-400'
    }
  ];

  return (
    <div className="content-layer min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            About TARS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of Discord automation with cutting-edge technology and innovative solutions
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At TARS, we believe that Discord communities deserve more than basic automation. Our mission is to create intelligent, adaptive, and futuristic bot solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We combine artificial intelligence, advanced programming techniques, and deep understanding of community dynamics to deliver bots that feel natural, responsive, and genuinely helpful.
            </p>
            <div className="flex space-x-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Our Technology Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why TARS Stands Apart
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`text-4xl mb-4 ${item.color}`}>
                  <item.icon size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

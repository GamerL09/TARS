import { motion } from 'framer-motion';
import { Rocket, Play, Brain, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="content-layer">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text leading-tight"
            variants={itemVariants}
          >
            TARS
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            Futuristic Discord Bot Development
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Transforming your Discord server with cutting-edge AI-powered bots and custom automation solutions
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={itemVariants}
          >
            <Button className="glow-border px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform animate-pulse-glow">
              <Rocket className="mr-2" size={20} />
              Launch Project
            </Button>
            <Button variant="outline" className="glass-effect px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform">
              <Play className="mr-2" size={20} />
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose TARS?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-Powered Intelligence',
                description: 'Advanced machine learning algorithms that adapt and learn from your server\'s unique needs.',
                color: 'text-blue-400',
                delay: 0
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Military-grade encryption and security protocols to protect your community data.',
                color: 'text-purple-400',
                delay: 0.2
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized performance with sub-millisecond response times for seamless user experience.',
                color: 'text-green-400',
                delay: 0.4
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                animate={floatAnimation}
                style={{ animationDelay: `${feature.delay}s` }}
              >
                <div className={`text-4xl mb-4 ${feature.color}`}>
                  <feature.icon size={48} />
                </div>
                <h3 className="text-xl font-bold mb-4 gradient-text">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

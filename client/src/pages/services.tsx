import { motion } from 'framer-motion';
import { Bot, Users, Gamepad2, TrendingUp, Code, Wrench, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: 'Custom Discord Bots',
      description: 'Tailored automation solutions with advanced AI capabilities, custom commands, and seamless integration.',
      features: ['AI-powered responses', 'Custom command creation', 'Database integration', '24/7 support'],
      color: 'text-blue-400'
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'Advanced moderation tools, automated member management, and engagement analytics for thriving communities.',
      features: ['Auto-moderation', 'Role management', 'Analytics dashboard', 'Custom rules engine'],
      color: 'text-purple-400'
    },
    {
      icon: Gamepad2,
      title: 'Gaming Integration',
      description: 'Game-specific features, tournament management, leaderboards, and real-time statistics integration.',
      features: ['Game API integration', 'Tournament brackets', 'Live leaderboards', 'Achievement systems'],
      color: 'text-green-400'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Comprehensive server analytics, user behavior insights, and growth optimization strategies.',
      features: ['Real-time metrics', 'Growth tracking', 'Custom reports', 'Predictive analytics'],
      color: 'text-red-400'
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'Custom REST APIs, webhooks, and third-party integrations to extend your bot\'s capabilities.',
      features: ['RESTful APIs', 'Webhook systems', 'Database design', 'Cloud deployment'],
      color: 'text-yellow-400'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and 24/7 technical support to ensure optimal bot performance.',
      features: ['24/7 monitoring', 'Regular updates', 'Bug fixes', 'Performance optimization'],
      color: 'text-cyan-400'
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
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive Discord bot solutions tailored to your community's unique requirements
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glow-border p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`text-5xl mb-6 ${service.color}`}>
                <service.icon size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="text-sm text-gray-400 space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-green-400 mr-2" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full glass-effect hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Bot, Users, Gamepad2, TrendingUp, Code, Wrench, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: 'Custom Discord Bots',
      description: 'Fully custom Discord bots built from scratch to meet your specific requirements and server needs.',
      features: ['Custom commands', 'Moderation tools', 'Fun & utility features', 'Server management'],
      color: 'text-gray-300'
    },
    {
      icon: Users,
      title: 'Community Features',
      description: 'Specialized bot features designed to engage your community and enhance user experience.',
      features: ['Welcome systems', 'Role management', 'Event scheduling', 'Member tracking'],
      color: 'text-gray-400'
    },
    {
      icon: Gamepad2,
      title: 'Gaming Bots',
      description: 'Custom bots tailored for gaming communities with game-specific features and integrations.',
      features: ['Game statistics', 'Player tracking', 'Tournament systems', 'Clan management'],
      color: 'text-gray-500'
    },
    {
      icon: Wrench,
      title: 'Bot Maintenance',
      description: 'Ongoing support and maintenance to keep your custom bot running smoothly and up-to-date.',
      features: ['Regular updates', 'Bug fixes', 'Feature additions', '24/7 monitoring'],
      color: 'text-gray-600'
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

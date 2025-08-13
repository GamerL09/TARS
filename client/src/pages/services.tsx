import { motion } from 'framer-motion';
import { Bot, Users, Gamepad2, TrendingUp, Code, Wrench, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: 'Basic Discord Bot',
      price: '$25 - $45',
      description: 'Essential Discord bot with core moderation and utility features perfect for small to medium servers.',
      features: [
        'Auto-moderation (spam, profanity filter)',
        '5-10 custom commands',
        'Welcome/goodbye messages',
        'Basic role management',
        'Music player functionality',
        'Server statistics tracking'
      ],
      deliveryTime: '3-5 days',
      color: 'text-blue-400'
    },
    {
      icon: Users,
      title: 'Community Bot',
      price: '$50 - $75',
      description: 'Advanced community engagement bot with interactive features and member management systems.',
      features: [
        'Advanced welcome system with images',
        'Leveling & XP system with rewards',
        'Custom reaction roles',
        'Event scheduling & reminders',
        'Member verification system',
        'Server polls & voting',
        'Auto-moderation with warnings'
      ],
      deliveryTime: '5-7 days',
      color: 'text-purple-400'
    },
    {
      icon: Gamepad2,
      title: 'Gaming Bot',
      price: '$60 - $85',
      description: 'Specialized gaming bot with game integrations, player stats, and tournament features.',
      features: [
        'Game statistics tracking',
        'Player leaderboards',
        'Tournament bracket system',
        'Team/clan management',
        'Game-specific commands',
        'Match scheduling',
        'Achievement system'
      ],
      deliveryTime: '7-10 days',
      color: 'text-green-400'
    },
    {
      icon: Code,
      title: 'Premium Custom Bot',
      price: '$75 - $99',
      description: 'Fully customized bot with advanced features, database integration, and unique functionality.',
      features: [
        'Custom database integration',
        'Advanced AI chatbot features',
        'Custom dashboard web interface',
        'API integrations (Spotify, YouTube, etc.)',
        'Advanced analytics & reporting',
        'Multi-server support',
        'Custom branding & design'
      ],
      deliveryTime: '10-14 days',
      color: 'text-orange-400'
    },
    {
      icon: TrendingUp,
      title: 'Bot Upgrades',
      price: '$15 - $35',
      description: 'Add new features or upgrade existing bots with additional functionality and improvements.',
      features: [
        'Add 3-5 new commands',
        'Feature enhancements',
        'Performance optimization',
        'Bug fixes & improvements',
        'Database migrations',
        'Security updates'
      ],
      deliveryTime: '2-4 days',
      color: 'text-cyan-400'
    },
    {
      icon: Wrench,
      title: 'Monthly Maintenance',
      price: '$10 - $20/month',
      description: 'Ongoing support and maintenance to keep your bot running smoothly and up-to-date.',
      features: [
        'Regular updates & patches',
        '24/7 monitoring',
        'Bug fixes within 24hrs',
        'Feature additions (small)',
        'Performance optimization',
        'Priority support'
      ],
      deliveryTime: 'Ongoing',
      color: 'text-red-400'
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
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glow-border p-6 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`text-4xl ${service.color}`}>
                  <service.icon size={40} />
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${service.color}`}>{service.price}</div>
                  <div className="text-xs text-gray-500">{service.deliveryTime}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 gradient-text">{service.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
              
              <ul className="text-xs text-gray-400 space-y-2 mb-6 flex-grow">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={14} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full glass-effect hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all mt-auto">
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

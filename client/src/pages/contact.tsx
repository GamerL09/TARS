import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

interface ContactFormData {
  projectName: string;
  email: string;
  discordServer: string;
  projectType: string;
  projectDetails: string;
  budgetRange: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    projectName: '',
    email: '',
    discordServer: '',
    projectType: '',
    projectDetails: '',
    budgetRange: ''
  });

  const { toast } = useToast();

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: 'Success!',
        description: 'Your project inquiry has been submitted. We\'ll get back to you within 2 hours.',
      });
      setFormData({
        projectName: '',
        email: '',
        discordServer: '',
        projectType: '',
        projectDetails: '',
        budgetRange: ''
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: 'Failed to submit your inquiry. Please try again.',
        variant: 'destructive',
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectName || !formData.email || !formData.projectType || !formData.projectDetails || !formData.budgetRange) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }
    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const responseTimes = [
    { label: 'Initial Response', time: '< 2 hours', color: 'text-green-400' },
    { label: 'Project Quote', time: '< 24 hours', color: 'text-blue-400' },
    { label: 'Development Start', time: '< 48 hours', color: 'text-purple-400' }
  ];

  const developmentProcess = [
    { step: 1, title: 'Consultation', description: 'Understanding your needs and requirements' },
    { step: 2, title: 'Design & Planning', description: 'Creating detailed project architecture' },
    { step: 3, title: 'Development', description: 'Building your custom bot solution' },
    { step: 4, title: 'Testing & Deployment', description: 'Quality assurance and launch' },
    { step: 5, title: 'Support & Maintenance', description: 'Ongoing updates and assistance' }
  ];

  return (
    <div className="content-layer min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Contact TARS
          </h1>
          <p className="text-xl text-gray-300">
            Ready to transform your Discord server? Let's build the future together.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">Start Your Project</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Project Name *</label>
                <Input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) => handleInputChange('projectName', e.target.value)}
                  placeholder="Your Discord Bot Project"
                  className="bg-gray-800 border-gray-600 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Contact Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  className="bg-gray-800 border-gray-600 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Discord Server</label>
                <Input
                  type="text"
                  value={formData.discordServer}
                  onChange={(e) => handleInputChange('discordServer', e.target.value)}
                  placeholder="Server Name or Invite Link"
                  className="bg-gray-800 border-gray-600 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Type *</label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger className="bg-gray-800 border-gray-600">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="custom-bot">Custom Discord Bot</SelectItem>
                    <SelectItem value="community-features">Community Features</SelectItem>
                    <SelectItem value="gaming-bot">Gaming Bot</SelectItem>
                    <SelectItem value="bot-maintenance">Bot Maintenance</SelectItem>
                    <SelectItem value="consultation">Project Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Details *</label>
                <Textarea
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                  placeholder="Tell us about your vision, requirements, and any specific features you need..."
                  className="bg-gray-800 border-gray-600 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range *</label>
                <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange('budgetRange', value)}>
                  <SelectTrigger className="bg-gray-800 border-gray-600">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25-45">$25 - $45</SelectItem>
                    <SelectItem value="50-75">$50 - $75</SelectItem>
                    <SelectItem value="60-85">$60 - $85</SelectItem>
                    <SelectItem value="75-99">$75 - $99</SelectItem>
                    <SelectItem value="custom">Custom Quote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button
                type="submit"
                disabled={submitMutation.isPending}
                className="w-full glow-border py-4 text-lg font-semibold hover:scale-105 transition-transform animate-pulse-glow"
              >
                {submitMutation.isPending ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Launch Project
                  </>
                )}
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              className="glass-effect p-6 rounded-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400" size={20} />
                  <span>anonymousgroupofeducators@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-purple-400 text-xl">💬</span>
                  <span>frontman.6969</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-green-400" size={20} />
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="glass-effect p-6 rounded-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">Response Times</h3>
              <div className="space-y-3">
                {responseTimes.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.label}</span>
                    <span className={item.color}>{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="glass-effect p-6 rounded-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">Development Process</h3>
              <div className="space-y-4">
                {developmentProcess.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-gray-400">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Rocket, Zap, Shield, Database, BarChart3, Globe } from 'lucide-react';

const services = [
  {
    title: 'MVP Development',
    description: 'Transforming your idea into a functional product in weeks. I focus on core features that prove value and attract early adopters.',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    delay: 0.1
  },
  {
    title: 'Scalable Architecture',
    description: 'Building foundations that grow with you. I design systems that handle traffic spikes and complex data without breaking a sweat.',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-violet-500 to-purple-500',
    delay: 0.2
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Deploying with confidence. I set up secure, automated, and cost-effective cloud environments on AWS, Google Cloud, or Vercel.',
    icon: <Database className="w-6 h-6" />,
    color: 'from-indigo-500 to-blue-500',
    delay: 0.3
  },
  {
    title: 'Performance Optimization',
    description: 'Speed is a feature. I optimize every layer of your stack to ensure lightning-fast load times and smooth user experiences.',
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-500',
    delay: 0.4
  },
  {
    title: 'Security & Compliance',
    description: 'Protecting your user data from day one. I implement industry-standard security practices and ensure regulatory compliance.',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    delay: 0.5
  },
  {
    title: 'Full-Stack Excellence',
    description: 'Seamless integration between frontend beauty and backend power. A cohesive experience across the entire technology stack.',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    delay: 0.6
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-offwhite"
          >
            Solutions for <span className="shimmer-text">Modern Founders</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60"
          >
            I don't just write code; I build business assets. Here's how I help startups navigate the technical challenges of early-stage growth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              whileHover={{ y: -5 }}
              className="group p-8 glass rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-[#1A1A1B] rounded-[10px] flex items-center justify-center text-white">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <div className="w-4 h-px bg-violet-400"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

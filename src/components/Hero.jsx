import { motion } from 'framer-motion';
import { ArrowRight, Code2, Rocket, Layout } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 mesh-bg opacity-60"></div>
      
      {/* Floating Background Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none"
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-offwhite"
            style={{ color: '#F5F5F5' }}
          >
            Building the <span className="shimmer-text">Digital Backbone</span> <br className="hidden md:block" />
            for Early-Stage Startups.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl max-w-lg leading-relaxed"
            style={{ color: '#A0A0A8' }}
          >
            I'm Bhuvan G M. I help founders move from zero to scale with high-performance engineering that prioritizes speed, security, and long-term stability.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white overflow-hidden transition-all glow-violet"
              style={{ backgroundColor: '#6366F1' }}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">View My Work</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold glass transition-all"
              style={{ color: '#F5F5F5' }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>

        {/* Visual Element / Floating Cards */}
        <div className="relative hidden lg:block h-[500px]">
          {/* Central Glass Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 gradient-border glass-strong rounded-2xl p-6 flex flex-col justify-between z-20 animate-float"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Code2 size={20} color="#6366F1" />
              </div>
              <div className="px-2 py-1 rounded bg-indigo-500/20 text-indigo-400 text-xs font-bold">Production Ready</div>
            </div>
            <div>
              <div className="h-2 w-1/3 bg-white/20 rounded mb-3"></div>
              <div className="h-2 w-full bg-white/10 rounded mb-2"></div>
              <div className="h-2 w-5/6 bg-white/10 rounded"></div>
            </div>
            <div className="pt-4 border-t border-white/10 flex justify-between items-end">
               <div>
                  <div className="text-xs text-white/50 mb-1">Architecture</div>
                  <div className="text-xl font-bold text-white">Modular</div>
               </div>
               <div className="w-16 h-8 bg-violet-500/20 rounded flex items-center justify-center">
                 <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M0 12L10 8L20 14L40 2" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
                 </svg>
               </div>
            </div>
          </motion.div>

          {/* Orbiting Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute top-10 right-0 w-48 p-4 glass rounded-xl z-30 animate-float-delayed"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center">
                <Rocket size={16} color="#F97316" />
              </div>
              <span className="text-sm font-semibold text-white">MVP Delivery</span>
            </div>
            <p className="text-xs text-white/60">Shipped in weeks, not months.</p>
          </motion.div>

          {/* Orbiting Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute bottom-16 left-0 w-52 p-4 glass rounded-xl z-10 animate-float-slow"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                <Layout size={16} color="#3B82F6" />
              </div>
              <span className="text-sm font-semibold text-white">Scalable Arch</span>
            </div>
            <p className="text-xs text-white/60">Built to handle your next funding round.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

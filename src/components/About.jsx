import { motion } from 'framer-motion';
import { Database, Server, Layout, ShieldCheck, Terminal } from 'lucide-react';

const skills = [
  { name: 'Frontend Architecture', icon: <Layout size={24} />, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { name: 'Backend Systems', icon: <Server size={24} />, color: 'text-green-400', bg: 'bg-green-500/10' },
  { name: 'Database Design', icon: <Database size={24} />, color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { name: 'DevOps & CI/CD', icon: <Terminal size={24} />, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { name: 'System Security', icon: <ShieldCheck size={24} />, color: 'text-red-400', bg: 'bg-red-500/10' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Story Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-offwhite">
                Engineering for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-600">Rapid Growth</span>
              </h2>
              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                <p>
                  Startups don't have the luxury of time. When you are racing to market or scaling to meet unexpected demand, you need architecture that won't crumble under pressure.
                </p>
                <p>
                  As a Full-Stack Developer, my philosophy is simple: build it fast, but build it right. I bridge the gap between compelling user interfaces and robust backend systems, ensuring your product is a joy to use and a breeze to maintain.
                </p>
              </div>
            </motion.div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { label: 'Startups Helped', value: '10+' },
                { label: 'Lines of Code', value: '100k+' },
                { label: 'Coffee Cups', value: '∞' },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="glass p-4 rounded-xl border-t border-white/10"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating Skills Grid */}
          <div className="relative h-[400px] sm:h-[500px]">
             {skills.map((skill, index) => {
               // Calculate position in a circle
               const angle = (index / skills.length) * Math.PI * 2;
               const radius = 120; // base radius
               const x = Math.cos(angle) * radius;
               const y = Math.sin(angle) * radius;

               return (
                 <motion.div
                   key={skill.name}
                   className="absolute top-1/2 left-1/2"
                   initial={{ opacity: 0, scale: 0 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ 
                     duration: 0.8, 
                     delay: index * 0.1,
                     type: "spring"
                   }}
                   style={{
                     x: `calc(-50% + ${x}px)`,
                     y: `calc(-50% + ${y}px)`,
                   }}
                 >
                   <motion.div
                     animate={{ 
                       y: [0, -10, 0],
                     }}
                     transition={{
                       duration: 3 + Math.random() * 2,
                       repeat: Infinity,
                       ease: "easeInOut",
                       delay: Math.random() * 2
                     }}
                     whileHover={{ scale: 1.1, zIndex: 50 }}
                     className={`flex flex-col items-center justify-center p-4 glass rounded-2xl border border-white/5 shadow-xl hover:border-white/20 transition-colors w-32 h-32 group cursor-default`}
                   >
                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:-translate-y-1 ${skill.bg} ${skill.color}`}>
                       {skill.icon}
                     </div>
                     <span className="text-xs font-semibold text-center text-white/80">{skill.name}</span>
                   </motion.div>
                 </motion.div>
               );
             })}
             
             {/* Center Core */}
             <motion.div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center glow-violet z-0 animate-pulse-glow"
               initial={{ opacity: 0, scale: 0 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
             >
                <div className="w-16 h-16 bg-gray-900 rounded-full border-2 border-indigo-400 flex items-center justify-center">
                  <span className="text-white font-bold text-xs tracking-widest uppercase">Core</span>
                </div>
             </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

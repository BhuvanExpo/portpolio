import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Terminal } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Fintech Dashboard MVP',
    category: 'SaaS',
    description: 'A comprehensive financial dashboard built for a Series A startup. Reduced data load times by 60% and improved user retention through an intuitive, data-dense interface.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    image: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(30,30,32,1))',
    featured: true,
  },
  {
    id: 3,
    title: 'E-Commerce Analytics Engine',
    category: 'Data',
    description: 'Developed a robust analytics tracking system for a massive e-commerce platform. Handled millions of events daily with a custom-built dashboard for stakeholders.',
    tech: ['Vue', 'Python', 'PostgreSQL', 'AWS'],
    image: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(30,30,32,1))',
    featured: false,
  }
];

const categories = ['All', 'SaaS', 'Data'];

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 text-offwhite"
            >
              Selected <span className="text-violet-400 glow-text" style={{ color: '#6366F1' }}>Works</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/60"
            >
              Real-world solutions engineered for scale and designed for conversion. 
              Here is how I have helped startups grow.
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 p-1 glass rounded-xl"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-white/10 text-white shadow-lg' 
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring" }}
                className={`group relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/50 transition-colors duration-500 ${
                  project.featured && index === 0 ? 'md:col-span-2 md:aspect-[21/9]' : 'aspect-square md:aspect-[4/3]'
                }`}
              >
                {/* Image Placeholder with Gradient */}
                <div 
                  className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: project.image }}
                />
                
                {/* Noise Overlay */}
                <div className="absolute inset-0 noise z-0 opacity-50 mix-blend-overlay"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-[#1A1A1B] via-[#1A1A1B]/80 to-transparent">
                  
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/20">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/70 mb-6 max-w-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block line-clamp-2 md:line-clamp-none">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                          <span key={tech} className="text-xs font-medium text-white/50 px-2 py-1 glass rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <button className="p-2 rounded-full glass hover:bg-white/10 hover:text-white text-white/70 transition-colors">
                          <Terminal size={18} />
                        </button>
                        <button className="p-2 rounded-full bg-violet-600 text-white hover:bg-violet-500 transition-colors glow-violet">
                          <ExternalLink size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

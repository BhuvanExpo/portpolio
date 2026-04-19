import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle2, Send, Mail } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "hello@bhuvangm.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 blur-[120px] rounded-t-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-6 glow-violet">
             <Mail size={32} className="text-violet-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-offwhite">
            Ready to Build Something <span className="text-violet-400">Extraordinary?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Whether you need a scalable MVP or a complete architectural overhaul, I'm ready to help your startup reach its next milestone.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-strong p-8 md:p-12 rounded-3xl max-w-2xl mx-auto border border-white/10"
        >
          <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Steve Jobs"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="steve@apple.com"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 ml-1">Project Details</label>
              <textarea 
                rows="4"
                placeholder="Tell me about your vision, timeline, and tech stack..."
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none"
              ></textarea>
            </div>
            
            <button className="w-full group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white overflow-hidden transition-all glow-violet bg-violet-600 hover:bg-violet-500">
              <span className="relative z-10">Send Message</span>
              <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-center">
             <p className="text-sm text-white/50 mb-4">Or reach out directly at</p>
             <button 
               onClick={handleCopy}
               className="flex items-center gap-3 px-6 py-3 rounded-full glass hover:bg-white/10 transition-colors group"
             >
               <span className="text-white font-medium">{email}</span>
               {copied ? (
                 <CheckCircle2 size={18} className="text-green-400" />
               ) : (
                 <Copy size={18} className="text-white/50 group-hover:text-white transition-colors" />
               )}
             </button>
          </div>
        </motion.div>

        {/* Footer info */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Bhuvan G M. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}

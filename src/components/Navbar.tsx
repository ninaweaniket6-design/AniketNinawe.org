import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${scrolled ? 'bg-zinc-900/80 backdrop-blur-md border border-zinc-800 shadow-2xl' : 'bg-transparent border border-transparent'}`}>
          <div className="flex-shrink-0">
            <span className="font-display font-bold text-lg text-white tracking-tighter">ANIKET.</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-zinc-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-zinc-800/50">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-white p-1 transition-colors">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white hover:bg-zinc-800 block px-4 py-3 rounded-xl text-sm font-medium transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

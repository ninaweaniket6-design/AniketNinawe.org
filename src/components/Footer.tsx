import { useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e951cf4b-fb96-46da-80d5-9e6c37df0335',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Submission error:', result.message);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <footer id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/30 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 tracking-tight">Let's work <br className="hidden md:block" /> together.</h2>
            <p className="text-zinc-400 mb-10 max-w-md text-lg font-light leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/ninaweaniket6-design" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-4 bg-zinc-900 hover:bg-white hover:text-zinc-950 border border-zinc-800 rounded-full transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aniket-ninawe-4bb503388/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-4 bg-zinc-900 hover:bg-white hover:text-zinc-950 border border-zinc-800 rounded-full transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ninaweaniket6@gmail.com" aria-label="Email" className="p-4 bg-zinc-900 hover:bg-white hover:text-zinc-950 border border-zinc-800 rounded-full transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Name</label>
                  <input required type="text" id="name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors rounded-none px-0" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Email</label>
                  <input required type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors rounded-none px-0" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <label htmlFor="message" className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Message</label>
                <textarea required id="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none rounded-none px-0" placeholder="Tell me about your project..."></textarea>
              </div>
              
              <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                <button disabled={isSubmitting} type="submit" className="group w-full sm:w-auto flex justify-center items-center gap-2 px-8 py-3.5 bg-white text-zinc-950 hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-medium transition-all duration-300">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="text-zinc-400 text-sm text-center">Message sent successfully.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm text-center">Failed to send message.</p>
                )}
              </div>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800/50 text-zinc-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Aniket Ninawe. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-4 md:mt-0">
            <a href="mailto:ninaweaniket6@gmail.com" className="hover:text-zinc-300 transition-colors">ninaweaniket6@gmail.com</a>
            <p>Built with React & Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

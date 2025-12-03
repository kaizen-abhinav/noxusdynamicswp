'use client';

import { useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_8gz73wc', // Service ID
        'template_a6coqpr', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'Wy_XuV_qNDHrZuCHZ' // Public Key
      );
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Mobile stars background */}
      <div className="absolute inset-0 w-full h-full stars-bg"></div>

      {/* Top Header */}
      <div className="absolute top-0 left-0 right-0 z-20 border-b border-white/20">
        <div className="container mx-auto px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 lg:gap-4">
            <div className="font-mono text-white text-xl lg:text-2xl font-bold tracking-widest">
              NOXUSDYNAMICS
            </div>
            <div className="h-3 lg:h-4 w-px bg-white/40"></div>
            <span className="text-white/60 text-[8px] lg:text-[10px] font-mono">EST. 2025</span>
          </Link>
          
          <div className="flex items-center gap-4 lg:gap-8">
            <Link href="/" className="text-white/80 hover:text-white text-[10px] lg:text-xs font-mono transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white text-[10px] lg:text-xs font-mono transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-white text-[10px] lg:text-xs font-mono">
              CONTACT
            </Link>
          </div>
        </div>
      </div>

      {/* Corner Frame Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/30 z-20"></div>
      <div className="absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/30 z-20"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-white/30 z-20"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-white/30 z-20"></div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-20 px-6 lg:px-16 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-4 opacity-60">
            <div className="w-8 h-px bg-white"></div>
            <span className="text-white text-[10px] font-mono tracking-wider">CONTACT</span>
            <div className="flex-1 h-px bg-white"></div>
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-mono tracking-wider">
            GET IN TOUCH
          </h1>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Info */}
            <div>
              <p className="text-base text-gray-300 font-mono mb-8 leading-relaxed">
                Have a project in mind? Looking to partner with us? We&apos;d love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="border border-white/20 p-4 bg-black/30">
                  <p className="text-[10px] font-mono text-white/60 mb-1">EMAIL</p>
                  <p className="font-mono text-sm">contact@noxusdynamics.com</p>
                </div>
              </div>

              <div className="hidden lg:block mt-12">
                <div className="flex gap-1 opacity-40">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="w-0.5 h-0.5 bg-white rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              {isSubmitted ? (
                <div className="border border-white/20 p-8 bg-black/50 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 border border-white flex items-center justify-center">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold font-mono mb-2">MESSAGE SENT</h3>
                  <p className="text-sm text-gray-400 font-mono">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="border border-white/20 p-8 bg-black/50">
                  {error && (
                    <div className="mb-4 p-3 border border-red-500/50 bg-red-500/10">
                      <p className="text-sm text-red-400 font-mono">{error}</p>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <label className="block text-[10px] font-mono text-white/60 mb-2">NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/20 px-4 py-3 font-mono text-white placeholder-gray-600 outline-none focus:border-white transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[10px] font-mono text-white/60 mb-2">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/20 px-4 py-3 font-mono text-white placeholder-gray-600 outline-none focus:border-white transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[10px] font-mono text-white/60 mb-2">MESSAGE</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-black/50 border border-white/20 px-4 py-3 font-mono text-white placeholder-gray-600 outline-none focus:border-white transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-transparent border border-white text-white font-mono text-sm hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="absolute left-0 right-0 z-20 border-t border-white/20 bg-black/40 backdrop-blur-sm bottom-0">
        <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-6 text-[8px] lg:text-[9px] font-mono text-white/50">
            <span>© 2025 NOXUSDYNAMICS</span>
          </div>
          
          <div className="flex items-center gap-2 lg:gap-4 text-[8px] lg:text-[9px] font-mono text-white/50">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="hidden lg:inline">BUILD: STABLE</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stars-bg {
          background-image: 
            radial-gradient(1px 1px at 20% 30%, white, transparent),
            radial-gradient(1px 1px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(1px 1px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 15% 60%, white, transparent),
            radial-gradient(1px 1px at 70% 40%, white, transparent);
          background-size: 200% 200%, 180% 180%, 250% 250%, 220% 220%, 190% 190%, 240% 240%, 210% 210%, 230% 230%;
          background-position: 0% 0%, 40% 40%, 60% 60%, 20% 20%, 80% 80%, 30% 30%, 70% 70%, 50% 50%;
          opacity: 0.3;
        }
      `}</style>
    </main>
  );
}

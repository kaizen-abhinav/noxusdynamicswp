'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'About NoxusDynamics - Robotics Innovation | Kottayam, Kerala';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about NoxusDynamics mission, vision, and products. Founded by Abhinav Varghese Abraham in Kottayam, Kerala. Robotics for agriculture, accessibility, and human augmentation.');
    }
  }, []);

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
            <Link href="/about" className="text-white text-[10px] lg:text-xs font-mono">
              ABOUT
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white text-[10px] lg:text-xs font-mono transition-colors">
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
      <div className="relative z-10 pt-24 pb-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Mission Section */}
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-4 opacity-60">
              <div className="w-8 h-px bg-white"></div>
              <span className="text-white text-[10px] font-mono tracking-wider">MISSION</span>
              <div className="flex-1 h-px bg-white"></div>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-mono tracking-wider">
              OUR MISSION
            </h1>
            
            <div className="border border-white/20 p-8 bg-black/50">
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-mono mb-4">
                At NoxusDynamics, we engineer the impossible. Our mission is to design and manufacture intelligent robotic systems that transform industries, enhance human capabilities, and create a more sustainable, accessible world.
              </p>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-mono">
                We bridge the gap between cutting-edge research and real-world applications, turning visionary concepts into tangible solutions that matter.
              </p>
            </div>
          </section>

          {/* Vision Section */}
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-4 opacity-60">
              <div className="w-8 h-px bg-white"></div>
              <span className="text-white text-[10px] font-mono tracking-wider">VISION</span>
              <div className="flex-1 h-px bg-white"></div>
            </div>
            
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6 font-mono tracking-wider">
              OUR VISION
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="border border-white/20 p-6 bg-black/30">
                <h3 className="text-lg font-bold font-mono mb-3">PIONEER INNOVATION</h3>
                <p className="text-sm text-gray-400 font-mono leading-relaxed">
                  Push the boundaries of what's possible in robotics and AI, setting new industry standards.
                </p>
              </div>
              
              <div className="border border-white/20 p-6 bg-black/30">
                <h3 className="text-lg font-bold font-mono mb-3">EMPOWER PEOPLE</h3>
                <p className="text-sm text-gray-400 font-mono leading-relaxed">
                  Create technology that augments human potential and makes advanced robotics accessible to all.
                </p>
              </div>
              
              <div className="border border-white/20 p-6 bg-black/30">
                <h3 className="text-lg font-bold font-mono mb-3">SUSTAINABLE FUTURE</h3>
                <p className="text-sm text-gray-400 font-mono leading-relaxed">
                  Develop solutions that protect our planet while advancing human civilization.
                </p>
              </div>
            </div>
          </section>

          {/* What We Build Section */}
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-4 opacity-60">
              <div className="w-8 h-px bg-white"></div>
              <span className="text-white text-[10px] font-mono tracking-wider">PRODUCTS</span>
              <div className="flex-1 h-px bg-white"></div>
            </div>
            
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6 font-mono tracking-wider">
              WHAT WE BUILD
            </h2>
            
            <div className="space-y-6">
              <div className="border border-white/20 p-6 bg-black/30">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold font-mono">AGRITECH DRONES</h3>
                  <span className="text-[8px] font-mono text-white/60">AGRI.TECH.01</span>
                </div>
                <p className="text-sm text-gray-400 font-mono leading-relaxed mb-3">
                  Autonomous aerial systems for precision agriculture. Our drones monitor crop health, optimize irrigation, and reduce pesticide use by up to 60%.
                </p>
                <div className="flex gap-2">
                  <span className="text-[8px] font-mono px-2 py-1 border border-white/30 text-white/60">AI-POWERED</span>
                  <span className="text-[8px] font-mono px-2 py-1 border border-white/30 text-white/60">SUSTAINABLE</span>
                </div>
              </div>

              <div className="border border-white/20 p-6 bg-black/30">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold font-mono">ADVANCED PROSTHETICS</h3>
                  <span className="text-[8px] font-mono text-white/60">BIO.TECH.02</span>
                </div>
                <p className="text-sm text-gray-400 font-mono leading-relaxed mb-3">
                  Neural-interfaced prosthetic limbs that restore natural movement. Our systems learn and adapt to each user, providing unprecedented dexterity and control.
                </p>
                <div className="flex gap-2">
                  <span className="text-[8px] font-mono px-2 py-1 border border-white/30 text-white/60">NEURAL-LINK</span>
                  <span className="text-[8px] font-mono px-2 py-1 border border-white/30 text-white/60">ADAPTIVE</span>
                </div>
              </div>

              <div className="border border-white/20 p-6 bg-black/30">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold font-mono">AUTONOMOUS SYSTEMS</h3>
                  <span className="text-[8px] font-mono text-white/60">AUTO.SYS.03</span>
                </div>
                <p className="text-sm text-gray-400 font-mono leading-relaxed mb-3">
                  Self-navigating robots for industrial automation, warehouse logistics, and hazardous environment exploration. Built for reliability and efficiency.
                </p>
                <div className="flex gap-2">
                  <span className="text-[8px] font-mono px-2 py-1 border border-white/30 text-white/60">SELF-DRIVING</span>
                  <span className="text-[8px] font-mono px-2 py-1 border border-white/30 text-white/60">INDUSTRIAL</span>
                </div>
              </div>

              <div className="border border-white/20 p-6 bg-black/30">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold font-mono">HUMAN AUGMENTATION</h3>
                  <span className="text-[8px] font-mono text-white/60">AUG.TECH.04</span>
                </div>
                <p className="text-sm text-gray-400 font-mono leading-relaxed mb-3">
                  Exoskeletons and wearable robotics that enhance human strength and endurance. From medical rehabilitation to industrial applications.
                </p>
                <div className="flex gap-2">
                  <span className="text-[8px] font-mono px-2 py-1 border border-white/30 text-white/60">WEARABLE</span>
                  <span className="text-[8px] font-mono px-2 py-1 border border-white/30 text-white/60">ENHANCED</span>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-4 opacity-60">
              <div className="w-8 h-px bg-white"></div>
              <span className="text-white text-[10px] font-mono tracking-wider">VALUES</span>
              <div className="flex-1 h-px bg-white"></div>
            </div>
            
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6 font-mono tracking-wider">
              OUR VALUES
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-4">
              <div className="border border-white/20 p-6 bg-black/30 text-center">
                <h3 className="text-sm font-bold font-mono mb-2">PRECISION</h3>
                <p className="text-[10px] text-gray-500 font-mono">Excellence in every detail.</p>
              </div>
              
              <div className="border border-white/20 p-6 bg-black/30 text-center">
                <h3 className="text-sm font-bold font-mono mb-2">HUMANITY</h3>
                <p className="text-[10px] text-gray-500 font-mono">Technology that serves people.</p>
              </div>
              
              <div className="border border-white/20 p-6 bg-black/30 text-center">
                <h3 className="text-sm font-bold font-mono mb-2">SUSTAINABILITY</h3>
                <p className="text-[10px] text-gray-500 font-mono">Building for tomorrow.</p>
              </div>
              
              <div className="border border-white/20 p-6 bg-black/30 text-center">
                <h3 className="text-sm font-bold font-mono mb-2">INNOVATION</h3>
                <p className="text-[10px] text-gray-500 font-mono">Pushing boundaries.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="border border-white/20 p-8 bg-black/50 text-center">
            <h2 className="text-xl lg:text-2xl font-bold font-mono mb-4">READY TO BUILD THE FUTURE?</h2>
            <p className="text-sm text-gray-400 font-mono mb-6">
              Partner with us on groundbreaking robotics research.
            </p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-transparent border border-white text-white font-mono text-sm hover:bg-white hover:text-black transition-all duration-200">
              GET IN TOUCH
            </Link>
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

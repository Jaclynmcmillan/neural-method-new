import React from 'react';
import { Target, Zap, Shield, Rocket, Cpu, Layers, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-primary pt-12 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="border-l-4 border-accent pl-6 sm:pl-8 py-2">
           <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            The Hybrid AI Consulting &<br/>Creative System Studio
          </h1>
          <p className="font-inter font-medium italic text-xl sm:text-2xl text-neutral-light/80 leading-relaxed max-w-4xl">
            "Neural Method is a strategic AI consulting and product engineering agency. We bridge the gap between creative branding and technical execution, helping founders build custom AI platforms that scale."
          </p>
        </div>
      </section>

      {/* Image Strip - Panoramic Style */}
      <section className="w-full h-64 md:h-96 mb-24 overflow-hidden relative group">
        <img 
          src="https://picsum.photos/1920/600?grayscale" 
          alt="Neural Method Studio Panorama" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
      </section>

      {/* Who We Are & Our Methodology */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-24">
        
        {/* Core Identity */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat font-bold text-3xl text-white mb-6">Our Methodology</h2>
            <p className="text-lg text-neutral-light/80 leading-relaxed mb-6">
              Unlike traditional agencies that separate design from code, we build <strong className="text-accent">Creative Systems</strong>—living brand identities that integrate directly with your product's architecture. 
            </p>
            <p className="text-lg text-neutral-light/80 leading-relaxed">
              From web apps to enterprise automation, we ensure your brand is as intelligent as your code. We utilize <strong className="text-white">The Neural Framework™</strong> to harmonize aesthetic methodology with high-performance engineering.
            </p>
          </div>
          <div className="bg-secondary/20 border border-white/5 rounded-2xl p-8 shadow-2xl">
             <div className="flex items-start gap-4 mb-6">
               <Cpu className="text-accent w-8 h-8 shrink-0" />
               <h3 className="font-bold text-xl text-white">Neural Branding</h3>
             </div>
             <p className="text-neutral-light/70 mb-4">
               The process of using AI to generate consistent, scalable brand assets automatically. We define the future of "living" brands.
             </p>
             <div className="h-px bg-white/10 my-6"></div>
             <div className="flex items-start gap-4">
               <Layers className="text-accent w-8 h-8 shrink-0" />
               <h3 className="font-bold text-xl text-white">Hybrid Systems</h3>
             </div>
             <p className="text-neutral-light/70 mt-4">
               Integration of LLMs, vector databases, and custom UI components into a singular, cohesive ecosystem.
             </p>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl text-white mb-6">Who We Serve</h2>
          <p className="text-xl text-neutral-light/80 leading-relaxed">
            We partner with high-growth startups and enterprise teams who need more than just advice—they need <strong className="text-accent">AI consulting services</strong> that deliver production-ready software.
          </p>
        </div>
      </section>

      {/* Core Values / Beliefs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-white mb-12">The Neural Framework™ Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-6">
            <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center shrink-0 text-accent">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white mb-2">Precision Engineering</h3>
              <p className="text-neutral-light/70 text-lg">Every pixel and line of code is measured for its contribution to the system's outcome. We eliminate noise and prioritize high-intent output.</p>
            </div>
          </div>
          
          <div className="flex gap-6">
             <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center shrink-0 text-accent">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white mb-2">Applied Intelligence</h3>
              <p className="text-neutral-light/70 text-lg">We don't build generic AI wrappers. We build custom AI platforms integrated with proprietary data and internal workflows.</p>
            </div>
          </div>

          <div className="flex gap-6">
             <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center shrink-0 text-accent">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white mb-2">Scalable Creative Systems</h3>
              <p className="text-neutral-light/70 text-lg">Brands that grow with your code. We automate asset generation and visual consistency through intelligent design systems.</p>
            </div>
          </div>

           <div className="flex gap-6">
             <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center shrink-0 text-accent">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white mb-2">Data Sovereignty</h3>
              <p className="text-neutral-light/70 text-lg">Security is not a checkbox. We prioritize local-first or private cloud deployments where your proprietary data remains yours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 border-t border-white/5">
        <p className="text-[11px] text-neutral-light/40 leading-relaxed font-medium uppercase tracking-widest">
          Neural Method is a privately held AI consulting and creative agency based in Silicon Valley, California.
        </p>
      </section>
    </div>
  );
};

export default About;
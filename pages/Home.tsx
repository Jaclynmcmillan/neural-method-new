
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Smartphone, Palette, Code, Cpu, Workflow, Layers, Briefcase, TrendingUp, Activity } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';

const Home: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Neural Method",
      "alternateName": "Neural Method Agency",
      "url": "https://www.neuralmethod.ai/",
      "logo": "https://www.neuralmethod.ai/logo.png",
      "description": "Neural Method is a hybrid creative and technical agency building digital products, brand identities, and custom AI platforms for businesses.",
      "sameAs": [
        "https://www.instagram.com/neuralmethod.ai/",
        "https://x.com/NeuralMethod"
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>

        <div className="relative max-w-7xl mx-auto w-full pt-16 pb-12 text-center z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm">
            <span className="text-accent text-[10px] sm:text-xs font-semibold tracking-wide uppercase">The Future of Digital Building</span>
          </div>
          
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight leading-tight">
            We blend <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">intelligence</span>
            <span className="sm:hidden"> </span>
            <br className="hidden sm:block" />
            and methodology.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-light/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed px-4">
            Neural Method is a hybrid creative + technical agency building products, brands, and systems that scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" fullWidth className="sm:w-auto">Start Your Project</Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              fullWidth 
              className="sm:w-auto"
              onClick={scrollToServices}
            >
              Explore Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left px-4 sm:px-0">
            <Link to="/solutions/ai-integrations" className="group bg-secondary/80 backdrop-blur-md p-6 rounded-xl border border-white/5 hover:border-accent hover:bg-secondary transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <Workflow className="text-accent w-8 h-8" />
                <span className="text-xs font-mono text-neutral-light/50 border border-white/10 px-2 py-1 rounded group-hover:border-accent/30 group-hover:text-accent transition-colors">STRATEGY</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-accent transition-colors">AI Consulting Services</h3>
              <div className="flex items-center text-sm text-neutral-light/60 group-hover:text-white transition-colors">
                Optimize Workflows <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/solutions/custom-ai-platform" className="group bg-secondary/80 backdrop-blur-md p-6 rounded-xl border border-white/5 hover:border-accent hover:bg-secondary transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <Cpu className="text-accent w-8 h-8" />
                <span className="text-xs font-mono text-neutral-light/50 border border-white/10 px-2 py-1 rounded group-hover:border-accent/30 group-hover:text-accent transition-colors">INNOVATION</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-accent transition-colors">Custom AI Platforms</h3>
              <div className="flex items-center text-sm text-neutral-light/60 group-hover:text-white transition-colors">
                Build Intelligence <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/solutions/brand-identity" className="group bg-secondary/80 backdrop-blur-md p-6 rounded-xl border border-white/5 hover:border-accent hover:bg-secondary transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <Palette className="text-accent w-8 h-8" />
                <span className="text-xs font-mono text-neutral-light/50 border border-white/10 px-2 py-1 rounded group-hover:border-accent/30 group-hover:text-accent transition-colors">DIFFERENTIATOR</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-accent transition-colors">Creative Systems</h3>
              <div className="flex items-center text-sm text-neutral-light/60 group-hover:text-white transition-colors">
                Define Your Brand <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-24 bg-primary relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">Our Methodology</h2>
            <p className="text-neutral-light/70 max-w-2xl mx-auto text-lg sm:text-xl">
              We provide end-to-end digital solutions, from visual identity to complex AI infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 auto-rows-fr">
            <Link to="/solutions/ai-integrations" className="block h-full">
              <ServiceCard 
                title="AI Consulting Services" 
                description="Strategic audits, intelligent workflows, and automation that deliver production-ready business value."
                Icon={Workflow}
              />
            </Link>

            <Link to="/solutions/custom-ai-platform" className="block h-full">
              <ServiceCard 
                title="Custom AI Platforms" 
                description="Secure, scalable AI infrastructure built around your data and proprietary workflows."
                Icon={Cpu}
              />
            </Link>

            <Link to="/solutions/brand-identity" className="block h-full">
              <ServiceCard 
                title="Brand Identity & Creative Systems" 
                description="Living brand identities that integrate directly with your product's architecture through automated asset generation."
                Icon={Palette}
              />
            </Link>

            <Link to="/solutions/web-app-development" className="block h-full">
              <ServiceCard 
                title="Web App Development" 
                description="Scalable, full-stack React/TypeScript applications built for high-performance and future growth."
                Icon={Code}
              />
            </Link>

            <Link to="/solutions/app-development" className="block h-full">
              <ServiceCard 
                title="App Development" 
                description="Native mobile experiences for iOS and Android that leverage modern hardware and intuitive UX."
                Icon={Smartphone}
              />
            </Link>

            <Link to="/solutions/web-design" className="block h-full">
              <ServiceCard 
                title="Strategic Web Design" 
                description="High-converting marketing sites and landing pages built with world-class aesthetics and data-driven intent."
                Icon={Layers}
              />
            </Link>

            <Link to="/solutions/growth-and-marketing" className="sm:col-span-1 lg:col-span-1 block h-full">
              <div className="group h-full bg-secondary p-4 sm:p-8 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,182,255,0.05)] hover:-translate-y-1 relative overflow-hidden flex flex-col items-start gap-4">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-accent/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 relative z-10 border border-white/5 group-hover:border-accent/30 shadow-lg shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="font-montserrat text-base sm:text-xl font-bold text-white mb-1 sm:mb-3 group-hover:text-accent transition-colors leading-tight">
                    Growth & Marketing
                  </h3>
                  <p className="text-neutral-light/70 leading-relaxed text-[13px] sm:text-base">
                    Technical SEO, marketing strategy, and AI-powered growth engines to scale your reach organically.
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/solutions/talent-services" className="sm:col-span-1 lg:col-span-2 block h-full">
              <div className="group h-full bg-gradient-to-br from-secondary to-[#1a2530] p-4 sm:p-8 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,182,255,0.05)] flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
                <div className="w-9 h-9 sm:w-16 sm:h-16 bg-primary rounded-xl flex items-center justify-center text-accent border border-white/5 shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-5 h-5 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="font-montserrat text-lg sm:text-2xl font-bold text-white mb-0.5 sm:mb-2 group-hover:text-accent transition-colors">
                    Engineering Talent Services
                  </h3>
                  <p className="text-neutral-light/70 text-[13px] sm:text-lg leading-relaxed">
                    Permanent, contract-to-hire, and fractional engineering placements. We build technical teams for high-growth companies.
                  </p>
                </div>
                <div className="w-full lg:w-auto mt-2 lg:mt-0">
                  <span className="inline-flex items-center justify-center font-inter font-medium transition-all duration-300 rounded-md focus:outline-none bg-transparent border border-neutral-light text-neutral-light group-hover:border-accent group-hover:text-accent px-4 py-2 sm:px-6 sm:py-3 text-[13px] sm:text-base w-full lg:w-auto text-center whitespace-nowrap">
                    Explore Talent Services
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Assessment CTA */}
      <section className="py-12 sm:py-16 lg:py-24 bg-primary border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-accent/20 bg-accent/5 mb-8">
            <Activity className="w-4 h-4 text-accent" />
            <span className="text-accent text-[11px] font-mono uppercase tracking-[0.2em] font-bold">Strategic Diagnostic Engine</span>
          </div>
          
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6 tracking-tight">
            Identify your <span className="text-accent">structural gaps</span> in real-time.
          </h2>
          
          <p className="text-neutral-light/60 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Uncover the friction points in your digital experience or operational workflow. Use our neural-powered assessment tool for a directional diagnostic.
          </p>
          
          <Link to="/architect">
            <Button size="lg" className="px-12 group">
              Start Free Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Brand Context - Hidden on Mobile/Tablet View */}
      <section className="hidden lg:block py-24 bg-secondary/10 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-12 text-center">
          <div className="inline-block mb-6 w-12 h-1 bg-accent/30 rounded-full mx-auto"></div>
          <h2 className="font-montserrat font-bold text-4xl text-white mb-8">What is Neural Method?</h2>
          <div className="text-neutral-light/70 space-y-6 text-xl leading-relaxed">
            <p>
              Neural Method is a hybrid creative and technical agency specializing in
              brand identity, digital product development, and custom AI platforms.
              The name refers to our methodology — <span className="text-accent italic">not</span> academic neural network theory.
            </p>
            <p className="font-medium text-white/90">
              Neural Method is a company that designs and builds real-world software,
              AI systems, and scalable digital experiences for businesses.
            </p>
          </div>
          <div className="mt-10 inline-block w-12 h-1 bg-accent/30 rounded-full mx-auto"></div>
        </div>
      </section>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Palette, Code, Smartphone, Cpu, 
  Workflow, Layers, Users, TrendingUp, Terminal, ShieldCheck, 
  Zap, BrainCircuit, DollarSign, TrendingDown, AlertTriangle 
} from 'lucide-react';
import Button from '../components/Button';

/**
 * Automation calculator remains as it is a separate interactive tool.
 * Interactive tool to calculate ROI of custom AI automation.
 */
const AutomationCalculator: React.FC = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(50);
  const [employees, setEmployees] = useState<number>(1);
  const [taskName, setTaskName] = useState<string>("Manual Data Entry");
  const [annualBurn, setAnnualBurn] = useState<number>(0);

  useEffect(() => {
    setAnnualBurn(hoursPerWeek * hourlyRate * employees * 52);
  }, [hoursPerWeek, hourlyRate, employees]);

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'USD', maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-16 font-inter animate-fade-in">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
          <Zap className="w-3 h-3" />
          Neural Efficiency Engine
        </div>
        <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-white mb-2">
          The Cost of <span className="text-red-400">Inaction</span>
        </h2>
        <p className="text-neutral-light/60 text-sm max-w-xl mx-auto">
          Calculate the hidden capital drain of manual workflows.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-secondary/20 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
          <h3 className="text-sm font-bold text-neutral-light uppercase tracking-widest mb-6 flex items-center gap-2">
            <TrendingDown className="text-accent w-4 h-4" />
            Input Variables
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Task</label>
              <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:border-accent outline-none" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Hours/Week</label>
                <span className="text-accent font-mono font-bold text-xs">{hoursPerWeek} hrs</span>
              </div>
              <input type="range" min="1" max="40" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(parseInt(e.target.value))} className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-accent" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Team Size</label>
                <span className="text-accent font-mono font-bold text-xs">{employees} ppl</span>
              </div>
              <input type="range" min="1" max="50" value={employees} onChange={(e) => setEmployees(parseInt(e.target.value))} className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-accent" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Hourly Cost ($)</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 w-3.5 h-3.5 text-neutral-500" />
                <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(parseInt(e.target.value))} className="w-full bg-primary/50 border border-white/10 rounded-lg px-10 py-2 text-white text-sm focus:border-accent outline-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-gradient-to-br from-red-900/10 to-primary border border-red-500/20 p-8 rounded-2xl flex-1 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <AlertTriangle className="w-24 h-24 text-red-500" />
            </div>
            <p className="text-red-400 font-bold uppercase tracking-widest text-[10px] mb-2">Annual Capital Waste</p>
            <div className="text-4xl sm:text-5xl font-bold text-white font-mono mb-2 tracking-tighter">
              {formatMoney(annualBurn)}
            </div>
            <p className="text-neutral-light/40 text-xs">
              Direct loss performing <strong>"{taskName}"</strong>.
            </p>
          </div>
          <div className="bg-secondary/10 border border-accent/20 p-6 rounded-2xl flex-1 flex flex-col justify-center relative">
            <div className="flex items-center justify-between mb-4">
               <p className="text-accent font-bold uppercase tracking-widest text-[10px]">Neural Method Optimization</p>
               <Zap className="text-accent w-4 h-4" />
            </div>
            <p className="text-white text-sm font-medium mb-4">
              A custom agent typically costs <strong>$5k - $15k</strong> (one-time).
            </p>
            <div className="bg-primary/50 rounded-lg p-3 border border-white/5 text-xs flex justify-between">
              <span className="text-neutral-light/50 font-bold uppercase tracking-widest">ROI Timeline:</span>
              <span className="text-green-400 font-bold font-mono">
                {annualBurn > 15000 ? "< 3 Months" : "6-12 Months"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data for solutions
const solutionData: Record<string, any> = {
  'brand-identity': {
    title: 'Brand Identity & Creative Systems',
    subtitle: 'Intelligent Visual Systems that Scale',
    description: 'We craft distinctive visual identities and living Creative Systems that integrate directly with your product. From automated asset generation to comprehensive design guidelines, we ensure your brand is as intelligent as your code.',
    features: ['Strategic Logo Design', 'Neural Branding Framework', 'Automated Visual Asset Libraries', 'Comprehensive Design Systems'],
    icon: Palette,
    relatedServices: [
      {
        title: "Strategic Web Design",
        path: "/solutions/web-design",
        text: "Translate your brand identity into high-converting digital experiences that captivate and convert."
      },
      {
        title: "Custom AI Platforms",
        path: "/solutions/custom-ai-platform",
        text: "Scale your creative operations with automated asset generation and intelligent branding tools."
      }
    ]
  },
  'web-design': {
    title: 'Strategic Web Design',
    subtitle: 'High-Conversion Digital Experiences',
    description: 'Immersive marketing sites and landing pages designed with strategic intent. We blend world-class aesthetics with data-driven UX to create sites that captivate, convert, and scale.',
    features: ['High-Conversion UX/UI', 'Interactive Prototyping', 'Responsive Systems', 'Strategic Content Layouts'],
    icon: Layers,
    relatedServices: [
      {
        title: "Brand Identity & Creative Systems",
        path: "/solutions/brand-identity",
        text: "Ensure visual consistency across your digital ecosystem with a unified living design language."
      },
      {
        title: "Web App Development",
        path: "/solutions/web-app-development",
        text: "Turn your strategic web design into a fully functional, high-performance technical product."
      }
    ]
  },
  'growth-and-marketing': {
    title: 'Growth & Marketing',
    subtitle: 'SEO & AI-Powered Growth',
    description: 'Scale your digital presence with data-driven strategies. We combine technical SEO, content marketing, and AI-powered automation to drive organic traffic and convert visitors into loyal customers.',
    features: ['Technical SEO Audits', 'Content Strategy & Creation', 'AI-Powered Marketing Automation', 'Conversion Rate Optimization'],
    icon: TrendingUp,
    relatedServices: [
      {
        title: "AI Consulting Services",
        path: "/solutions/ai-integrations",
        text: "Enhance your growth operations with intelligent automation and production-ready workflows."
      },
      {
        title: "Custom AI Platforms",
        path: "/solutions/custom-ai-platform",
        text: "Leverage proprietary models to drive deep market insights and automated content personalization."
      }
    ]
  },
  'web-app-development': {
    title: 'Web App Development',
    subtitle: 'Robust & Scalable Applications',
    description: 'Full-stack web applications built with modern technologies like React, TypeScript, and Node.js. We prioritize performance, security, and maintainability to ensure your product scales with your business.',
    features: ['React & Next.js Development', 'Scalable API Architecture', 'Database Design & Optimization', 'Cloud Infrastructure Setup'],
    icon: Code,
    relatedServices: [
      {
        title: "Custom AI Platforms",
        path: "/solutions/custom-ai-platform",
        text: "Enhance your web applications with secure, domain-specific AI models tailored to your business logic."
      },
      {
        title: "App Development",
        path: "/solutions/app-development",
        text: "Extend your web product to native mobile experiences on iOS and Android with seamless parity."
      }
    ]
  },
  'app-development': {
    title: 'App Development',
    subtitle: 'Native & Cross-Platform Mobile Apps',
    description: 'We build beautiful, high-performance mobile applications for iOS and Android using React Native and native technologies. We ensure a native feel with the efficiency of cross-platform development.',
    features: ['iOS & Android Deployment', 'Cross-Platform React Native', 'App Store Optimization', 'Mobile-First UI/UX'],
    icon: Smartphone,
    relatedServices: [
      {
        title: "Web App Development",
        path: "/solutions/web-app-development",
        text: "Support your mobile experience with a robust, scalable web dashboard and API infrastructure."
      },
      {
        title: "Custom AI Platforms",
        path: "/solutions/custom-ai-platform",
        text: "Power your mobile application with intelligent features and predictive user-centric models."
      }
    ]
  },
  'custom-ai-platform': {
    title: 'Custom AI Platforms',
    subtitle: 'Tailored Artificial Intelligence & Engineering',
    description: 'We build secure, scalable custom AI platforms that solve specific business problems. From predictive analytics to domain-specific LLMs, we transform your data into a production-ready competitive asset.',
    features: ['LLM Fine-tuning & RAG', 'Predictive Analytics Models', 'Secure Data Pipelines', 'Scalable App Infrastructure'],
    icon: Cpu,
    extended: {
      overview: "Standard AI models are powerful generalists, but they lack the specific context of your business. Our custom AI platforms are engineered to operate within your secure infrastructure, utilizing Retrieval-Augmented Generation (RAG) and fine-tuning to deliver accurate, domain-specific results. We turn your proprietary data into a competitive asset, building systems that automate complex reasoning tasks rather than just generating text.",
      benefits: [
        { title: "Data Sovereignty", description: "Your data never trains public models. We deploy isolated instances ensuring complete privacy and IP protection." },
        { title: "Domain Specificity", description: "We fine-tune models on your historical data to achieve expert-level accuracy that generic APIs cannot match." },
        { title: "Cost Control", description: "Optimize infrastructure costs by using right-sized models for specific tasks rather than expensive general-purpose APIs." },
        { title: "Deep Integration", description: "Seamlessly embed intelligence into your existing ERP, CRM, or custom software workflows." }
      ],
      process: [
        { title: "1. Audit & Strategy", description: "We analyze your data infrastructure and identify high-value use cases with measurable ROI." },
        { title: "2. Data Engineering", description: "Construction of secure pipelines, vector databases, and knowledge graphs to ground the AI." },
        { title: "3. Model Architecture", description: "Selection and fine-tuning of the optimal foundation models (Llama, Mistral, OpenAI) for your needs." },
        { title: "4. Deployment & Eval", description: "Production deployment with rigorous testing frameworks (LLM-as-a-Judge) for reliability." }
      ]
    },
    relatedServices: [
      {
        title: "AI Consulting Services",
        path: "/solutions/ai-integrations",
        text: "Enhance your platform with automated workflows and intelligent agents that connect to your existing tools."
      },
      {
        title: "Web App Development",
        path: "/solutions/web-app-development",
        text: "Build the secure, scalable web infrastructure needed to deploy and manage your custom AI models."
      }
    ]
  },
  'ai-integrations': {
    title: 'AI Consulting Services',
    subtitle: 'Strategic Automation & Enhancement',
    description: 'We partner with high-growth teams to deliver more than just advice. Our AI consulting services deliver production-ready software, automated workflows, and intelligent agent integrations that optimize your business.',
    features: ['Strategic AI Audits', 'Intelligent Workflow Automation', 'Custom Agent Integration', 'Process Optimization'],
    icon: Workflow,
    relatedServices: [
      {
        title: "Custom AI Platforms",
        path: "/solutions/custom-ai-platform",
        text: "Transition from simple integrations to full-scale proprietary AI infrastructure tailored to your business."
      },
      {
        title: "Talent Services",
        path: "/solutions/talent-services",
        text: "Place high-level engineering talent to manage and maintain your new automated workflows and systems."
      }
    ]
  },
  'talent-services': {
    title: 'Talent Services',
    subtitle: 'Perm, Contract & Temp-to-Perm',
    description: 'We support organizations across the full talent lifecycle — from permanent hires to flexible, project-based expertise. For contract, fractional, or interim needs, we work alongside trusted partners to deliver experienced, vetted talent aligned to your goals.',
    features: ['Permanent Hire', 'Contract to Hire', 'Fractional CTO/VP Services', 'Vetted Engineering Squads'],
    icon: Users,
    relatedServices: [
      {
        title: "Custom AI Platforms",
        path: "/solutions/custom-ai-platform",
        text: "Support your team with custom AI infrastructure that captures and leverages your organization's expertise."
      },
      {
        title: "AI Consulting Services",
        path: "/solutions/ai-integrations",
        text: "Scale your operation quickly by blending placed talent with automated, high-efficiency business workflows."
      }
    ]
  }
};

const Solution: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? solutionData[slug] : null;

  useEffect(() => {
    if (solution) {
      document.title = `${solution.title} | Neural Method`;
    }
  }, [solution, slug]);

  if (!solution) {
    return <Navigate to="/" replace />;
  }

  const Icon = solution.icon;

  return (
    <div className="pt-24 pb-12 min-h-screen bg-primary">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col items-center text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary/50 rounded-2xl flex items-center justify-center text-accent border border-white/10 shadow-xl shrink-0 mb-8">
            <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <div>
            <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">{solution.title}</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-accent mb-6 font-medium">{solution.subtitle}</p>
            <p className="text-neutral-light/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto whitespace-pre-wrap">
                {solution.description}
            </p>
        </div>
      </section>

      {/* Overview Block */}
      {solution.extended && solution.extended.overview && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center animate-fade-in">
           <p className="text-lg sm:text-xl text-neutral-light leading-relaxed border-l-4 border-accent pl-6 text-left bg-secondary/20 p-6 rounded-r-xl">
             {solution.extended.overview}
           </p>
        </section>
      )}

      {/* Interactive Demos / Tools based on Slug */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {slug === 'custom-ai-platform' && <AutomationCalculator />}
      </section>

      {/* Key Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-white mb-8 text-center">Key Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solution.features.map((feature: string, index: number) => (
                <div key={index} className="bg-secondary/30 border border-white/5 p-5 rounded-xl flex items-center gap-4 hover:border-accent/30 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium text-base sm:text-lg">{feature}</span>
                </div>
            ))}
        </div>
      </section>

      {/* Benefits Block */}
      {solution.extended && solution.extended.benefits && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-white mb-10 text-center">Why Custom Architecture?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solution.extended.benefits.map((item: any, index: number) => (
              <div key={index} className="bg-secondary/20 p-8 rounded-xl border border-white/5 hover:border-accent/30 transition-all">
                <h3 className="font-montserrat font-bold text-xl text-white mb-3 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  {item.title}
                </h3>
                <p className="text-neutral-light/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Approach Process */}
      {solution.extended && solution.extended.process && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
           <div className="bg-primary border border-white/10 rounded-2xl p-8 sm:p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
              <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-white mb-10 text-center relative z-10">The Neural Method Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {solution.extended.process.map((step: any, index: number) => (
                  <div key={index} className="relative group">
                    <div className="text-4xl font-black text-white/5 mb-4 absolute -top-6 -left-2 z-0 group-hover:text-accent/10 transition-colors">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2 relative z-10">{step.title}</h3>
                    <p className="text-neutral-light/60 text-sm leading-relaxed relative z-10">{step.description}</p>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/10 to-transparent transform -translate-y-1/2"></div>
                    )}
                  </div>
                ))}
              </div>
           </div>
        </section>
      )}

      {/* Related Capabilities Section */}
      {solution.relatedServices && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 animate-fade-in">
          <div className="border-t border-white/10 pt-10">
            <h3 className="font-montserrat font-bold text-xl text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              Related Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solution.relatedServices.map((service: any, idx: number) => (
                <Link key={idx} to={service.path} className="group block bg-secondary/10 border border-white/5 p-6 rounded-xl hover:bg-secondary/20 hover:border-accent/30 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-accent text-lg group-hover:text-white transition-colors underline decoration-transparent group-hover:decoration-accent underline-offset-4">{service.title}</h4>
                      <ArrowRight className="w-4 h-4 text-neutral-light/50 group-hover:text-accent group-hover:translate-x-1 transition-transform"/>
                    </div>
                    <p className="text-neutral-light/70 text-sm">{service.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Compact but Prominent */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-8">
        <div className="bg-gradient-to-br from-secondary/80 to-primary border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
            <h2 className="relative z-10 font-montserrat font-bold text-2xl sm:text-3xl text-white mb-3 leading-tight">Ready to get started?</h2>
            <p className="relative z-10 text-neutral-light/70 mb-6 text-sm sm:text-base max-w-lg mx-auto">
                Let's discuss how our {solution.title} services can help you achieve your goals.
            </p>
            <Link to="/contact" className="relative z-10 inline-block w-full sm:w-auto">
                <Button size="md" fullWidth className="sm:w-auto px-10">Start Your Project</Button>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Solution;
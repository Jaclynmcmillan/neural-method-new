import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="group bg-secondary p-4 sm:p-8 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,182,255,0.05)] hover:-translate-y-1 relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-accent/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
      
      <div className="w-9 h-9 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center text-accent mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-white/5 group-hover:border-accent/30 shadow-lg shrink-0">
        <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
      </div>
      
      <h3 className="font-montserrat text-base sm:text-xl font-bold text-white mb-1 sm:mb-3 group-hover:text-accent transition-colors relative z-10 leading-tight">
        {title}
      </h3>
      
      <p className="text-neutral-light/70 leading-relaxed text-[13px] sm:text-base relative z-10">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
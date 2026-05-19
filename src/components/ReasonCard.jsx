import React from 'react';

export default function ReasonCard({ title, description, icon }) {
  return (
    <div 
      className="relative flex flex-col bg-[linear-gradient(149deg,#192247_0%,#210e17_96.86%)] border border-[rgba(255,255,255,0.1)] rounded-[16px] pt-6 px-4 md:px-5 pb-24 lg:pb-32 w-full min-h-[220px] lg:min-h-[280px] transition-transform duration-300 hover:scale-[1.02] cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
    >
      <h3 className="text-white text-[1.25rem] lg:text-[1.5rem] font-bold font-netflix mb-3 leading-snug tracking-tight">
        {title}
      </h3>
      <p className="text-[rgba(255,255,255,0.7)] text-[0.875rem] md:text-[1rem] leading-snug pr-4">
        {description}
      </p>
      
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
        {icon}
      </div>
    </div>
  );
}

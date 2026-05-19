import React, { useState } from 'react';

export default function EmailCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email) alert(`Getting started with: ${email}`);
  };

  return (
    <section className="w-full bg-black py-12 md:py-16 relative z-20 px-[5%] md:px-[8%] lg:px-[10%] flex flex-col items-center justify-center text-center border-b-[8px] border-[#232323]">
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center">
        
        <p className="text-white text-[1rem] md:text-[1.25rem] mb-4 font-netflix">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-[600px] gap-2 sm:gap-0 mt-2">
          
          <div className="relative flex-1">
            <input
              type="email"
              id="cta-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              className="w-full h-[52px] sm:h-[56px] bg-[rgba(22,22,22,0.7)] border border-[rgba(128,128,128,0.7)] text-white text-base px-4 pt-5 pb-2 rounded-[4px] sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-white peer"
            />
            <label
              htmlFor="cta-email"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgba(255,255,255,0.7)] text-base pointer-events-none transition-all duration-150 ease-in-out peer-focus:top-[12px] peer-focus:text-[0.75rem] peer-[:not(:placeholder-shown)]:top-[12px] peer-[:not(:placeholder-shown)]:text-[0.75rem]"
            >
              Email address
            </label>
          </div>
          
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#E50914] hover:bg-[#c11119] text-white font-medium h-[52px] sm:h-[56px] px-6 md:px-8 text-xl rounded-[4px] sm:rounded-l-none transition-colors flex-shrink-0"
          >
            Get Started
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
        </form>

      </div>
    </section>
  );
}

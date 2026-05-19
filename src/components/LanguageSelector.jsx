import React from 'react';

export default function LanguageSelector() {
  return (
    <div className="relative inline-block w-[130px]">
      <label htmlFor="footer-lang-select" className="sr-only">Select Language</label>
      
      {/* Globe Icon */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-white">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" fillRule="evenodd" d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z" clipRule="evenodd"></path>
        </svg>
      </div>

      <select
        id="footer-lang-select"
        className="w-full bg-[rgba(22,22,22,0.7)] border border-[rgba(255,255,255,0.3)] text-white text-[0.875rem] rounded-[4px] py-[6px] pl-9 pr-8 cursor-pointer hover:border-white transition-colors duration-200 focus:outline-none focus:border-white appearance-none"
        defaultValue="en-IN"
      >
        <option value="en-IN" className="bg-[#141414] text-white">English</option>
        <option value="hi-IN" className="bg-[#141414] text-white">हिन्दी</option>
      </select>

      {/* Caret Icon */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" fillRule="evenodd" d="M11.6 6.5c.15 0 .22.18.12.28l-3.48 3.48a.33.33 0 0 1-.48 0L4.28 6.78a.17.17 0 0 1 .12-.28z" clipRule="evenodd"></path>
        </svg>
      </div>
    </div>
  );
}

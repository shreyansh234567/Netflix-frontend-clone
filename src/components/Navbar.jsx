import React from 'react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="flex items-center justify-between px-[5%] md:px-[8%] lg:px-[10%] py-4 md:py-6 max-w-[1920px] mx-auto">
        <a href="/" className="flex-shrink-0">
          <svg viewBox="0 0 111 30" aria-hidden="true" focusable="false" className="w-[89px] h-[24px] md:w-[148px] md:h-[40px] fill-[#E50914]" xmlns="http://www.w3.org/2000/svg">
            <path d="M105.06233,14.2806261 L110.999999,30 C109.249999,29.7500005 107.500002,29.4999995 105.750001,29.2500005 L105.062332,14.2806261 L105.06233,14.2806261 Z M83.0113185,9.56231422 C80.8449992,9.35711688 78.679,9.1519 76.5138194,8.94680 L76.5138194,30 L83.0113185,30 L83.0113185,9.56231422 Z M66.8625,9.56231422 L66.8625,30 L73.3600005,30 L73.3600005,9.56231422 C71.1950004,9.56231422 69.0275,9.56231422 66.8625,9.56231422 Z M55.0062527,9.05625 C52.8387512,8.93375016 50.6712497,8.81125 48.503748,8.68875 L48.503748,30 L55.0062527,30 L55.0062527,9.05625 Z M38.8562529,8.13125 L38.8562529,30 L45.3600006,30 L45.3600006,8.4437502 C43.1912498,8.34000015 41.024,8.23500015 38.8562529,8.13125 Z M22.7,7.2125 L22.7,30 L29.2,30 L29.2,7.525 C27.0325,7.42 24.8662496,7.31625 22.7,7.2125 Z M6.56250002,6.29375 L6.56250002,30 L13.0587497,30 L13.0587497,6.6062502 C10.8912499,6.50375016 8.725,6.40000003 6.56250002,6.29375 Z M100.406218,0 L93.9087187,0 L93.9087187,22.6719 C96.0762187,22.3719 98.244,22.0719 100.406218,21.7719 L100.406218,0 Z M0,0 L0,26.3000002 C2.1675,26.475 4.335,26.6500007 6.5025,26.8250007 L6.5025,0 L0,0 Z M118.613,30 C117.125002,30 115.125002,29.7500005 113.250001,29.4999995 L107.312331,0 L113.813,0 L118.613,30 Z" />
          </svg>
        </a>
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative flex items-center">
            <svg className="absolute left-2.5 h-3 w-3 md:h-4 md:w-4 text-white pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <select className="bg-black/50 border border-[rgba(255,255,255,0.7)] text-white text-[0.875rem] font-medium rounded-[4px] py-1 md:py-[6px] pl-7 md:pl-8 pr-6 md:pr-7 cursor-pointer hover:border-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white appearance-none" defaultValue="en">
              <option value="en" className="bg-[#141414] text-white">English</option>
              <option value="hi" className="bg-[#141414] text-white">हिन्दी</option>
            </select>
            <svg className="absolute right-2 h-2.5 w-2.5 md:h-3 md:w-3 text-white pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <button className="bg-[#E50914] hover:bg-[#c11119] text-white text-[0.875rem] font-medium px-4 py-[5px] md:py-[6px] rounded-[4px] transition-colors duration-150 whitespace-nowrap">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

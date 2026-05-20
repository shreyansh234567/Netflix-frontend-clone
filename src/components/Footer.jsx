import { footerLinks } from './footerLinks.js';
import LanguageSelector from './LanguageSelector.jsx';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 md:py-16 px-[5%] md:px-[8%] lg:px-[10%] text-[rgba(255,255,255,0.7)] font-netflix relative z-20">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col text-[1rem]">
        
        {/* Top Text */}
        <p className="mb-8">
          Questions? Call <a href="tel:000-800-919-1743" className="underline hover:text-white transition-colors">000-800-919-1743</a>
        </p>

        {/* Links Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 mb-8 w-full max-w-[1000px]">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.url} 
                className="underline text-[0.875rem] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Language Selector */}
        <div className="mb-6">
          <LanguageSelector />
        </div>

        {/* Netflix India Text */}
        <p className="mb-6 text-[0.875rem]">Netflix India</p>

        {/* reCAPTCHA Text */}
        <div className="text-[0.75rem] text-[rgba(255,255,255,0.7)] max-w-[800px] leading-snug">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </div>
      </div>
    </footer>
  );
}

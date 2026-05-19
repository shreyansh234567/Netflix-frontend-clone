import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[100vh] flex flex-col justify-center border-b-[8px] border-[#232323]">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg"
          alt="Netflix background"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backgroundImage: `
              linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%),
              radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)
            `
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-[5%] mt-12 md:mt-20">
        <h1 className="text-white font-black leading-tight mb-4 w-full max-w-[900px]"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-white font-medium mb-6"
           style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}>
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="text-white font-normal mb-4"
           style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col sm:flex-row w-full max-w-[600px] gap-2 sm:gap-0 mt-2">
          <div className="relative flex-1">
            <input
              type="email"
              id="hero-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              className="w-full h-[52px] sm:h-[56px] bg-[rgba(22,22,22,0.7)] border border-[rgba(128,128,128,0.7)] text-white text-[1rem] px-4 pt-5 pb-2 rounded-[4px] sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-white peer"
            />
            <label
              htmlFor="hero-email"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgba(255,255,255,0.7)] text-[1rem] pointer-events-none transition-all duration-150 ease-in-out peer-focus:top-[14px] peer-focus:text-[0.75rem] peer-[:not(:placeholder-shown)]:top-[14px] peer-[:not(:placeholder-shown)]:text-[0.75rem]"
            >
              Email address
            </label>
          </div>
          <button className="flex items-center justify-center gap-2 bg-[#E50914] hover:bg-[#c11119] text-white font-bold h-[52px] sm:h-[56px] px-6 md:px-8 text-[1.25rem] md:text-[1.5rem] rounded-[4px] sm:rounded-l-none transition-colors flex-shrink-0">
            Get Started
            <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

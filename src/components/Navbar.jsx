export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="flex items-center justify-between px-[5%] md:px-[8%] lg:px-[10%] py-4 md:py-6 max-w-[1920px] mx-auto">
        <a href="/" className="flex-shrink-0">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix"
            className="w-[89px] h-[24px] md:w-[148px] md:h-[40px] object-contain"
          />
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

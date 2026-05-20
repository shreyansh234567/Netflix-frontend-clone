export default function Navbar() {
  return (
    <nav className="relative z-50 w-full h-20 lg:h-[88px]">
      <div className="mx-auto h-full flex items-center justify-between px-6 sm:px-8 md:px-20 lg:px-[9.25rem] 2xl:px-[22.125rem] max-w-[1920px]">
        <a href="/" className="flex-shrink-0">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix"
            className="w-[89px] h-[24px] md:w-[148px] md:h-[40px] object-contain"
          />
        </a>
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative flex items-center">
            <svg className="absolute left-3 h-4 w-4 text-white pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 1.5c.622 0 1.225.158 1.75.45.524.29.97.702 1.3 1.2.33.497.525 1.06.55 1.6l-1.1.75a3.234 3.234 0 00-1.25-.5V4l.25-.25H5.5L5 5H3.15c.35-.85.94-1.6 1.7-2.12A3.8 3.8 0 018 2.5zM5 6h3l.5 1.5L8 9H6.5L6 7.5 5 6zm5.5 3.5h-1L9 8l.45-1H11c.04.5.05 1 0 1.5-.05.5-.22 1-.5 1.5l-1.5.5L7 12l-.5 1H5l.5-1.5L4 7h1l.5 1.5h1L8 6.5 7.17 5H8.5l.5-1h2.24c.46.5.76 1.12.76 1.75 0 .63-.3 1.25-.76 1.75h.26l.5.5v1l-.5.5h-1z"/>
            </svg>
            <select className="bg-black/40 border border-[rgba(255,255,255,0.5)] text-white text-sm font-medium rounded-[4px] py-[4px] pl-8 pr-7 cursor-pointer appearance-none focus:outline-none" defaultValue="en">
              <option value="en" className="bg-black text-white">English</option>
              <option value="hi" className="bg-black text-white">हिन्दी</option>
            </select>
            <svg className="absolute right-2 h-3 w-3 text-white pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <button className="bg-[#E50914] hover:bg-[#c11119] text-white text-sm font-semibold px-4 py-[6px] rounded-[4px] transition-colors duration-150 whitespace-nowrap">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

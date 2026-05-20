export default function FAQItem({ item, isOpen, onClick }) {
  return (
    <li className="flex flex-col w-full text-white bg-[#2d2d2d] transition-colors duration-200">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 bg-[#2d2d2d] hover:bg-[#414141] transition-colors duration-200 text-left outline-none"
      >
        <span className="text-[1.125rem] md:text-[1.5rem] font-netflix pr-4">{item.question}</span>
        
        <svg 
          className={`w-6 h-6 md:w-9 md:h-9 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"/>
        </svg>
      </button>

      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className={`overflow-hidden bg-[#2d2d2d] ${isOpen ? 'border-t-[2px] border-black' : 'border-t-0 border-transparent'}`}>
          <div className="p-6 text-[1.125rem] md:text-[1.5rem] font-netflix text-white leading-snug whitespace-pre-wrap">
            {item.answer}
          </div>
        </div>
      </div>
    </li>
  );
}

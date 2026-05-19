import { useState } from 'react';
import { faqData } from './faqData.js';
import FAQItem from './FAQItem.jsx';

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-black py-12 md:py-16 relative z-20">
      <div className="max-w-[1200px] mx-auto px-[5%] md:px-[8%] lg:px-[10%]">
        <h2 className="text-white text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold font-netflix mb-6 md:mb-8 text-left">
          Frequently Asked Questions
        </h2>
        
        <ul className="w-full flex flex-col gap-2">
          {faqData.map((item) => (
            <FAQItem 
              key={item.id} 
              item={item} 
              isOpen={openId === item.id} 
              onClick={() => toggleItem(item.id)} 
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

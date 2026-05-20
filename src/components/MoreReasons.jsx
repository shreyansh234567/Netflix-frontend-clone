import { reasonsData } from './reasonsData.jsx';
import ReasonCard from './ReasonCard.jsx';

export default function MoreReasons() {
  return (
    <section className="w-full bg-black py-8 md:py-16 relative z-20 px-[5%] md:px-[8%] lg:px-[10%]">
      <div className="w-full max-w-[1200px] mx-auto">
        <h2 className="text-white text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold font-netflix mb-4 md:mb-6 lg:mb-6 text-left">
          More reasons to join
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-4">
          {reasonsData.map((reason) => (
            <ReasonCard 
              key={reason.id}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { trendingMovies } from './trendingData.js';
import TrendingCard from './TrendingCard.jsx';

export default function TrendingNow() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * 0.8;
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * 0.8;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-black py-8 md:py-12 relative z-20 overflow-visible">
      <div className="max-w-[1200px] mx-auto px-[5%] md:px-[8%] lg:px-[10%] mb-2 md:mb-4">
        <h2 className="text-white text-[1.25rem] md:text-[1.5rem] lg:text-[2.5rem] font-bold font-netflix text-left">
          Trending Now
        </h2>
      </div>

      <div className="relative group/slider w-full">
        {/* Left Arrow */}
        <button
          onClick={slideLeft}
          className="absolute left-[1%] top-1/2 -translate-y-1/2 z-30 hidden md:flex w-[35px] h-[75px] md:w-[40px] md:h-[80px] items-center justify-center bg-[rgba(20,20,20,0.5)] text-white opacity-0 transition-all duration-300 hover:bg-[rgba(20,20,20,0.7)] group-hover/slider:opacity-100 rounded-lg"
        >
          <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth py-4 md:py-6"
        >
          {/* Spacer to simulate padding while allowing full scroll */}
          <div className="w-[5%] md:w-[8%] lg:w-[10%] flex-shrink-0" />

          <div className="flex gap-2 md:gap-4 lg:gap-6">
            {trendingMovies.map((movie) => (
              <TrendingCard
                key={movie.id}
                rank={movie.id}
                img={movie.img}
              />
            ))}
          </div>

          {/* Spacer for right side padding */}
          <div className="w-[5%] md:w-[8%] lg:w-[10%] flex-shrink-0" />
        </div>

        {/* Right Arrow */}
        <button
          onClick={slideRight}
          className="absolute right-[1%] top-1/2 -translate-y-1/2 z-30 hidden md:flex w-[35px] h-[75px] md:w-[40px] md:h-[80px] items-center justify-center bg-[rgba(20,20,20,0.5)] text-white opacity-0 transition-all duration-300 hover:bg-[rgba(20,20,20,0.7)] group-hover/slider:opacity-100 rounded-lg"
        >
          <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

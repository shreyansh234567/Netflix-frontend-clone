export default function TrendingCard({ rank, img }) {
  return (
    <div className="relative flex-shrink-0 flex items-center justify-end w-[135px] md:w-[170px] lg:w-[195px] h-[140px] md:h-[185px] lg:h-[210px] group/card cursor-pointer transition-transform duration-300 hover:scale-[1.02] origin-center">
      {/* The Number */}
      <span 
        className="absolute left-[-15px] md:left-[-20px] lg:left-[-25px] bottom-[-5px] md:bottom-[-10px] lg:bottom-[-15px] z-10 font-netflix font-bold text-black select-none tracking-tighter [-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:3px_white] lg:[-webkit-text-stroke:4px_white] text-[90px] md:text-[120px] lg:text-[150px] leading-none pointer-events-none"
      >
        {rank}
      </span>

      {/* The Poster */}
      <img 
        src={img} 
        alt={`Trending ${rank}`} 
        className="relative z-10 w-[100px] md:w-[130px] lg:w-[145px] h-full object-cover rounded-[4px] shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
}

import { useState, useEffect } from "react";

function Hero() {
  const images = [
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80'
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">

      
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

     
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-30">

        
        <span className="text-3xl text-yellow-400 drop-shadow-[0_0_6px_gold] animate-glow">
          ✨
        </span>

        
        <span className="absolute left-1/2 -translate-x-1/2 text-yellow-300 text-xl animate-spark">
          ✨
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 text-yellow-300 text-xl animate-spark-delay">
          ✨
        </span>
      </div>

      
      <div className="relative z-20 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Book Your Journey with{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Comfort & Ease!
          </span>
        </h1>
        <p className="mb-6">Fast, Safe, and Affordable Bus Travel Across India</p>

        <form className="grid gap-3 md:grid-cols-4 bg-white/20 backdrop-blur p-4 rounded-2xl">
          <input
            className="p-2 rounded-lg bg-white/30 text-white placeholder-white"
            placeholder="From"
          />
          <input
            className="p-2 rounded-lg bg-white/30 text-white placeholder-white"
            placeholder="To"
          />
          <input type="date" className="p-2 rounded-lg bg-white/30 text-white" />
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold">
            🔍 Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;

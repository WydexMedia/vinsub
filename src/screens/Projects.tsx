import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projectImages: Array<{ src: string; alt: string; caption?: string }> = [
  { 
    src: "/projects/16.webp", 
    alt: "Aramco Stadium project image 1",
    caption: "Stadium Overview"
  },
  {
    src: "/projects/240725-6-weeks-after-1st-concrete-2_d4dcd322ae6a9c6b9aaabfced32dd84e_800-600x450.jpg",
    alt: "Aramco Stadium construction progress",
    caption: "Construction Progress - 6 Weeks After First Concrete"
  },
  { 
    src: "/projects/OIP.jpeg", 
    alt: "Aramco Stadium rendering",
    caption: "Architectural Rendering"
  },
];

export const Projects = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(true), 100);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Floating particles background
  const ParticleBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-orange-400/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-orange-400 rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
            VINSUB Projects
          </h2>
          <p className="text-gray-400 animate-pulse">Loading project details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      <ParticleBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full h-20 bg-black/40 backdrop-blur-2xl border-b border-white/10">
        <div className="flex items-center justify-between px-6 h-full max-w-7xl mx-auto">
          <button
            onClick={() => navigate("/")}
            aria-label="Back to Home"
            className="transform hover:scale-110 transition-all duration-300 cursor-pointer p-0 bg-transparent border-0"
          >
            <img
              className="w-32 h-10 object-contain filter brightness-0 invert"
              alt="Vinsub"
              src="VINSUB.webp"
            />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className={`relative pt-20 pb-16 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full mb-6">
              <span className="text-4xl">🏟️</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight">
              Aramco Stadium
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Al Khobar, Saudi Arabia
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        
        {/* Project Details Card */}
        <section className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-orange-400/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-orange-400/10">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-10 blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
                  Project Overview
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black text-2xl font-bold">46K+</span>
                    </div>
                    <h3 className="text-lg font-bold text-orange-400 mb-2">Seating Capacity</h3>
                    <p className="text-gray-300 text-sm">Spectators</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black text-2xl">🌊</span>
                    </div>
                    <h3 className="text-lg font-bold text-orange-400 mb-2">Design Inspiration</h3>
                    <p className="text-gray-300 text-sm">Arabian Gulf Patterns</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black text-2xl">⭐</span>
                    </div>
                    <h3 className="text-lg font-bold text-orange-400 mb-2">Status</h3>
                    <p className="text-gray-300 text-sm">World-Class Facility</p>
                  </div>
                </div>

                <div className="space-y-6 text-gray-200 leading-relaxed text-lg">
                  <p className="text-justify">
                    The <span className="text-orange-400 font-semibold">Aramco Stadium</span> in Al Khobar stands as a landmark of modern sports architecture and innovation. Designed by world-renowned architects, this state-of-the-art facility is envisioned to host both local and international sporting events, with a seating capacity of over <span className="text-yellow-400 font-semibold">46,000</span>.
                  </p>
                  <p className="text-justify">
                    Inspired by the flowing patterns of the <span className="text-orange-400 font-semibold">Arabian Gulf</span>, its sail-like façade combines elegance with engineering excellence, allowing natural light and ventilation while ensuring spectator comfort through advanced cooling systems. The stadium is part of a wider mixed-use development that includes training facilities, entertainment zones, and retail spaces, creating a vibrant hub for sports and community engagement.
                  </p>
                  <p className="text-justify">
                    Our involvement in this prestigious project reflects our commitment to delivering <span className="text-yellow-400 font-semibold">high-quality solutions</span> for world-class infrastructure developments. The Aramco Stadium is set to become a symbol of pride for Al Khobar and a benchmark for future sports venues in the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Images Section */}
        <section className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Project Gallery
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg">
              Witness the evolution of architectural excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectImages.map((img, index) => (
              <Card
                key={img.src}
                className="group cursor-pointer overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-orange-400/20"
                onClick={() => {
                  setSelectedImage(img.src);
                  setSelectedIndex(index);
                }}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-64 object-cover group-hover:scale-125 transition-transform duration-700 filter group-hover:brightness-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/80 via-transparent to-yellow-400/20 opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-end">
                      <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="font-bold text-xl mb-2">{img.caption}</h4>
                        <p className="text-sm opacity-90">Click to view full size</p>
                      </div>
                    </div>
                    
                    {/* Corner Badge */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xs">🔍</span>
                    </div>

                    {/* Image Number Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black text-sm font-bold px-3 py-1 rounded-full">
                      {index + 1}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-xl border border-orange-400/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Interested in Similar Projects?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how we can bring your architectural vision to life with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.history.back()}
                className="px-12 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-orange-500 to-yellow-500 text-black border-2 border-orange-400 hover:shadow-orange-400/50"
              >
                ← Back to Home
              </Button>
              <Button
                onClick={() => { window.location.href = 'tel:0509331315'; }}
                className="px-12 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-110 bg-transparent text-orange-400 border-2 border-orange-400 hover:bg-orange-400 hover:text-black"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <div className="relative overflow-hidden rounded-2xl border border-orange-400/30 shadow-2xl shadow-orange-400/20">
              <img
                src={selectedImage}
                alt="Selected project"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              ✕
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const prevIndex = (selectedIndex - 1 + projectImages.length) % projectImages.length;
                setSelectedIndex(prevIndex);
                setSelectedImage(projectImages[prevIndex].src);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500/80 to-yellow-500/80 hover:from-orange-400/90 hover:to-yellow-400/90 text-white flex items-center justify-center text-2xl shadow-xl backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-110"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const nextIndex = (selectedIndex + 1) % projectImages.length;
                setSelectedIndex(nextIndex);
                setSelectedImage(projectImages[nextIndex].src);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500/80 to-yellow-500/80 hover:from-orange-400/90 hover:to-yellow-400/90 text-white flex items-center justify-center text-2xl shadow-xl backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-110"
              aria-label="Next"
            >
              ›
            </button>
            
            {/* Image Caption and Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md rounded-2xl px-6 py-3 text-white text-center">
              <p className="text-sm font-semibold mb-1">{projectImages[selectedIndex]?.caption}</p>
              <p className="text-xs text-gray-300">{selectedIndex + 1} / {projectImages.length}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};
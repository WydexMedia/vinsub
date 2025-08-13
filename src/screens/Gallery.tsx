import React from "react";
import { Wrench, Zap, Hammer, Shield, Ruler, Eye, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { FloatingCallButton } from "../components/FloatingCallButton";

type MediaItem = {
  src: string;
  alt: string;
  title?: string;
  type: "image" | "video";
};

const buildMediaItems = (folder: string, files: string[], titlePrefix: string): MediaItem[] =>
  files.map((file) => ({
    src: `${folder}/${file}`,
    alt: file,
    title: `${titlePrefix}`,
    type: file.toLowerCase().endsWith(".mov") ? "video" : "image",
  }));

// Engineering
const engineeringFiles = [
  "Engineering Service Provider in Saudi arabia - Engineering 1.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 10.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 11.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 12.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 13.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 14.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 15.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 16.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 17.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 18.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 2.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 3.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 4.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 5.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 6.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 7.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 8.webp",
  "Engineering Service Provider in Saudi arabia - Engineering 9.webp",
];
const engineeringItems = buildMediaItems(
  "/engineering renamed_files",
  engineeringFiles,
  "Engineering"
);

// Fabrications
const fabricationFiles = [
  "Engineering Service Provider in Saudi arabia - fabrication1.webp",
  "Engineering Service Provider in Saudi arabia - fabrication10.webp",
  "Engineering Service Provider in Saudi arabia - fabrication11.webp",
  "Engineering Service Provider in Saudi arabia - fabrication12.webp",
  "Engineering Service Provider in Saudi arabia - fabrication13.webp",
  "Engineering Service Provider in Saudi arabia - fabrication14.webp",
  "Engineering Service Provider in Saudi arabia - fabrication15.webp",
  "Engineering Service Provider in Saudi arabia - fabrication16.webp",
  "Engineering Service Provider in Saudi arabia - fabrication17.webp",
  "Engineering Service Provider in Saudi arabia - fabrication18.webp",
  "Engineering Service Provider in Saudi arabia - fabrication19.webp",
  "Engineering Service Provider in Saudi arabia - fabrication2.webp",
  "Engineering Service Provider in Saudi arabia - fabrication20.webp",
  "Engineering Service Provider in Saudi arabia - fabrication21.webp",
  "Engineering Service Provider in Saudi arabia - fabrication22.webp",
  "Engineering Service Provider in Saudi arabia - fabrication23.webp",
  "Engineering Service Provider in Saudi arabia - fabrication24.webp",
  "Engineering Service Provider in Saudi arabia - fabrication25.webp",
  "Engineering Service Provider in Saudi arabia - fabrication26.webp",
  "Engineering Service Provider in Saudi arabia - fabrication27.webp",
  "Engineering Service Provider in Saudi arabia - fabrication28.webp",
  "Engineering Service Provider in Saudi arabia - fabrication29.webp",
  "Engineering Service Provider in Saudi arabia - fabrication3.webp",
  "Engineering Service Provider in Saudi arabia - fabrication30.webp",
  "Engineering Service Provider in Saudi arabia - fabrication31.webp",
  "Engineering Service Provider in Saudi arabia - fabrication32.webp",
  "Engineering Service Provider in Saudi arabia - fabrication33.webp",
  "Engineering Service Provider in Saudi arabia - fabrication34.webp",
  "Engineering Service Provider in Saudi arabia - fabrication35.webp",
  "Engineering Service Provider in Saudi arabia - fabrication36.webp",
  "Engineering Service Provider in Saudi arabia - fabrication37.webp",
  "Engineering Service Provider in Saudi arabia - fabrication38.webp",
  "Engineering Service Provider in Saudi arabia - fabrication39.webp",
  "Engineering Service Provider in Saudi arabia - fabrication4.webp",
  "Engineering Service Provider in Saudi arabia - fabrication40.webp",
  "Engineering Service Provider in Saudi arabia - fabrication41.webp",
  "Engineering Service Provider in Saudi arabia - fabrication5.webp",
  "Engineering Service Provider in Saudi arabia - fabrication6.webp",
  "Engineering Service Provider in Saudi arabia - fabrication7.webp",
  "Engineering Service Provider in Saudi arabia - fabrication8.webp",
  "Engineering Service Provider in Saudi arabia - fabrication9.webp",
];
const fabricationItems = buildMediaItems(
  "/fabrications renamed_files",
  fabricationFiles,
  "Fabrications"
);

// Safety Bollards
const safetyFiles = [
  "Engineering Service Provider in Saudi arabia - safety ballards1.webp",
  "Engineering Service Provider in Saudi arabia - safety ballards2.webp",
  "Engineering Service Provider in Saudi arabia - safety ballards3.webp",
  "Engineering Service Provider in Saudi arabia - safety ballards4.webp",
];
const safetyItems = buildMediaItems(
  "/safety ballards renamed_files",
  safetyFiles,
  "Safety Bollards"
);

// Machines
const machineFiles = [
  "Engineering Service Provider in Saudi arabia - machining1.webp",
  "Engineering Service Provider in Saudi arabia - machining10.webp",
  "Engineering Service Provider in Saudi arabia - machining11.webp",
  "Engineering Service Provider in Saudi arabia - machining12.webp",
  "Engineering Service Provider in Saudi arabia - machining13.webp",
  "Engineering Service Provider in Saudi arabia - machining14.webp",
  "Engineering Service Provider in Saudi arabia - machining2.webp",
  "Engineering Service Provider in Saudi arabia - machining3.webp",
  "Engineering Service Provider in Saudi arabia - machining4.webp",
  "Engineering Service Provider in Saudi arabia - machining5.webp",
  "Engineering Service Provider in Saudi arabia - machining6.webp",
  "Engineering Service Provider in Saudi arabia - machining7.webp",
  "Engineering Service Provider in Saudi arabia - machining8.webp",
  "Engineering Service Provider in Saudi arabia - machining9.webp",
];
const machineItems = buildMediaItems(
  "/machines_files",
  machineFiles,
  "Machines"
);

// CNC Lazer (includes a video)
const cncFiles = [
  "Engineering Service Provider in Saudi arabia - cnc lazer1.MOV",
  "Engineering Service Provider in Saudi arabia - cnc lazer2.webp",
  "Engineering Service Provider in Saudi arabia - cnc lazer3.webp",
];
const cncItems = buildMediaItems(
  "/cnc lazer renamed_files",
  cncFiles,
  "CNC Lazer"
);

const sections: Array<{ 
  id: string; 
  title: string; 
  items: MediaItem[]; 
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  stats?: string;
}> = [
  {
    id: "machines",
    title: "Machining/milling",
    items: machineItems,
    description: "Precision machining and milling of custom components with tight tolerances: turning, drilling, threading, and finishing for production and prototyping.",
    icon: Wrench,
    gradient: "from-[#f9a51a] to-[#e09416]",
    stats: "14+ Projects"
  },
  {
    id: "cnc-lazer",
    title: "CNC lazer",
    items: cncItems,
    description: "High-precision CNC laser cutting for MS/SS/Aluminum with clean edges and repeatability — from single pieces to large batches.",
    icon: Zap,
    gradient: "from-[#f9a51a] to-[#e09416]",
    stats: "3+ Projects"
  },
  {
    id: "fabrications",
    title: "Steel fabrication",
    items: fabricationItems,
    description: "Fabrication of SS & MS Steel: Cutting, bending, welding, and assembling stainless steel (SS) and mild steel (MS) to build structures, equipment, and components as per design.",
    icon: Hammer,
    gradient: "from-[#f9a51a] to-[#e09416]",
    stats: "41+ Projects"
  },
  {
    id: "safety-bollards",
    title: "Safety bollards",
    items: safetyItems,
    description: "Design, fabrication, and installation of safety bollards and barriers for site protection — custom sizes, finishes, and coatings.",
    icon: Shield,
    gradient: "from-[#f9a51a] to-[#e09416]",
    stats: "4+ Projects"
  },
  {
    id: "engineering",
    title: "Engineering",
    items: engineeringItems,
    description: "Engineering design, detailing, drafting, value engineering, and site support for industrial and infrastructure projects.",
    icon: Ruler,
    gradient: "from-[#f9a51a] to-[#e09416]",
    stats: "18+ Projects"
  },
];

export const Gallery = (): JSX.Element => {
  const [selectedMedia, setSelectedMedia] = React.useState<MediaItem | null>(null);
  const [selectedList, setSelectedList] = React.useState<MediaItem[] | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);
  const [activeSection, setActiveSection] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  // Simulate loading effect
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // After load, if URL has a hash, scroll to that section
  React.useEffect(() => {
    if (isLoading) return;
    if (typeof window === 'undefined') return;
    const hash = window.location.hash?.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(hash);
      }
    }
  }, [isLoading]);

  // Active section tracking with intersection observer
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Floating particles background
  const ParticleBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-orange-400/30 to-yellow-400/30 rounded-full animate-pulse"
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
            VINSUB Gallery
          </h2>
          <p className="text-gray-400 animate-pulse">Loading amazing projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      <ParticleBackground />
      
      {/* Combined full-width top bar (logo + Our Gallery) */}
      <div className="w-full md:fixed md:top-0 md:left-0 md:z-50 bg-black/40 backdrop-blur-2xl border-b border-white/10">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="transform hover:scale-105 transition-all duration-200"
            aria-label="Go to Home"
          >
            <img
              className="w-28 md:w-32 h-8 md:h-10 object-contain filter brightness-0 invert"
              alt="Vinsub"
              src="VINSUB.webp"
            />
          </button>
          <h1 className="hidden md:block absolute left-1/2 -translate-x-1/2 text-4xl font-black bg-gradient-to-r from-[#f9a51a] to-[#e09416] bg-clip-text text-transparent">
            Our Gallery
          </h1>
          <div className="w-28 md:w-32 h-8 md:h-10" />
        </div>
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 text-center">
            {/* Mobile title below logo to avoid overlap */}
            <h1 className="md:hidden text-2xl font-black mb-1 bg-gradient-to-r from-[#f9a51a] to-[#e09416] bg-clip-text text-transparent">
              Our Gallery
            </h1>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#f9a51a] to-[#e09416] mx-auto mb-2 rounded-full"></div>
            <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  onClick={() => {
                    const element = document.getElementById(section.id);
                    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`group relative mr-2 flex-shrink-0 px-4 py-2 rounded-full border transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-[#f9a51a] to-[#e09416] border-[#f9a51a] text-black shadow-lg shadow-[#f9a51a]/25"
                      : "bg-black/30 border-white/20 text-white hover:border-orange-400/50 backdrop-blur-sm"
                  }`}
                  variant="outline"
                >
                  <span className="flex items-center gap-2">
                    <section.icon className="w-4 h-4" />
                    <span className="font-semibold whitespace-nowrap">{section.title}</span>
                  </span>
                  {activeSection === section.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f9a51a]/20 to-[#e09416]/20 rounded-full blur-xl"></div>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to avoid content hidden behind fixed combined bar */}
      <div className="h-[120px] md:h-[150px]" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-20 pt-6 relative z-10">
        {/* Sections */}
        {sections.map((section, sectionIndex) => (
          <section 
            id={section.id} 
            key={section.id} 
            className="mb-20 scroll-mt-24 md:scroll-mt-64 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${sectionIndex * 0.2}s` }}
          >
            {/* Section Header */}
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center mb-4">
                <section.icon className="w-10 h-10 mr-4" />
                <h2 className={`text-3xl md:text-4xl font-black leading-[1.2] pb-1 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-6">
                {section.description}
              </p>
               <div className={`w-24 h-1 bg-gradient-to-r ${section.gradient} mx-auto rounded-full`}></div>
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {section.items.map((item, index) => (
                <Card
                  key={`${section.id}-${index}`}
                   className="group cursor-pointer overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-[#f9a51a]/20"
                  onClick={() => {
                    setSelectedList(section.items);
                    setSelectedIndex(index);
                    setSelectedMedia(item);
                  }}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <CardContent className="p-0 relative">
                    <div className="relative overflow-hidden">
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-64 object-cover group-hover:scale-125 transition-transform duration-700 filter group-hover:brightness-110"
                          loading="lazy"
                        />
                      ) : (
                        <div className="relative">
                          <video
                            src={item.src}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            muted
                            loop
                            playsInline
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-16 h-16 bg-orange-500/80 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                             <Play className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Overlay Effects */}
                       <div className={`absolute inset-0 bg-gradient-to-t ${section.gradient} opacity-0 group-hover:opacity-60 transition-all duration-500 flex items-end`}>
                        <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                          <p className="text-sm opacity-90">Click to view details</p>
                        </div>
                      </div>
                      
                      {/* Corner Badge */}
                       <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <Eye className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <div className="text-center py-16">
          <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-xl border border-orange-400/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Let's bring your engineering vision to life with our expertise and precision.
            </p>
            <Button
              onClick={() => navigate("/")}
              className="px-12 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-orange-500 to-yellow-500 text-black border-2 border-orange-400 hover:shadow-orange-400/50"
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </main>

      {/* Enhanced Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-xl"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-6xl max-h-full animate-fade-in-up">
            <div className="relative overflow-hidden rounded-2xl border border-orange-400/30 shadow-2xl shadow-orange-400/20">
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[80vh] rounded-xl"
                />
              )}
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              ✕
            </button>
            
            {/* Navigation Buttons */}
            {selectedList && selectedList.length > 0 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!selectedList) return;
                    const next = (selectedIndex - 1 + selectedList.length) % selectedList.length;
                    setSelectedIndex(next);
                    setSelectedMedia(selectedList[next]);
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500/80 to-yellow-500/80 hover:from-orange-400/90 hover:to-yellow-400/90 text-white flex items-center justify-center text-2xl shadow-xl backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-110"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!selectedList) return;
                    const next = (selectedIndex + 1) % selectedList.length;
                    setSelectedIndex(next);
                    setSelectedMedia(selectedList[next]);
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500/80 to-yellow-500/80 hover:from-orange-400/90 hover:to-yellow-400/90 text-white flex items-center justify-center text-2xl shadow-xl backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-110"
                  aria-label="Next"
                >
                  ›
                </button>
              </>
            )}
            
            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm">
              {selectedIndex + 1} / {selectedList?.length || 1}
            </div>
          </div>
        </div>
      )}
      
      <FloatingCallButton />

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
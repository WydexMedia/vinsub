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

// Machining
const machiningFiles = [
  "Engineering Service Provider in Saudi Arabia machining 11.webp",
  "Engineering Service Provider in Saudi Arabia machining 110.webp",
  "Engineering Service Provider in Saudi Arabia machining 111.webp",
  "Engineering Service Provider in Saudi Arabia machining 112.webp",
  "Engineering Service Provider in Saudi Arabia machining 113.webp",
  "Engineering Service Provider in Saudi Arabia machining 114.webp",
  "Engineering Service Provider in Saudi Arabia machining 12.webp",
  "Engineering Service Provider in Saudi Arabia machining 13.webp",
  "Engineering Service Provider in Saudi Arabia machining 14.webp",
  "Engineering Service Provider in Saudi Arabia machining 15.webp",
  "Engineering Service Provider in Saudi Arabia machining 16.webp",
  "Engineering Service Provider in Saudi Arabia machining 17.webp",
  "Engineering Service Provider in Saudi Arabia machining 18.webp",
  "Engineering Service Provider in Saudi Arabia machining 19.webp",
];
const machiningItems = buildMediaItems(
  "/machining",
  machiningFiles,
  "Machining"
);

// CNC
const cncFiles = [
  "Engineering Service Provider in Saudi Arabia cnc 11.MOV",
  "Engineering Service Provider in Saudi Arabia cnc 12.webp",
  "Engineering Service Provider in Saudi Arabia cnc 13.webp",
  "Engineering Service Provider in Saudi Arabia, cnc file.mov",
];
const cncItems = buildMediaItems(
  "/cnc",
  cncFiles,
  "CNC"
);

// Civil
const civilFiles = [
  "Engineering Service Provider in Saudi Arabia civil 11.webp",
  "Engineering Service Provider in Saudi Arabia civil 110.webp",
  "Engineering Service Provider in Saudi Arabia civil 111.webp",
  "Engineering Service Provider in Saudi Arabia civil 12.webp",
  "Engineering Service Provider in Saudi Arabia civil 13.webp",
  "Engineering Service Provider in Saudi Arabia civil 14.webp",
  "Engineering Service Provider in Saudi Arabia civil 15.webp",
  "Engineering Service Provider in Saudi Arabia civil 16.webp",
  "Engineering Service Provider in Saudi Arabia civil 17.webp",
  "Engineering Service Provider in Saudi Arabia civil 18.webp",
  "Engineering Service Provider in Saudi Arabia civil 19.webp",
];
const civilItems = buildMediaItems(
  "/civil",
  civilFiles,
  "Civil"
);

// Engineering
const engineeringFiles = [
  "Engineering Service Provider in Saudi Arabia engineering 11.webp",
  "Engineering Service Provider in Saudi Arabia engineering 110.webp",
  "Engineering Service Provider in Saudi Arabia engineering 111.webp",
  "Engineering Service Provider in Saudi Arabia engineering 112.webp",
  "Engineering Service Provider in Saudi Arabia engineering 113.webp",
  "Engineering Service Provider in Saudi Arabia engineering 114.webp",
  "Engineering Service Provider in Saudi Arabia engineering 115.webp",
  "Engineering Service Provider in Saudi Arabia engineering 116.webp",
  "Engineering Service Provider in Saudi Arabia engineering 117.webp",
  "Engineering Service Provider in Saudi Arabia engineering 118.webp",
  "Engineering Service Provider in Saudi Arabia engineering 12.webp",
  "Engineering Service Provider in Saudi Arabia engineering 13.webp",
  "Engineering Service Provider in Saudi Arabia engineering 14.webp",
  "Engineering Service Provider in Saudi Arabia engineering 15.webp",
  "Engineering Service Provider in Saudi Arabia engineering 16.webp",
  "Engineering Service Provider in Saudi Arabia engineering 17.webp",
  "Engineering Service Provider in Saudi Arabia engineering 18.webp",
  "Engineering Service Provider in Saudi Arabia engineering 19.webp",
  "Engineering Service Provider in Saudi Arabia engineering.jpeg",
];
const engineeringItems = buildMediaItems(
  "/engineering",
  engineeringFiles,
  "Engineering"
);

// Pipeline
const pipelineFiles = [
  "Engineering Service Provider in Saudi Arabia pipeline 11.webp",
  "Engineering Service Provider in Saudi Arabia pipeline 110.webp",
  "Engineering Service Provider in Saudi Arabia pipeline 111.webp",
  "Engineering Service Provider in Saudi Arabia pipeline 112.webp",
  "Engineering Service Provider in Saudi Arabia pipeline 12.webp",
  "Engineering Service Provider in Saudi Arabia pipeline 13.webp",
  "Engineering Service Provider in Saudi Arabia pipeline 14.webp",
  "Engineering Service Provider in Saudi Arabia pipeline 15.webp",
  "Engineering Service Provider in Saudi Arabia pipeline 16.webp",
  "Engineering Service Provider in Saudi Arabia pipeline 17.webp",
  "Engineering Service Provider in Saudi Arabia pipeline 18.webp",
  "Engineering Service Provider in Saudi Arabia pipeline 19.webp",
];
const pipelineItems = buildMediaItems(
  "/pipeline",
  pipelineFiles,
  "Pipeline"
);

// Safety Bollards
const safetyFiles = [
  "Engineering Service Provider in Saudi Arabia safety ballbards1.webp",
  "Engineering Service Provider in Saudi Arabia safety ballbards2.webp",
  "Engineering Service Provider in Saudi Arabia safety ballbards3.webp",
  "Engineering Service Provider in Saudi Arabia safety ballbards4.webp",
];
const safetyItems = buildMediaItems(
  "/safety-ballards",
  safetyFiles,
  "Safety Bollards"
);

// Sleeves (folder name is 'sleaves')
const sleevesFiles = [
  "Engineering Service Provider in Saudi Arabia  damam sleaves1.webp",
  "Engineering Service Provider in Saudi Arabia  damam sleaves3.webp",
  "Engineering Service Provider in Saudi Arabia  damam sleaves4.webp",
  "Engineering Service Provider in Saudi Arabia  damam sleaves5.webp",
  "Engineering Service Provider in Saudi Arabia  damam sleaves6.webp",
  "Engineering Service Provider in Saudi Arabia  damam sleaves7.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 11.MOV",
  "Engineering Service Provider in Saudi Arabia sleaves 110.MOV",
  "Engineering Service Provider in Saudi Arabia sleaves 111.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 112.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 113.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 114.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 115.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 116.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 117.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 118.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 119.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 12.MOV",
  "Engineering Service Provider in Saudi Arabia sleaves 13.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 14.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 15.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 16.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 17.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 18.webp",
  "Engineering Service Provider in Saudi Arabia sleaves 19.MOV",
];
const sleevesItems = buildMediaItems(
  "/sleaves",
  sleevesFiles,
  "Sleeves"
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
    id: "machining",
    title: "Machining/milling",
    items: machiningItems,
    description: "Precision machining and milling of custom components with tight tolerances: turning, drilling, threading, and finishing for production and prototyping.",
    icon: Wrench,
    gradient: "from-[#f9a51a] to-[#e09416]",
  },
  {
    id: "cnc",
    title: "CNC lazer",
    items: cncItems,
    description: "High-precision CNC cutting/processing including videos of machines in action.",
    icon: Zap,
    gradient: "from-[#f9a51a] to-[#e09416]",
  },
  {
    id: "civil",
    title: "Civil",
    items: civilItems,
    description: "Civil works and site installations across industrial and infrastructure projects.",
    icon: Hammer,
    gradient: "from-[#f9a51a] to-[#e09416]",
  },
  {
    id: "engineering",
    title: "Steel fabrication",
    items: engineeringItems,
    description: "Engineering design, detailing, drafting, value engineering, and site support for industrial and infrastructure projects.",
    icon: Ruler,
    gradient: "from-[#f9a51a] to-[#e09416]",
  },
  {
    id: "pipeline",
    title: "Pipeline",
    items: pipelineItems,
    description: "Pipeline fabrication, components, and project executions.",
    icon: Ruler,
    gradient: "from-[#f9a51a] to-[#e09416]",
  },
  {
    id: "safety-bollards",
    title: "Safety bollards",
    items: safetyItems,
    description: "Design, fabrication, and installation of safety bollards and barriers for site protection — custom sizes, finishes, and coatings.",
    icon: Shield,
    gradient: "from-[#f9a51a] to-[#e09416]",
  },
  {
    id: "sleeves",
    title: "Sleeves",
    items: sleevesItems,
    description: "Protective sleeves and related installations with image and video references.",
    icon: Hammer,
    gradient: "from-[#f9a51a] to-[#e09416]",
  },
];

export const Gallery = (): JSX.Element => {
  const [selectedMedia, setSelectedMedia] = React.useState<MediaItem | null>(null);
  const [selectedList, setSelectedList] = React.useState<MediaItem[] | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);
  const [activeSection, setActiveSection] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeModalSectionId, setActiveModalSectionId] = React.useState<string>("");
  const navigate = useNavigate();

  // Simulate loading effect
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // After load, if URL has a hash or query (?section=), scroll to that section
  React.useEffect(() => {
    if (isLoading) return;
    if (typeof window === 'undefined') return;
    const { hash, search } = window.location;
    // BrowserRouter style (?section=...) in search
    const params = new URLSearchParams(search);
    const sectionFromQuery = params.get('section') ?? '';

    // HashRouter style: everything is inside hash (e.g., #/gallery?section=fabrications)
    let sectionFromHashQuery = '';
    if (hash && hash.includes('?')) {
      const queryString = hash.substring(hash.indexOf('?') + 1);
      const hashParams = new URLSearchParams(queryString);
      sectionFromHashQuery = hashParams.get('section') ?? '';
    }

    // Direct hash to an id (e.g., #fabrications)
    const directHashId = hash && !hash.includes('?') ? hash.replace('#', '') : '';

    const target = sectionFromQuery || sectionFromHashQuery || directHashId;
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        // account for fixed top bar
        const offset = 150;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        setActiveSection(target);
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
        <div className="relative w-full px-4 md:px-10 py-2 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="transform hover:scale-105 transition-all duration-200"
            aria-label="Go to Home"
          >
            <img
              className="w-48 md:w-56 h-12 md:h-14 object-contain"
              alt="Vinsub"
              src="VINSUB.webp"
              style={{ filter: "invert(78%) sepia(84%) saturate(841%) hue-rotate(355deg) brightness(101%) contrast(102%)" }}
            />
          </button>
          <h1 className="hidden md:block absolute left-1/2 -translate-x-1/2 text-4xl font-black bg-gradient-to-r from-[#f9a51a] to-[#e09416] bg-clip-text text-transparent">
            Our Gallery
          </h1>
          <div className="w-48 md:w-56 h-12 md:h-14" />
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
                    setActiveModalSectionId(section.id);
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
        <>
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-xl"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative w-full max-w-6xl max-h-full animate-fade-in-up flex flex-col items-center" onClick={(e) => e.stopPropagation()}>

            <div className="relative overflow-hidden rounded-2xl border border-orange-400/30 shadow-2xl shadow-orange-400/20 mx-auto">
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="max-w-full max-h-[80vh] object-contain mx-auto block"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[80vh] rounded-xl mx-auto block"
                />
              )}
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              ✕
            </button>
            
            {/* Navigation Buttons (respects active modal section items) */}
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
            {/* Bottom floating section nav inside modal overlay */}
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-[60]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-full p-2 overflow-x-auto no-scrollbar flex items-center gap-2">
                {sections.map((section) => (
                  <Button
                    key={`modal-bottom-nav-${section.id}`}
                    onClick={() => {
                      setSelectedList(section.items);
                      setSelectedIndex(0);
                      setSelectedMedia(section.items[0]);
                      setActiveModalSectionId(section.id);
                    }}
                    className={
                      `group relative flex-shrink-0 px-4 py-2 rounded-full border transition-all duration-300 ${
                        activeModalSectionId === section.id
                          ? 'bg-gradient-to-r from-[#f9a51a] to-[#e09416] border-[#f9a51a] text-black'
                          : 'bg-black/30 border-white/20 text-white hover:border-orange-400/50'
                      }`
                    }
                    variant="outline"
                  >
                    <span className="flex items-center gap-2">
                      <section.icon className="w-4 h-4" />
                      <span className="font-semibold whitespace-nowrap">{section.title}</span>
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        </>
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
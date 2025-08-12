import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
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

// Civil Engineering
const civilFiles = [
  "Engineering Service Provider in Saudi Arabia civil1.webp",
  "Engineering Service Provider in Saudi Arabia civil10.webp",
  "Engineering Service Provider in Saudi Arabia civil11.webp",
  "Engineering Service Provider in Saudi Arabia civil2.webp",
  "Engineering Service Provider in Saudi Arabia civil3.webp",
  "Engineering Service Provider in Saudi Arabia civil4.webp",
  "Engineering Service Provider in Saudi Arabia civil5.webp",
  "Engineering Service Provider in Saudi Arabia civil6.webp",
  "Engineering Service Provider in Saudi Arabia civil7.webp",
  "Engineering Service Provider in Saudi Arabia civil8.webp",
  "Engineering Service Provider in Saudi Arabia civil9.webp",
];
const civilItems = buildMediaItems(
  "/civil renamed_files",
  civilFiles,
  "Civil Engineering"
);

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

const sections: Array<{ id: string; title: string; items: MediaItem[] }> = [
  { id: "civil-engineering", title: "Civil Engineering", items: civilItems },
  { id: "engineering", title: "Engineering", items: engineeringItems },
  { id: "fabrications", title: "Fabrications", items: fabricationItems },
  { id: "safety-bollards", title: "Safety Bollards", items: safetyItems },
  { id: "machines", title: "Machines", items: machineItems },
  { id: "cnc-lazer", title: "CNC Lazer", items: cncItems },
];

export const Gallery = (): JSX.Element => {
  const [selectedMedia, setSelectedMedia] = React.useState<MediaItem | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full h-16 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between px-4 h-full max-w-7xl mx-auto">
          <img
            className="w-28 h-8 object-contain"
            alt="Vinsub"
            src="VINSUB.webp"
          />
          <Button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-lg bg-[#f9a51a] text-white font-semibold hover:bg-[#e09416] transition-colors"
          >
            ← Back to Home
          </Button>
        </div>

        {/* Section Navigation */}
        <nav className="sticky top-16 z-40 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 mb-8" aria-label="Gallery sections">
          <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
            {sections.map((s) => (
              <Button
                key={s.id}
                onClick={() => {
                  const el = document.getElementById(s.id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="rounded-full border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 h-9"
                variant={"outline" as any}
              >
                {s.title}
              </Button>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[#f9a51a] to-[#e09416] bg-clip-text mb-4">
            Our Gallery
          </h1>
          <Separator className="w-32 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive portfolio of engineering projects, construction sites, and industrial services. 
            Each image represents our commitment to quality and excellence in every project we undertake.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <section id={section.id} key={section.title} className="mb-14 scroll-mt-36">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{section.title}</h2>
            <Separator className="w-24 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {section.items.map((item, index) => (
                <Card
                  key={`${section.title}-${index}`}
                  className="group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={() => setSelectedMedia(item)}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <video
                          src={item.src}
                          className="w-full h-64 object-cover"
                          muted
                          loop
                          playsInline
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Back to Home Button */}
        <div className="text-center">
          <Button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#f9a51a] to-[#e09416] text-white border-2 border-[#f9a51a] hover:shadow-xl"
          >
            ← Back to Home
          </Button>
        </div>
      </main>

      {/* Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                className="max-w-full max-h-full rounded-lg"
              />
            )}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <FloatingCallButton />
    </div>
  );
};

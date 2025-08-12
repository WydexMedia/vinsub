import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { FloatingCallButton } from "../components/FloatingCallButton";

const projectImages: Array<{ src: string; alt: string }> = [
  { src: "/projects/16.webp", alt: "Aramco Stadium project image 1" },
  {
    src: "/projects/240725-6-weeks-after-1st-concrete-2_d4dcd322ae6a9c6b9aaabfced32dd84e_800-600x450.jpg",
    alt: "Aramco Stadium construction progress",
  },
  { src: "/projects/OIP.jpeg", alt: "Aramco Stadium rendering" },
];

export const Projects = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full h-16 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between px-4 h-full max-w-7xl mx-auto">
          <img className="w-28 h-8 object-contain" alt="Vinsub" src="VINSUB.webp" />
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-lg bg-[#f9a51a] text-white font-semibold hover:bg-[#e09416] transition-colors"
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 pt-10 pb-12">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[#f9a51a] to-[#e09416] bg-clip-text mb-3">
            Aramco Stadium – Al Khobar, Saudi Arabia
          </h1>
          <Separator className="w-32 mx-auto" />
        </div>

        {/* Content */}
        <section className="mb-10">
          <Card className="bg-white border border-gray-100 shadow-xl">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                Aramco Stadium – Al Khobar, Saudi Arabia
              </h2>
              <div className="space-y-4 text-gray-700 leading-7 text-justify">
                <p>
                  The Aramco Stadium in Al Khobar stands as a landmark of modern sports architecture and
                  innovation. Designed by world-renowned architects, this state-of-the-art facility is envisioned to
                  host both local and international sporting events, with a seating capacity of over 46,000.
                </p>
                <p>
                  Inspired by the flowing patterns of the Arabian Gulf, its sail-like façade combines elegance with
                  engineering excellence, allowing natural light and ventilation while ensuring spectator comfort
                  through advanced cooling systems. The stadium is part of a wider mixed-use development that
                  includes training facilities, entertainment zones, and retail spaces, creating a vibrant hub for
                  sports and community engagement.
                </p>
                <p>
                  Our involvement in this prestigious project reflects our commitment to delivering high-quality
                  solutions for world-class infrastructure developments. The Aramco Stadium is set to become a
                  symbol of pride for Al Khobar and a benchmark for future sports venues in the region.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Images */}
        <section className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Project Images</h3>
          <Separator className="w-24 mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((img) => (
              <Card
                key={img.src}
                className="group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedImage(img.src)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Back */}
        <div className="text-center">
          <Button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#f9a51a] to-[#e09416] text-white border-2 border-[#f9a51a] hover:shadow-xl"
          >
            ← Back to Home
          </Button>
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img src={selectedImage} alt="Selected project" className="max-w-full max-h-full object-contain rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
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



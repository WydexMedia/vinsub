import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

// Gallery images data
const galleryImages = [
  { src: "engineering-service-provider-in-saudi-arabia1.webp", alt: "Engineering Service 1", title: "Industrial Engineering" },
  { src: "engineering-service-provider-in-saudi-arabia.webp", alt: "Engineering Service 2", title: "Construction Site" },
  { src: "4466.webp", alt: "Engineering Service 3", title: "Project Management" },
  { src: "close-up-metallic-gear.webp", alt: "Metallic Gear", title: "Precision Engineering" },
  { src: "close-up-machine-part.webp", alt: "Machine Part", title: "Manufacturing Excellence" },
  { src: "hd-construction-site-architecture-scene-background-image.webp", alt: "Construction Site", title: "Infrastructure Development" },
  { src: "factory-aluminum-pvc-windows-doors-production-details-industrial-equipment.webp", alt: "Factory Production", title: "Industrial Manufacturing" },
  { src: "low-angle-view-scafolding-building.webp", alt: "Scaffolding Building", title: "Construction Services" },
  { src: "young-factory-worker-working-with-adept-robotic-arm.webp", alt: "Robotic Arm", title: "Advanced Technology" },
  { src: "high-angle-measuring-tools-desk-still-life.webp", alt: "Measuring Tools", title: "Quality Control" },
  { src: "close-up-machine-part.webp", alt: "Machine Part Detail", title: "Precision Manufacturing" },
  { src: "engineering-service-provider-in-saudi-arabia1.webp", alt: "Engineering Service 4", title: "Professional Services" },
];

export const Gallery = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
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
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Selected image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

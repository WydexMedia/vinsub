import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

// Certification images data
const certificationImages = [
  { 
    src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80", 
    alt: "Certification 2", 
    title: "ISO 14001:2015 Environmental Management",
    description: "Environmental management system certification"
  },
  { 
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80", 
    alt: "Certification 3", 
    title: "OHSAS 18001:2007 Occupational Health",
    description: "Occupational health and safety management"
  },
  { 
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", 
    alt: "Certification 4", 
    title: "ISO 45001:2018 Occupational Health",
    description: "Occupational health and safety management systems"
  },
  { 
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80", 
    alt: "Certification 5", 
    title: "ISO 27001:2013 Information Security",
    description: "Information security management systems"
  },
  { 
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80", 
    alt: "Certification 6", 
    title: "ISO 50001:2018 Energy Management",
    description: "Energy management systems certification"
  },
  { 
    src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80", 
    alt: "Certification 8", 
    title: "SASO Certification",
    description: "Saudi Arabian Standards Organization certification"
  },
  { 
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80", 
    alt: "Certification 9", 
    title: "API Certification",
    description: "American Petroleum Institute certification"
  },
  { 
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", 
    alt: "Certification 10", 
    title: "ASME Certification",
    description: "American Society of Mechanical Engineers certification"
  },
  { 
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80", 
    alt: "Certification 11", 
    title: "AWS Certification",
    description: "American Welding Society certification"
  },
  { 
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80", 
    alt: "Certification 12", 
    title: "NACE Certification",
    description: "National Association of Corrosion Engineers certification"
  },
];

export const Certifications = (): JSX.Element => {
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
            Our Certifications
          </h1>
          <Separator className="w-32 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of certifications and accreditations that demonstrate our commitment 
            to quality, safety, and environmental standards in all our engineering and construction projects.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {certificationImages.map((cert, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(cert.src)}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                    <p className="text-sm opacity-90">{cert.description}</p>
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
              alt="Selected certification"
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

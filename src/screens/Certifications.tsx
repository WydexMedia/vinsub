import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { FloatingCallButton } from "../components/FloatingCallButton";

// Single company certificate image
const CERTIFICATE_SRC = "vinsub-certificate.png";

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
        {/* Page Title */
        }
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[#f9a51a] to-[#e09416] bg-clip-text mb-4">Certificate</h1>
          <Separator className="w-32 mx-auto mb-6" />
        </div>

        {/* Certificate Viewer */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <Card className="w-full max-w-4xl lg:max-w-5xl bg-white border border-gray-100 shadow-xl">
            <CardContent className="p-4">
              <div className="relative">
                <img
                  src={CERTIFICATE_SRC}
                  alt="Company Certificate"
                  className="w-full h-auto object-contain rounded-lg"
                  loading="lazy"
                  onClick={() => setSelectedImage(CERTIFICATE_SRC)}
                />
                <div className="mt-3 text-sm text-gray-500 text-center">Tap or click the certificate to view fullscreen</div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={CERTIFICATE_SRC}
              download
              className="px-6 py-2 rounded-full font-semibold border-2 border-[#f9a51a] text-[#f9a51a] hover:bg-[#f9a51a] hover:text-white transition-colors"
            >
              Download
            </a>
            <Button
              onClick={() => setSelectedImage(CERTIFICATE_SRC)}
              className="px-6 py-2 rounded-full font-bold bg-gradient-to-r from-[#f9a51a] to-[#e09416] text-white border-2 border-[#f9a51a] hover:shadow-md"
            >
              View Fullscreen
            </Button>
            <a
              href={CERTIFICATE_SRC}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 rounded-full font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Open in New Tab
            </a>
          </div>
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
          <div className="relative w-full max-w-5xl max-h-full">
            <img
              src={selectedImage}
              alt="Selected certification"
              className="w-full max-h-[85vh] object-contain rounded-lg"
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
      <FloatingCallButton />
    </div>
  );
};

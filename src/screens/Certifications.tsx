import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { FloatingCallButton } from "../components/FloatingCallButton";

// Certificates
const ISO_CERT_IMG = "vinsub-registration.png"; // ISO certificate (Image)
const NCEC_CERT_IMG = "vinsub-certificate.png"; // NCEC permit certificate (Image)

export const Certifications = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full h-16 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between px-4 h-full max-w-7xl mx-auto">
          <button
            onClick={() => navigate("/")}
            aria-label="Back to Home"
            className="p-0 bg-transparent border-0"
          >
            <img
              className="w-28 h-auto max-h-8 object-contain cursor-pointer"
              alt="Vinsub"
              src="/VINSUB.webp"
            />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[#f9a51a] to-[#e09416] bg-clip-text mb-4">Certificates</h1>
          <Separator className="w-32 mx-auto mb-6" />
          <p className="text-gray-600">ISO certificate and NCEC permit certificate</p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* ISO Certificate (PDF) */}
          <Card className="bg-white border border-gray-100 shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">ISO Certificate</h2>
              <div className="relative">
                <img
                  src={ISO_CERT_IMG}
                  alt="ISO Certificate"
                  className="w-full h-auto object-contain rounded-lg"
                  loading="lazy"
                  onClick={() => setSelectedImage(ISO_CERT_IMG)}
                />
                <div className="mt-3 text-sm text-gray-500 text-center">Tap or click to view fullscreen</div>
              </div>
            </CardContent>
          </Card>

          {/* NCEC Permit Certificate (Image) */}
          <Card className="bg-white border border-gray-100 shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">NCEC Permit Certificate</h2>
              <div className="relative">
                <img
                  src={NCEC_CERT_IMG}
                  alt="NCEC Permit Certificate"
                  className="w-full h-auto object-contain rounded-lg"
                  loading="lazy"
                  onClick={() => setSelectedImage(NCEC_CERT_IMG)}
                />
                <div className="mt-3 text-sm text-gray-500 text-center">Tap or click to view fullscreen</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home Button removed; logo in header now navigates home */}
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

      {/* PDF Modal removed as ISO is now an image */}
      <FloatingCallButton />
    </div>
  );
};

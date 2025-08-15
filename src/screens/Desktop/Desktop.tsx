import { Instagram, Facebook, Twitter, Cog, Wrench, Hammer, Factory, Fuel, SprayCan } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { FloatingCallButton } from "../../components/FloatingCallButton";

// Data for navigation menu
const navigationItems = [
  { name: "Home", href: "#", active: false },
  { name: "About Us", href: "#about", active: false },
  { name: "Gallery", href: "#gallery-certifications", active: false },
  { name: "Services", href: "#services", active: false },
  { name: "Projects", href: "#/gallery", active: false },
  { name: "Certifications", href: "#/certifications", active: false },
  { name: "Contact Us", href: "tel:0509331315", active: true },
];

// Data for services section (fixed typos)
const services = [
  {
    id: 1,
    title: "ENGINEERING SERVICES",
    description:
      "We specialize in a variety of mechanical services, including welding, machining, fabrication, and pipeline erection. As a trusted Engineering Service Provider in Saudi Arabia, we also handle maintenance, contracting, and construction projects, along with the installation of water and sewage lines, as well as electromechanical systems for fire safety and security protection.",
  },
  {
    id: 2,
    title: "CIVIL / ARCHITECTURAL",
    description:
      "We focus on civil construction and offer a wide range of services, including structural steel works, earthworks, pre-engineered steel buildings, RCC works, internal finishing, furnishing, and decoration. As a leading Engineering Service Provider in Saudi Arabia, and with our workshop services in Dammam, we also take care of installing gates and fences, constructing industrial buildings, asphalting, site preparations, excavation, warehouse renovations, and maintenance.",
  },
  {
    id: 3,
    title: "OPERATION & MAINTENANCE",
    description:
      "We handle a variety of projects, including power plants, office buildings, warehouses, workshops, and industrial services. As an experienced Engineering Service Provider in Saudi Arabia, we proudly provide workshop services in Dammam, tailored to meet the diverse needs of our clients with a focus on quality and reliability. Our commitment is to complete every project on time and uphold the highest standards.",
  },
  {
    id: 4,
    title: "INDUSTRIAL & SAFETY EQUIPMENT TRADING",
    description:
      "We specialize in providing dependable industrial equipment trading to support projects across various sizes and sectors. As a trusted Engineering Service Provider in Saudi Arabia, we make sure our clients have access to top-notch machinery and tools. With our workshop services based in Dammam, we assist businesses in keeping their operations running smoothly and reaching their goals effectively.",
  },
];

// Data for quick links
const quickLinks = ["Home", "About Us", "Our projects", "Latest news", "Quality", "Contact Us"];

// Gallery items (icons + names)
const certifications = [
  { title: "Carbon & Stainless Steel Fabrication", icons: [Cog] },
  { title: "CNC Laser Cutting", icons: [Wrench, Hammer] },
  { title: "Machining Works", icons: [Wrench] },
  { title: "Oil Field & Rig Fabrication", icons: [Fuel] },
  { title: "General Steel Fabrication", icons: [Factory] },
  { title: "Sandblasting & Painting", icons: [SprayCan] },
];

// Map homepage gallery card titles to Gallery section IDs
const gallerySectionMap: Record<string, string> = {
  "Carbon & Stainless Steel Fabrication": "fabrications",
  "CNC Laser Cutting": "cnc-lazer",
  "Machining Works": "machines",
  "Oil Field & Rig Fabrication": "fabrications",
  "General Steel Fabrication": "fabrications",
  "Sandblasting & Painting": "fabrications",
};

// Note: Certifications moved to top navbar; inline certifications carousel removed from homepage

// Full-bleed hero images (reuse your existing assets)
const heroImages = [
  "engineering-service-provider-in-saudi-arabia.webp",
  "4466.webp",
  "vinsub.jpg",
  "close-up-metallic-gear.webp",
];

export const Desktop = (): JSX.Element => {
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const [visibleSections, setVisibleSections] = React.useState<Set<string>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCarouselPaused, setIsCarouselPaused] = React.useState(false);
  const [isInstant, setIsInstant] = React.useState(false);
  // Hero carousel (desktop + mobile share this)
  const [heroIndex, setHeroIndex] = React.useState(0);
  const [heroPaused, setHeroPaused] = React.useState(false);
  // desktop carousel visible count
  const navigate = useNavigate();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = React.useState(false);
  const [pendingDownloadHref, setPendingDownloadHref] = React.useState<string | null>(null);

  // Desktop base design height for canvas
  const DESIGN_HEIGHT = 6617;
  const ORIGINAL_HERO_HEIGHT = 1072;
  const HERO_HEIGHT = 700; // adjust as needed
  const DELTA = ORIGINAL_HERO_HEIGHT - HERO_HEIGHT;
  const ADJUSTED_DESIGN_HEIGHT = DESIGN_HEIGHT - DELTA;
  // No scaling needed when using full-width canvas

  // No scaling effect needed; using full-width canvas

  // Intersection Observer for scroll animations
  React.useEffect(() => {
    // Disable scroll-triggered animations on mobile screens
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setVisibleSections(
        new Set([
          // mobile sections
          'mobile-hero',
          'mobile-cta',
          'mobile-about',
          'mobile-services',
          'mobile-gallery-certifications',
          'mobile-mission',
          'mobile-vision',
          'mobile-clients',
          'mobile-ceo-message',
          'mobile-footer',
          // desktop sections (safe to reveal; they are hidden on lg:hidden anyway)
          'hero',
          'cta',
          'about',
          'services',
          'gallery-certifications',
          'mission',
          'vision',
          'clients',
          'footer',
        ])
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  // Auto-rotate carousel every 1 second - seamless circular loop within a safe window
  React.useEffect(() => {
    const interval = setInterval(() => {
      if ((visibleSections.has("gallery-certifications") || visibleSections.has("mobile-gallery-certifications")) && !isCarouselPaused) {
        const baseLen = certifications.length;
        let didInstantReset = false;
        setCarouselIndex((prev) => {
          const next = prev + 1;
          if (next >= baseLen * 3) {
            didInstantReset = true;
            return baseLen + (next - baseLen * 3);
          }
          return next;
        });
        if (didInstantReset) {
          setIsInstant(true);
          setTimeout(() => setIsInstant(false), 0);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [certifications.length, visibleSections, isCarouselPaused]);

  // Auto-play (hero carousel)
  React.useEffect(() => {
    if (heroPaused) return;
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [heroPaused, heroImages.length]);

  // Helper: transition delay via style (avoid dynamic tailwind classes)
  const tDelay = (ms: number) => ({ transitionDelay: `${ms}ms` });

  const requestDownload = (href: string) => {
    setPendingDownloadHref(href);
    setIsDownloadModalOpen(true);
  };

  const confirmDownload = () => {
    if (!pendingDownloadHref) return;
    const a = document.createElement('a');
    a.href = pendingDownloadHref;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setIsDownloadModalOpen(false);
    setPendingDownloadHref(null);
  };

  const cancelDownload = () => {
    setIsDownloadModalOpen(false);
    setPendingDownloadHref(null);
  };

  React.useEffect(() => {
    if (!isDownloadModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cancelDownload();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isDownloadModalOpen]);

  // Carousel control handlers - seamless circular navigation within safe window
  const handleCarouselControl = (direction: 'prev' | 'next') => {
    setIsCarouselPaused(true);
    setTimeout(() => setIsCarouselPaused(false), 3000); // Resume after 3 seconds
    const baseLen = certifications.length;

    if (direction === 'prev') {
      let didInstantReset = false;
      setCarouselIndex((prev) => {
        if (prev <= baseLen) {
          didInstantReset = true;
          return baseLen * 2 - 1; // jump to end of safe window
        }
        return prev - 1;
      });
      if (didInstantReset) {
        setIsInstant(true);
        setTimeout(() => setIsInstant(false), 0);
      }
    } else {
      let didInstantReset = false;
      setCarouselIndex((prev) => {
        const next = prev + 1;
        if (next >= baseLen * 3) {
          didInstantReset = true;
          return baseLen; // jump back to start of safe window
        }
        return next;
      });
      if (didInstantReset) {
        setIsInstant(true);
        setTimeout(() => setIsInstant(false), 0);
      }
    }
  };

  // Get items for carousel with duplicates for infinite scroll
  const getCarouselItems = () => {
    // Duplicate icon items for seamless loop
    return [...certifications, ...certifications, ...certifications, ...certifications];
  };

  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.08) translateZ(0); }
          100% { transform: scale(1.0) translateZ(0); }
        }
      `}</style>
      {/* Download confirmation modal (global, works on desktop and mobile) */}
      {isDownloadModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={cancelDownload} />
          <div className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-black to-white px-6 py-4">
              <h3 className="text-white font-extrabold text-lg">Download Brochure</h3>
            </div>
            <div className="bg-white px-6 py-6">
              <p className="text-neutral-900 text-sm">Do you want to download the brochure now?</p>
              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  onClick={cancelDownload}
                  className="px-4 py-2 rounded-md font-semibold text-neutral-800 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDownload}
                  className="px-4 py-2 rounded-md font-bold text-white bg-gradient-to-r from-[#f9a51a] to-[#e09416] hover:opacity-90"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DESKTOP (scaled wrapper keeps baseline perfect on 1480px, fits other laptop widths) */}
      <div className="hidden lg:block bg-white overflow-hidden w-full">
        {/* Spacer wrapper preserves scaled height in the normal flow */}
          <div
            className="relative w-full mx-auto"
            style={{ height: ADJUSTED_DESIGN_HEIGHT }}
          >
          {/* Fixed-size inner canvas that scales responsively */}
          <div
            className="relative"
            style={{
              width: '100%',
              height: ADJUSTED_DESIGN_HEIGHT,
              transform: `translateY(-${DELTA}px)`,
              transformOrigin: 'top center',
              margin: '0 auto',
            }}
          >
          {/* Vision */}
          <section
            id="vision"
            data-animate
            className={`absolute w-full h-[419px] top-[4754px] left-0 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(0,0,0,1)_100%)] transition-all duration-1000 ${visibleSections.has("vision") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <Card className="absolute w-[507px] h-[185px] top-[117px] left-1/2 bg-transparent border-none shadow-none"
              style={{ transform: 'translate(-50%, 0) translateX(380px)' }}
            >
              <CardContent className="relative w-[511px] h-[185px] p-0">
                <h2
                  className="w-[157px] top-0 left-1/2 -translate-x-1/2 text-black text-[26px] absolute font-extrabold leading-[60px] whitespace-nowrap transition-all duration-700 text-center"
                  style={tDelay(300)}
                >
                  OUR VISION
                </h2>

                <p
                  className="absolute w-[507px] top-[77px] left-1/2 -translate-x-1/2 font-medium text-black text-sm text-justify leading-[18px] transition-all duration-700"
                  style={tDelay(500)}
                >
                  We aspire to be the top provider of structural steel solutions in the world. As an Engineering
                  Service Provider based in Saudi Arabia, our goal is to raise the bar for quality and innovation with
                  every project we undertake. We&apos;re all about building strong partnerships and delivering real
                  value to our clients. With our commitment and expertise, we aim for excellence in everything we do.
                </p>
              </CardContent>
            </Card>
            <img
              className={`absolute w-[300px] h-[300px] top-[70px] left-1/2 object-cover transition-opacity duration-700 ${
                visibleSections.has("vision") ? "opacity-100" : "opacity-0"
              }`}
              style={{ ...tDelay(200), transform: 'translate(-50%, 0) translateX(-380px)' }}
              alt="Vision"
              src="vision.webp"
              loading="lazy"
            />
          </section>

          {/* Mission */}
          <section
            id="mission"
            data-animate
            className={`absolute w-full h-[419px] top-[4335px] left-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(0,0,0,1)_100%)] transition-all duration-1000 ${visibleSections.has("mission") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <img
              className={`absolute w-[300px] h-[300px] top-16 left-1/2 object-cover transition-opacity duration-700 ${
                visibleSections.has("mission") ? "opacity-100" : "opacity-0"
              }`}
              style={{ ...tDelay(200), transform: 'translate(-50%, 0) translateX(380px)' }}
              alt="Mission"
              src="mission.webp"
              loading="lazy"
            />
            <Card className="absolute w-[501px] h-[203px] top-[108px] left-1/2 bg-transparent border-none shadow-none"
              style={{ transform: 'translate(-50%, 0) translateX(-380px)' }}
            >
              <CardContent className="p-0">
                <h2
                  className="w-[181px] top-0 left-1/2 -translate-x-1/2 text-black text-[26px] absolute font-extrabold leading-[60px] whitespace-nowrap transition-all duration-700 text-center"
                  style={tDelay(300)}
                >
                  OUR MISSION
                </h2>
                <p
                  className="absolute w-[497px] top-[77px] left-1/2 -translate-x-1/2 font-medium text-black text-sm text-justify leading-[18px] transition-all duration-700"
                  style={tDelay(500)}
                >
                  To deliver top-notch fabrication, installation, and erection of structural steel and process
                  equipment at the best prices among competitors, without compromising on quality. As a leading
                  engineering service provider in Saudi Arabia, we prioritize safety, precision, and customer
                  satisfaction in every project. Our goal is to build long-lasting, trustworthy relationships through
                  exceptional service and reliable machine shop support.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* HERO (DESKTOP) */}
          <section
            id="hero"
            data-animate
            className={`absolute w-full -top-0.5 left-0 transition-all duration-1000 ${
              visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ height: HERO_HEIGHT, transform: `translateY(${DELTA}px)` }}
          >
            {/* NAVBAR with angled "cut" bottom */}
            <header
              className="fixed z-50 top-0 left-0 w-full h-[101px] bg-white/20 backdrop-blur-xl backdrop-saturate-150 border-b-0 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              style={tDelay(200)}
            >
              <div className="relative max-w-[1280px] mx-auto h-full flex items-center justify-between px-6">
                <img
                  className="w-[220px] h-auto max-h-10 object-contain transition-all duration-700"
                  style={tDelay(300)}
                  alt="Vinsub"
                  src="/VINSUB.webp"
                  decoding="async"
                />

                <NavigationMenu className="hidden xl:block transition-all duration-700" style={tDelay(400)}>
                  <NavigationMenuList className="flex gap-8">
                    {navigationItems.map((item, index) => (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuLink
                          href={item.href}
                          className={`font-bold text-[15px] whitespace-nowrap transition-all duration-300 hover:scale-105 ${
                            item.active ? "text-[#f9a51a]" : "text-neutral-900"
                          }`}
                          style={tDelay(500 + index * 80)}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>

                <div className="hidden xl:flex items-center gap-3">
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); requestDownload('/brochure-vinsub.pdf'); }}
                    className="rounded-xl font-bold px-4 py-2 bg-gradient-to-r from-[#f9a51a] to-[#e09416] hover:opacity-90 text-black"
                  >
                    Download Brochure
                  </a>
                  <a
                    href="tel:0509331315"
                    className="rounded-xl font-bold px-4 py-2 bg-neutral-900 text-white hover:opacity-90"
                    aria-label="Call 0509331315"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </header>

            {/* FULL-BLEED IMAGE CAROUSEL with angled "cut" bottom */}
            <div
              className="absolute inset-0 overflow-hidden bg-black"
            >
              {/* Slides */}
              {heroImages.map((src, i) => {
                const active = i === heroIndex;
                return (
                  <img
                    key={src}
                    src={src}
                    alt={`Hero ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover 
                     transition-opacity duration-700 ease-out 
                     ${active ? "opacity-100" : "opacity-0"}`}
                    style={active ? { animation: "kenburns 4s ease-out both" } : undefined}
                    loading="eager"
                  />
                );
              })}

              {/* Dark-to-transparent overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Headline + tagline */}
              <div
                className="absolute left-1/2 -translate-x-1/2 xl:left-[146px] xl:translate-x-0 top-[260px] w-[min(100%,1100px)] px-6"
                onMouseEnter={() => setHeroPaused(true)}
                onMouseLeave={() => setHeroPaused(false)}
              >
                <h1
                  className="text-white font-extrabold tracking-tight leading-[1.15] pb-1
                   text-5xl md:text-6xl xl:text-7xl drop-shadow-sm"
                  style={tDelay(600)}
                >
                  Vinsub International
                  <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9a51a] to-white">
                    Contracting Co.
                  </span>
                </h1>

                <p
                  className="mt-5 text-white/90 text-lg md:text-2xl font-medium"
                  style={tDelay(700)}
                >
                  Engineering Service Provider in Saudi Arabia
                </p>

                <div className="mt-8 flex items-center gap-4" style={tDelay(800)}>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); requestDownload('/brochure-vinsub.pdf'); }}
                    className="rounded-xl font-bold px-4 py-2 bg-white text-black hover:opacity-90"
                  >
                    Download Brochure
                  </a>
                  <a
                    href="tel:0509331315"
                    className="rounded-xl font-bold px-4 py-2 bg-[#f9a51a] text-black hover:opacity-90"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Controls */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white/80 hover:bg-white shadow"
                aria-label="Previous"
                onClick={() => setHeroIndex((i) => (i - 1 + heroImages.length) % heroImages.length)}
              >
                &#8592;
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white/80 hover:bg-white shadow"
                aria-label="Next"
                onClick={() => setHeroIndex((i) => (i + 1) % heroImages.length)}
              >
                &#8594;
              </button>

              {/* Dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 w-6 rounded-full transition-all 
                      ${i === heroIndex ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
                    onClick={() => setHeroIndex(i)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section
            id="services"
            data-animate
            className={`absolute w-full h-[2122px] top-[2117px] left-0 overflow-hidden bg-black transition-all duration-1000 ${visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <img
              className="absolute w-full h-[206px] top-0 left-0 opacity-30 object-cover transition-all duration-1000"
              style={tDelay(200)}
              alt="Industrial texture"
              src="close-up-machine-part.webp"
              loading="lazy"
            />

            <div className="absolute w-full h-[1917px] top-[205px] left-0 bg-black" />

            <img
              className="absolute w-full h-[479px] top-[1643px] left-0 opacity-20 transition-all duration-1000"
              style={tDelay(400)}
              alt="Construction bg"
              src="hd-construction-site-architecture-scene-background-image.webp"
              loading="lazy"
            />

            <img
              className="absolute w-full h-[479px] top-[205px] left-0 opacity-20 transition-all duration-1000"
              style={tDelay(300)}
              alt="Tools bg"
              src="high-angle-measuring-tools-desk-still-life.webp"
              loading="lazy"
            />

            <div className="absolute top-[68px] left-1/2 -translate-x-1/2 transition-all duration-700" style={tDelay(500)}>
              <h2 className="w-[481px] bg-[linear-gradient(90deg,rgba(249,165,26,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent text-[65px] font-extrabold leading-[60px] whitespace-nowrap text-center">
                OUR SERVICES
              </h2>
            </div>

            <Separator
              className="w-full top-[204px] absolute h-px left-0 transition-all duration-700"
              style={tDelay(600)}
            />

            {services.map((service, index) => (
              <React.Fragment key={service.id}>
                <div
                  className={`absolute w-[746px] opacity-30 font-extrabold text-[196px] leading-[156px] transition-all duration-1000 left-1/2 -translate-x-1/2 text-transparent bg-clip-text ${
                    index % 2 === 1
                      ? 'bg-gradient-to-r from-white via-white/70 to-white/10'
                      : 'bg-gradient-to-r from-white/10 via-white/70 to-white'
                  }`}
                  style={{
                    ...tDelay(700 + index * 200),
                    top:
                      index === 0
                        ? 366
                        : index === 1
                          ? 845
                          : index === 2
                            ? 1325
                            : 109,
                    transform: `${index === 3 ? "translate(-50%, 1696px)" : "translateX(-50%)"}`,
                  }}
                >
                  VINSUB
                </div>

                <Card
                  className={`absolute w-[380px] h-[380px] bg-transparent border-none transition-all duration-700 hover:scale-105 ${visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                    }`}
                  style={{
                    ...tDelay(800 + index * 200),
                    top:
                      index === 0 ? 268 : index === 1 ? 712 : index === 2 ? 1215 : 1696,
                    left: index % 2 === 0 ? 'calc(50% - 330px)' : 'calc(45% + 220px)',
                  }}
                >
                  <CardContent className={`p-0 ${index % 2 === 1 ? 'pr-2' : ''}`}>
                    <h3
                      className="font-extrabold text-[27px] leading-[30px] text-white transition-all duration-500"
                      style={tDelay(900 + index * 200)}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="font-medium italic text-white text-xl text-justify leading-[25px] transition-all duration-500 mt-4"
                      style={tDelay(1000 + index * 200)}
                    >
                      {service.description}
                    </p>
                  </CardContent>
                </Card>

                <span
                  className={`absolute font-extrabold text-[#f9a51a] text-[243px] leading-[180px] whitespace-nowrap transition-all duration-700 ${visibleSections.has("services") ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                  style={{
                    ...tDelay(1100 + index * 200),
                    top:
                      index === 0 ? 348 : index === 1 ? 828 : index === 2 ? 1307 : 1786,
                    left: index % 2 === 0 ? 'calc(50% - 600px)' : 'calc(45% - 20px)',
                  }}
                >
                  {service.id}
                </span>
              </React.Fragment>
            ))}

            <img
              className="absolute w-full h-[479px] top-[684px] left-0 opacity-20 transition-all duration-1000"
              style={tDelay(500)}
              alt="Construction bg"
              src="hd-construction-site-architecture-scene-background-image.webp"
              loading="lazy"
            />
            <img
              className="absolute w-full h-[479px] top-[1164px] left-0 opacity-20 transition-all duration-1000"
              style={tDelay(600)}
              alt="Robotic arm bg"
              src="young-factory-worker-working-with-adept-robotic-arm.webp"
              loading="lazy"
            />
          </section>

          {/* CTA */}
          <section
            id="cta"
            data-animate
            className={`absolute w-full h-[79px] top-[1070px] left-0 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)] transition-all duration-1000 ${visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
              <div className="absolute inset-0 flex items-center justify-center gap-6 px-4">
              <div
                className="font-normal text-white text-base md:text-xl leading-5 text-center md:text-left"
                style={tDelay(200)}
              >
                <span className="font-medium">Looking for a </span>
                <span className="font-extrabold">quality contract</span>
                <span className="font-medium"> for your project?</span>
              </div>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); requestDownload('/brochure-vinsub.pdf'); }}
                  className="rounded-[10px] px-4 py-2 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(217,217,217,1)_100%)] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={tDelay(300)}
                  aria-label="Download Brochure"
                >
                  <span className="font-bold text-black text-[16px] md:text-[19px] whitespace-nowrap">Download Brochure</span>
                </a>
              <a
                href="tel:0509331315"
                className="rounded-[10px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(217,217,217,1)_100%)] transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center px-4 py-2"
                style={tDelay(400)}
                aria-label="Call 0509331315"
              >
                <span className="font-bold text-black text-[16px] md:text-[19px] whitespace-nowrap">Call Now</span>
              </a>
            </div>
          </section>

          {/* Clients */}
          <section
            id="clients"
            data-animate
            className={`absolute w-full h-[600px] top-[5268px] left-0 bg-[#d9d9d9] transition-all duration-1000 ${visibleSections.has("clients") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div
              className="absolute w-44 h-[54px] top-[126px] left-1/2 -translate-x-1/2 transition-all duration-700"
              style={tDelay(200)}
            >
              <h2 className="w-44 top-0 left-0 text-black text-[26px] absolute font-extrabold leading-[60px]">
                OUR&nbsp;&nbsp;CLIENTS
              </h2>
              <Separator
                className="w-44 top-[52px] absolute h-px left-0 transition-all duration-700"
                style={tDelay(300)}
              />
            </div>

            {/* First row */}
            <div
              className="absolute w-[910px] h-[75px] top-[235px] left-1/2 -translate-x-1/2 transition-all duration-1000"
              style={tDelay(400)}
            >
              {[
                { href: "https://www.alrashed-fasteners.com/", src: "clients/Fasteners-AlRashed-logo-retina.webp", alt: "Fasteners AlRashed", w: 100, h: 75 },
                { href: "https://www.nov.com/", src: "clients/nov-white-logo.webp", alt: "NOV (National Oilwell Varco)", w: 100, h: 30, top: 22, left: 162 },
                { href: "https://www.sgn.com.sa/public/index.php", src: "clients/cropped-OUR-LOGO1-2.webp", alt: "SGN (Saudi German Nonwovens)", w: 100, h: 33, top: 21, left: 324 },
                { href: "https://www.zamilladders.com/home/", src: "clients/logo_light.webp", alt: "Zamil Ladders", w: 100, h: 72, top: 1, left: 486 },
                { href: "https://eatonarabia.com/", src: "clients/Eaton-Arabia-JV-mark-rectangle-l.webp", alt: "Eaton Arabia", w: 100, h: 21, top: 27, left: 648 },
                { href: "https://samcorebars.com/", src: "clients/logo-1.webp", alt: "SAMCO (Saudi Metal Coating Company)", w: 100, h: 54, top: 10, left: 810 },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="nofollow"
                  className="absolute transition-all duration-500 hover:scale-110"
                  style={{ ...tDelay(500 + i * 100), width: c.w, height: c.h, top: c.top ?? 0, left: c.left ?? i * 162 }}
                >
                  <img className="w-full h-full object-contain" alt={c.alt} src={c.src} loading="lazy" />
                </a>
              ))}
            </div>

            {/* Second row */}
            <div
              className="absolute w-[915px] h-[43px] top-[402px] left-1/2 -translate-x-1/2 transition-all duration-1000"
              style={tDelay(600)}
            >
              {[
                { href: "https://alupco.com/", src: "clients/alupco_logo-50.webp", alt: "ALUPCO (Aluminium Products Company)", w: 100, h: 43 },
                { href: "https://jazeerasteel.com/", src: "clients/logo2.webp", alt: "Al Jazeera Steel Products Co. (AJSP)", w: 100, h: 21, top: 11, left: 163 },
                { href: "https://www.eastpipes.com/", src: "clients/logo.webp", alt: "East Pipes Integrated Company", w: 100, h: 22, top: 11, left: 326 },
                { href: "https://www.alrashed-steel.com/", src: "clients/EAST-PIPES_BILINGUAL_LOGO-01-e16.webp", alt: "Al Rashed Steel", w: 100, h: 55, top: 0, left: 489 },
                { href: "https://jazeerasteel.com/", src: "clients/Logo-AL-Jazeera-Steel.webp", alt: "Al Jazeera Steel Products Co. (AJSP)", w: 100, h: 41, top: 1, left: 652 },
                { href: "https://www.almajdouie.com/almajdouie_metal", src: "clients/logo (1).webp", alt: "Almajdouie Metal Industry", w: 100, h: 23, top: 10, left: 815 },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="nofollow"
                  className="absolute transition-all duration-500 hover:scale-110"
                  style={{ ...tDelay(700 + i * 100), width: c.w, height: c.h, top: c.top ?? 0, left: c.left ?? i * 163 }}
                >
                  <img className="w-full h-full object-contain" alt={c.alt} src={c.src} loading="lazy" />
                </a>
              ))}
            </div>
          </section>

          {/* About label */}
          <section
            id="about"
            data-animate
            className={`absolute w-[292px] h-[161px] top-[1156px] left-1/2 -translate-x-1/2 transition-all duration-1000 ${visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h2
              className="absolute w-[292px] top-0 left-0 bg-[linear-gradient(270deg,rgba(249,165,26,1)_0%,rgba(0,0,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-bold text-[65px] leading-[150px] whitespace-nowrap transition-all duration-700"
              style={tDelay(200)}
            >
              About Us
            </h2>
            <Separator
              className="w-[285px] top-[134px] absolute h-px left-0 transition-all duration-700"
              style={tDelay(300)}
            />
          </section>

          <div
            className="absolute w-[847px] h-[152px] top-[1317px] left-1/2 -translate-x-1/2 transition-all duration-1000"
            style={tDelay(400)}
          >
            <h3
              className="absolute w-[331px] top-0 left-[258px] font-bold text-black text-[19px] leading-[60px] whitespace-nowrap transition-all duration-700"
              style={tDelay(500)}
            >
              Vinsub International Contracting Co
            </h3>

            <p
              className="absolute w-[847px] top-[50px] left-0 font-normal text-black text-base text-center leading-[18px] transition-all duration-700"
              style={tDelay(600)}
            >
              <span className="font-bold">Vinsub</span>
              <span className="font-medium text-sm">
                , established in 1995, is a trusted engineering service provider in Saudi Arabia, based in Dammam.
                <br /> We deliver long-term and short-term projects with complete client satisfaction.
                <br />
                <br />
                Our commitment to quality and dedicated customer service has earned the trust and appreciation of our
                clients over the years. We bring expertise, efficiency, and a results-driven approach to every project.
                With a skilled team and a proven track record, we continue to grow as a reliable name in the industry.
              </span>
            </p>
          </div>

          {/* Gallery */}
          <section
            id="gallery-certifications"
            data-animate
            className={`absolute w-full left-0 top-[1649px] flex flex-col items-center transition-all duration-1000 ${visibleSections.has("gallery-certifications") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {/* Heading */}
            <div className="text-center transition-all duration-700 mt-2 mb-8" style={tDelay(200)}>
              <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-[#f9a51a] to-black bg-clip-text mb-2">Gallery</h2>
              <Separator className="w-32 mx-auto" />
            </div>

            {/* Collage Carousel */}
            <div
              className="relative w-full max-w-5xl overflow-hidden transition-all duration-1000 px-6 py-2"
              style={tDelay(400)}
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
            >
              <div
                className={`flex gap-6 transition-transform ${isInstant ? 'duration-0' : 'duration-500'}`}
                style={{
                  transform: `translateX(-${carouselIndex * (350 + 24)}px)`,
                  width: `${getCarouselItems().length * (350 + 24)}px`
                }}
              >
                    {getCarouselItems().map((item, idx) => (
                  <div
                    key={`${idx}`}
                    className="flex-shrink-0 w-[350px] h-[260px] rounded-2xl overflow-hidden shadow-lg relative group transition-all duration-500 bg-white cursor-pointer"
                    style={tDelay(600 + (idx % 6) * 100)}
                    onClick={() => {
                      const title = (item as any).title as string;
                      const sectionId = gallerySectionMap[title] ?? 'engineering';
                      navigate(`/gallery#${sectionId}`);
                    }}
                  >
                        <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
                          <div className="flex items-center justify-center gap-3 text-[#f9a51a]">
                            {(item as any).icons.map((Icon: any, i: number) => (
                              <Icon key={i} className="w-16 h-16" />
                            ))}
                          </div>
                          <div className="text-center px-2">
                            <p className="font-semibold text-neutral-900 text-base leading-snug">
                              {(item as any).title}
                            </p>
                          </div>
                        </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#f9a51a] text-black hover:text-white rounded-full p-2 shadow-lg z-10 transition-all duration-300"
                onClick={() => handleCarouselControl('prev')}
                aria-label="Previous"
              >
                &#8592;
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#f9a51a] text-black hover:text-white rounded-full p-2 shadow-lg z-10 transition-all duration-300"
                onClick={() => handleCarouselControl('next')}
                aria-label="Next"
              >
                &#8594;
              </button>
            </div>

            {/* More from Gallery Button */}
            <div className="mt-8 transition-all duration-700" style={tDelay(800)}>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); requestDownload('/brochure-vinsub.pdf'); }}
                className="px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#f9a51a] to-[#e09416] text-white border-2 border-[#f9a51a] hover:shadow-xl"
              >
                Download Brochure
              </a>
            </div>
          </section>

          <Separator className="w-full top-[1537px] absolute h-px left-0" />

          {/* CEO line quote */}
          <section className="absolute w-[668px] h-[175px] top-[5965px] left-1/2 -translate-x-1/2">
            <div className="relative w-[672px] h-[175px]">
              <p className="absolute top-0 left-1/2 -translate-x-1/2 font-medium text-black text-[26px] text-center leading-8 w-full">
                &quot;No matter what size of project,
                <br />
                we look forward to providing value-driven excellence&quot;
              </p>
              <h3 className="absolute top-[143px] left-1/2 -translate-x-1/2 bg-[linear-gradient(90deg,rgba(249,165,26,1)_0%,rgba(147,97,15,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-extrabold text-[26px] text-center leading-8 whitespace-nowrap">
                CEO MESSAGE
              </h3>
              <div className="absolute flex flex-row gap-1 w-[155px] h-[26px] top-[94px] left-1/2 -translate-x-1/2">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-[30px] h-[30px] object-contain" src="geometric-star-shape.webp" alt="star" loading="lazy" />
                ))}
              </div>
            </div>
          </section>

          {/* Footer (single, deduped) */}
          <footer
            id="footer"
            data-animate
            className={`absolute w-[1463px] h-[366px] top-[6238px] left-1/2 -translate-x-1/2 transition-all duration-1000 ${visibleSections.has("footer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="absolute w-[1463px] h-[366px] top-0 left-0">
              <div className="relative w-[1451px] h-[366px]">
                <img
                  className="absolute w-full h-[366px] top-0 left-[11px] transition-all duration-1000"
                  style={tDelay(200)}
                  alt="Footer background"
                  src="/rectangle-8.svg"
                  loading="lazy"
                />
                <div className="absolute w-[564px] h-[366px] top-0 left-0 bg-[#d9d9d9]" />
                 <div className={`absolute top-[203px] left-[153px] z-10 flex items-center gap-2 transition-all duration-700 delay-300 ${visibleSections.has('footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}> 
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-90 transition-opacity"> 
                  <Instagram className="w-4 h-4 text-black" /> </a> <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-90 transition-opacity">
                   <Twitter className="w-4 h-4 text-black" /> </a> <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:opacity-90 transition-opacity"> 
                   <Facebook className="w-4 h-4 text-black" /> </a> </div>

                <div className="absolute w-[564px] h-[366px] top-0 left-0 bg-[#d9d9d9]" />

                <img
                  className="absolute w-[340px] h-auto max-h-12 top-[70px] left-[152px] object-contain transition-all duration-700"
                  style={tDelay(400)}
                  src="/VINSUB.webp"
                  alt="Vinsub"
                  loading="lazy"
                />

                <div
                  className="absolute top-[100px] left-[210px] text-xs font-normal italic text-black leading-[60px] whitespace-nowrap transition-all duration-700"
                  style={tDelay(500)}
                >
                  Engineering Service Provider in Saudi Arabia, Dammam
                </div>

                <div
                  className="absolute top-[266px] left-[152px] font-normal italic text-black text-xs leading-[60px] whitespace-nowrap transition-all duration-700"
                  style={tDelay(600)}
                >
                  vinsubinternational © 2025. All Rights Reserved
                </div>

                <div
                  className="absolute top-[282px] left-[152px] font-semibold text-black text-xs leading-[60px] whitespace-nowrap transition-all duration-700"
                  style={tDelay(700)}
                >
                  Developed by Wydex
                </div>

                <div
                  className="absolute top-[55px] left-[741px] font-bold text-white text-[21px] leading-[60px] whitespace-nowrap transition-all duration-700"
                  style={tDelay(400)}
                >
                  Quick Links
                </div>

                <div
                  className="absolute w-[209px] top-[122px] left-[741px] font-semibold text-white text-[15px] leading-[29px] transition-all duration-700"
                  style={tDelay(500)}
                >
                  {quickLinks.map((link, index) => (
                    <React.Fragment key={index}>
                      <span
                        className="hover:text-[#f9a51a] cursor-pointer inline-block"
                        style={tDelay(600 + index * 100)}
                      >
                        {link}
                      </span>
                      <br />
                    </React.Fragment>
                  ))}
                </div>

                <div
                  className="absolute top-[55px] left-[1026px] font-bold text-white text-[21px] leading-[60px] whitespace-nowrap transition-all duration-700"
                  style={tDelay(400)}
                >
                  Get In Touch
                </div>

                {/* Contacts */}
                <div className="absolute top-[114px] left-[1069px] flex items-center gap-3" style={tDelay(800)}>
                  <img className="w-5 h-5" alt="Phone" src="/vector-1.svg" loading="lazy" />
                  <span className="font-medium text-white text-sm leading-[60px] whitespace-nowrap">0509331315</span>
                </div>

                <div className="absolute top-[154px] left-[1069px] flex items-center gap-3" style={tDelay(900)}>
                  <img className="w-5 h-5" alt="Email" src="/vector.svg" loading="lazy" />
                  <span className="font-medium text-white text-sm leading-[60px] whitespace-nowrap">info@vinsubco.co</span>
                </div>

                <div className="absolute top-[194px] left-[1069px] flex items-center gap-3" style={tDelay(1000)}>
                  <img className="w-5 h-5" alt="Location" src="/vector-3.svg" loading="lazy" />
                  <span className="font-medium text-white text-sm leading-[60px] whitespace-nowrap">
                    Dammam, Kingdom of Saudi Arabia
                  </span>
                </div>

                <div className="absolute top-[234px] left-[1069px] flex items-center gap-3" style={tDelay(1100)}>
                  <img className="w-5 h-5" alt="Registration" src="/vector-4.svg" loading="lazy" />
                  <span className="font-medium text-white text-sm leading-[60px] whitespace-nowrap">CR-2050161120</span>
                </div>
              </div>
            </div>
          </footer>
          </div>
        </div>
      </div>

      {/* MOBILE HERO (angled navbar + carousel) */}
      <div className="lg:hidden w-full min-h-screen bg-white overflow-x-hidden">
        <section
          id="mobile-hero"
          className="relative w-full pt-16 overflow-hidden"
        >
          {/* Mobile Navbar with cut bottom */}
          <header
            className="fixed top-0 left-0 z-50 w-full h-16 bg-white/20 backdrop-blur-xl backdrop-saturate-150 border-b-0 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            style={tDelay(200)}
          >
            <div className="flex items-center justify-between px-4 h-full w-full">
              <img
                className="w-28 h-auto max-h-8 object-contain transition-all duration-700"
                style={tDelay(300)}
                alt="Vinsub"
                src="/VINSUB.webp"
              />
              <button
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-6 h-0.5 bg-black mb-1" />
                <div className="w-6 h-0.5 bg-black mb-1" />
                <div className="w-6 h-0.5 bg-black" />
              </button>
            </div>

            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
                <nav className="flex flex-col py-2">
                  {navigationItems.map((item, index) => {
                    const anchorMap: Record<string, string> = {
                      '#': '#mobile-hero',
                      '#about': '#mobile-about',
                      '#services': '#mobile-services',
                      '#gallery-certifications': '#mobile-gallery-certifications',
                      '#mission': '#mobile-mission',
                      '#vision': '#mobile-vision',
                      '#clients': '#mobile-clients',
                      '#footer': '#mobile-footer',
                    };
                    const href = item.href.startsWith('#') ? (anchorMap[item.href] ?? item.href) : item.href;
                    const isRoute = href.startsWith('/');
                    return (
                      <a
                        key={item.name}
                        href={href}
                        className={`px-4 py-3 text-sm font-semibold transition-all duration-300 hover:bg-gray-50 ${
                          item.active ? "text-[#f9a51a] bg-gray-50" : "text-neutral-900"
                        }`}
                        onClick={(e) => {
                          setIsMobileMenuOpen(false);
                          if (isRoute) {
                            e.preventDefault();
                            navigate(href);
                          }
                        }}
                        style={tDelay(100 + index * 50)}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </nav>
              </div>
            )}
          </header>

          {/* Full-bleed mobile carousel with angled bottom */}
          <div
            className="relative h-[70vh] min-h-[480px] bg-black"
            onMouseEnter={() => setHeroPaused(true)}
            onMouseLeave={() => setHeroPaused(false)}
          >
            {heroImages.map((src, i) => {
              const active = i === heroIndex;
              return (
                <img
                  key={src}
                  src={src}
                  alt={`Hero ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover 
                     transition-opacity duration-700 ease-out 
                     ${active ? "opacity-100" : "opacity-0"}`}
                  style={active ? { animation: "kenburns 4s ease-out both" } : undefined}
                  loading="eager"
                />
              );
            })}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Copy */}
            <div className="absolute inset-x-0 bottom-20 px-4 text-center">
              <h1
                className="text-3xl sm:text-4xl font-extrabold text-white leading-tight"
                style={tDelay(600)}
              >
                Vinsub International
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-[#f9a51a]">
                  Contracting Co.
                </span>
              </h1>
              <p className="mt-3 text-white/90 text-base sm:text-lg" style={tDelay(700)}>
                Engineering Service Provider in Saudi Arabia
              </p>
            <div className="mt-5 flex items-center justify-center gap-3" style={tDelay(800)}>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); requestDownload('/brochure-vinsub.pdf'); }}
                className="rounded-lg bg-white text-black font-bold px-4 py-2"
              >
                Download Brochure
              </a>
                <a
                  href="tel:0509331315"
                  className="rounded-lg px-4 py-2 bg-[#f9a51a] text-black font-bold"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Controls */}
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white/80 hover:bg-white shadow"
              aria-label="Previous"
              onClick={() => setHeroIndex((i) => (i - 1 + heroImages.length) % heroImages.length)}
            >
              &#8592;
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-white/80 hover:bg-white shadow"
              aria-label="Next"
              onClick={() => setHeroIndex((i) => (i + 1) % heroImages.length)}
            >
              &#8594;
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 w-5 rounded-full ${i === heroIndex ? "bg-white" : "bg-white/50"}`}
                  onClick={() => setHeroIndex(i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="mobile-cta"
          className="w-full py-8 px-4 bg-gradient-to-r from-black to-white"
        >
          <div
            className="text-center mb-5"
            style={tDelay(200)}
          >
            <span className="font-medium text-white text-lg">Looking for a </span>
            <span className="font-bold text-white text-lg">quality contract</span>
            <span className="font-medium text-white text-lg"> for your project?</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-white to-gray-200 transition-all duration-300"
              style={tDelay(300)}
              aria-label="View Our Projects"
              onClick={() => navigate("/gallery")}
            >
              <span className="font-bold text-black text-base">View Our Projects</span>
            </Button>
            <a
              href="tel:0509331315"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-white to-gray-200 transition-all duration-300 text-center"
              style={tDelay(350)}
              aria-label="Call 0509331315"
            >
              <span className="font-bold text-black text-base">Call Now</span>
            </a>
          </div>
        </section>

        {/* About */}
        <section
          id="mobile-about"
          data-animate
          className={`w-full py-14 px-4 bg-white transition-all duration-1000 ${visibleSections.has("mobile-about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#f9a51a] to-black bg-clip-text mb-4 transition-all duration-700"
              style={tDelay(200)}
            >
              About Us
            </h2>
            <Separator className="w-32 mx-auto mb-6" />
            <h3
              className="text-xl font-bold text-black mb-4 transition-all duration-700"
              style={tDelay(400)}
            >
              Vinsub International Contracting Co
            </h3>
            <p
              className="text-base text-black text-center leading-relaxed transition-all duration-700"
              style={tDelay(500)}
            >
              <span className="font-bold">Vinsub</span>, established in 1995, is a trusted engineering service
              provider in Saudi Arabia, based in Dammam. We deliver long-term and short-term projects with complete
              client satisfaction.
              <br />
              <br />
              Our commitment to quality and dedicated customer service has earned the trust and appreciation of our
              clients over the years. We bring expertise, efficiency, and a results-driven approach to every project.
              With a skilled team and a proven track record, we continue to grow as a reliable name in the industry.
            </p>
          </div>
        </section>

        {/* Services */}
        <section
          id="mobile-services"
          data-animate
          className={`w-full py-14 px-4 bg-black transition-all duration-1000 ${visibleSections.has("mobile-services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#f9a51a] to-white bg-clip-text text-center mb-8 transition-all duration-700"
              style={tDelay(300)}
            >
              OUR SERVICES
            </h2>
            <Separator className="w-full mb-8" />
            <div className="space-y-8">
              {services.map((service, index) => (
                <Card
                  key={service.id}
                  className={`bg-transparent border border-white/10 rounded-2xl`}
                  style={tDelay(400 + index * 150)}
                >
                  <CardContent className="p-6 text-center">
                    <span
                      className="block text-5xl font-extrabold text-[#f9a51a] mb-3"
                      style={tDelay(450 + index * 150)}
                    >
                      {service.id}
                    </span>
                    <h3
                      className="text-lg font-bold text-white mb-3"
                      style={tDelay(500 + index * 150)}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-white/90 text-sm text-justify leading-relaxed"
                      style={tDelay(550 + index * 150)}
                    >
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery / Certifications */}
        <section
          id="mobile-gallery-certifications"
          data-animate
          className={`w-full py-14 px-4 bg-white transition-all duration-1000 ${visibleSections.has("mobile-gallery-certifications") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="max-w-4xl mx-auto">
            {/* Quick links removed; heading used above */}

            {/* Mobile carousel with snap */}
            <div
              className="relative overflow-hidden"
              style={tDelay(400)}
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
            >
              <div
                className={`flex gap-3 transition-transform ${isInstant ? 'duration-0' : 'duration-500'}`}
                style={{
                  transform: `translateX(-${carouselIndex * (288 + 12)}px)`,
                  width: `${getCarouselItems().length * (288 + 12)}px`
                }}
              >
                    {getCarouselItems().map((item, idx) => (
                  <div
                    key={`mobile-${idx}`}
                    className="flex-shrink-0 w-72 h-56 rounded-2xl overflow-hidden shadow-lg relative bg-white"
                    style={tDelay(600 + (idx % 6) * 100)}
                    onClick={() => {
                      const title = (item as any).title as string;
                      const sectionId = gallerySectionMap[title] ?? 'engineering';
                      navigate(`/gallery#${sectionId}`);
                    }}
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4">
                      <div className="flex items-center justify-center gap-3 text-[#f9a51a]">
                        {(item as any).icons.map((Icon: any, i: number) => (
                          <Icon key={i} className="w-12 h-12" />
                        ))}
                      </div>
                      <p className="text-center font-semibold text-neutral-900 text-base leading-snug px-2">
                        {(item as any).title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#f9a51a] text-black hover:text-white rounded-full p-2 shadow-lg z-10 transition-all duration-300"
                onClick={() => handleCarouselControl('prev')}
                aria-label="Previous"
              >
                &#8592;
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#f9a51a] text-black hover:text-white rounded-full p-2 shadow-lg z-10 transition-all duration-300"
                onClick={() => handleCarouselControl('next')}
                aria-label="Next"
              >
                &#8594;
              </button>
            </div>

            {/* More from Gallery Button */}
            <div className="mt-8 text-center transition-all duration-700" style={tDelay(800)}>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); requestDownload('/brochure-vinsub.pdf'); }}
                className="px-6 py-3 rounded-full font-bold text-base shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#f9a51a] to-[#e09416] text-white border-2 border-[#f9a51a] hover:shadow-xl"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section
          id="mobile-mission"
          data-animate
          className={`w-full py-14 px-4 bg-gradient-to-b from-black to-white transition-all duration-1000 ${
            visibleSections.has("mobile-mission") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <img
              className="w-40 h-40 mx-auto mb-6 object-cover rounded-lg transition-all duration-700"
              style={tDelay(200)}
              alt="Mission"
              src="mission.webp"
              loading="lazy"
            />
            <h2
              className="text-2xl font-bold text-black mb-4 transition-all duration-700"
              style={tDelay(300)}
            >
              OUR MISSION
            </h2>
            <p
              className="text-black text-sm text-justify leading-relaxed transition-all duration-700"
              style={tDelay(500)}
            >
              To deliver top-notch fabrication, installation, and erection of structural steel and process equipment at
              the best prices among competitors, without compromising on quality. As a leading engineering service
              provider in Saudi Arabia, we prioritize safety, precision, and customer satisfaction in every project. Our
              goal is to build long-lasting, trustworthy relationships through exceptional service and reliable machine
              shop support.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section
          id="mobile-vision"
          data-animate
          className={`w-full py-14 px-4 bg-gradient-to-b from-black to-white transition-all duration-1000 ${
            visibleSections.has("mobile-vision") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <img
              className="w-40 h-40 mx-auto mb-6 object-cover rounded-lg transition-all duration-700"
              style={tDelay(200)}
              alt="Vision"
              src="vision.webp"
              loading="lazy"
            />
            <h2
              className="text-2xl font-bold text-black mb-4 transition-all duration-700"
              style={tDelay(300)}
            >
              OUR VISION
            </h2>
            <p
              className="text-black text-sm text-justify leading-relaxed transition-all duration-700"
              style={tDelay(500)}
            >
              We aspire to be the top provider of structural steel solutions in the world. As an Engineering Service
              Provider based in Saudi Arabia, our goal is to raise the bar for quality and innovation with every project
              we undertake. We&apos;re all about building strong partnerships and delivering real value to our clients.
              With our commitment and expertise, we aim for excellence in everything we do.
            </p>
          </div>
        </section>

        {/* Clients */}
        <section
          id="mobile-clients"
          data-animate
          className={`w-full py-14 px-4 bg-[#d9d9d9] transition-all duration-1000 ${visibleSections.has("mobile-clients") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-2xl font-bold text-black mb-6 transition-all duration-700"
              style={tDelay(200)}
            >
              OUR CLIENTS
            </h2>
            <Separator className="w-32 mx-auto mb-6" />
            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              style={tDelay(400)}
            >
              {
[
  { src: "clients/Fasteners-AlRashed-logo-retina.webp", alt: "Al Rashed Fasteners", href: "https://www.alrashed-fasteners.com/" }, // :contentReference[oaicite:0]{index=0}
  { src: "clients/nov-white-logo.webp", alt: "NOV (National Oilwell Varco)", href: "https://www.nov.com/" }, // :contentReference[oaicite:1]{index=1}
  { src: "clients/cropped-OUR-LOGO1-2.webp", alt: "SGN (Saudi German Nonwovens)", href: "https://www.sgn.com.sa/public/index.php" }, // :contentReference[oaicite:2]{index=2}
  { src: "clients/logo_light.webp", alt: "Zamil Ladders", href: "https://www.zamilladders.com/home/" }, // :contentReference[oaicite:3]{index=3}
  { src: "clients/Eaton-Arabia-JV-mark-rectangle-l.webp", alt: "Eaton Arabia", href: "https://eatonarabia.com/" }, // :contentReference[oaicite:4]{index=4}
  { src: "clients/logo-1.webp", alt: "SAMCO (Saudi Metal Coating Company)", href: "https://samcorebars.com/" }, // :contentReference[oaicite:5]{index=5}
  { src: "clients/alupco_logo-50.webp", alt: "ALUPCO (Aluminium Products Company)", href: "https://alupco.com/" }, // :contentReference[oaicite:6]{index=6}
  { src: "clients/logo2.webp", alt: "Al Jazeera Steel Products Co. (AJSP)", href: "https://jazeerasteel.com/" }, // :contentReference[oaicite:7]{index=7}
  { src: "clients/logo.webp", alt: "East Pipes Integrated Company", href: "https://www.eastpipes.com/" }, // :contentReference[oaicite:8]{index=8}
  { src: "clients/EAST-PIPES_BILINGUAL_LOGO-01-e16.webp", alt: "Al Rashed Steel", href: "https://www.alrashed-steel.com/" }, // (filename is misleading, link & alt are correct) :contentReference[oaicite:9]{index=9}
  { src: "clients/Logo-AL-Jazeera-Steel.webp", alt: "Al Jazeera Steel Products Co. (AJSP)", href: "https://jazeerasteel.com/" }, // :contentReference[oaicite:10]{index=10}
  { src: "clients/logo (1).webp", alt: "Almajdouie Metal Industry", href: "https://www.almajdouie.com/almajdouie_metal" } // :contentReference[oaicite:11]{index=11}
].map((client, i) => (
                <a
                  key={client.href}
                  href={client.href}
                  target="_blank"
                  rel="nofollow"
                  className="block p-3 bg-gray-100 rounded-lg shadow-md"
                  style={tDelay(500 + i * 50)}
                >
                  <img className="w-full h-10 object-contain" alt={client.alt} src={client.src} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CEO message */}
        <section
          id="mobile-ceo-message"
          data-animate
          className={`w-full py-14 px-4 bg-white transition-all duration-1000 ${visibleSections.has("mobile-ceo-message") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-lg text-black mb-4 transition-all duration-700"
              style={tDelay(200)}
            >
              &quot;No matter what size of project, we look forward to providing value-driven excellence&quot;
            </p>
            <div
              className="flex justify-center gap-1 mb-4"
              style={tDelay(300)}
            >
              {[...Array(5)].map((_, i) => (
                <img key={i} className="w-6 h-6 object-contain" src="geometric-star-shape.webp" alt="star" loading="lazy" />
              ))}
            </div>
            <h3
              className="text-xl font-bold text-transparent bg-gradient-to-r from-[#f9a51a] to-[#93710f] bg-clip-text transition-all duration-700"
              style={tDelay(400)}
            >
              CEO MESSAGE
            </h3>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="mobile-footer"
          data-animate
          className={`w-full py-14 px-4 bg-gradient-to-r from-[#d9d9d9] to-gray-800 transition-all duration-1000 ${visibleSections.has("mobile-footer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center md:text-left" style={tDelay(200)}>
                <img className="w-28 h-auto max-h-8 mx-auto md:mx-0 mb-3 object-contain" src="/VINSUB.webp" alt="Vinsub" loading="lazy" />
                <p className="text-xs text-black italic mb-1">Engineering Service Provider in Saudi Arabia, Dammam</p>
                <p className="text-xs text-black italic mb-1">vinsubinternational © 2025. All Rights Reserved</p>
                <p className="text-xs text-black font-semibold">Developed by Wydex</p>
              </div>

              <div className="text-center md:text-left" style={tDelay(300)}>
                <h3 className="font-bold text-white text-lg mb-3">Quick Links</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1 justify-items-center md:justify-items-start">
                  {quickLinks.map((link, index) => (
                    <a
                      key={link}
                      href=''
                      className="block text-white text-sm font-semibold hover:text-[#f9a51a] transition-colors"
                      style={tDelay(350 + index * 50)}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-600 text-center md:text-left" style={tDelay(500)}>
              <h3 className="font-bold text-white text-lg mb-3">Get In Touch</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <img className="w-5 h-5" alt="Phone" src="/vector-1.svg" loading="lazy" />
                  <span className="text-white text-sm font-medium">0509331315</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <img className="w-5 h-5" alt="Email" src="/vector.svg" loading="lazy" />
                  <span className="text-white text-sm font-medium">info@vinsubco.co</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <img className="w-5 h-5" alt="Location" src="/vector-3.svg" loading="lazy" />
                  <span className="text-white text-sm font-medium">Dammam, Kingdom of Saudi Arabia</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <img className="w-5 h-5" alt="Registration" src="/vector-4.svg" loading="lazy" />
                  <span className="text-white text-sm font-medium">CR-2050161120</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <FloatingCallButton />
    </div>
  );
};

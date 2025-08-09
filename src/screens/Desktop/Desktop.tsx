import { Instagram, Facebook, Twitter } from "lucide-react";
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

// Data for navigation menu
const navigationItems = [
  { name: "Home", href: "#", active: false },
  { name: "About Us", href: "#about", active: false },
  { name: "Gallery", href: "#gallery-certifications", active: false },
  { name: "Services", href: "#services", active: false },
  { name: "Projects", href: "#", active: false },
  { name: "Purchase", href: "#", active: false },
  { name: "Contact Us", href: "#footer", active: true },
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

// Gallery sources
const certificationImages = [
  "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
];

export const Desktop = (): JSX.Element => {
  const [activeTab, setActiveTab] = React.useState<"gallery" | "certifications">("gallery");
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const [visibleSections, setVisibleSections] = React.useState<Set<string>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCarouselPaused, setIsCarouselPaused] = React.useState(false);
  const [isInstant, setIsInstant] = React.useState(false);
  // desktop carousel visible count
  const navigate = useNavigate();

  // Desktop scaling: keep 13" MacBook (1480px design width) perfect, scale down on smaller laptops
  const DESIGN_WIDTH = 1480;
  const DESIGN_HEIGHT = 6617;
  const [desktopScale, setDesktopScale] = React.useState(1);

  React.useEffect(() => {
    const updateScale = () => {
      if (typeof window === 'undefined') return;
      const vw = window.innerWidth;
      // Never upscale beyond 1; scale down to fit narrower laptop screens
      const nextScale = Math.min(1, vw / DESIGN_WIDTH);
      setDesktopScale(nextScale);
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

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
        const baseLen = activeTab === "gallery" ? 6 : certificationImages.length;
        let didInstantReset = false;
        setCarouselIndex((prev) => {
          const next = prev + 1;
          // keep index within [baseLen, baseLen*3)
          if (next >= baseLen * 3) {
            // instant jump back by one window of baseLen
            didInstantReset = true;
            return baseLen + (next - baseLen * 3);
          }
          return next;
        });
        if (didInstantReset) {
          // disable transition just for this instant correction
          setIsInstant(true);
          // re-enable on next frame
          setTimeout(() => setIsInstant(false), 0);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTab, certificationImages.length, visibleSections, isCarouselPaused]);

  // Reset carousel index when tab changes: start in the middle window to allow both directions seamlessly
  React.useEffect(() => {
    const baseLen = activeTab === "gallery" ? 6 : certificationImages.length;
    setIsInstant(true);
    setCarouselIndex(baseLen);
    setTimeout(() => setIsInstant(false), 0);
  }, [activeTab, certificationImages.length]);

  // Helper: transition delay via style (avoid dynamic tailwind classes)
  const tDelay = (ms: number) => ({ transitionDelay: `${ms}ms` });

  // Carousel control handlers - seamless circular navigation within safe window
  const handleCarouselControl = (direction: 'prev' | 'next') => {
    setIsCarouselPaused(true);
    setTimeout(() => setIsCarouselPaused(false), 3000); // Resume after 3 seconds
    const baseLen = activeTab === "gallery" ? 6 : certificationImages.length;

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
    if (activeTab === "gallery") {
      const galleryItems = [
        { src: "engineering-service-provider-in-saudi-arabia1.webp", alt: "Gallery 1" },
        { src: "engineering-service-provider-in-saudi-arabia.webp", alt: "Gallery 2" },
        { src: "4466.webp", alt: "Gallery 3" },
        { src: "close-up-metallic-gear.webp", alt: "Gallery 4" },
        { src: "close-up-machine-part.webp", alt: "Gallery 5" },
        { src: "hd-construction-site-architecture-scene-background-image.webp", alt: "Gallery 6" },
      ];
      // Create multiple copies for seamless infinite scroll
      return [...galleryItems, ...galleryItems, ...galleryItems, ...galleryItems];
    } else {
      // Convert certification images to objects and duplicate for seamless loop
      const certItems = certificationImages.map((src, idx) => ({
        src,
        alt: `Certification ${idx + 1}`
      }));
      return [...certItems, ...certItems, ...certItems, ...certItems];
    }
  };

  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      {/* DESKTOP (scaled wrapper keeps baseline perfect on 1480px, fits other laptop widths) */}
      <div className="hidden lg:block bg-white overflow-hidden w-full">
        {/* Spacer wrapper preserves scaled height in the normal flow */}
        <div
          className="relative mx-auto"
          style={{ height: DESIGN_HEIGHT * desktopScale }}
        >
          {/* Fixed-size inner canvas that scales responsively */}
          <div
            className="relative"
            style={{
              width: DESIGN_WIDTH,
              height: DESIGN_HEIGHT,
              transform: `scale(${desktopScale})`,
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
            <Card className="absolute w-[507px] h-[185px] top-[117px] left-[786px] bg-transparent border-none shadow-none">
              <CardContent className="relative w-[511px] h-[185px] p-0">
                <h2
                  className="w-[157px] top-0 left-[175px] text-black text-[26px] absolute font-extrabold leading-[60px] whitespace-nowrap transition-all duration-700"
                  style={tDelay(300)}
                >
                  OUR VISION
                </h2>

                <p
                  className="absolute w-[507px] top-[77px] left-0 font-medium text-black text-sm text-justify leading-[18px] transition-all duration-700"
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
              className="absolute w-[300px] h-[300px] top-[70px] left-60 object-cover transition-all duration-700"
              style={tDelay(200)}
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
              className="absolute w-[300px] h-[300px] top-16 left-[871px] object-cover transition-all duration-700"
              style={tDelay(200)}
              alt="Mission"
              src="mission.webp"
              loading="lazy"
            />
            <Card className="absolute w-[501px] h-[203px] top-[108px] left-[147px] bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <h2
                  className="w-[181px] top-0 left-[158px] text-black text-[26px] absolute font-extrabold leading-[60px] whitespace-nowrap transition-all duration-700"
                  style={tDelay(300)}
                >
                  OUR MISSION
                </h2>
                <p
                  className="absolute w-[497px] top-[77px] left-0 font-medium text-black text-sm text-justify leading-[18px] transition-all duration-700"
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

          {/* Hero */}
          <section
            id="hero"
            data-animate
            className={`absolute w-full h-[1072px] -top-0.5 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(203,126,0,1)_100%)] transition-all duration-1000 ${visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <header
              className="absolute w-full h-[101px] top-[58px] left-0 bg-white transition-all duration-700"
              style={tDelay(200)}
            >
              <img
                className="absolute w-[341px] h-12 top-[26px] left-[146px] object-cover transition-all duration-700"
                style={tDelay(300)}
                alt="Vinsub"
                src="VINSUB.webp"
              />

              <NavigationMenu
                className="absolute w-[648px] h-2 top-[46px] left-[660px] transition-all duration-700"
                style={tDelay(400)}
              >
                <NavigationMenuList className="flex gap-[30px]">
                  {navigationItems.map((item, index) => (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink
                        href={item.href}
                        className={`font-bold text-[15px] whitespace-nowrap transition-all duration-300 hover:scale-105 ${item.active ? "text-[#f9a51a]" : "text-neutral-900"
                          }`}
                        style={tDelay(500 + index * 100)}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </header>

            <div
              className="absolute w-[826px] h-[174px] top-[183px] left-[307px] transition-all duration-700"
              style={tDelay(500)}
            >
              <h1
                className="absolute w-[826px] top-0 left-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(249,165,26,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-bold text-[85px] transition-all duration-700"
                style={tDelay(600)}
              >
                Vinsub international
              </h1>

              <h1
                className="absolute h-[100px] w-[671px] top-20 left-[78px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(249,165,26,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-bold text-[85px] leading-[94px] transition-all duration-700"
                style={tDelay(700)}
              >
                Contracting Co.
              </h1>
            </div>

            <div
              className="w-[545px] top-[365px] left-[448px] font-medium text-[25px] leading-10 absolute text-white transition-all duration-700"
              style={tDelay(800)}
            >
              Engineering Service Provider in Saudi Arabia
            </div>

            <div
              className="absolute w-[1148px] h-[514px] top-[478px] left-[146px] transition-all duration-1000"
              style={tDelay(900)}
            >
              <img
                className="absolute w-[275px] h-[456px] top-0 -left-1 transition-all duration-700 hover:scale-105"
                style={tDelay(1000)}
                alt="Gallery image"
                src="engineering-service-provider-in-saudi-arabia.webp"
                loading="lazy"
              />
              <img
                className="absolute w-[276px] h-[435px] top-[87px] left-[289px] transition-all duration-700 hover:scale-105"
                style={tDelay(1100)}
                alt="Gallery image"
                src="4466.webp"
                loading="lazy"
              />
              <img
                className="absolute w-[276px] h-[389px] top-0 left-[583px] object-cover transition-all duration-700 hover:scale-105"
                style={tDelay(1200)}
                alt="Gallery image"
                src="engineering-service-provider-in-saudi-arabia1.webp"
                loading="lazy"
              />
              <img
                className="absolute w-[275px] h-[396px] top-[106px] left-[877px] object-cover transition-all duration-700 hover:scale-105"
                style={tDelay(1300)}
                alt="Gallery image"
                src="close-up-metallic-gear.webp"
                loading="lazy"
              />
            </div>
          </section>

          {/* SERVICES (unchanged visuals; added inline delays) */}
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

            <h2
              className="w-[481px] top-[68px] left-[480px] bg-[linear-gradient(90deg,rgba(249,165,26,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent text-[65px] absolute font-extrabold leading-[60px] whitespace-nowrap transition-all duration-700"
              style={tDelay(500)}
            >
              OUR SERVICES
            </h2>

            <Separator
              className="w-full top-[204px] absolute h-px left-0 transition-all duration-700"
              style={tDelay(600)}
            />

            {services.map((service, index) => (
              <React.Fragment key={service.id}>
                <div
                  className="absolute w-[746px] opacity-30 font-extrabold text-transparent text-[196px] leading-[156px] transition-all duration-1000 bg-[linear-gradient(90deg,rgba(0,0,0,1)_14%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text"
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
                    left: index === 0 || index === 2 ? 551 : index === 1 ? 36 : 0,
                    transform: index === 3 ? "translateY(1696px)" : "none",
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
                    left: index === 0 ? 334 : index === 1 ? 733 : index === 2 ? 325 : 587,
                  }}
                >
                  <CardContent className="p-0">
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
                    left: index === 0 ? 147 : index === 1 ? 1148 : index === 2 ? 144 : 1140,
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
            <div
              className="absolute w-[713px] top-[9px] left-[146px] font-normal text-transparent text-xl leading-5 transition-all duration-700"
              style={tDelay(200)}
            >
              <span className="font-medium text-white leading-[60px]">Looking for a </span>
              <span className="font-extrabold text-white leading-[60px]">quality contract</span>
              <span className="font-medium text-white leading-[60px]"> for your project?</span>
            </div>

            <Button
              className="absolute w-[195px] h-[35px] top-[25px] left-[945px] rounded-[10px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(217,217,217,1)_100%)] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={tDelay(300)}
              aria-label="View Our Projects"
              onClick={() => navigate("/projects")}
            >
              <span className="font-bold text-black text-[19px] whitespace-nowrap">View Our Projects</span>
            </Button>

            <Button
              className="absolute w-[133px] h-[35px] top-[25px] left-[1160px] rounded-[10px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(217,217,217,1)_100%)] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={tDelay(400)}
              aria-label="Contact Us"
              onClick={() => navigate("/contact")}
            >
              <span className="font-bold text-black text-[19px] whitespace-nowrap">Contact Us</span>
            </Button>
          </section>

          {/* Clients */}
          <section
            id="clients"
            data-animate
            className={`absolute w-full h-[600px] top-[5268px] left-0 bg-[#d9d9d9] transition-all duration-1000 ${visibleSections.has("clients") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div
              className="absolute w-44 h-[54px] top-[126px] left-[632px] transition-all duration-700"
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
              className="absolute w-[910px] h-[75px] top-[235px] left-[265px] transition-all duration-1000"
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
              className="absolute w-[915px] h-[43px] top-[402px] left-[263px] transition-all duration-1000"
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
            className={`absolute w-[292px] h-[161px] top-[1156px] left-[574px] transition-all duration-1000 ${visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
            className="absolute w-[847px] h-[152px] top-[1317px] left-[297px] transition-all duration-1000"
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

          {/* Gallery/Certifications */}
          <section
            id="gallery-certifications"
            data-animate
            className={`absolute w-full left-0 top-[1649px] flex flex-col items-center transition-all duration-1000 ${visibleSections.has("gallery-certifications") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {/* Tabs */}
            <div
              className="flex gap-4 mb-6 mt-2 transition-all duration-700"
              style={tDelay(200)}
            >
              <button
                className={`px-8 py-2 rounded-full font-bold text-lg shadow transition-all duration-300 border-2 hover:scale-105 ${activeTab === "gallery"
                    ? "bg-[#f9a51a] text-white border-[#f9a51a]"
                    : "bg-white text-[#222] border-gray-300 hover:border-[#f9a51a]"
                  }`}
                onClick={() => setActiveTab("gallery")}
                aria-pressed={activeTab === "gallery"}
              >
                Gallery
              </button>
              <button
                className={`px-8 py-2 rounded-full font-bold text-lg shadow transition-all duration-300 border-2 hover:scale-105 ${activeTab === "certifications"
                    ? "bg-[#f9a51a] text-white border-[#f9a51a]"
                    : "bg-white text-[#222] border-gray-300 hover:border-[#f9a51a]"
                  }`}
                onClick={() => setActiveTab("certifications")}
                aria-pressed={activeTab === "certifications"}
              >
                Certifications
              </button>
            </div>

            {/* Collage Carousel */}
            <div
              className="relative w-full max-w-5xl overflow-hidden transition-all duration-1000"
              style={tDelay(400)}
            >
              <div
                className={`flex gap-4 transition-transform ${isInstant ? 'duration-0' : 'duration-500'}`}
                style={{
                  transform: `translateX(-${carouselIndex * (350 + 16)}px)`,
                  width: `${getCarouselItems().length * (350 + 16)}px`
                }}
              >
                {getCarouselItems().map((item, idx) => (
                  <div
                    key={`${activeTab}-${idx}`}
                    className="flex-shrink-0 w-[350px] h-[260px] rounded-2xl overflow-hidden shadow-lg relative group transition-all duration-500"
                    style={tDelay(600 + (idx % 6) * 100)}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {activeTab === "gallery" && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                    )}
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

            {/* More from Gallery/Certifications Button */}
            <div className="mt-8 transition-all duration-700" style={tDelay(800)}>
              <Button
                className="px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#f9a51a] to-[#e09416] text-white border-2 border-[#f9a51a] hover:shadow-xl"
                onClick={() => {
                  if (activeTab === "gallery") {
                    navigate("/gallery");
                  } else {
                    navigate("/certifications");
                  }
                }}
              >
                More from {activeTab === "gallery" ? "Gallery" : "Certifications"}
              </Button>
            </div>
          </section>

          <Separator className="w-full top-[1537px] absolute h-px left-0" />

          {/* CEO line quote (kept) */}
          <section className="absolute w-[668px] h-[175px] top-[5965px] left-[386px]">
            <div className="relative w-[672px] h-[175px]">
              <p className="absolute top-0 left-0 font-medium text-black text-[26px] text-center leading-8">
                &quot;No matter what size of project,
                <br />
                we look forward to providing value-driven excellence&quot;
              </p>
              <h3 className="absolute top-[143px] left-60 bg-[linear-gradient(90deg,rgba(249,165,26,1)_0%,rgba(147,97,15,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-extrabold text-[26px] text-center leading-8 whitespace-nowrap">
                CEO MESSAGE
              </h3>
              <div className="absolute flex flex-row gap-1 w-[155px] h-[26px] top-[94px] left-[257px]">
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
            className={`absolute w-[1463px] h-[366px] top-[6238px] -left-1.5 transition-all duration-1000 ${visibleSections.has("footer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                  className="absolute w-[340px] h-12 top-[70px] left-[152px] object-cover transition-all duration-700"
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

      {/* MOBILE (rebuilt to be fluid; no fixed widths, clean nav, same conten.....t) */}
      <div className="lg:hidden w-full min-h-screen bg-white overflow-x-hidden">
        {/* Mobile Hero */}
        <section
          id="mobile-hero"
          className="relative w-full bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(203,126,0,1)_100%)] pt-16"
        >
          {/* Header */}
          <header
            className="fixed top-0 left-0 z-50 w-full h-16 bg-white/95 backdrop-blur-sm transition-all duration-700"
            style={tDelay(200)}
          >
            <div className="flex items-center justify-between px-4 h-full w-full">
              <img
                className="w-28 h-8 object-contain transition-all duration-700"
                style={tDelay(300)}
                alt="Vinsub"
                src="VINSUB.webp"
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

            {/* Dropdown */}
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
                <nav className="flex flex-col py-2">
                  {navigationItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-3 text-sm font-semibold transition-all duration-300 hover:bg-gray-50 ${item.active ? "text-[#f9a51a] bg-gray-50" : "text-neutral-900"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={tDelay(100 + index * 50)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </header>

          {/* Copy */}
          <div className="flex flex-col items-center justify-center px-4 pt-10 pb-10 text-center w-full">
            <h1
              className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-white to-[#f9a51a] bg-clip-text mb-2 transition-all duration-700 px-2 break-words"
              style={tDelay(600)}
            >
              Vinsub international
            </h1>
            <h2
              className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-white to-[#f9a51a] bg-clip-text mb-4 transition-all duration-700 px-2 break-words"
              style={tDelay(700)}
            >
              Contracting Co.
            </h2>
            <p
              className="text-sm sm:text-base text-white font-medium mb-6 transition-all duration-700 px-2 text-center"
              style={tDelay(800)}
            >
              Engineering Service Provider in Saudi Arabia
            </p>

            {/* Media grid */}
            <div
              className="grid grid-cols-2 gap-3 w-full max-w-md transition-all duration-1000 px-4"
              style={tDelay(900)}
            >
              {[
                "engineering-service-provider-in-saudi-arabia.webp",
                "4466.webp",
                "engineering-service-provider-in-saudi-arabia1.webp",
                "close-up-metallic-gear.webp",
              ].map((src, i) => (
                <img
                  key={src}
                  className="w-full h-24 sm:h-32 object-cover rounded-lg"
                  alt={`Hero image ${i + 1}`}
                  src={src}
                  loading="lazy"
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
              onClick={() => navigate("/projects")}
            >
              <span className="font-bold text-black text-base">View Our Projects</span>
            </Button>
            <Button
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-white to-gray-200 transition-all duration-300"
              style={tDelay(350)}
              aria-label="Contact Us"
              onClick={() => navigate("/contact")}
            >
              <span className="font-bold text-black text-base">Contact Us</span>
            </Button>
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
            {/* Tabs */}
            <div
              className="flex gap-3 mb-6 justify-center"
              style={tDelay(200)}
            >
              <button
                className={`px-5 py-2 rounded-full font-bold text-base shadow border-2 ${activeTab === "gallery"
                    ? "bg-[#f9a51a] text-white border-[#f9a51a]"
                    : "bg-white text-[#222] border-gray-300"
                  }`}
                onClick={() => setActiveTab("gallery")}
                aria-pressed={activeTab === "gallery"}
              >
                Gallery
              </button>
              <button
                className={`px-5 py-2 rounded-full font-bold text-base shadow border-2 ${activeTab === "certifications"
                    ? "bg-[#f9a51a] text-white border-[#f9a51a]"
                    : "bg-white text-[#222] border-gray-300"
                  }`}
                onClick={() => setActiveTab("certifications")}
                aria-pressed={activeTab === "certifications"}
              >
                Certifications
              </button>
            </div>

            {/* Mobile carousel with snap */}
            <div
              className="relative overflow-hidden"
              style={tDelay(400)}
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
                    key={`mobile-${activeTab}-${idx}`}
                    className="flex-shrink-0 w-72 h-56 rounded-2xl overflow-hidden shadow-lg relative"
                    style={tDelay(600 + (idx % 6) * 100)}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
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

            {/* More from Gallery/Certifications Button */}
            <div className="mt-8 text-center transition-all duration-700" style={tDelay(800)}>
              <Button
                className="px-6 py-3 rounded-full font-bold text-base shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#f9a51a] to-[#e09416] text-white border-2 border-[#f9a51a] hover:shadow-xl"
                onClick={() => {
                  if (activeTab === "gallery") {
                    navigate("/gallery");
                  } else {
                    navigate("/certifications");
                  }
                }}
              >
                More from {activeTab === "gallery" ? "Gallery" : "Certifications"}
              </Button>
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
                <img className="w-28 h-8 mx-auto md:mx-0 mb-3 object-contain" src="/VINSUB.webp" alt="Vinsub" loading="lazy" />
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
    </div>
  );
};

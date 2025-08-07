import { FileTextIcon, MailIcon, MapPinIcon } from "lucide-react";
import React from "react";
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
  { name: "About Us", href: "#", active: false },
  { name: "Gallery", href: "#", active: false },
  { name: "Services", href: "#", active: false },
  { name: "Projects", href: "#", active: false },
  { name: "Purchase", href: "#", active: false },
  { name: "Contact Us", href: "#", active: true },
];

// Data for services section
const services = [
  {
    id: 1,
    title: "ENGINEERING SERVICES",
    description:
      "We specialize in a variety of mechanical services, including welding, machining, fabrication, and pipeline erection. As a trusted Engineering Service Provider in Saudi Arabia, we also handle maintenance, contracting, and construction projects, along with the installation of water and sewage lines, as well as electromechanical systems for fire safety and security protection.",
  },
  {
    id: 2,
    title: "CIVIL / ARCHTECTURAL",
    description:
      "We focus on civil construction and offer a wide range of services, including structural steel works, earthworks, pre-engineered steel buildings, RCC works, internal finishing, furnishing, and decoration.Leading Engineering Service Provider  in Saudi Arabia, and with our workshop services in Dammam, we also take care of installing gates and fences, constructing industrial buildings, asphalting, site preparations, excavation, warehouse renovations, and maintenance.",
  },
  {
    id: 3,
    title: "OPERATION & MAINTENANCE",
    description:
      "We handle a variety of projects, including power plants, office buildings, warehouses, workshops, and industrial services. Experienced Engineering Service Provider  in Saudi Arabia, we proudly provide workshop services in Dammam, tailored to meet the diverse needs of our clients with a focus on quality and reliability. Our commitment is to complete every project on time and uphold the highest standards.",
  },
  {
    id: 4,
    title: "INDUSTRIAL & SAFETY EQUIPMENT TRADING",
    description:
      "We specialize in providing dependable industrial equipment trading to support projects across various sizes and sectors. As a trusted Engineering Service Provider in Saudi Arabia, we make sure our clients have access to top-notch machinery and tools. With our workshop services based in Dammam, we assist businesses in keeping their operations running smoothly and reaching their goals effectively.",
  },
];

// Data for quick links
const quickLinks = [
  "Home",
  "About Us",
  "Our projects",
  "Latest news",
  "Quality",
  "Contact Us",
];

// Data for gallery tabs
const galleryTabs = [
  { id: "gallery", label: "GALLERY", active: true },
  { id: "certifications", label: "CERTIFICATIONS", active: false },
];

const certificationImages = [
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
];

export const Desktop = (): JSX.Element => {
  const [activeTab, setActiveTab] = React.useState("gallery");
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const [visibleSections, setVisibleSections] = React.useState<Set<string>>(new Set());
  const visibleCount = 3; // Number of images visible in the carousel at once

  // Intersection Observer for scroll animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Reset carousel index when tab changes
  React.useEffect(() => {
    setCarouselIndex(0);
  }, [activeTab]);

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen min-h-screen h-full">
      <div className="bg-white overflow-hidden w-[1480px] h-[6617px] relative">
        {/* Vision Section */}
        <section 
          id="vision"
          data-animate
          className={`absolute w-full h-[419px] top-[4754px] left-0 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(0,0,0,1)_100%)] transition-all duration-1000 ${
            visibleSections.has('vision') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="absolute w-[507px] h-[185px] top-[117px] left-[786px] bg-transparent border-none shadow-none">
            <CardContent className="relative w-[511px] h-[185px] p-0">
              <h2 className={`w-[157px] top-0 left-[175px] text-black text-[26px] absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-300 ${
                visibleSections.has('vision') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                OUR VISION
              </h2>

              <p className={`absolute w-[507px] top-[77px] left-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-black text-sm text-justify tracking-[0] leading-[18px] transition-all duration-700 delay-500 ${
                visibleSections.has('vision') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                We aspire to be the top provider of structural steel solutions
                in the world. As an Engineering Service Provider based in Saudi
                Arabia, our goal is to raise the bar for quality and innovation
                with every project we undertake. We&apos;re all about building
                strong partnerships and delivering real value to our clients.
                With our commitment and expertise, we aim for excellence in
                everything we do.
              </p>
            </CardContent>
          </Card>
          <img
            className={`absolute w-[300px] h-[300px] top-[70px] left-60 object-cover transition-all duration-700 delay-200 ${
              visibleSections.has('vision') ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-12'
            }`}
            alt="Vision"
            src="vision.webp"
          />
        </section>

        {/* Mission Section */}
        <section 
          id="mission"
          data-animate
          className={`absolute w-full h-[419px] top-[4335px] left-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(0,0,0,1)_100%)] transition-all duration-1000 ${
            visibleSections.has('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img
            className={`absolute w-[300px] h-[300px] top-16 left-[871px] object-cover transition-all duration-700 delay-200 ${
              visibleSections.has('mission') ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-12'
            }`}
            alt="Mission"
            src="mission.webp"
          />

          <Card className="absolute w-[501px] h-[203px] top-[108px] left-[147px] bg-transparent border-none shadow-none">
            <CardContent className="p-0">
              <h2 className={`w-[181px] top-0 left-[158px] text-black text-[26px] absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-300 ${
                visibleSections.has('mission') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                OUR MISSION
              </h2>

              <p className={`absolute w-[497px] top-[77px] left-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-black text-sm text-justify tracking-[0] leading-[18px] transition-all duration-700 delay-500 ${
                visibleSections.has('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                To deliver top-notch fabrication, installation, and erection of
                structural steel and process equipment at the best prices among
                competitors, without compromising on quality. As a leading
                engineering service provider in Saudi Arabia, we prioritize
                safety, precision, and customer satisfaction in every project.
                Our goal is to build long-lasting, trustworthy relationships
                through exceptional service and reliable machine shop support.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Hero Section */}
        <section 
          id="hero"
          data-animate
          className={`absolute w-full h-[1072px] -top-0.5 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(203,126,0,1)_100%)] transition-all duration-1000 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <header className={`absolute w-full h-[101px] top-[58px] left-0 bg-white transition-all duration-700 delay-200 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <img
              className={`absolute w-[341px] h-12 top-[26px] left-[146px] object-cover transition-all duration-700 delay-300 ${
                visibleSections.has('hero') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              alt="Vinsub"
              src="VINSUB.webp"
            />

            <NavigationMenu className={`absolute w-[648px] h-2 top-[46px] left-[660px] transition-all duration-700 delay-400 ${
              visibleSections.has('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <NavigationMenuList className="flex gap-[30px]">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[15px] tracking-[0] leading-[normal] whitespace-nowrap transition-all duration-300 hover:scale-105 ${
                        item.active ? "text-[#f9a51a]" : "text-neutral-900"
                      }`}
                      style={{
                        animationDelay: `${500 + index * 100}ms`,
                      }}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </header>

          <div className={`absolute w-[826px] h-[174px] top-[183px] left-[307px] transition-all duration-700 delay-500 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className={`absolute w-[826px] top-0 left-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(249,165,26,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-transparent text-[85px] tracking-[0] leading-[normal] transition-all duration-700 delay-600 ${
              visibleSections.has('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}>
              Vinsub international
            </h1>

            <h1 className={`absolute h-[100px] w-[671px] top-20 left-[78px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(249,165,26,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-transparent text-[85px] tracking-[0] leading-[94px] transition-all duration-700 delay-700 ${
              visibleSections.has('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}>
              Contracting Co.
            </h1>
          </div>

          <div className={`w-[545px] top-[365px] left-[448px] [font-family:'Work_Sans',Helvetica] font-medium text-[25px] leading-10 absolute text-white tracking-[0] whitespace-nowrap transition-all duration-700 delay-800 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Engineering Service Provider in Saudi Arabia
          </div>

          <div className={`absolute w-[1148px] h-[514px] top-[478px] left-[146px] transition-all duration-1000 delay-900 ${
            visibleSections.has('hero') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <img
              className={`absolute w-[275px] h-[456px] top-0 -left-1 transition-all duration-700 delay-1000 hover:scale-105 ${
                visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              alt="Image"
              src="engineering-service-provider-in-saudi-arabia.webp"  
            />
            <img
              className={`absolute w-[276px] h-[435px] top-[87px] left-[289px] transition-all duration-700 delay-1100 hover:scale-105 ${
                visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              alt="Image"
              src="4466.webp"
            />
            <img
              className={`absolute w-[276px] h-[389px] top-0 left-[583px] object-cover transition-all duration-700 delay-1200 hover:scale-105 ${
                visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              alt="Image"
              src="engineering-service-provider-in-saudi-arabia1.webp"
            />
            <img
              className={`absolute w-[275px] h-[396px] top-[106px] left-[877px] object-cover transition-all duration-700 delay-1300 hover:scale-105 ${
                visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              alt="Image"
              src="close-up-metallic-gear.webp"
            />
          </div>
        </section>

        {/* Services Section */}
        <section 
          id="services"
          data-animate
          className={`absolute w-full h-[2122px] top-[2117px] left-0 overflow-hidden bg-black transition-all duration-1000 ${
            visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img
            className={`absolute w-full h-[206px] top-0 left-0 opacity-30 object-cover transition-all duration-1000 delay-200 ${
              visibleSections.has('services') ? 'opacity-30 scale-100' : 'opacity-0 scale-110'
            }`}
            alt="Rectangle"
            src="close-up-machine-part.webp"
          />

          <div className="absolute w-full h-[1917px] top-[205px] left-0 bg-black" />

          <img
            className={`absolute w-full h-[479px] top-[1643px] left-0 opacity-20 transition-all duration-1000 delay-400 ${
              visibleSections.has('services') ? 'opacity-20 scale-100' : 'opacity-0 scale-110'
            }`}
            alt="Factory aluminum pvc"
            src="hd-construction-site-architecture-scene-background-image.webp"
          />

          <img
            className={`absolute w-full h-[479px] top-[205px] left-0 opacity-20 transition-all duration-1000 delay-300 ${
              visibleSections.has('services') ? 'opacity-20 scale-100' : 'opacity-0 scale-110'
            }`}
            alt="High angle measuring"
            src="high-angle-measuring-tools-desk-still-life.webp"
          />

          <h2 className={`w-[481px] top-[68px] left-[480px] bg-[linear-gradient(90deg,rgba(249,165,26,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[65px] absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-500 ${
            visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            OUR SERVICES
          </h2>

          <Separator className={`w-full top-[204px] absolute h-px left-0 transition-all duration-700 delay-600 ${
            visibleSections.has('services') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />

          {services.map((service, index) => (
            <React.Fragment key={service.id}>
              <div
                className={`absolute w-[746px] bg-[linear-gradient(90deg,rgba(0,0,0,1)_14%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-30 [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-transparent text-[196px] tracking-[0] leading-[156px] transition-all duration-1000 delay-${700 + index * 200} ${
                  visibleSections.has('services') ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{
                  top:
                    index === 0
                      ? "366px"
                      : index === 1
                        ? "845px"
                        : index === 2
                          ? "1325px"
                          : "109px",
                  left:
                    index === 0 || index === 2
                      ? "551px"
                      : index === 1
                        ? "36px"
                        : "0px",
                  transform: index === 3 ? "translateY(1696px)" : "none",
                }}
              >
                VINSUB
              </div>

              <Card
                className={`absolute w-[380px] h-[380px] bg-transparent border-none transition-all duration-700 delay-${800 + index * 200} hover:scale-105 ${
                  visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                } ${
                  index === 0
                    ? "top-[268px] left-[334px]"
                    : index === 1
                      ? "top-[712px] left-[733px]"
                      : index === 2
                        ? "top-[1215px] left-[325px]"
                        : "top-[1696px] left-[587px]"
                }`}
              >
                <CardContent className="p-0">
                  <h3
                    className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[27px] leading-[30px] text-white tracking-[0] transition-all duration-500 delay-${900 + index * 200} ${
                      visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    } ${
                      index === 0
                        ? "w-[322px] top-0 left-[27px] absolute whitespace-nowrap"
                        : index === 1
                          ? "absolute w-[312px] top-0 left-[33px] whitespace-nowrap"
                          : index === 2
                            ? "absolute w-[392px] top-0 left-0 text-center"
                            : "absolute w-[377px] top-0 left-0 text-center font-semibold"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium italic text-white text-xl text-justify tracking-[0] leading-[25px] transition-all duration-500 delay-${1000 + index * 200} ${
                      visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    } ${
                      index === 0
                        ? "absolute w-[375px] top-[74px] left-0"
                        : index === 1
                          ? "absolute w-[377px] top-[74px] left-0"
                          : index === 2
                            ? "absolute w-[374px] top-[78px] left-9"
                            : "absolute w-[377px] top-[74px] left-0"
                    }`}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>

              <span
                className={`absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#f9a51a] text-[243px] tracking-[0] leading-[180px] whitespace-nowrap transition-all duration-700 delay-${1100 + index * 200} ${
                  visibleSections.has('services') ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                } ${
                  index === 0
                    ? "w-[100px] top-[348px] left-[147px]"
                    : index === 1
                      ? "w-36 top-[828px] left-[1148px]"
                      : index === 2
                        ? "w-[151px] top-[1307px] left-36"
                        : "w-[154px] top-[1786px] left-[1140px]"
                }`}
              >
                {service.id}
              </span>
            </React.Fragment>
          ))}

          <img
            className={`absolute w-full h-[479px] top-[684px] left-0 opacity-20 transition-all duration-1000 delay-500 ${
              visibleSections.has('services') ? 'opacity-20 scale-100' : 'opacity-0 scale-110'
            }`}
            alt="Hd construction site"
            src="hd-construction-site-architecture-scene-background-image.webp"
          />

          <img
            className={`absolute w-full h-[479px] top-[1164px] left-0 opacity-20 transition-all duration-1000 delay-600 ${
              visibleSections.has('services') ? 'opacity-20 scale-100' : 'opacity-0 scale-110'
            }`}
            alt="Young factory worker"
            src="young-factory-worker-working-with-adept-robotic-arm.webp"
          />

          <MailIcon className={`absolute w-6 h-6 top-[1395px] left-[708px] text-white transition-all duration-700 delay-1200 ${
            visibleSections.has('services') ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`} />
        </section>

        {/* CTA Section */}
        <section 
          id="cta"
          data-animate
          className={`absolute w-full h-[79px] top-[1070px] left-0 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)] transition-all duration-1000 ${
            visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`absolute w-[713px] top-[9px] left-[146px] [font-family:'Work_Sans',Helvetica] font-normal text-transparent text-xl tracking-[0] leading-5 transition-all duration-700 delay-200 ${
            visibleSections.has('cta') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <span className="font-medium text-white leading-[60px]">
              Looking for a{" "}
            </span>

            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white leading-[60px]">
              quality contract
            </span>

            <span className="font-medium text-white leading-[60px]">
              {" "}
              for your project?
            </span>
          </div>

          <Button className={`absolute w-[133px] h-[35px] top-[25px] left-[1160px] rounded-[10px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(217,217,217,1)_100%)] transition-all duration-300 delay-400 hover:scale-105 hover:shadow-lg ${
            visibleSections.has('cta') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-[19px] tracking-[0] whitespace-nowrap">
              Contact Us
            </span>
          </Button>

          <Button className={`absolute w-[195px] h-[35px] top-[25px] left-[945px] rounded-[10px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(217,217,217,1)_100%)] transition-all duration-300 delay-300 hover:scale-105 hover:shadow-lg ${
            visibleSections.has('cta') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-[19px] tracking-[0] whitespace-nowrap">
              View Our Projects
            </span>
          </Button>
        </section>

        {/* Clients Section */}
        <section 
          id="clients"
          data-animate
          className={`absolute w-full h-[600px] top-[5268px] left-0 bg-[#d9d9d9] transition-all duration-1000 ${
            visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`absolute w-44 h-[54px] top-[126px] left-[632px] transition-all duration-700 delay-200 ${
            visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <h2 className="w-44 top-0 left-0 text-black text-[26px] absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold tracking-[0] leading-[60px] whitespace-nowrap">
              OUR&nbsp;&nbsp;CLIENTS
            </h2>

            <Separator className={`w-44 top-[52px] absolute h-px left-0 transition-all duration-700 delay-300 ${
              visibleSections.has('clients') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`} />
          </div>

          {/* First row of client logos */}
          <div className={`absolute w-[910px] h-[75px] top-[235px] left-[265px] transition-all duration-1000 delay-400 ${
            visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <a 
              href="https://www.alrashed-fasteners.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`absolute w-[100px] h-[75px] top-0 left-0 transition-all duration-500 delay-500 hover:scale-110 ${
                visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt="Fasteners AlRashed"
                src="clients/Fasteners-AlRashed-logo-retina.webp"
              />
            </a>
            <a 
              href="https://www.gerflorme.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`absolute w-[100px] h-[30px] top-[22px] left-[162px] transition-all duration-500 delay-600 hover:scale-110 ${
                visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt="Vinsub Logo"
                src="clients/nov-white-logo.webp"
              />
            </a>
            <a 
              href="https://www.sgn.com.sa/public/index.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`absolute w-[100px] h-[33px] top-[21px] left-[324px] transition-all duration-500 delay-700 hover:scale-110 ${
                visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt="Cropped OUR LOGO"
                src="clients/cropped-OUR-LOGO1-2.webp"
              />
            </a>
            <a 
              href="https://www.zamilladders.com/home/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`absolute w-[100px] h-[72px] top-px left-[486px] transition-all duration-500 delay-800 hover:scale-110 ${
                visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt="Logo Light"
                src="clients/logo_light.webp"
              />
            </a>
            <a 
              href="https://www.zamilindustrial.com/en/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`absolute w-[100px] h-[21px] top-[27px] left-[648px] transition-all duration-500 delay-900 hover:scale-110 ${
                visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt="Eaton Arabia JV Mark"
                src="clients/Eaton-Arabia-JV-mark-rectangle-l.webp"
              />
            </a>
            <a 
              href="https://samcorebars.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`absolute w-[100px] h-[54px] top-2.5 left-[810px] transition-all duration-500 delay-1000 hover:scale-110 ${
                visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt="Logo 1"
                src="clients/logo-1.webp"
              />
            </a>
          </div>

          {/* Second row of client logos */}
          <div className={`absolute w-[915px] h-[43px] top-[402px] left-[263px] transition-all duration-1000 delay-600 ${
            visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <a 
              href="https://alupco.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`absolute w-[100px] h-[43px] top-0 left-0 transition-all duration-500 delay-700 hover:scale-110 ${
                visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt="Alupco Logo"
                src="clients/alupco_logo-50.webp"
              />
            </a>
            <a 
              href="https://jazeera-steel.co/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`absolute w-[100px] h-[21px] top-[11px] left-[163px] transition-all duration-500 delay-800 hover:scale-110 ${
                visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt="Logo 2"
                src="clients/logo2.webp"
              />
            </a>
            <a 
              href="https://www.eastpipes.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`absolute w-[100px] h-[22px] top-[11px] left-[326px] transition-all duration-500 delay-900 hover:scale-110 ${
                visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt="Logo"
                src="clients/logo.webp"
              />
            </a>
            <a 
              href="https://www.alrashed-steel.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`absolute w-[100px] h-3.5 top-[15px] left-[489px] transition-all duration-500 delay-1000 hover:scale-110 ${
                visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt="East Pipes Bilingual"
                src="clients/EAST-PIPES_BILINGUAL_LOGO-01-e16.webp"
              />
            </a>
            <a 
              href="https://velan.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`absolute w-[100px] h-[41px] top-px left-[652px] transition-all duration-500 delay-1100 hover:scale-110 ${
                visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt="Logo AL Jazeera"
                src="clients/Logo-AL-Jazeera-Steel.webp"
              />
            </a>
            <a 
              href="https://www.almajdouie.com/almajdouie_metal" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`absolute w-[100px] h-[23px] top-2.5 left-[815px] transition-all duration-500 delay-1200 hover:scale-110 ${
                visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                className="w-full h-full object-cover"
                alt="Logo (1)"
                src="clients/logo (1).webp"
              />
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section 
          id="about"
          data-animate
          className={`absolute w-[292px] h-[161px] top-[1156px] left-[574px] transition-all duration-1000 ${
            visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className={`absolute w-[292px] top-0 left-0 bg-[linear-gradient(270deg,rgba(249,165,26,1)_0%,rgba(0,0,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-transparent text-[65px] tracking-[0] leading-[150px] whitespace-nowrap transition-all duration-700 delay-200 ${
            visibleSections.has('about') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            About Us
          </h2>

          <Separator className={`w-[285px] top-[134px] absolute h-px left-0 transition-all duration-700 delay-300 ${
            visibleSections.has('about') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
        </section>

        <div className={`absolute w-[847px] h-[152px] top-[1317px] left-[297px] transition-all duration-1000 delay-400 ${
          visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className={`absolute w-[331px] top-0 left-[258px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-[19px] tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-500 ${
            visibleSections.has('about') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            Vinsub International Contracting Co
          </h3>

          <p className={`absolute w-[847px] top-[50px] left-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[18px] transition-all duration-700 delay-600 ${
            visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <span className="font-bold">Vinsub</span>

            <span className="font-medium text-sm">
              , established in 1995, is a trusted engineering service provider
              in Saudi Arabia, based in Dammam.
              <br /> We deliver long-term and short-term projects with complete
              client satisfaction.
              <br />
              <br />
              Our commitment to quality and dedicated customer service has
              earned the trust and appreciation of our clients over the years.
              <br />
              We bring expertise, efficiency, and a results-driven approach to
              every project. With a skilled team and a proven track record, we
              continue to grow as a reliable name in the industry.
            </span>
          </p>
        </div>

        {/* Footer Section */}
        <footer 
          id="footer"
          data-animate
          className={`absolute w-[1463px] h-[366px] top-[6238px] -left-1.5 transition-all duration-1000 ${
            visibleSections.has('footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute w-[1463px] h-[366px] top-0 left-0">
            <div className="relative w-[1451px] h-[366px]">
              <img
                className={`absolute w-full h-[366px] top-0 left-[11px] transition-all duration-1000 delay-200 ${
                  visibleSections.has('footer') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                alt="Rectangle"
                src="/rectangle-8.svg"
              />

              <div className="absolute w-[564px] h-[366px] top-0 left-0 bg-[#d9d9d9]" />

              <img
                className={`absolute w-[126px] h-[34px] top-[203px] left-[157px] transition-all duration-700 delay-300 ${
                  visibleSections.has('footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                alt="Group"
              />

              <img
                className={`absolute w-[340px] h-12 top-[70px] left-[157px] object-cover transition-all duration-700 delay-400 ${
                  visibleSections.has('footer') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                alt="Vinsub"
              />

              <div className={`top-[100px] left-[214px] text-xs absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal italic text-black tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-500 ${
                visibleSections.has('footer') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                Engineering Service Dealer in Saudi Arabia
              </div>

              <div className={`absolute top-[266px] left-[157px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal italic text-black text-xs tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-600 ${
                visibleSections.has('footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                vinsubinternational © 2025. All Rights Reserved
              </div>

              <div className={`absolute top-[282px] left-[157px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-black text-xs tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-700 ${
                visibleSections.has('footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                Developed by wydex
              </div>

              <div className={`absolute top-[55px] left-[741px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-[21px] tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-400 ${
                visibleSections.has('footer') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                Quick Links
              </div>

              <div className={`absolute top-[55px] left-[1033px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-[21px] tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-400 ${
                visibleSections.has('footer') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                Get In Touch
              </div>

              <div className={`absolute w-[209px] top-[122px] left-[741px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[29px] transition-all duration-700 delay-500 ${
                visibleSections.has('footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                {quickLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <span className={`transition-all duration-300 delay-${600 + index * 100} hover:text-[#f9a51a] cursor-pointer ${
                      visibleSections.has('footer') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                    }`}>
                      {link}
                    </span>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute w-[1463px] h-[366px] top-0 left-0">
            <div className="relative w-[1451px] h-[366px]">
              <img
                className={`absolute w-full h-[366px] top-0 left-[11px] transition-all duration-1000 delay-200 ${
                  visibleSections.has('footer') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                alt="Rectangle"
                src="/rectangle-8.svg"
              />

              <div className="absolute w-[564px] h-[366px] top-0 left-0 bg-[#d9d9d9]" />

              <img
                className={`absolute w-[126px] h-[34px] top-[203px] left-[153px] transition-all duration-700 delay-300 ${
                  visibleSections.has('footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                alt="Groupss"
              />

              <img
                className={`absolute w-[340px] h-12 top-[70px] left-[152px] object-cover transition-all duration-700 delay-400 ${
                  visibleSections.has('footer') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                src="/VINSUB.webp"
                alt="Vinsub"
              />

              <div className={`top-[98px] left-[210px] text-[11px] absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal italic text-black tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-500 ${
                visibleSections.has('footer') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                Engineering Service Provider in Saudi Arabia, Damam
              </div>

              <div className={`absolute top-[266px] left-[152px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal italic text-black text-xs tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-600 ${
                visibleSections.has('footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                vinsubinternational © 2025. All Rights Reserved
              </div>

              <div className={`absolute top-[282px] left-[152px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-black text-xs tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-700 ${
                visibleSections.has('footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                Developed by wydex
              </div>

              <div className={`absolute top-[55px] left-[741px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-[21px] tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-400 ${
                visibleSections.has('footer') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                Quick Links
              </div>

              <div className={`absolute top-[55px] left-[1026px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-[21px] tracking-[0] leading-[60px] whitespace-nowrap transition-all duration-700 delay-400 ${
                visibleSections.has('footer') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                Get In Touch
              </div>

              <div className={`absolute w-[209px] top-[122px] left-[741px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[29px] transition-all duration-700 delay-500 ${
                visibleSections.has('footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                {quickLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <span className={`transition-all duration-300 delay-${600 + index * 100} hover:text-[#f9a51a] cursor-pointer ${
                      visibleSections.has('footer') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                    }`}>
                      {link}
                    </span>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <img
            className={`absolute w-5 h-5 top-[135px] left-[1026px] transition-all duration-700 delay-800 ${
              visibleSections.has('footer') ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            alt="Vector"
            src="/vector-1.svg"
          />

          <div className={`flex items-center absolute top-[114px] left-[1069px] transition-all duration-700 delay-800 ${
            visibleSections.has('footer') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
          }`}>
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-sm tracking-[0] leading-[60px] whitespace-nowrap">
              0509331315
            </span>
          </div>

          {/* Email Contact */}
          <img
            className={`absolute w-5 h-5 top-[175px] left-[1026px] transition-all duration-700 delay-900 ${
              visibleSections.has('footer') ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            alt="Vector"
            src="/vector.svg"
          />

          <div className={`flex items-center absolute top-[154px] left-[1069px] transition-all duration-700 delay-900 ${
            visibleSections.has('footer') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
          }`}>
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-sm tracking-[0] leading-[60px] whitespace-nowrap">
              info@vinsubco.co
            </span>
          </div>

          {/* Location Contact */}
          <img
            className={`absolute w-5 h-5 top-[215px] left-[1026px] transition-all duration-700 delay-1000 ${
              visibleSections.has('footer') ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            alt="Vector"
            src="/vector-3.svg"
          />

          <div className={`flex items-center absolute top-[194px] left-[1069px] transition-all duration-700 delay-1000 ${
            visibleSections.has('footer') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
          }`}>
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-sm tracking-[0] leading-[60px] whitespace-nowrap">
              Dammam, Kingdom of Saudi Arabia
            </span>
          </div>

          {/* Registration Number Contact */}
          <img
            className={`absolute w-5 h-5 top-[255px] left-[1026px] transition-all duration-700 delay-1100 ${
              visibleSections.has('footer') ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            alt="Vector"
            src="/vector-4.svg"
          />

          <div className={`flex items-center absolute top-[234px] left-[1069px] transition-all duration-700 delay-1100 ${
            visibleSections.has('footer') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
          }`}>
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-sm tracking-[0] leading-[60px] whitespace-nowrap">
              CR-2050161120
            </span>
          </div>
        </footer>

        <Separator className="w-full top-[1537px] absolute h-px left-0" />

        {/* CEO Message Section */}
        <section className="absolute w-[668px] h-[175px] top-[5965px] left-[386px]">
          <div className="relative w-[672px] h-[175px]">
            <p className="absolute top-0 left-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-black text-[26px] text-center tracking-[0] leading-8">
              &quot;No matter what size of project,
              <br />
              we look forward to providing value-driven excellence&quot;
            </p>

            <h3 className="absolute top-[143px] left-60 bg-[linear-gradient(90deg,rgba(249,165,26,1)_0%,rgba(147,97,15,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-transparent text-[26px] text-center tracking-[0] leading-8 whitespace-nowrap">
              CEO MESSAGE
            </h3>

            <div className="absolute flex flex-row gap-1 w-[155px] h-[26px] top-[94px] left-[257px]">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  className="w-[30px] h-[30px] object-contain"
                  src="geometric-star-shape.webp"
                  alt="star"
                />
              ))}
            </div>
          </div>
        </section>

        <img
          className="absolute w-[54px] h-[33px] top-[6027px] left-[1240px]"
          alt="Vector"
          src="/vector-5.svg"
        />

        <img
          className="absolute w-[54px] h-[33px] top-[6027px] left-[146px]"
          alt="Vector"
          src="/vector-2.svg"
        />

        {/* Gallery/Certification Collage Section */}
        <section 
          id="gallery-certifications"
          data-animate
          className={`absolute w-full max-w-full left-0 top-[1649px] flex flex-col items-center transition-all duration-1000 ${
            visibleSections.has('gallery-certifications') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Tabs */}
          <div className={`flex gap-4 mb-6 mt-2 transition-all duration-700 delay-200 ${
            visibleSections.has('gallery-certifications') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <button
              className={`px-8 py-2 rounded-full font-bold text-lg shadow transition-all duration-300 border-2 hover:scale-105 ${
                activeTab === 'gallery' 
                  ? 'bg-[#f9a51a] text-white border-[#f9a51a]' 
                  : 'bg-white text-[#222] border-gray-300 hover:border-[#f9a51a]'
              }`}
              onClick={() => setActiveTab('gallery')}
            >
              Gallery
            </button>
            <button
              className={`px-8 py-2 rounded-full font-bold text-lg shadow transition-all duration-300 border-2 hover:scale-105 ${
                activeTab === 'certifications' 
                  ? 'bg-[#f9a51a] text-white border-[#f9a51a]' 
                  : 'bg-white text-[#222] border-gray-300 hover:border-[#f9a51a]'
              }`}
              onClick={() => setActiveTab('certifications')}
            >
              Certifications
            </button>
          </div>

          {/* Collage Carousel */}
          <div className={`relative w-full max-w-5xl overflow-hidden transition-all duration-1000 delay-400 ${
            visibleSections.has('gallery-certifications') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="flex gap-4 transition-transform duration-500" style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
              {(activeTab === 'gallery' ? [
                { src: "engineering-service-provider-in-saudi-arabia1.webp", alt: "Gallery 1" },
                { src: "engineering-service-provider-in-saudi-arabia.webp", alt: "Gallery 2" },
                { src: "4466.webp", alt: "Gallery 3" },
                { src: "close-up-metallic-gear.webp", alt: "Gallery 4" },
                { src: "close-up-machine-part.webp", alt: "Gallery 5" },
                { src: "hd-construction-site-architecture-scene-background-image.webp", alt: "Gallery 6" }
              ] : certificationImages.map((src, idx) => ({ src, alt: `Certification ${idx + 1}` }))).map((item, idx) => (
                <div key={`${activeTab}-${idx}`} className={`flex-shrink-0 w-[350px] h-[260px] rounded-2xl overflow-hidden shadow-lg relative group transition-all duration-500 delay-${600 + idx * 100} hover:scale-105 ${
                  visibleSections.has('gallery-certifications') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Collage effect: overlay for gallery */}
                  {activeTab === 'gallery' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                  )}
                </div>
              ))}
            </div>
            {/* Carousel Controls */}
            <button
              className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#f9a51a] text-black hover:text-white rounded-full p-2 shadow-lg z-10 transition-all duration-300 hover:scale-110 ${
                visibleSections.has('gallery-certifications') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
              }`}
              onClick={() => setCarouselIndex((prev) => Math.max(prev - 1, 0))}
              disabled={carouselIndex === 0}
              aria-label="Previous"
              style={{ pointerEvents: carouselIndex === 0 ? 'none' : 'auto', opacity: carouselIndex === 0 ? 0.5 : 1 }}
            >
              &#8592;
            </button>
            <button
              className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#f9a51a] text-black hover:text-white rounded-full p-2 shadow-lg z-10 transition-all duration-300 hover:scale-110 ${
                visibleSections.has('gallery-certifications') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
              }`}
              onClick={() => setCarouselIndex((prev) => Math.min(prev + 1, (activeTab === 'gallery' ? 6 : certificationImages.length) - visibleCount))}
              disabled={carouselIndex >= (activeTab === 'gallery' ? 6 : certificationImages.length) - visibleCount}
              aria-label="Next"
              style={{ pointerEvents: carouselIndex >= (activeTab === 'gallery' ? 6 : certificationImages.length) - visibleCount ? 'none' : 'auto', opacity: carouselIndex >= (activeTab === 'gallery' ? 6 : certificationImages.length) - visibleCount ? 0.5 : 1 }}
            >
              &#8594;
            </button>
          </div>
        </section>

        <Separator className={`w-full top-[1537px] absolute h-px left-0 transition-all duration-700 delay-300 ${
          visibleSections.has('gallery-certifications') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`} />

        {/* CEO Message Section */}
        <section 
          id="ceo-message"
          data-animate
          className={`absolute w-[668px] h-[175px] top-[5965px] left-[386px] transition-all duration-1000 ${
            visibleSections.has('ceo-message') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative w-[672px] h-[175px]">
            <p className={`absolute top-0 left-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-black text-[26px] text-center tracking-[0] leading-8 transition-all duration-700 delay-200 ${
              visibleSections.has('ceo-message') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              &quot;No matter what size of project,
              <br />
              we look forward to providing value-driven excellence&quot;
            </p>

            <h3 className={`absolute top-[143px] left-60 bg-[linear-gradient(90deg,rgba(249,165,26,1)_0%,rgba(147,97,15,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-transparent text-[26px] text-center tracking-[0] leading-8 whitespace-nowrap transition-all duration-700 delay-400 ${
              visibleSections.has('ceo-message') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              CEO MESSAGE
            </h3>

            <div className={`absolute flex flex-row gap-1 w-[155px] h-[26px] top-[94px] left-[257px] transition-all duration-700 delay-300 ${
              visibleSections.has('ceo-message') ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  className={`w-[30px] h-[30px] object-contain transition-all duration-300 delay-${500 + i * 100} hover:scale-110 ${
                    visibleSections.has('ceo-message') ? 'opacity-100 rotate-0' : 'opacity-0 rotate-12'
                  }`}
                  src="geometric-star-shape.webp"
                  alt="star"
                />
              ))}
            </div>
          </div>
        </section>

        <img
          className={`absolute w-[54px] h-[33px] top-[6027px] left-[1240px] transition-all duration-700 delay-600 ${
            visibleSections.has('ceo-message') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
          alt="Vector"
          src="/vector-5.svg"
        />

        <img
          className={`absolute w-[54px] h-[33px] top-[6027px] left-[146px] transition-all duration-700 delay-600 ${
            visibleSections.has('ceo-message') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          alt="Vector"
          src="/vector-2.svg"
        />
      </div>
    </div>
  );
};
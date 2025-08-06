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

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen min-h-screen h-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[6617px] relative">
        {/* Vision Section */}
        <section className="absolute w-[1440px] h-[419px] top-[4754px] left-0 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(0,0,0,1)_100%)]">
          <Card className="absolute w-[507px] h-[185px] top-[117px] left-[786px] bg-transparent border-none">
            <CardContent className="relative w-[511px] h-[185px] p-0">
              <h2 className="w-[157px] top-0 left-[175px] text-black text-[26px] absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold tracking-[0] leading-[60px] whitespace-nowrap">
                OUR VISION
              </h2>

              <p className="absolute w-[507px] top-[77px] left-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-black text-sm text-justify tracking-[0] leading-[18px]">
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
            className="absolute w-[300px] h-[300px] top-[70px] left-60 object-cover"
            alt="Vision"
          />
        </section>

        {/* Mission Section */}
        <section className="absolute w-[1440px] h-[419px] top-[4335px] left-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(0,0,0,1)_100%)]">
          <img
            className="absolute w-[300px] h-[300px] top-16 left-[871px] object-cover"
            alt="Mission"
          />

          <Card className="absolute w-[501px] h-[203px] top-[108px] left-[147px] bg-transparent border-none">
            <CardContent className="p-0">
              <h2 className="w-[181px] top-0 left-[158px] text-black text-[26px] absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold tracking-[0] leading-[60px] whitespace-nowrap">
                OUR MISSION
              </h2>

              <p className="absolute w-[497px] top-[77px] left-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-black text-sm text-justify tracking-[0] leading-[18px]">
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
        <section className="absolute w-[1440px] h-[1072px] -top-0.5 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(203,126,0,1)_100%)]">
          <header className="absolute w-[1440px] h-[101px] top-[58px] left-0 bg-white">
            <img
              className="absolute w-[341px] h-12 top-[26px] left-[146px] object-cover"
              alt="Vinsub"
            />

            <NavigationMenu className="absolute w-[648px] h-2 top-[46px] left-[660px]">
              <NavigationMenuList className="flex gap-[30px]">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[15px] tracking-[0] leading-[normal] whitespace-nowrap ${
                        item.active ? "text-[#f9a51a]" : "text-neutral-900"
                      }`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </header>

          <div className="absolute w-[826px] h-[174px] top-[183px] left-[307px]">
            <h1 className="absolute w-[826px] top-0 left-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(249,165,26,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-transparent text-[85px] tracking-[0] leading-[normal]">
              Vinsub international
            </h1>

            <h1 className="absolute w-[671px] top-20 left-[78px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(249,165,26,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-transparent text-[85px] tracking-[0] leading-[94px]">
              Contracting Co.
            </h1>
          </div>

          <div className="w-[545px] top-[365px] left-[448px] [font-family:'Work_Sans',Helvetica] font-medium text-[25px] leading-10 absolute text-white tracking-[0] whitespace-nowrap">
            Engineering Service Provider in Saudi Arabia
          </div>

          <div className="absolute w-[1148px] h-[514px] top-[478px] left-[146px]">
            <img
              className="absolute w-[275px] h-[456px] top-0 -left-1"
              alt="Image"
            />

            <img
              className="absolute w-[276px] h-[435px] top-[87px] left-[289px]"
              alt="Image"
            />

            <img
              className="absolute w-[276px] h-[389px] top-0 left-[583px] object-cover"
              alt="Image"
            />

            <img
              className="absolute w-[275px] h-[396px] top-[106px] left-[877px] object-cover"
              alt="Image"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="absolute w-[1440px] h-[2122px] top-[2117px] left-0">
          <img
            className="absolute w-[1440px] h-[206px] top-0 left-0"
            alt="Rectangle"
          />

          <div className="absolute w-[1440px] h-[1917px] top-[205px] left-0 bg-black" />

          <img
            className="absolute w-[1440px] h-[479px] top-[1643px] left-0"
            alt="Factory aluminum pvc"
          />

          <img
            className="absolute w-[1440px] h-[479px] top-[205px] left-0"
            alt="High angle measuring"
          />

          <h2 className="w-[481px] top-[68px] left-[480px] bg-[linear-gradient(90deg,rgba(249,165,26,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[65px] absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold tracking-[0] leading-[60px] whitespace-nowrap">
            OUR SERVICES
          </h2>

          <Separator className="w-[1440px] top-[204px] absolute h-px left-0" />

          {services.map((service, index) => (
            <React.Fragment key={service.id}>
              <div
                className="absolute w-[746px] top-[366px] left-[551px] bg-[linear-gradient(90deg,rgba(0,0,0,1)_14%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-30 [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-transparent text-[196px] tracking-[0] leading-[156px]"
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
                className={`absolute w-[380px] h-[380px] bg-transparent border-none ${
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
                    className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[27px] leading-[60px] text-white tracking-[0] ${
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
                    className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium italic text-white text-xl text-justify tracking-[0] leading-[25px] ${
                      index === 0
                        ? "absolute w-[375px] top-[74px] left-0"
                        : index === 1
                          ? "absolute w-[377px] top-[74px] left-0"
                          : index === 2
                            ? "absolute w-[374px] top-[78px] left-[9px]"
                            : "absolute w-[377px] top-[74px] left-0"
                    }`}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>

              <span
                className={`absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#f9a51a] text-[243px] tracking-[0] leading-[180px] whitespace-nowrap ${
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
            className="absolute w-[1440px] h-[479px] top-[684px] left-0"
            alt="Hd construction site"
          />

          <img
            className="absolute w-[1440px] h-[479px] top-[1164px] left-0"
            alt="Young factory worker"
          />

          <MailIcon className="absolute w-6 h-6 top-[1395px] left-[708px] text-white" />
        </section>

        {/* CTA Section */}
        <section className="absolute w-[1440px] h-[79px] top-[1070px] left-0 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)]">
          <div className="absolute w-[713px] top-[9px] left-[146px] [font-family:'Work_Sans',Helvetica] font-normal text-transparent text-xl tracking-[0] leading-5">
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

          <Button className="absolute w-[133px] h-[35px] top-[14px] left-[1160px] rounded-[10px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(217,217,217,1)_100%)]">
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-[19px] tracking-[0] whitespace-nowrap">
              Contact Us
            </span>
          </Button>

          <Button className="absolute w-[195px] h-[35px] top-[14px] left-[945px] rounded-[10px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(217,217,217,1)_100%)]">
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-[19px] tracking-[0] whitespace-nowrap">
              View Our Projects
            </span>
          </Button>
        </section>

        {/* Clients Section */}
        <section className="absolute w-[1440px] h-[600px] top-[5268px] left-0 bg-[#d9d9d9]">
          <div className="absolute w-44 h-[54px] top-[126px] left-[632px]">
            <h2 className="w-44 top-0 left-0 text-black text-[26px] absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold tracking-[0] leading-[60px] whitespace-nowrap">
              OUR&nbsp;&nbsp;CLIENTS
            </h2>

            <Separator className="w-44 top-[52px] absolute h-px left-0" />
          </div>

          <div className="absolute w-[910px] h-[75px] top-[235px] left-[265px]">
            <img
              className="absolute w-[100px] h-[75px] top-0 left-0 object-cover"
              alt="Fasteners alrashed"
            />

            <img
              className="absolute w-[100px] h-[30px] top-[22px] left-[162px] object-cover"
              alt="Logo"
            />

            <img
              className="absolute w-[100px] h-[33px] top-[21px] left-[324px] object-cover"
              alt="Logo"
            />

            <img
              className="absolute w-[100px] h-[72px] top-px left-[486px] object-cover"
              alt="Logo light"
            />

            <img
              className="absolute w-[100px] h-[21px] top-[27px] left-[648px] object-cover"
              alt="Logo"
            />

            <img
              className="absolute w-[100px] h-[54px] top-2.5 left-[810px] object-cover"
              alt="Cropped OUR"
            />
          </div>

          <div className="absolute w-[915px] h-[43px] top-[402px] left-[263px]">
            <img
              className="absolute w-[100px] h-[43px] top-0 left-0 object-cover"
              alt="Nov white logo"
            />

            <img
              className="absolute w-[100px] h-[21px] top-[11px] left-[163px] object-cover"
              alt="Eaton arabia JV mark"
            />

            <img
              className="absolute w-[100px] h-[22px] top-[11px] left-[326px] object-cover"
              alt="Logo"
            />

            <img
              className="absolute w-[100px] h-3.5 top-[15px] left-[489px] object-cover"
              alt="Alupco logo"
            />

            <img
              className="absolute w-[100px] h-[41px] top-px left-[652px] object-cover"
              alt="East PIPES BILINGUAL"
            />

            <img
              className="absolute w-[100px] h-[23px] top-2.5 left-[815px] object-cover"
              alt="Logo AL jazeera"
            />
          </div>
        </section>

        {/* About Us Section */}
        <section className="absolute w-[292px] h-[161px] top-[1156px] left-[574px]">
          <h2 className="absolute w-[292px] top-0 left-0 bg-[linear-gradient(270deg,rgba(249,165,26,1)_0%,rgba(0,0,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-transparent text-[65px] tracking-[0] leading-[150px] whitespace-nowrap">
            About Us
          </h2>

          <Separator className="w-[285px] top-[134px] absolute h-px left-0" />
        </section>

        <div className="absolute w-[847px] h-[152px] top-[1317px] left-[297px]">
          <h3 className="absolute w-[331px] top-0 left-[258px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-black text-[19px] tracking-[0] leading-[60px] whitespace-nowrap">
            Vinsub International Contracting Co
          </h3>

          <p className="absolute w-[847px] top-[50px] left-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[18px]">
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
        <footer className="absolute w-[1463px] h-[366px] top-[6238px] -left-1.5">
          <div className="absolute w-[1463px] h-[366px] top-0 left-0">
            <div className="relative w-[1451px] h-[366px]">
              <img
                className="absolute w-[1440px] h-[366px] top-0 left-[11px]"
                alt="Rectangle"
                src="/rectangle-8.svg"
              />

              <div className="absolute w-[564px] h-[366px] top-0 left-0 bg-[#d9d9d9]" />

              <img
                className="absolute w-[126px] h-[34px] top-[203px] left-[157px]"
                alt="Group"
              />

              <img
                className="absolute w-[340px] h-12 top-[70px] left-[157px] object-cover"
                alt="Vinsub"
              />

              <div className="top-[100px] left-[214px] text-xs absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal italic text-black tracking-[0] leading-[60px] whitespace-nowrap">
                Engineering Service Dealer in Saudi Arabia
              </div>

              <div className="absolute top-[266px] left-[157px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal italic text-black text-xs tracking-[0] leading-[60px] whitespace-nowrap">
                vinsubinternational © 2025. All Rights Reserved
              </div>

              <div className="absolute top-[282px] left-[157px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-black text-xs tracking-[0] leading-[60px] whitespace-nowrap">
                Developed by wydex
              </div>

              <div className="absolute top-[55px] left-[741px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-[21px] tracking-[0] leading-[60px] whitespace-nowrap">
                Quick Links
              </div>

              <div className="absolute top-[55px] left-[1033px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-[21px] tracking-[0] leading-[60px] whitespace-nowrap">
                Get In Touch
              </div>

              <div className="absolute w-[209px] top-[122px] left-[741px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[29px]">
                {quickLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    {link}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute w-[1463px] h-[366px] top-0 left-0">
            <div className="relative w-[1451px] h-[366px]">
              <img
                className="absolute w-[1440px] h-[366px] top-0 left-[11px]"
                alt="Rectangle"
                src="/rectangle-8.svg"
              />

              <div className="absolute w-[564px] h-[366px] top-0 left-0 bg-[#d9d9d9]" />

              <img
                className="absolute w-[126px] h-[34px] top-[203px] left-[153px]"
                alt="Group"
              />

              <img
                className="absolute w-[340px] h-12 top-[70px] left-[152px] object-cover"
                alt="Vinsub"
              />

              <div className="top-[98px] left-[210px] text-[11px] absolute [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal italic text-black tracking-[0] leading-[60px] whitespace-nowrap">
                Engineering Service Provider in Saudi Arabia, Damam
              </div>

              <div className="absolute top-[266px] left-[152px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal italic text-black text-xs tracking-[0] leading-[60px] whitespace-nowrap">
                vinsubinternational © 2025. All Rights Reserved
              </div>

              <div className="absolute top-[282px] left-[152px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-black text-xs tracking-[0] leading-[60px] whitespace-nowrap">
                Developed by wydex
              </div>

              <div className="absolute top-[55px] left-[741px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-[21px] tracking-[0] leading-[60px] whitespace-nowrap">
                Quick Links
              </div>

              <div className="absolute top-[55px] left-[1026px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-[21px] tracking-[0] leading-[60px] whitespace-nowrap">
                Get In Touch
              </div>

              <div className="absolute w-[209px] top-[122px] left-[741px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[29px]">
                {quickLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    {link}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <img
            className="absolute w-5 h-5 top-[135px] left-[1026px]"
            alt="Vector"
            src="/vector-1.svg"
          />

          <div className="flex items-center absolute top-[114px] left-[1069px]">
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-sm tracking-[0] leading-[60px] whitespace-nowrap">
              0509331315
            </span>
          </div>

          <div className="flex items-center absolute top-[152px] left-[1069px]">
            <MailIcon className="absolute w-5 h-4 top-[175px] left-[1026px] -translate-y-[175px] -translate-x-[1026px] text-white" />
            <span
              className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-
white text-sm tracking-[0] leading-[60px] whitespace-nowrap"
            >
              info@vinsubco.com
            </span>
          </div>

          <div className="flex items-center absolute top-[190px] left-[1069px]">
            <MapPinIcon className="absolute w-4 h-5 top-[211px] left-[1028px] -translate-y-[211px] -translate-x-[1028px] text-white" />
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-sm tracking-[0] leading-[60px] whitespace-nowrap">
              Dammam Kingdom of Saudi Arabia
            </span>
          </div>

          <div className="flex items-center absolute top-[236px] left-[1069px]">
            <FileTextIcon className="absolute w-5 h-4 top-[259px] left-[1026px] -translate-y-[259px] -translate-x-[1026px] text-white" />
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-sm tracking-[0] leading-[60px] whitespace-nowrap">
              CR- 2050161120
            </span>
          </div>
        </footer>

        <Separator className="w-[1440px] top-[1537px] absolute h-px left-0" />

        {/* CEO Message Section */}
        <section className="absolute w-[668px] h-[175px] top-[5965px] left-[386px]">
          <div className="relative w-[672px] h-[175px]">
            <p className="absolute top-0 left-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-black text-[26px] text-center tracking-[0] leading-8">
              &quot;No matter what size of project,
              <br />
              we look forward to providing value-driven excellence&quot;
            </p>

            <h3 className="absolute top-[143px] left-60 bg-[linear-gradient(90deg,rgba(249,165,26,1)_0%,rgba(147,97,15,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-transparent text-[26px] text-center tracking-[0] leading-8 whitespace-nowrap">
              CEO MESSEGE
            </h3>

            <img
              className="absolute w-[155px] h-[26px] top-[94px] left-[257px]"
              alt="Group"
            />
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

        {/* Gallery Section */}
        <section className="absolute w-[1440px] h-[293px] top-[1649px] left-0 overflow-x-scroll">
          <img
            className="absolute w-[293px] h-[293px] top-0 left-[147px]"
            alt="Rectangle"
          />

          <img
            className="absolute w-[293px] h-[293px] top-0 left-[490px]"
            alt="Rectangle"
          />

          <img
            className="absolute w-[293px] h-[293px] top-0 left-[833px] object-cover"
            alt="Rectangle"
          />

          <img
            className="absolute w-[293px] h-[293px] top-0 left-[1176px] object-cover"
            alt="Rectangle"
          />

          <img
            className="absolute w-[293px] h-[293px] top-0 left-[1506px] object-cover"
            alt="Rectangle"
          />

          <img
            className="absolute w-[293px] h-[293px] top-0 left-[1865px] object-cover"
            alt="Rectangle"
          />
        </section>

        <Button className="absolute w-[171px] h-[29px] top-[1975px] left-[635px] rounded-[21.5px] bg-[linear-gradient(90deg,rgba(83,52,0,1)_0%,rgba(249,165,26,1)_100%)]">
          <span className="bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,210,136,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-transparent text-base tracking-[0] underline whitespace-nowrap">
            more from gallery
          </span>
        </Button>

        <div className="absolute w-[458px] h-[62px] top-[1565px] left-[638px]">
          <div className="absolute w-[462px] h-[54px] top-0 left-0 flex">
            {galleryTabs.map((tab) => (
              <div
                key={tab.id}
                className={`relative ${tab.id === "gallery" ? "w-[167px]" : "w-[263px]"} h-[54px]`}
              >
                <div
                  className={`absolute w-full h-[45px] top-1 left-0 rounded-[22.5px] border border-solid ${tab.active ? "border-black" : "border-[#a6a6a6]"}`}
                />
                <div
                  className={`absolute w-[80%] top-0 left-6 [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold ${tab.active ? "text-[#f9a51a]" : "text-[#a6a6a6]"} text-[26px] tracking-[0] leading-[51px] whitespace-nowrap`}
                >
                  {tab.label}
                </div>
                {tab.active && (
                  <div className="absolute w-[85px] h-[3px] top-[59px] left-10">
                    <div className="absolute w-[73px] h-[3px] top-0 left-0 bg-[#f9a51a] rounded-[9px]" />
                    <div className="absolute w-2 h-[3px] top-0 left-[77px] bg-[#f9a51a] rounded-[9px]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

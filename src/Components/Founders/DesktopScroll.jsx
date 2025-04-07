import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Consumer } from "../ContextAPI/ContextAPI";
import { Link } from "react-router-dom";

const DesktopScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFoundersSectionVisible, setIsFoundersSectionVisible] =
    useState(false);
  const sectionRefs = useRef([]);
  const foundersSectionRef = useRef(null);

  useEffect(() => {
    const foundersObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFoundersSectionVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (foundersSectionRef.current) {
      foundersObserver.observe(foundersSectionRef.current);
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observers = sectionRefs.current.map((section, index) => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setActiveIndex(index);
        }
      }, options);

      if (section) {
        observer.observe(section);
      }
      return observer;
    });

    return () => {
      foundersObserver.disconnect();
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <Consumer>
      {(value) => {
        const { founders } = value;
        const activeFounder = founders[activeIndex];

        return (
          <div className="w-full bg-gray-100 pb-20">
            <Helmet>
              <title>
                {isFoundersSectionVisible
                  ? `${activeFounder.name} - ${activeFounder.title} at Webortex`
                  : "Webortex | Building the Future of Sofware Development"}
              </title>
              <meta
                name="description"
                content="K Gnana Sekhar is the Founder and CEO of Webortex. Expert in design, development & marketing—crafting sleek websites and powerful apps. Passionate about innovation and turning ideas into reality. 'Nothing expensive under the power of creativity.'"
              />

              <meta
                name="keywords"
                content="K Gnana Sekhar, Webortex Founder, Webortex CEO, Founder of Webortex, CEO of Webortex, Webortex Software Development Agency, Web Development in Tirupati, Custom Software in Tirupati, Mobile App Development Tirupati, UI/UX Design Tirupati, Cloud Solutions, Digital Transformation, Webortex Team, Sisindri Singamsetti, Tharun A, Jayadeep Reddy, Ashok P, Sai Sandeep"
              />

              <meta name="author" content="K Gnana Sekhar" />
              <meta name="author" content="Sisindri Singamsetti" />

              <meta
                property="og:title"
                content="K Gnana Sekhar – Founder and CEO at Webortex"
              />
              <meta
                name="description"
                content="K Gnana Sekhar is the Founder and CEO of Webortex. Expert in design, development & marketing—crafting sleek websites and powerful apps. Passionate about innovation and turning ideas into reality. ★ 'Nothing expensive under the power of creativity' – K Gnana Sekhar."
              />

              <meta
                property="og:description"
                content="K Gnana Sekhar, Founder and CEO of Webortex. Passionate about innovation and design. ★ 'Nothing expensive under the power of creativity' – K Gnana Sekhar."
              />
              <meta
                property="og:description"
                content="Founder and CEO of Webortex. Expert in design, development & marketing. Passionate about innovation and turning ideas into reality. 'Nothing expensive under the power of creativity.'"
              />
              <meta property="og:type" content="profile" />
              <meta
                property="og:url"
                content="https://github.com/gnanaofficial"
              />
              <meta
                property="og:image"
                content="https://pub-092f205255e44a92ba44af43d1f03019.r2.dev/Founders/KGnanaSekhar.jpg"
              />
            </Helmet>

            <div ref={foundersSectionRef}>
              <div className="sticky top-0 z-10 bg-gray-100 text-center pt-3 pb-8">
                <div className="container mx-auto mt-5">
                  <h1 className="text-6xl xs:text-7xl md:text-8xl 2xl:text-9xl text-center font-medium text-backgroundColor/50 tracking-tighter">
                    Founders
                  </h1>
                </div>
              </div>

              <div className="sticky top-48 h-[calc(100vh-12rem)] mx-auto xl:mx-[3%] 2xl:mx-[9%]">
                <div className="h-full">
                  <div className="flex flex-col md:flex-row h-full items-center justify-center">
                    <div className="md:flex-1 flex justify-center items-center h-full relative">
                      {founders.map((founder, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 m-5 lg:m-16 2xl:m-10 transition-all duration-500 ease-in-out flex justify-center items-center ${
                            index === activeIndex
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-full"
                          }`}
                        >
                          <img
                            src={founder.image}
                            alt={founder.name}
                            className="lg:scale-110 xl:scale-115 2xl:scale-105 w-auto h-auto object-cover rounded-2xl filter grayscale"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="md:flex-1 lg:flex-[1.2] xl:flex-[1.5] h-full flex items-center justify-center relative mt-[-100px]">
                      {founders.map((founder, index) => (
                        <div
                          key={founder.id}
                          className={`absolute inset-0 transition-all duration-900 flex items-center justify-center ${
                            index === activeIndex
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-full"
                          }`}
                        >
                          <div className="flex flex-col justify-center items-center w-full px-4">
                            <div className="inline-flex items-center">
                              <div className="order-2">
                                <div className="group-hover:duration-900 relative rounded-2xl xl:w-32 xl:h-20 md:w-28 md:h-16 xs:w-24 xs:h-14 h-10 w-16 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center before:-skew-x-12 before:rounded-2xl before:absolute before:content[''] before:bg-neutral-700 before:right-2 md:before:right-3 before:top-0 xl:before:w-32 xl:before:h-16 md:before:h-14 md:before:w-28 xs:before:h-12 xs:before:w-24 before:h-8 before:w-16 before:-z-10">
                                  <span className="text-xs sm:text-sm md:text-lg xl:text-2xl font-semibold pr-16">
                                    {index >= 4 ? "Co" : ""}
                                  </span>
                                  <p className="text-xs sm:text-sm md:text-lg xl:text-2xl font-semibold">
                                    Founder
                                  </p>
                                </div>
                              </div>
                              <h2 className="order-1 md:text-[35px] lg:text-[40px] xl:text-[53px] 3xl:text-[70px] text-center mt-44 font-bold text-gray-800 mb-1">
                                {founder.name}
                              </h2>
                            </div>

                            <h3 className="text-lg md:text-xl xl:text-2xl text-center text-gray-600 mb-8">
                              {founder.title}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base xl:text-lg text-center text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                              {founder.quote}
                            </p>
                            <div className="flex justify-center">
                              <Link
                                to={founder.src}
                                target="_blank"
                                rel="noreferrer"
                                className="px-8 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors text-sm md:text-base xl:text-lg "
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative -z-10">
                {founders.map((_, index) => (
                  <div
                    key={index}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    className="h-screen"
                  />
                ))}
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default DesktopScroll;

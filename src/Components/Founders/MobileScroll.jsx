import React, { useEffect, useRef, useState } from "react";
import { Consumer } from "../ContextAPI/ContextAPI";
import { Button } from "@mui/material";

const MobileScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
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
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <Consumer>
      {(value) => {
        const { founders } = value;
        return (
          <div className="w-full py-20">
            <section className="mx-[calc(50%-50vw)] pl-10 w-full">
              <h1 className="sticky mx-auto top-[10px] text-6xl xs:text-7xl md:text-8xl text-center font-medium text-backgroundColor tracking-tighter">
                Founders
              </h1>
              <div className="mt-[33%]">
                {founders.map((founder, index) => (
                  <div
                    key={founder.id}
                    className={`sticky top-0 h-dvh h-screen mt-[10%] ${
                      index === activeIndex ? "active" : ""
                    }`}
                    ref={(el) => (sectionRefs.current[index] = el)}
                  >
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <div className="bg-cover bg-no-repeat bg-center w-[100vw] h-full -z-1 bg-gray-100">
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-[min(85vw,500px)] mt-[-8rem]">
                          <div className="flex flex-col h-full w-full">
                            <div className="flex flex-col relative mb-4">
                              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 leading-relaxed mb-2 mt-2">
                                # {founder.title}
                              </p>

                              <div className="flex justify-center items-center relative w-full mb-3">
                                <div className="absolute right-0 top-[50%] transform translate-y-[-50%] mt-[-50px]">
                                  <div className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
                                    <div className="group-hover:duration-400 relative rounded-xl w-20 h-12 xs:w-24 xs:h-14 md:w-28 md:h-16 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center before:-skew-x-12 before:rounded-xl before:absolute before:content[''] before:bg-neutral-700 before:right-2 md:before:right-3 before:top-0 before:w-20 before:h-10 xs:before:w-24 xs:before:h-12 md:before:w-28 md:before:h-14 before:-z-10">
                                      <span className="text-xs sm:text-sm font-medium xs:font-semibold">
                                        Co
                                      </span>
                                      <p className="text-xs sm:text-sm font-medium xs:font-semibold">
                                        Founder
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <h2 className="order-1 text-[25px] xs:text-[30px] text-center font-bold text-gray-800 mt-6">
                                  {founder.name}
                                </h2>
                              </div>
                            </div>

                            <div className="flex justify-center items-center">
                              <div className="flex justify-center items-center w-[min(65vw,1000px)] md:w-[min(50vw,1000px)] h-[min(65vw,1000px)] md:h-[min(50vw,1000px)]">
                                <img
                                  className="relative h-full rounded-2xl filter grayscale"
                                  src={founder.image}
                                  alt={founder.name}
                                />
                              </div>
                            </div>

                            <div className="flex flex-col justify-center items-center bg-gray-100 z-20 py-5 mt-4">
                              <p className="text-xs sm:text-sm md:text-base text-center text-gray-600 px-[1%] sm:px-[3%] leading-relaxed mb-6">
                                {founder.quote}
                              </p>
                              <div className="flex justify-center z-999">
                                <Button
                                  onClick={() =>
                                    window.open(
                                      founder.url,
                                      "_blank",
                                      "noopener,noreferrer"
                                    )
                                  }
                                  className="px-8 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition-colors text-sm transition-all duration-300 ease-in-out capitalize"
                                >
                                  View Profile
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      }}
    </Consumer>
  );
};

export default MobileScroll;

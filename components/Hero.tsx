/* eslint-disable react/no-children-prop */
"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButton";
import "./embla.css";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export function LayoutTextFlipDemo() {
  return (
    <div>
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="We Serve "
          words={[
            "At Night(24/7)",
            "You Love to Eat",
            "Veg/Non-Veg",
            "Food Cravings at Night",
          ]}
        />
      </motion.div>
      <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
        Special 10% OFF On All First Order *Terms and Conditions Apply.
      </p>
    </div>
  );
}
export function NavbarDemo() {
  const navItems = [
    {
      name: "Offers ",
      link: "#offers",
    },
    {
      name: "Menu",
      link: "#menu",
    },
    {
      name: "Contact us ",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4"></div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4"></div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </>
  );
}

// Hero Carousel Component
const HeroCarousel = () => {
  const options: EmblaOptionsType = { loop: true };

  const slides = [
    {
      image: "/carosual-1.jpg",
      alt: "3 Star Restaurant Interior",
    },
    {
      image: "/carosual-2.jpg",
      alt: "Delicious Food",
    },
    {
      image: "/carosual-1.jpg",
      alt: "Restaurant Ambiance",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="w-full h-full">
      <div className="embla h-full">
        <div className="embla__viewport h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            {slides.map((slide, index) => (
              <div className="embla__slide h-full" key={index}>
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="embla__controls mt-6">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOffers = () => {
    document.getElementById("offers")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* NAVBAR AT TOP */}
      <div className="absolute top-6 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <NavbarDemo />
        </div>
      </div>

      {/* MAIN CONTENT - Two Column Layout */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* LEFT SIDE - Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="h-[400px] lg:h-[500px]">
              <HeroCarousel />
            </div>
          </motion.div>

          {/* RIGHT SIDE - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <h2 className="text-xl md:text-xl font-semibold mb-3 text-orange-400">
              Restaurant open 24/7 || Home-Delivery Available in Night(6:00 PM
              to 5:00 AM)
            </h2>
            <motion.h3 className="text-lg md:text-xl font-semibold mb-4 text-orange-600">
              ✨ Raat Ki Food Cravings At your DoorStep{" "}
            </motion.h3>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              3 Star Restaurant
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-black mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <LayoutTextFlipDemo />
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={scrollToMenu}
                className="text-lg px-8 py-3 bg-orange-600 hover:bg-orange-700"
              >
                View Menu
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToOffers}
                className="text-lg px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                Special Offers
              </Button>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block cursor-pointer group"
                onClick={scrollToMenu}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm text-gray-500 group-hover:text-orange-600 transition-colors">
                    Scroll to explore
                  </span>
                  <ChevronDown className="w-6 h-6 text-orange-600 group-hover:text-orange-700 transition-colors" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </section>
  );
}

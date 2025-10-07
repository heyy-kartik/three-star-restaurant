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
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { image } from "framer-motion/client";

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

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Three Star Restaurant",
      subtitle:
        "Experience exceptional cuisine crafted with passion and served with excellence",
      image: "/public/carousal-1.jpg", // Add your images to public/images/
      gradient: "from-orange-600 to-orange-800",
    },
    {
      title: "Authentic Flavors",
      subtitle:
        "Discover traditional recipes reimagined with modern culinary techniques",
      image: "/carousal-1.jpg",
      gradient: "from-red-600 to-orange-700",
    },
    {
      title: "Fine Dining ",
      subtitle:
        "Where every meal becomes a memorable celebration of taste and elegance",
      image: "/carousal-2.jpg",
      gradient: "from-amber-600 to-orange-800",
    },
  ];

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* NAVBAR AT TOP */}
      <div className="absolute top-6 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <NavbarDemo />
        </div>
      </div>

      {/* CAROUSEL BACKGROUND */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50"
          >
            {/* Background decoration for current slide */}
            <motion.div
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-orange-100 to-transparent rounded-full opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-orange-100 to-transparent rounded-full opacity-30"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CAROUSEL NAVIGATION */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-orange-600" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-orange-600" />
      </button>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className={`text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${slides[currentSlide].gradient} bg-clip-text text-transparent`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slides[currentSlide].title && slides[currentSlide].image && (
                  <motion.img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    sizes="lg"
                    className="absolute inset-0 object-cover w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                className="text-xl md:text-lg text-gray-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" onClick={scrollToMenu} className="text-lg px-8">
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("offers")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-lg px-8"
            >
              Special Offers
            </Button>
          </motion.div>

          {/* CAROUSEL INDICATORS */}
          <motion.div
            className="flex justify-center mt-8 space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-orange-600 scale-110"
                    : "bg-orange-300 hover:bg-orange-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block cursor-pointer"
              onClick={scrollToMenu}
            >
              <ChevronDown className="w-8 h-8 text-orange-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

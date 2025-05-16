import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Luxury Retreat & Spa",
  subtitle = "Experience unparalleled comfort and elegance in the heart of paradise",
  ctaText = "Book Now",
  backgroundImage = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80",
  onCtaClick = () => console.log("Book Now clicked"),
}: HeroSectionProps) => {
  return (
    <div className="relative h-[600px] w-full bg-gray-100">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
          {subtitle}
        </p>
        <Button
          size="lg"
          onClick={onCtaClick}
          className="px-8 py-6 text-lg font-semibold"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;

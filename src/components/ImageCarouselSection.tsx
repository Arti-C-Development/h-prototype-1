import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface ImageCarouselSectionProps {
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  title?: string;
  subtitle?: string;
}

const ImageCarouselSection: React.FC<ImageCarouselSectionProps> = ({
  images = [
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      alt: "Luxury hotel swimming pool",
      caption: "Relax by our pristine swimming pool",
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
      alt: "Elegant hotel bedroom",
      caption: "Experience comfort in our premium rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
      alt: "Hotel restaurant",
      caption: "Savor exquisite cuisine at our restaurant",
    },
    {
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80",
      alt: "Hotel spa",
      caption: "Rejuvenate at our world-class spa",
    },
    {
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
      alt: "Hotel lobby",
      caption: "Be welcomed in our elegant lobby",
    },
  ],
  title = "Experience Our Hotel",
  subtitle = "Take a visual tour through our luxurious facilities and accommodations",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, images.length]);

  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            className="w-full"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-none">
                    <CardContent className="p-0 relative aspect-[16/9] overflow-hidden rounded-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                          <p className="text-lg font-medium">{image.caption}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 md:-left-16" />
            <CarouselNext className="-right-12 md:-right-16" />
          </Carousel>

          <div className="flex justify-center mt-6 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? "bg-primary w-6" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarouselSection;

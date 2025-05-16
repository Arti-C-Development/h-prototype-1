import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import ImageCarouselSection from "./ImageCarouselSection";
import ServicesSection from "./ServicesSection";
import { Button } from "./ui/button";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">
              Luxury Hotel
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className={navigationMenuTriggerStyle()}>
              Home
            </a>
            <a href="#rooms" className={navigationMenuTriggerStyle()}>
              Rooms
            </a>
            <a href="#amenities" className={navigationMenuTriggerStyle()}>
              Amenities
            </a>
            <a href="#contact" className={navigationMenuTriggerStyle()}>
              Contact
            </a>
          </nav>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Book Now
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Introduction */}
        <section className="container py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Welcome to Luxury Hotel
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Experience unparalleled luxury and comfort at our premier hotel
            destination. Nestled in a picturesque location, our hotel offers the
            perfect blend of elegant accommodations, exceptional service, and
            world-class amenities to make your stay truly memorable.
          </p>
        </section>

        {/* Feature Section */}
        <FeatureSection />

        {/* Image Carousel Section */}
        <ImageCarouselSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Book Now CTA */}
        <section className="bg-primary/5 py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Experience Luxury?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Book your stay today and indulge in the ultimate hotel experience
              with world-class amenities and exceptional service.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book Your Stay Now
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12" id="contact">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Luxury Hotel</h3>
              <p className="text-muted-foreground">
                123 Elegant Street
                <br />
                Luxury City, LC 12345
                <br />
                Phone: (123) 456-7890
                <br />
                Email: info@luxuryhotel.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#rooms"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Rooms
                  </a>
                </li>
                <li>
                  <a
                    href="#amenities"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Amenities
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Luxury Hotel. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

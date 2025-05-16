import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wifi,
  UtensilsCrossed,
  Dumbbell,
  Car,
  Coffee,
  Bath,
  Bed,
  Clock,
} from "lucide-react";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceItem = ({ icon, title, description }: ServiceItemProps) => {
  return (
    <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
      <CardContent className="flex flex-col items-center text-center p-6">
        <div className="text-primary mb-4 p-3 bg-primary/10 rounded-full">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Wifi size={24} />,
      title: "Free Wi-Fi",
      description: "High-speed internet access throughout the hotel",
    },
    {
      icon: <UtensilsCrossed size={24} />,
      title: "Restaurant",
      description: "Fine dining with local and international cuisine",
    },
    {
      icon: <Dumbbell size={24} />,
      title: "Fitness Center",
      description: "Modern equipment and personal training options",
    },
    {
      icon: <Bath size={24} />,
      title: "Spa Services",
      description: "Relaxing treatments and wellness packages",
    },
    {
      icon: <Car size={24} />,
      title: "Airport Shuttle",
      description: "Convenient transportation to and from the airport",
    },
    {
      icon: <Coffee size={24} />,
      title: "Room Service",
      description: "Available 24/7 for your convenience",
    },
    {
      icon: <Bed size={24} />,
      title: "Luxury Bedding",
      description: "Premium linens and pillow options for comfort",
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Concierge",
      description: "Always available to assist with your needs",
    },
  ];

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience luxury and comfort with our comprehensive range of hotel
            services designed to make your stay memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

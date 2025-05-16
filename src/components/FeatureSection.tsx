import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  imageUrl: string;
}

interface FeatureSectionProps {
  features?: FeatureProps[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  features = [
    {
      title: "Luxurious Rooms",
      description:
        "Experience ultimate comfort in our elegantly designed rooms with premium amenities and breathtaking views.",
      imageUrl:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    },
    {
      title: "Gourmet Restaurant",
      description:
        "Indulge in exquisite culinary delights prepared by our world-class chefs using the finest local ingredients.",
      imageUrl:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    },
    {
      title: "Relaxing Spa",
      description:
        "Rejuvenate your body and mind with our range of therapeutic treatments in a serene and tranquil environment.",
      imageUrl:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    },
  ],
}) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Hotel Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

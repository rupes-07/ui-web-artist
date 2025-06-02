
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Shield, Calendar, Star, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Online Booking",
      description: "Beautiful landscapes and rich cultures committed to provide the high-quality services and customer satisfaction."
    },
    {
      icon: Award,
      title: "99.99% Success Rate",
      description: "At Summit Excursions, our genuine motto is to offer our clients with the best exceptional travel experiences."
    },
    {
      icon: Star,
      title: "Decade of Experience",
      description: "Beautiful landscapes and rich cultures committed to provide the high-quality services and customer satisfaction."
    },
    {
      icon: Users,
      title: "Owner Operated",
      description: "At Summit Excursions, our genuine motto is to offer our clients with the best exceptional travel experiences."
    },
    {
      icon: Shield,
      title: "Safe & Secure Trips",
      description: "Beautiful landscapes and rich cultures committed to provide the high-quality services and customer satisfaction."
    },
    {
      icon: CheckCircle,
      title: "Local Expertise",
      description: "Beautiful landscapes and rich cultures committed to provide the high-quality services and customer satisfaction."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Summit Excursions</h2>
          <p className="text-xl text-gray-600 mb-6">Reasons to Choose Summit Excursions</p>
          <p className="text-gray-600 max-w-4xl mx-auto">
            At Summit Excursions, our genuine motto is to offer our clients with the best exceptional travel experiences that showcase both the breathtakingly beautiful landscapes and rich cultures from nook and corner committed to provide the high-quality services and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button>Read More</Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

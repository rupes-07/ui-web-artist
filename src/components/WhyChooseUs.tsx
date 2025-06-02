
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Shield, Calendar, Star, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Online Booking",
      description: "Beautiful landscapes and rich cultures committed to provide the high-quality services and customer satisfaction.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "99.99% Success Rate",
      description: "At Summit Excursions, our genuine motto is to offer our clients with the best exceptional travel experiences.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Star,
      title: "Decade of Experience",
      description: "Beautiful landscapes and rich cultures committed to provide the high-quality services and customer satisfaction.",
      color: "from-blue-600 to-green-500"
    },
    {
      icon: Users,
      title: "Owner Operated",
      description: "At Summit Excursions, our genuine motto is to offer our clients with the best exceptional travel experiences.",
      color: "from-green-600 to-blue-500"
    },
    {
      icon: Shield,
      title: "Safe & Secure Trips",
      description: "Beautiful landscapes and rich cultures committed to provide the high-quality services and customer satisfaction.",
      color: "from-blue-500 to-green-600"
    },
    {
      icon: CheckCircle,
      title: "Local Expertise",
      description: "Beautiful landscapes and rich cultures committed to provide the high-quality services and customer satisfaction.",
      color: "from-green-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Why Summit Excursions
          </h2>
          <p className="text-2xl text-gray-600 mb-8 font-medium">Reasons to Choose Summit Excursions</p>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            At Summit Excursions, our genuine motto is to offer our clients with the best exceptional travel experiences that showcase both the breathtakingly beautiful landscapes and rich cultures from nook and corner committed to provide the high-quality services and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-green-200 group">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${feature.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-3 shadow-lg">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

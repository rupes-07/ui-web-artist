
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, Star, Award } from "lucide-react";

const LuxuryTours = () => {
  const tours = [
    {
      title: "Everest Base Camp Trek with Helicopter Return",
      duration: "14 Days",
      price: "US$ 1980",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Luxury Island Peak Climbing with Heli Return",
      duration: "14 Days", 
      price: "US$ 1400",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Kathmandu Pokhara and Chitwan Tours",
      duration: "14 Days",
      price: "US$ 1400", 
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Luxury Island Peak Climbing with Heli Return",
      duration: "14 Days",
      price: "US$ 1400",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Luxury Tours
          </h2>
          <p className="text-2xl text-gray-600 mb-8 font-medium">Explore Our Luxury Tour and Treks</p>
          <Button variant="outline" className="border-2 border-green-300 text-green-600 hover:bg-green-50 px-8 py-3">
            View All
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {tours.map((tour, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-blue-200 group">
              <div className="relative h-56">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                  {tour.price}
                </div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Award className="h-3 w-3" />
                  Luxury
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold mb-4 text-sm leading-tight text-gray-800">{tour.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                  <div className="flex items-center gap-2 bg-blue-50 px-2 py-1 rounded-full">
                    <Clock className="h-3 w-3 text-blue-600" />
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                </div>
                <Button size="sm" className="w-full text-xs bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg">
                  Detail
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl">
          <p className="text-gray-600 max-w-4xl mx-auto mb-6 text-lg leading-relaxed">
            At Summit Excursions, our genuine motto is to offer our clients with the best exceptional travel experiences that showcase both the breathtakingly beautiful landscapes and rich cultures from nook and corner committed to provide the high-quality services and customer satisfaction.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-3 shadow-lg">
            Explore All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryTours;

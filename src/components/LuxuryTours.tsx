
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign } from "lucide-react";

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
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Luxury Island Peak Climbing with Heli Return",
      duration: "14 Days",
      price: "US$ 1400",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Luxury Tours</h2>
          <p className="text-xl text-gray-600 mb-6">Explore Our Luxury Tour and Treks</p>
          <Button variant="outline">View All</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {tours.map((tour, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-sm font-semibold">
                  {tour.price}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-sm leading-tight">{tour.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {tour.duration}
                  </div>
                </div>
                <Button size="sm" className="w-full text-xs">Detail</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 max-w-4xl mx-auto mb-6">
            At Summit Excursions, our genuine motto is to offer our clients with the best exceptional travel experiences that showcase both the breathtakingly beautiful landscapes and rich cultures from nook and corner committed to provide the high-quality services and customer satisfaction.
          </p>
          <Button>Explore All</Button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryTours;

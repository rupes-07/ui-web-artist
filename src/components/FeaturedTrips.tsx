
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users } from "lucide-react";

const FeaturedTrips = () => {
  const trips = [
    {
      title: "Island Peak Climbing with EBC",
      price: "US$ 1980",
      duration: "14 Days",
      reviews: "25 Reviews",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Manaslu Tsum Valley Trekking",
      price: "US$ 1980",
      duration: "14 Days", 
      reviews: "25 Reviews",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Everest Expedition",
      price: "US$ 1980",
      duration: "14 Days",
      reviews: "25 Reviews",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    { name: "Trekking", count: "05" },
    { name: "Climbing", count: "08" },
    { name: "Expedition", count: "25" },
    { name: "Sightseeing", count: "52" },
    { name: "Adventure Sports", count: "08" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-4">
            At Summit Excursions, our genuine motto is to offer our clients with the best exceptional travel experiences that showcase both the breathtakingly beautiful landscapes and rich cultures from nook and corner of Nepal. The handpicked local guides are the backbone of this company helping to sustain the local economy of the community. We are dedicated and committed to provide the high-quality services and customer satisfaction.
          </p>
          <Button variant="outline">Show More</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-blue-600 mb-2">{category.count}</div>
                <div className="text-gray-700">{category.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-sm text-gray-600">Featured & Recommended by</div>
            <div className="font-semibold">TripAdvisor</div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">15+ Reviews</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2">Recommended Excursions in Nepal</h2>
          <p className="text-gray-600">
            At Summit Excursions, our genuine motto is to offer exceptional travel experiences that showcase landscapes and rich cultures from nook and corner of Nepal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {trips.map((trip, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-sm font-semibold">
                  {trip.price}
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-4">{trip.title}</CardTitle>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {trip.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {trip.reviews}
                  </div>
                </div>
                <Button className="w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="mr-4">Load More</Button>
          <Button>View All</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;

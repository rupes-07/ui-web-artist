
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, TrendingUp } from "lucide-react";

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
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    { name: "Trekking", count: "05", color: "from-blue-500 to-blue-600" },
    { name: "Climbing", count: "08", color: "from-green-500 to-green-600" },
    { name: "Expedition", count: "25", color: "from-blue-600 to-green-500" },
    { name: "Sightseeing", count: "52", color: "from-green-600 to-blue-500" },
    { name: "Adventure Sports", count: "08", color: "from-blue-500 to-green-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-6 max-w-4xl mx-auto text-lg leading-relaxed">
            At Summit Excursions, our genuine motto is to offer our clients with the best exceptional travel experiences that showcase both the breathtakingly beautiful landscapes and rich cultures from nook and corner of Nepal. The handpicked local guides are the backbone of this company helping to sustain the local economy of the community. We are dedicated and committed to provide the high-quality services and customer satisfaction.
          </p>
          <Button variant="outline" className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3">Show More</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
          {categories.map((category, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-200">
              <CardContent className="p-0">
                <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.count}
                </div>
                <div className="text-gray-700 font-medium">{category.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-sm text-gray-600">Featured & Recommended by</div>
            <div className="font-semibold text-blue-600">TripAdvisor</div>
            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">15+ Reviews</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Recommended Excursions in Nepal
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At Summit Excursions, our genuine motto is to offer exceptional travel experiences that showcase landscapes and rich cultures from nook and corner of Nepal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {trips.map((trip, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-green-200">
              <div className="relative h-64">
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                  {trip.price}
                </div>
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  Featured
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-4 text-xl leading-tight">{trip.title}</CardTitle>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">{trip.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                    <Users className="h-4 w-4 text-green-600" />
                    <span className="font-medium">{trip.reviews}</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="mr-4 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 px-6">Load More</Button>
          <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8">View All</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, DollarSign } from "lucide-react";

const FixedDepartures = () => {
  const departures = [
    {
      title: "Annapurna Base Camp Trek",
      departure: "17 March 2024",
      duration: "17 Days",
      price: "USD 1980",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Luxury Everest Base Camp Trekking",
      departure: "17 August 2024", 
      duration: "17 Days",
      price: "USD 1850",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Manaslu Circuit trek",
      departure: "17 December 2024",
      duration: "17 Days", 
      price: "USD 3850",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Join Our Fixed Departure Trips
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            The handpicked local guides are the backbone of this company helping to sustain the local economy of the community. We are dedicated and committed to provide the high-quality services and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {departures.map((trip, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-blue-200 overflow-hidden group">
              <div className="relative h-48">
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">{trip.title}</h4>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-gray-800">{trip.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600 bg-blue-50 p-3 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Departure: {trip.departure}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 bg-green-50 p-3 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Duration: {trip.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 bg-blue-50 p-3 rounded-lg">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Trip Price: {trip.price}</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg">
                  Join Group
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3">
            Explore all Departures
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FixedDepartures;

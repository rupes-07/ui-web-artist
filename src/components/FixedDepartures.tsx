
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, DollarSign } from "lucide-react";

const FixedDepartures = () => {
  const departures = [
    {
      title: "Annapurna Base Camp Trek",
      departure: "17 March 2024",
      duration: "17 Days",
      price: "USD 1980"
    },
    {
      title: "Luxury Everest Base Camp Trekking",
      departure: "17 August 2024", 
      duration: "17 Days",
      price: "USD 1850"
    },
    {
      title: "Manaslu Circuit trek",
      departure: "17 December 2024",
      duration: "17 Days", 
      price: "USD 3850"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Fixed Departure Trips</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The handpicked local guides are the backbone of this company helping to sustain the local economy of the community. We are dedicated and committed to provide the high-quality services and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {departures.map((trip, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{trip.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Departure: {trip.departure}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Duration: {trip.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm">Trip Price: {trip.price}</span>
                </div>
                <Button className="w-full">Join Group</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline">Explore all Departures</Button>
        </div>
      </div>
    </section>
  );
};

export default FixedDepartures;

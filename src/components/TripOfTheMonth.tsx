
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, TrendingUp } from "lucide-react";

const TripOfTheMonth = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Everest Base Camp Trek"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                Trip of the month
              </div>
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <div className="mb-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-2xl font-bold text-blue-600">USD 1890</span>
                  <span className="text-gray-600">14 Days</span>
                  <span className="text-gray-600">Moderate Difficulty</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Luxury Everest Base Camp Trek</h3>
              <p className="text-gray-600 mb-6">
                At Summit Excursions, our genuine motto is to offer our clients with the best exceptional travel experiences that showcase both the breathtakingly beautiful landscapes and rich cultures from nook and corner committed to provide the high-quality services and customer satisfaction.
              </p>
              <Button className="w-fit">Read More</Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TripOfTheMonth;

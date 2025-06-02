
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, TrendingUp, Star, Award } from "lucide-react";

const TripOfTheMonth = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 relative">
        <Card className="overflow-hidden shadow-2xl border-2 border-green-200">
          <div className="grid md:grid-cols-2">
            <div className="relative h-80 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Everest Base Camp Trek"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-green-600/30" />
              <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                <Award className="h-4 w-4" />
                Trip of the month
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <CardContent className="p-10 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50">
              <div className="mb-6">
                <div className="flex items-center gap-6 mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    USD 1890
                  </span>
                  <span className="text-gray-600 bg-blue-50 px-3 py-1 rounded-full font-medium">14 Days</span>
                  <span className="text-gray-600 bg-green-50 px-3 py-1 rounded-full font-medium">Moderate Difficulty</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800 leading-tight">
                Luxury Everest Base Camp Trek
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                At Summit Excursions, our genuine motto is to offer our clients with the best exceptional travel experiences that showcase both the breathtakingly beautiful landscapes and rich cultures from nook and corner committed to provide the high-quality services and customer satisfaction.
              </p>
              <Button className="w-fit bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-3 text-lg shadow-lg">
                Read More
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TripOfTheMonth;

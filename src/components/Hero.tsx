
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-black/40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative container mx-auto px-4 py-24">
        <div className="text-center mb-8">
          <p className="text-lg mb-2 text-green-200">Nepal's tour and trekking advance booking is open for 2025 and 2026</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Elevate Your Adventure with<br />
            <span className="text-green-300 bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent">Summit Excursions</span>
          </h1>
          <p className="text-xl mb-8 text-blue-100">Where every summit is within reach</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-green-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Find your next trip</h3>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input 
                  type="text" 
                  placeholder="Search destinations, activities..." 
                  className="h-12 text-lg border-2 border-blue-200 focus:border-green-400 focus:ring-green-300"
                />
              </div>
              <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-white border-2 border-green-300 hover:bg-green-300 hover:text-blue-900 transition-all duration-300 px-8 py-3">
            Explore Trips
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

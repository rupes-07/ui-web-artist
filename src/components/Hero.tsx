
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div 
        className="absolute inset-0 bg-black/30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative container mx-auto px-4 py-24">
        <div className="text-center mb-8">
          <p className="text-lg mb-2">Nepal's tour and trekking advance booking is open for 2025 and 2026</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Elevate Your Adventure with<br />
            <span className="text-blue-300">Summit Excursions</span>
          </h1>
          <p className="text-xl mb-8">Where every summit is within reach</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Find your next trip</h3>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input 
                  type="text" 
                  placeholder="Search destinations, activities..." 
                  className="h-12 text-lg"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
            Explore Trips
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

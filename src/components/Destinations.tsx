
import { Card, CardContent } from "@/components/ui/card";

const Destinations = () => {
  const destinations = [
    { name: "Nepal", count: "08", image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Tibet", count: "10", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Bhutan", count: "14", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "India", count: "18", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Where you want to go
          </h2>
          <p className="text-2xl text-gray-600 font-medium">Our Top Destinations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 border-2 border-gray-100 hover:border-green-200 group">
              <div className="relative h-64">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">{destination.name}</h3>
                  <p className="text-sm bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-semibold text-white">
                    {destination.count} Tours Available
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {destination.count}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;

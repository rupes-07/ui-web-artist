
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ronald Richards",
      role: "Regular Customer",
      content: "Fusce maximus porttitor dui quis gravida. Praesent non nisi quis neque neque condimentum fermentum. Nullacondimentum fermentum. Nulla non dolor libero. Proin mollis, ipsum vel ultrices dictum,",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Wade Warren", 
      role: "Founder CEO",
      content: "Fusce maximus porttitor dui quis gravida. Praesent non nisi quis neque condimentum fermentum. Nulla non dolor libero. Proin mneque condimentum fermentum. Nullaollis, ipsum vel ultrices dictum,",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Dianne Russell",
      role: "Founder CEO", 
      content: "Fusce maximus porttitor dui quis gravida. Praesent non nisi quis neque condimentum fermentum. Nulla non dolor libero. Proineque condimentum fermentum. Nullan mollis, ipsum vel ultrices dictum,",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="font-semibold">TripAdvisor</div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">15+ Reviews</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <p className="text-xl text-gray-600">What our travelers say about us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

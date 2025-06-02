
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

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
    <section className="py-20 bg-gradient-to-br from-blue-900 via-green-900 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="font-semibold text-2xl text-green-300">TripAdvisor</div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">15+ Reviews</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-xl text-blue-100 font-medium">What our travelers say about us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-green-300 text-white">
              <CardContent className="p-0">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-green-300 mb-4" />
                <p className="text-blue-100 mb-8 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-green-300"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-500 to-green-500 w-5 h-5 rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-white fill-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-green-300">{testimonial.name}</div>
                    <div className="text-sm text-blue-200">{testimonial.role}</div>
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

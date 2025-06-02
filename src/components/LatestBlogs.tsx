
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

const LatestBlogs = () => {
  const blogs = [
    {
      title: "Tibet Tour Trek is the sister concern of Alpine Eco Trek and fully registered",
      date: "17 December 2025",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Temples in Bhutan: Sacred Sanctuaries of the Himalayas",
      date: "17 December 2025", 
      author: "Admin",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Everest Base Camp Trek with Helicopter Return",
      date: "17 December 2025",
      author: "Admin", 
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Blogs</h2>
          <p className="text-xl text-gray-600">Our Blog Posts</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {blogs.map((blog, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    By {blog.author}
                  </div>
                </div>
                <h3 className="font-semibold mb-4 leading-tight">{blog.title}</h3>
                <Button variant="outline" size="sm">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button>Explore All</Button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;

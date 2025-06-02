
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const LatestBlogs = () => {
  const blogs = [
    {
      title: "Tibet Tour Trek is the sister concern of Alpine Eco Trek and fully registered",
      date: "17 December 2025",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Temples in Bhutan: Sacred Sanctuaries of the Himalayas",
      date: "17 December 2025", 
      author: "Admin",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Everest Base Camp Trek with Helicopter Return",
      date: "17 December 2025",
      author: "Admin", 
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Latest Blogs
          </h2>
          <p className="text-2xl text-gray-600 font-medium">Our Blog Posts</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-green-200 group">
              <div className="relative h-56">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  New
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                    <User className="h-4 w-4 text-green-600" />
                    By {blog.author}
                  </div>
                </div>
                <h3 className="font-semibold mb-6 leading-tight text-gray-800 text-lg">{blog.title}</h3>
                <Button variant="outline" size="sm" className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 group">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-3 shadow-lg">
            Explore All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;

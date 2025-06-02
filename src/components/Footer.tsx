
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, Mountain, MapPin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-400 to-green-400 p-2 rounded-lg">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <div className="text-xl font-bold">Summit Excursions</div>
            </div>
            <h3 className="text-xl font-bold mb-6 text-green-300">Our Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>About us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>Our team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>Why us?</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>Legal documents</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>Partner with us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-300">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-400 rounded-full"></span>Terms and conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-400 rounded-full"></span>Payment options</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-400 rounded-full"></span>Privacy policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-400 rounded-full"></span>Booking policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-400 rounded-full"></span>Refund policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-green-300">Travel Information</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>Trip difficulty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>Packing list</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>Altitude sickness</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>Equipment list</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>Visa Information</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-300">Talk To Our Experts</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="font-medium">+977 9851001237</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="font-medium">info@summitexcursions.com</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="font-medium">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Subscribe Newsletter
              </h3>
              <div className="flex gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-300 focus:border-green-400 backdrop-blur-sm"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 shadow-lg">
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-2 font-medium">Affiliated With</p>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 px-3 py-1 rounded text-sm backdrop-blur-sm">TripAdvisor</div>
                <div className="bg-white/10 px-3 py-1 rounded text-sm backdrop-blur-sm">Tourism Board</div>
              </div>
              <p className="text-gray-300 mt-4">We Accept</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="bg-white/10 px-2 py-1 rounded text-xs backdrop-blur-sm">Visa</div>
                <div className="bg-white/10 px-2 py-1 rounded text-xs backdrop-blur-sm">PayPal</div>
                <div className="bg-white/10 px-2 py-1 rounded text-xs backdrop-blur-sm">MasterCard</div>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-600">
            <p className="text-gray-400">
              Copyright © 2024 Summit Excursions Pv. Ltd. | Website Developed by: 
              <span className="text-green-400 font-medium"> AVIVA</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

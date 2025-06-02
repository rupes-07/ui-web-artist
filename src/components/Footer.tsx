
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-6">Our Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Why us?</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Legal documents</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partner with us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms and conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Payment options</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Booking policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refund policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Travel Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Trip difficulty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Packing list</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Altitude sickness</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Equipment list</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Visa Information</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Talk To Our Experts</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+977 9851001237</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@summitexcursions.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Subscribe Newsletter</h3>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-600 text-white"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-2">Affiliated With</p>
              <p className="text-gray-300">We Accept</p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              Copyright © 2024 Summit Excursions Pv. Ltd. | Website Developed by: AVIVA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

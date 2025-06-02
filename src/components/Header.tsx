
import { Button } from "@/components/ui/button";
import { Search, Menu, Mountain } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b-2 border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Summit Excursions
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Trekking
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Climbing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Tours
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Destination
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="hidden md:flex border-2 border-blue-200 hover:border-green-400 hover:bg-green-50">
              <Search className="h-4 w-4 text-blue-600" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-2 border-blue-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4 text-blue-600" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg mb-2">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Trekking</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Climbing</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tours</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Destination</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

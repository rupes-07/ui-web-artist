
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">Summit Excursions</div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Trekking</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Climbing</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Tours</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Destination</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Trekking</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Climbing</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Tours</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Destination</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

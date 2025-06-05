
import { Film, Menu, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-matcha-cream/95 backdrop-blur-sm border-b border-charcoal-200">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Film className="w-8 h-8 text-charcoal-600 hand-drawn" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-xl font-noto font-medium text-charcoal-800">matcha filter</h1>
              <p className="text-xs text-charcoal-500 -mt-1">matcha everything</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-charcoal-600 hover:text-charcoal-800 transition-colors font-zen text-sm">
              Features
            </a>
            <a href="#reviews" className="text-charcoal-600 hover:text-charcoal-800 transition-colors font-zen text-sm">
              Reviews
            </a>
            <a href="#about" className="text-charcoal-600 hover:text-charcoal-800 transition-colors font-zen text-sm">
              About
            </a>
          </nav>

          {/* Download button */}
          <div className="flex items-center space-x-3">
            <Button 
              size="sm" 
              className="bg-charcoal-700 hover:bg-charcoal-800 text-matcha-cream font-zen text-sm px-4 hidden sm:flex"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="ghost" size="sm" className="p-2 md:hidden hover:bg-charcoal-100">
              <Menu className="w-4 h-4 text-charcoal-600" strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

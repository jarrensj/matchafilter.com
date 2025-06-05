import { Heart, Film } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-charcoal-200 bg-matcha-light/30">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Film className="w-6 h-6 text-charcoal-600" strokeWidth={1.5} />
              <span className="font-noto font-medium text-charcoal-800">matcha filter</span>
            </div>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              apply a matcha filter to your photo
            </p>
          </div>
          
          {/* Links */}
          <div className="md:col-span-1">
            <h4 className="font-noto font-medium text-charcoal-800 mb-4">Matcha Filter</h4>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-sm text-charcoal-600 hover:text-charcoal-800 transition-colors relative group cursor-default"
                onClick={(e) => e.preventDefault()}
              >
                Photo Gallery
                <span className="absolute left-0 -top-5 bg-charcoal-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                  Coming soon
                </span>
              </a>
              <a 
                href="#" 
                className="block text-sm text-charcoal-600 hover:text-charcoal-800 transition-colors relative group cursor-default"
                onClick={(e) => e.preventDefault()}
              >
                Development Blog
                <span className="absolute left-0 -top-5 bg-charcoal-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                  Coming soon
                </span>
              </a>
              <a href="mailto:contact@mathfolder.com" className="block text-sm text-charcoal-600 hover:text-charcoal-800 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h4 className="font-noto font-medium text-charcoal-800 mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="/terms" className="block text-sm text-charcoal-600 hover:text-charcoal-800 transition-colors">
                Terms of Service
              </a>
              <a href="/privacy" className="block text-sm text-charcoal-600 hover:text-charcoal-800 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
          
          {/* Quote */}
          <div className="md:col-span-1">
            <blockquote className="text-sm text-charcoal-600 italic leading-relaxed">
              "I posted a photo edited with this app. She commented on my story, I love her."
              <footer className="text-xs text-charcoal-500 mt-2 not-italic">— the app developer</footer>
            </blockquote>
          </div>
        </div>
        
        <div className="border-t border-charcoal-200 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-charcoal-500 mb-2 sm:mb-0">
            matcha filter. code by kwaji.
          </p>
          <div className="flex items-center space-x-1 text-xs text-charcoal-500">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-sage-400" fill="currentColor" strokeWidth={0} />
            <span>and matcha lattes</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

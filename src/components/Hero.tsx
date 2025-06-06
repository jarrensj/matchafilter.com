import { Sparkles, Mountain, Film, Smartphone, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative icons */}
        <div className="flex justify-center items-center space-x-12 mb-8 opacity-60">
          <Film className="w-6 h-6 text-charcoal-400 hand-drawn" strokeWidth={1} />
          <Camera className="w-6 h-6 text-charcoal-400 hand-drawn" strokeWidth={1} />
          <Sparkles className="w-8 h-8 text-sage-400 hand-drawn" strokeWidth={1} />
        </div>

        {/* Main content */}
        <h1 className="text-4xl md:text-6xl font-noto font-light text-charcoal-800 mb-6 leading-tight">
          Transform your photos with<br />
          <span className="font-medium text-sage-500">matcha filter</span>
        </h1>
        
        <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Apply beautiful matcha filters that bring warmth, calm, and an aesthetic to every moment especially your coffee shop fit photos.
        </p>

        {/* Enhanced iPhone mockup */}
        <div className="relative mb-12">
          <div className="w-80 h-[600px] mx-auto relative">
            {/* iPhone outer frame */}
            <div className="w-full h-full bg-charcoal-900 rounded-[3rem] p-2 shadow-2xl relative">
              {/* iPhone screen */}
              <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                
                {/* Screen content */}
                <div className="w-full h-full bg-matcha-cream relative">
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 flex justify-between items-center px-8 pt-2">
                    <div className="text-xs font-medium text-charcoal-800">11:11</div>
                  </div>
                  
                  {/* App interface */}
                  <div className="absolute inset-6 top-16 bg-white rounded-3xl shadow-lg overflow-hidden">
                    {/* Sample photo with matcha filter */}
                    <div className="w-full h-80 bg-gradient-to-br from-sage-100 via-matcha-100 to-sage-200 relative group">
                      <img 
                        src="image3.png"
                        alt="Photo with matcha filter"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-0 transition-opacity duration-300"
                      />
                      <img 
                        src="image.png"
                        alt="Original photo"
                        className="w-full h-full object-cover opacity-0 group-hover:opacity-90 transition-opacity duration-300 absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-sage-100/20 to-sage-300/30 mix-blend-overlay"></div>
                    </div>
                    
                    {/* Filter controls */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-charcoal-800">Matcha Filter</div>
                        <div className="relative group">
                          <Camera className="w-5 h-5 text-sage-400 hand-drawn" strokeWidth={1} />
                          <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-charcoal-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                            Coming soon
                          </span>
                        </div>
                      </div>
                      
                      {/* Filter options */}
                      <div className="flex space-x-3 mt-4">
                        <div className="w-12 h-12 bg-sage-200 rounded-xl border-2 border-sage-400"></div>
                        <div className="relative group">
                          <div className="w-12 h-12 bg-matcha-100 rounded-xl border border-charcoal-200"></div>
                          <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-charcoal-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                            Try in the app
                          </span>
                        </div>
                        <div className="relative group">
                          <div className="w-12 h-12 bg-sage-100 rounded-xl border border-charcoal-200"></div>
                          <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-charcoal-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                            Try in the app
                          </span>
                        </div>
                      </div>
                      </div>
                  </div>
                  
                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-charcoal-800 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
            
            {/* Reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[3rem] pointer-events-none"></div>
          </div>
        </div>

        {/* Download buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-charcoal-700 hover:bg-charcoal-800 text-matcha-cream font-zen text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative group cursor-default"
              onClick={(e) => e.preventDefault()}
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Download for iPhone
              <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-charcoal-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                Coming soon
              </span>
            </Button>
            <Button 
              size="lg" 
              className="bg-charcoal-700 hover:bg-charcoal-800 text-matcha-cream font-zen text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative group cursor-default"
              onClick={(e) => e.preventDefault()}
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Download for Android
              <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-charcoal-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                Coming soon
              </span>
            </Button>
          </div>
          <p className="text-sm text-charcoal-500">
            Free on App Store & Google Play • iOS 18.0+ & Android 15.0+
          </p>
        </div>

        {/* Subtle decorative line */}
        <div className="w-16 h-px bg-charcoal-300 mx-auto opacity-60 mt-12"></div>
      </div>
    </section>
  );
};

export default Hero;

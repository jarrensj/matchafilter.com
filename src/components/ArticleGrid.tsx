import { Mountain, Film, Coffee } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Matcha Filters",
    description: "Filters inspired [and fueled] by matcha lattes. By a matcha lover, for matcha lovers.",
    image: "kwaji_matcha.png",
    unedited: "kwaji.jpg"
  },
  {
    icon: Mountain,
    title: "Clean and Focused",
    description: "Clean, intuitive interface focused on applying the matcha filter. No clutter, no forced watermark, just matcha image processing done locally on your device.",
    image: "bash_matcha.jpg",
    unedited: "bash.jpg"
  },
  {
    icon: Film,
    title: "Matcha Everything",
    description: "Transform any moment, photo of you, or your food photo with a matcha filter. Perfect for matcha lovers.",
    image: "kilo_matcha.png",
    unedited: "kilo.png"
  }
];

const ArticleGrid = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-noto font-light text-charcoal-800 mb-4">
            Why our friends love our app
          </h2>
          <p className="text-charcoal-600 max-w-2xl mx-auto">
            Designed to just transform your photos into matcha photos. By a matcha lover, for matcha lovers. We&apos;re working on adding more filters and features!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white/40 rounded-2xl p-6 h-full hover:bg-white/60 transition-all duration-300 border border-charcoal-100">
                {/* Feature image */}
                <div className="aspect-[4/3] bg-matcha-100 rounded-xl mb-6 overflow-hidden relative">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-0 transition-opacity duration-300 absolute inset-0"
                  />
                  <img 
                    src={feature.unedited}
                    alt={`Original ${feature.title}`}
                    className="w-full h-full object-cover opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                
                {/* Icon */}
                <feature.icon className="w-8 h-8 text-charcoal-600 mb-4 hand-drawn" strokeWidth={1} />
                
                {/* Content */}
                <h3 className="text-xl font-noto font-medium text-charcoal-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleGrid;

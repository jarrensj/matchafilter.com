
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Star } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 px-6 bg-white/20">
      <div className="max-w-4xl mx-auto">
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-noto font-light text-charcoal-800 mb-2">
            Loved by matcha lovers
          </h3>
          <p className="text-charcoal-600 max-w-2xl mx-auto mb-8">
             Leave a review! Tag us on instagram @matchaphotos or tag #matchaphotos
          </p>          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/60 rounded-2xl p-6">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-sage-400 fill-current" />
                ))}
              </div>
              <p className="text-charcoal-600 italic mb-3">
                "An app that understands my aesthetic. The matcha filters are perfect for me."
              </p>
              <p className="text-sm text-charcoal-500">— Jarren (I made the app)</p>
            </div>
            
            <div className="bg-white/60 rounded-2xl p-6">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-sage-400 fill-current" />
                ))}
              </div>
              <p className="text-charcoal-600 italic mb-3">
                "I posted a matcha photo and she commented on my story, we are so back. I love her so much."
              </p>
              <p className="text-sm text-charcoal-500">— kwaji (Jarren's nickname)</p>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <Mail className="w-8 h-8 text-charcoal-500 mx-auto mb-4 hand-drawn" strokeWidth={1} />
            <h3 className="text-2xl font-noto font-light text-charcoal-800 mb-3">
              Join the mailing list
            </h3>
            <p className="text-charcoal-600 leading-relaxed">
              Be the first to know when I add new filters or what I'm cooking up next.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="type your email here"
              className="flex-1 bg-white/60 border-charcoal-200 text-charcoal-700 placeholder:text-charcoal-400 focus:border-charcoal-400 rounded-md"
            />
            <Button className="bg-charcoal-700 hover:bg-charcoal-800 text-matcha-cream font-zen text-sm px-6">
              Sign up
            </Button>
          </div>
          
          <p className="text-xs text-charcoal-500 mt-3">
            I'm coding but it's just me • Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

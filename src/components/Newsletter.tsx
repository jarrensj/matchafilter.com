import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Star } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('mailinglist')
        .insert([{ email }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      toast.success("Thanks for subscribing!");
      setEmail("");
    } catch (error: any) {
      console.error('Error details:', error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="reviews" className="py-16 px-6 bg-white/20 scroll-mt-32">
      <div className="max-w-4xl mx-auto">
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-noto font-light text-charcoal-800 mb-2">
            Loved by matcha lovers
          </h3>
          <p className="text-charcoal-600 max-w-2xl mx-auto mb-8">
             Leave a review! Tag us on instagram <a className="text-sage-400 hover:text-charcoal-800 transition-colors" href="https://www.instagram.com/matchaphotos">@matchaphotos</a> or tag #matchaphotos
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
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="type your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/60 border-charcoal-200 text-charcoal-700 placeholder:text-charcoal-400 focus:border-charcoal-400 rounded-md"
            />
            <Button 
              type="submit"
              disabled={isLoading}
              className="bg-charcoal-700 hover:bg-charcoal-800 text-matcha-cream font-zen text-sm px-6"
            >
              {isLoading ? "Signing up..." : "Sign up"}
            </Button>
          </form>
          
          <p className="text-xs text-charcoal-500 mt-3">
            I'm coding but it's just me • Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

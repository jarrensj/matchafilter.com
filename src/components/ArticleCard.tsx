
import { Calendar, Clock } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  category?: string;
}

const ArticleCard = ({ title, excerpt, date, readTime, image, category }: ArticleCardProps) => {
  return (
    <article className="group cursor-pointer animate-fade-in">
      <div className="bg-white/40 border border-charcoal-200 rounded-lg overflow-hidden hover:border-charcoal-300 transition-all duration-300 hover:shadow-sm">
        {/* Image placeholder with hand-drawn border effect */}
        {image && (
          <div className="relative h-48 bg-matcha-100 border-b border-charcoal-200">
            <div className="absolute inset-0 bg-gradient-to-br from-sage-100 to-sage-200 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-charcoal-300 rounded-full opacity-30 hand-drawn"></div>
            </div>
          </div>
        )}
        
        <div className="p-6">
          {/* Category */}
          {category && (
            <span className="inline-block text-xs font-zen text-charcoal-500 bg-charcoal-100 px-2 py-1 rounded-full mb-3">
              {category}
            </span>
          )}
          
          {/* Title */}
          <h3 className="text-xl font-noto font-medium text-charcoal-800 mb-3 group-hover:text-charcoal-900 transition-colors leading-tight">
            {title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-charcoal-600 leading-relaxed mb-4 line-clamp-3">
            {excerpt}
          </p>
          
          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-charcoal-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" strokeWidth={1.5} />
                <span>{date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" strokeWidth={1.5} />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

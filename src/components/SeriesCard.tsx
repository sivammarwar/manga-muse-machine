import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Article } from "@/lib/types";
import { getCategoryInfo } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

interface SeriesCardProps {
  article: Article;
  index: number;
}

export function SeriesCard({ article, index }: SeriesCardProps) {
  const cat = getCategoryInfo(article.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Link
        to={`/series/${article.id}`}
        className="group block overflow-hidden rounded-lg bg-gradient-card border border-border hover:border-primary/40 transition-all duration-300 shadow-card hover:shadow-glow"
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={`https://picsum.photos/seed/${article.id}cover/400/540`}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <Badge variant="secondary" className="mb-2 bg-primary/90 text-primary-foreground border-0 text-xs">
              {cat?.icon} {cat?.label}
            </Badge>
            <h3 className="font-display text-xl tracking-wider text-foreground leading-tight">
              {article.title}
            </h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm text-muted-foreground line-clamp-2">{article.logline}</p>
          <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
            <BookOpen className="w-3.5 h-3.5" />
            <span>21 Chapters</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

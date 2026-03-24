import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CategoryInfo } from "@/lib/types";

interface CategoryCardProps {
  category: CategoryInfo;
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link
        to={`/category/${category.id}`}
        className="group block relative overflow-hidden rounded-lg bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
      >
        <div className="p-5">
          <div className="text-3xl mb-3">{category.icon}</div>
          <h3 className="font-display text-xl tracking-wider text-foreground group-hover:text-primary transition-colors">
            {category.label}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {category.description}
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: category.color }}
        />
      </Link>
    </motion.div>
  );
}

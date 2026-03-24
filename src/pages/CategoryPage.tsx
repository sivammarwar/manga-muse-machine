import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SeriesCard } from "@/components/SeriesCard";
import { getCategoryInfo, getArticlesByCategory } from "@/lib/mock-data";
import { MangaCategory } from "@/lib/types";
import { ArrowLeft } from "lucide-react";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryInfo(categoryId as MangaCategory);
  const articles = getArticlesByCategory(categoryId as MangaCategory);

  if (!category) {
    return (
      <div className="p-8 text-center">
        <p className="text-muted-foreground">Category not found.</p>
        <Link to="/" className="text-primary underline mt-2 inline-block">Go home</Link>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{category.icon}</span>
          <h1 className="font-display text-4xl md:text-5xl tracking-wider text-foreground">
            {category.label}
          </h1>
        </div>
        <p className="text-muted-foreground mb-8">{category.description}</p>
      </motion.div>

      {articles.length === 0 ? (
        <p className="text-muted-foreground">No series in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {articles.map((article, i) => (
            <SeriesCard key={article.id} article={article} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getArticleById, getMockChapters, getCategoryInfo } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen } from "lucide-react";

const SeriesPage = () => {
  const { seriesId } = useParams<{ seriesId: string }>();
  const article = getArticleById(seriesId!);
  const chapters = article ? getMockChapters(article.id) : [];
  const category = article ? getCategoryInfo(article.category) : undefined;

  if (!article) {
    return (
      <div className="p-8 text-center">
        <p className="text-muted-foreground">Series not found.</p>
        <Link to="/" className="text-primary underline mt-2 inline-block">Go home</Link>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <Link
        to={`/category/${article.category}`}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to {category?.label}
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        {/* Cover */}
        <div className="relative rounded-lg overflow-hidden aspect-[21/9] mb-6">
          <img
            src={`https://picsum.photos/seed/${article.id}banner/1200/500`}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Badge variant="secondary" className="mb-2 bg-primary/90 text-primary-foreground border-0">
              {category?.icon} {category?.label}
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl tracking-wider text-foreground">
              {article.title}
            </h1>
          </div>
        </div>

        <p className="text-foreground/80 text-lg mb-8">{article.logline}</p>

        {/* Chapters */}
        <h2 className="font-display text-2xl tracking-wider text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          Chapters
        </h2>
        <div className="grid gap-2">
          {chapters.map((ch, i) => (
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.02 }}
            >
              <Link
                to={`/series/${article.id}/chapter/${ch.chapterNumber}`}
                className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-primary/40 hover:bg-muted/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl text-muted-foreground group-hover:text-primary transition-colors w-10 text-center">
                    {String(ch.chapterNumber).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="text-foreground font-medium">Chapter {ch.chapterNumber}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {ch.images.length} illustrations
                    </p>
                  </div>
                </div>
                <ArrowLeft className="w-4 h-4 rotate-180 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SeriesPage;

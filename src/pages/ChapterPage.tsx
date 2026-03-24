import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getArticleById, getMockChapters } from "@/lib/mock-data";
import { ChapterContent } from "@/components/ChapterContent";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChapterPage = () => {
  const { seriesId, chapterNum } = useParams<{ seriesId: string; chapterNum: string }>();
  const article = getArticleById(seriesId!);
  const chapters = article ? getMockChapters(article.id) : [];
  const num = parseInt(chapterNum!, 10);
  const chapter = chapters.find((c) => c.chapterNumber === num);

  if (!article || !chapter) {
    return (
      <div className="p-8 text-center">
        <p className="text-muted-foreground">Chapter not found.</p>
        <Link to="/" className="text-primary underline mt-2 inline-block">Go home</Link>
      </div>
    );
  }

  const hasPrev = num > 1;
  const hasNext = num < 21;

  return (
    <div className="p-6 md:p-8 max-w-3xl mx-auto">
      <Link
        to={`/series/${article.id}`}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> {article.title}
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl md:text-4xl tracking-wider text-foreground mb-1">
          Chapter {String(num).padStart(2, "0")}
        </h1>
        <p className="text-muted-foreground text-sm mb-8">{article.title}</p>

        <ChapterContent chapter={chapter} />

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
          {hasPrev ? (
            <Link to={`/series/${article.id}/chapter/${num - 1}`}>
              <Button variant="outline" className="gap-2">
                <ChevronLeft className="w-4 h-4" /> Previous
              </Button>
            </Link>
          ) : (
            <div />
          )}
          {hasNext ? (
            <Link to={`/series/${article.id}/chapter/${num + 1}`}>
              <Button variant="outline" className="gap-2">
                Next <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ChapterPage;

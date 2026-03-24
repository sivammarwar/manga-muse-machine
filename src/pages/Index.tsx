import { motion } from "framer-motion";
import { CategoryCard } from "@/components/CategoryCard";
import { SeriesCard } from "@/components/SeriesCard";
import { categories, mockArticles } from "@/lib/mock-data";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const featured = mockArticles.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={heroBanner}
          alt="MangaForge AI"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="relative z-10 flex flex-col justify-end h-full p-8 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl tracking-wider text-gradient-hero leading-none"
          >
            MangaForge AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-foreground/70 mt-3 max-w-xl"
          >
            AI-generated manga stories across 10 genres. New series every week,
            21 chapters each — fully autonomous storytelling.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="p-6 md:p-8">
        <h2 className="font-display text-3xl tracking-wider text-foreground mb-6">
          Browse by Genre
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="p-6 md:p-8">
        <h2 className="font-display text-3xl tracking-wider text-foreground mb-6">
          This Week's Series
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {featured.map((article, i) => (
            <SeriesCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;

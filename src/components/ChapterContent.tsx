import { Chapter } from "@/lib/types";
import { motion } from "framer-motion";

interface ChapterContentProps {
  chapter: Chapter;
}

export function ChapterContent({ chapter }: ChapterContentProps) {
  const paragraphs = chapter.textContent.split("\n\n");

  // Insert images at their placement indices
  const elements: React.ReactNode[] = [];
  let imageIdx = 0;

  paragraphs.forEach((para, i) => {
    // Check if an image should be placed before this paragraph
    while (
      imageIdx < chapter.images.length &&
      chapter.images[imageIdx].placementIndex === i
    ) {
      const img = chapter.images[imageIdx];
      elements.push(
        <motion.figure
          key={img.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="my-8"
        >
          <img
            src={img.url}
            alt={img.description}
            className="w-full rounded-lg shadow-card"
            loading="lazy"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 italic text-center">
            {img.description}
          </figcaption>
        </motion.figure>
      );
      imageIdx++;
    }

    const isDialogue = para.startsWith('"') || para.startsWith('"');
    elements.push(
      <motion.p
        key={`p-${i}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.03, duration: 0.4 }}
        className={`text-base leading-relaxed ${isDialogue ? "text-accent font-medium pl-4 border-l-2 border-accent/30" : "text-foreground/90"}`}
      >
        {para}
      </motion.p>
    );
  });

  // Append any remaining images
  while (imageIdx < chapter.images.length) {
    const img = chapter.images[imageIdx];
    elements.push(
      <motion.figure
        key={img.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="my-8"
      >
        <img src={img.url} alt={img.description} className="w-full rounded-lg shadow-card" loading="lazy" />
        <figcaption className="text-xs text-muted-foreground mt-2 italic text-center">{img.description}</figcaption>
      </motion.figure>
    );
    imageIdx++;
  }

  return <div className="space-y-5 max-w-2xl mx-auto">{elements}</div>;
}

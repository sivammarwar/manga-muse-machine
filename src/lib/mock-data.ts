import { Article, Chapter, CategoryInfo, MangaCategory } from "./types";

export const categories: CategoryInfo[] = [
  { id: "romantic", label: "Romantic", icon: "💕", color: "hsl(340, 80%, 60%)", description: "Love stories that tug at your heartstrings" },
  { id: "action", label: "Action", icon: "⚔️", color: "hsl(0, 78%, 55%)", description: "Explosive battles and adrenaline-fueled adventures" },
  { id: "emotional", label: "Emotional", icon: "🌸", color: "hsl(300, 60%, 65%)", description: "Deep narratives that explore the human condition" },
  { id: "sad", label: "Sad", icon: "🌧️", color: "hsl(210, 50%, 55%)", description: "Bittersweet tales of loss and longing" },
  { id: "spicy", label: "Spicy", icon: "🔥", color: "hsl(15, 90%, 55%)", description: "Bold and passionate stories with heat" },
  { id: "horror", label: "Horror", icon: "👻", color: "hsl(270, 40%, 40%)", description: "Dark tales that chill to the bone" },
  { id: "comedy", label: "Comedy", icon: "😂", color: "hsl(50, 90%, 55%)", description: "Hilarious adventures and witty encounters" },
  { id: "fantasy", label: "Fantasy", icon: "🐉", color: "hsl(160, 60%, 45%)", description: "Epic quests in magical worlds" },
  { id: "mystery", label: "Mystery", icon: "🔍", color: "hsl(220, 60%, 50%)", description: "Puzzles, clues, and shocking revelations" },
  { id: "scifi", label: "Sci-Fi", icon: "🚀", color: "hsl(190, 70%, 50%)", description: "Futuristic worlds and cosmic adventures" },
];

export const mockArticles: Article[] = [
  {
    id: "art-1",
    category: "action",
    title: "Crimson Blade Chronicle",
    globalPrompt: "A disgraced samurai seeks redemption...",
    status: "PUBLISHING",
    weekStart: "2026-03-23",
    coverImage: "",
    logline: "A disgraced samurai must reclaim his honor by defeating a demon lord threatening his village.",
  },
  {
    id: "art-2",
    category: "romantic",
    title: "Sakura After Rain",
    globalPrompt: "Two childhood friends reunite...",
    status: "PUBLISHING",
    weekStart: "2026-03-23",
    coverImage: "",
    logline: "Two childhood friends reunite under cherry blossoms, discovering feelings they buried long ago.",
  },
  {
    id: "art-3",
    category: "fantasy",
    title: "Dragon's Covenant",
    globalPrompt: "A young mage bonds with the last dragon...",
    status: "PUBLISHING",
    weekStart: "2026-03-23",
    coverImage: "",
    logline: "A young outcast mage forms a forbidden bond with the last living dragon to save a dying realm.",
  },
  {
    id: "art-4",
    category: "horror",
    title: "The Hollow School",
    globalPrompt: "Students trapped in a school that shifts...",
    status: "PUBLISHING",
    weekStart: "2026-03-23",
    coverImage: "",
    logline: "Five students discover their school transforms at midnight into a nightmarish labyrinth of horrors.",
  },
  {
    id: "art-5",
    category: "mystery",
    title: "Ink & Deception",
    globalPrompt: "A detective investigates murders linked to manga...",
    status: "PUBLISHING",
    weekStart: "2026-03-23",
    coverImage: "",
    logline: "A detective discovers that a mysterious manga serialization predicts real murders before they happen.",
  },
  {
    id: "art-6",
    category: "comedy",
    title: "My Roommate is a Yokai",
    globalPrompt: "A college student's roommate is secretly a fox spirit...",
    status: "PUBLISHING",
    weekStart: "2026-03-23",
    coverImage: "",
    logline: "A struggling college student accidentally becomes roommates with a mischievous 500-year-old fox spirit.",
  },
  {
    id: "art-7",
    category: "sad",
    title: "Letters to Tomorrow",
    globalPrompt: "A girl writes letters to her future self...",
    status: "PUBLISHING",
    weekStart: "2026-03-23",
    coverImage: "",
    logline: "A terminally ill girl writes 21 letters to the future, each one unlocking a memory she wants to preserve.",
  },
  {
    id: "art-8",
    category: "scifi",
    title: "Neon Exodus",
    globalPrompt: "In 2187, humanity lives in orbital stations...",
    status: "PUBLISHING",
    weekStart: "2026-03-23",
    coverImage: "",
    logline: "A rogue AI engineer in a dying space station discovers a signal from Earth — a planet declared uninhabitable.",
  },
  {
    id: "art-9",
    category: "emotional",
    title: "The Weight of Silence",
    globalPrompt: "A deaf musician navigates...",
    status: "PUBLISHING",
    weekStart: "2026-03-23",
    coverImage: "",
    logline: "A deaf musician communicates through compositions only she can feel, touching lives she'll never hear applaud.",
  },
  {
    id: "art-10",
    category: "spicy",
    title: "Midnight Masquerade",
    globalPrompt: "At an exclusive masked ball...",
    status: "PUBLISHING",
    weekStart: "2026-03-23",
    coverImage: "",
    logline: "At an annual masked ball, a fierce rivalry between two noble houses ignites into an unexpected, fiery attraction.",
  },
];

const sampleParagraphs = [
  "The morning sun cast long shadows across the cobblestone streets as Ryuji adjusted the worn handle of his katana. The blade had seen better days — much like its owner. Three years of wandering had taken their toll, but today felt different. Today, the air carried the scent of cherry blossoms mixed with something darker.",
  "\"You shouldn't have come back,\" Mei whispered from the doorway of the old tea house. Her eyes, sharp as ever, scanned the street behind him. \"They're looking for you. The Crimson Guard hasn't forgotten.\"",
  "Ryuji stepped inside without a word. The tea house hadn't changed — same creaking floorboards, same faded scroll paintings on the walls. But Mei had changed. The girl who once laughed at fireflies now carried a tanto tucked beneath her obi.",
  "\"I didn't come for trouble,\" he said, settling into the corner booth. \"I came because of the dreams. The demon from Mount Kurogane — it's awakening. I've seen the signs in every village between here and the capital.\"",
  "Mei poured tea with steady hands, but Ryuji noticed the slight tremble. She knew. Everyone in this village knew. They just chose to pretend the darkness at the mountain's peak was nothing more than storm clouds.",
  "The first attack came at dusk. A creature of shadow and bone erupted from the earth at the village square, its hollow eyes burning with violet flame. Villagers screamed, scattering like leaves in a typhoon.",
  "Ryuji drew his blade. The steel sang — a clear, ringing note that cut through the chaos. He moved on instinct, muscle memory from a thousand battles guiding each strike. But this creature was different. Each wound he inflicted sealed itself within seconds.",
  "\"The heart!\" Mei shouted from behind a collapsed market stall, her tanto gleaming. \"You have to pierce the core — the violet light in its chest!\"",
];

export function getMockChapters(articleId: string): Chapter[] {
  return Array.from({ length: 21 }, (_, i) => ({
    id: `ch-${articleId}-${i + 1}`,
    articleId,
    chapterNumber: i + 1,
    scheduledDate: "2026-03-24",
    textContent: sampleParagraphs.map((p, pi) =>
      i === 0 ? p : p.replace("Ryuji", `Character-${(i % 3) + 1}`).replace("Mei", `Companion-${(i % 2) + 1}`)
    ).join("\n\n"),
    images: [
      {
        id: `img-${articleId}-${i + 1}-1`,
        chapterId: `ch-${articleId}-${i + 1}`,
        prompt: "anime scene",
        seed: 42 + i,
        url: `https://picsum.photos/seed/manga${articleId}${i}a/800/500`,
        description: "Opening scene establishing shot",
        placementIndex: 1,
      },
      {
        id: `img-${articleId}-${i + 1}-2`,
        chapterId: `ch-${articleId}-${i + 1}`,
        prompt: "dramatic moment",
        seed: 84 + i,
        url: `https://picsum.photos/seed/manga${articleId}${i}b/800/500`,
        description: "Key dramatic moment",
        placementIndex: 4,
      },
    ],
  }));
}

export function getArticlesByCategory(category: MangaCategory): Article[] {
  return mockArticles.filter((a) => a.category === category);
}

export function getArticleById(id: string): Article | undefined {
  return mockArticles.find((a) => a.id === id);
}

export function getCategoryInfo(id: MangaCategory): CategoryInfo | undefined {
  return categories.find((c) => c.id === id);
}

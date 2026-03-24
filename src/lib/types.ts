export type MangaCategory =
  | "romantic"
  | "action"
  | "emotional"
  | "sad"
  | "spicy"
  | "horror"
  | "comedy"
  | "fantasy"
  | "mystery"
  | "scifi";

export interface Article {
  id: string;
  category: MangaCategory;
  title: string;
  globalPrompt: string;
  status: "IDEATION" | "GENERATING_ASSETS" | "PUBLISHING" | "COMPLETED";
  weekStart: string;
  instaPromoUrl?: string;
  coverImage: string;
  logline: string;
}

export interface Chapter {
  id: string;
  articleId: string;
  chapterNumber: number;
  textContent: string;
  scheduledDate: string;
  images: ImageAsset[];
}

export interface ImageAsset {
  id: string;
  chapterId: string;
  characterName?: string;
  prompt: string;
  seed: number;
  url: string;
  description: string;
  placementIndex: number;
}

export interface CategoryInfo {
  id: MangaCategory;
  label: string;
  icon: string;
  color: string;
  description: string;
}

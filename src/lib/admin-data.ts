import { mockArticles, categories } from "./mock-data";
import { MangaCategory } from "./types";

export interface PipelineRun {
  id: string;
  weekStart: string;
  phase: "IDEATION" | "ASSET_GEN" | "WRITING" | "VALIDATION" | "PUBLISHING" | "COMPLETED";
  phaseProgress: number; // 0-100
  startedAt: string;
  estimatedEnd: string;
  seriesCount: number;
  imagesGenerated: number;
  chaptersWritten: number;
}

export interface QueueItem {
  id: string;
  articleTitle: string;
  category: MangaCategory;
  chaptersRange: string;
  scheduledDate: string;
  status: "pending" | "publishing" | "published" | "failed";
}

export interface KpiData {
  totalSeries: number;
  totalChapters: number;
  totalImages: number;
  avgConsistencyScore: number;
  publishOnTime: number;
  uniquePremises: number;
  weeklyOutput: { week: string; series: number; chapters: number; images: number }[];
  categoryDistribution: { category: string; count: number }[];
  phaseTimings: { phase: string; hours: number }[];
}

export const mockPipeline: PipelineRun = {
  id: "run-2026-w13",
  weekStart: "2026-03-23",
  phase: "PUBLISHING",
  phaseProgress: 43,
  startedAt: "2026-03-23T06:00:00Z",
  estimatedEnd: "2026-04-03T23:59:00Z",
  seriesCount: 10,
  imagesGenerated: 1048,
  chaptersWritten: 210,
};

export const mockQueue: QueueItem[] = [
  { id: "q-1", articleTitle: "Crimson Blade Chronicle", category: "action", chaptersRange: "1-3", scheduledDate: "2026-03-27", status: "published" },
  { id: "q-2", articleTitle: "Sakura After Rain", category: "romantic", chaptersRange: "1-3", scheduledDate: "2026-03-27", status: "published" },
  { id: "q-3", articleTitle: "Dragon's Covenant", category: "fantasy", chaptersRange: "1-3", scheduledDate: "2026-03-27", status: "published" },
  { id: "q-4", articleTitle: "The Hollow School", category: "horror", chaptersRange: "1-3", scheduledDate: "2026-03-27", status: "published" },
  { id: "q-5", articleTitle: "Crimson Blade Chronicle", category: "action", chaptersRange: "4-6", scheduledDate: "2026-03-28", status: "publishing" },
  { id: "q-6", articleTitle: "Sakura After Rain", category: "romantic", chaptersRange: "4-6", scheduledDate: "2026-03-28", status: "publishing" },
  { id: "q-7", articleTitle: "Dragon's Covenant", category: "fantasy", chaptersRange: "4-6", scheduledDate: "2026-03-28", status: "publishing" },
  { id: "q-8", articleTitle: "Ink & Deception", category: "mystery", chaptersRange: "1-3", scheduledDate: "2026-03-27", status: "failed" },
  { id: "q-9", articleTitle: "Neon Exodus", category: "scifi", chaptersRange: "4-6", scheduledDate: "2026-03-28", status: "pending" },
  { id: "q-10", articleTitle: "Letters to Tomorrow", category: "sad", chaptersRange: "4-6", scheduledDate: "2026-03-28", status: "pending" },
  { id: "q-11", articleTitle: "My Roommate is a Yokai", category: "comedy", chaptersRange: "4-6", scheduledDate: "2026-03-28", status: "pending" },
  { id: "q-12", articleTitle: "Midnight Masquerade", category: "spicy", chaptersRange: "4-6", scheduledDate: "2026-03-28", status: "pending" },
];

export const mockKpis: KpiData = {
  totalSeries: 40,
  totalChapters: 840,
  totalImages: 4200,
  avgConsistencyScore: 87.3,
  publishOnTime: 96.4,
  uniquePremises: 40,
  weeklyOutput: [
    { week: "W10", series: 10, chapters: 210, images: 1050 },
    { week: "W11", series: 10, chapters: 210, images: 1045 },
    { week: "W12", series: 10, chapters: 210, images: 1055 },
    { week: "W13", series: 10, chapters: 210, images: 1048 },
  ],
  categoryDistribution: categories.map((c) => ({
    category: c.label,
    count: 4,
  })),
  phaseTimings: [
    { phase: "Ideation", hours: 2.3 },
    { phase: "Asset Gen", hours: 8.1 },
    { phase: "Writing", hours: 3.6 },
    { phase: "Validation", hours: 0.8 },
    { phase: "Publishing", hours: 0.3 },
  ],
};

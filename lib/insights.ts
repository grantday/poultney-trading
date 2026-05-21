import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const insightsDir = path.join(process.cwd(), "content", "insights");

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;           // ISO date "2026-05-21"
  dateLabel: string;      // "21 May 2026"
  category: string;
  image: string;
  author?: string;
  readingMins: number;
  content: string;        // HTML
};

function fmtDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function fileToInsight(file: string): Insight {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(insightsDir, file), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || "",
    date: data.date || "",
    dateLabel: fmtDate(data.date || ""),
    category: data.category || "Market",
    image: data.image || "/images/insights/insight-default.jpg",
    author: data.author,
    readingMins: readingTime(content),
    content: marked.parse(content) as string,
  };
}

export function getAllInsights(opts?: { limit?: number }): Insight[] {
  if (!fs.existsSync(insightsDir)) return [];
  const files = fs.readdirSync(insightsDir).filter((f) => f.endsWith(".md"));
  const items = files.map(fileToInsight);
  items.sort((a, b) => (a.date < b.date ? 1 : -1));
  return opts?.limit ? items.slice(0, opts.limit) : items;
}

export function getInsight(slug: string): Insight | null {
  const file = path.join(insightsDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return fileToInsight(`${slug}.md`);
}

export function getInsightSlugs(): string[] {
  if (!fs.existsSync(insightsDir)) return [];
  return fs.readdirSync(insightsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

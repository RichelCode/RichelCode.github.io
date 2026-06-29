/* ============================================================================
   CONTENT — YouTube videos + Medium articles.

   YOUTUBE: paste 11-character video IDs (the part after "v=" in a watch URL).
   Until real IDs are added, the grid shows placeholders linking to your channel.

   MEDIUM: articles are auto-fetched from your RSS feed at build time. You can
   also hard-code featured ones in `featuredArticles`.
   ========================================================================== */

export interface VideoRef {
  id: string;
  title: string;
}

// TODO: replace with your real featured video IDs (e.g. "dQw4w9WgXcQ").
export const videos: VideoRef[] = [
  { id: "", title: "Featured video — add a YouTube video id" },
  { id: "", title: "Featured video — add a YouTube video id" },
  { id: "", title: "Featured video — add a YouTube video id" },
  { id: "", title: "Featured video — add a YouTube video id" },
  { id: "", title: "Featured video — add a YouTube video id" },
  { id: "", title: "Featured video — add a YouTube video id" },
];

export interface ArticleRef {
  title: string;
  href: string;
  date?: string;
}

export const featuredArticles: ArticleRef[] = [
  // { title: "How I think about RAG evaluation", href: "https://medium.com/@richelattafuah/...", date: "2026-01-01" },
];

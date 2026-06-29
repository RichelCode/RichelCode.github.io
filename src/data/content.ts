/* ============================================================================
   CONTENT: YouTube videos + Medium articles.

   YOUTUBE: paste 11-character video IDs (the part after "youtu.be/" or "v=").
   The grid auto-loads each video's thumbnail and plays it inline on click.

   MEDIUM: articles are auto-fetched from your RSS feed at build time. You can
   also hard-code featured ones in `featuredArticles`.
   ========================================================================== */

export interface VideoRef {
  id: string;
  title: string;
}

/* Featured videos from youtube.com/@richelattafuah23 */
export const videos: VideoRef[] = [
  { id: "IDlTZSBa2Qw", title: "Struggling with Python Data Structures? Learn Fast" },
  { id: "iRKJNqU8pQQ", title: "Confused About Python Files? Learn Read & Write Fast" },
  { id: "GGLRrX55aOc", title: "Python Dictionaries Made Easy" },
  { id: "JJo_mYfxuGc", title: "Python for Beginners: Regex Made Simple" },
  { id: "n7-0owQ5uGE", title: "Code Along Python Tutorial for Beginners" },
  { id: "FnTzUsXB0sE", title: "Learn Python Tuples in Minutes (Beginner-Friendly)" },
];

export interface ArticleRef {
  title: string;
  href: string;
  date?: string;
}

export const featuredArticles: ArticleRef[] = [
  // { title: "How I think about RAG evaluation", href: "https://medium.com/@richelattafuah/...", date: "2026-01-01" },
];

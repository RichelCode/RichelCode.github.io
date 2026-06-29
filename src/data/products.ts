/* ============================================================================
   PRODUCTS (future) — interest-capture cards.
   These products aren't built yet. Each card describes a planned product and
   collects interest via MailerLite, so demand signals guide what gets built.
   The `group` value is sent with the signup so you can see which product each
   person registered interest in (it maps to a MailerLite field/tag).
   ========================================================================== */

export interface Product {
  name: string;
  kind: string; // "Course" | "Templates" | "Cohort" | ...
  blurb: string;
  highlights: string[];
  group: string; // identifier sent to MailerLite for this product's interest
  status: string; // e.g. "In development", "Planning"
  icon: string; // Icon.astro stroke-icon name
}

export const products: Product[] = [
  {
    name: "Practical Machine Learning",
    kind: "Course",
    blurb:
      "A from-scratch, plain-English course that takes you from Python basics to building and shipping real ML models — the way I wish I'd been taught.",
    highlights: ["Hands-on projects", "No-fluff explanations", "Build a real portfolio"],
    group: "course-practical-ml",
    status: "In development",
    icon: "grad",
  },
  {
    name: "Data Science Templates",
    kind: "Templates",
    blurb:
      "Battle-tested notebooks and project templates for forecasting, RAG, and analysis — so you can start from a strong foundation instead of a blank page.",
    highlights: ["Reusable notebooks", "Best-practice structure", "Copy, adapt, ship"],
    group: "templates-ds",
    status: "Planning",
    icon: "spark",
  },
  {
    name: "AI/ML Career Cohort",
    kind: "Cohort",
    blurb:
      "A small-group, live cohort for people breaking into AI/ML — guided projects, feedback, and accountability, with me as your coach.",
    highlights: ["Live sessions", "Small group", "Real mentorship"],
    group: "cohort-aiml-career",
    status: "Planning",
    icon: "rocket",
  },
];

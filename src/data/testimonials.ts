/* ============================================================================
   TESTIMONIALS
   These are unattributed for now (no names, companies, or photos), so they read
   as "what people are saying." As real references come in, fill `name`, `role`,
   and optionally `photo` (drop a square image in /public/testimonials and set
   photo: "/testimonials/name.jpg"). Leave name empty to keep a quote anonymous.
   ========================================================================== */

export interface Testimonial {
  quote: string;
  name?: string;
  role?: string;
  photo?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Richel took a problem we had been stuck on for months and turned it into a working model in weeks. She explained every step in a way our whole team could follow, and the results spoke for themselves.",
    role: "Consulting client",
  },
  {
    quote:
      "What sets Richel apart is how she makes complicated ideas feel simple. She is rigorous with the statistics but never hides behind jargon, and you always know exactly where the project stands.",
    role: "Research collaborator",
  },
  {
    quote:
      "I came in intimidated by machine learning and left actually understanding it. Richel is patient, clear, and genuinely invested in your progress. I would recommend her to anyone trying to break into this field.",
    role: "Workshop attendee",
  },
];

/* Small credibility markers for the social-proof strip (edit freely and honestly). */
export const credibility = [
  "MSc Statistics, Miami University",
  "Hundreds of students taught",
  "AI/ML for clients & research",
  "YouTube & Medium educator",
];

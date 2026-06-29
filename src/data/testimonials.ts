/* ============================================================================
   TESTIMONIALS — PLACEHOLDERS ONLY. Replace with real quotes only.
   Add a photo by dropping a square image in /public/testimonials and setting
   `photo: "/testimonials/name.jpg"`. Otherwise initials show in an avatar.
   ========================================================================== */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo?: string;
  placeholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Add a real quote here — what it was like to work with Richel and the difference it made.",
    name: "Client / Colleague Name",
    role: "Role · Company",
    placeholder: true,
  },
  {
    quote: "Add a real quote here — a specific result, the collaboration, or how she made a hard problem feel simple.",
    name: "Client / Colleague Name",
    role: "Role · Company",
    placeholder: true,
  },
  {
    quote: "Add a real quote here — a recommendation from a manager, teammate, or someone you taught or mentored.",
    name: "Client / Colleague Name",
    role: "Role · Company",
    placeholder: true,
  },
];

/* Small credibility markers for the social-proof strip (edit freely / honestly). */
export const credibility = [
  "MS Statistics",
  "Hundreds of students taught",
  "AI/ML for clients & research",
  "YouTube & Medium educator",
];

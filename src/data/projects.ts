/* ============================================================================
   FEATURED PROJECTS, pre-filled with real projects.
   For each: add demo media in /public/projects (set `media`), demo/repo links,
   and replace "[add metric]" with real numbers (or delete the brackets for a
   qualitative line). No fake metrics are invented here.
   ========================================================================== */

export interface Project {
  title: string;
  category: string;
  description: string;
  impact: string;
  stack: string[];
  media?: { type: "image" | "video"; src: string; alt?: string };
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Spatio-Temporal EV Charging Demand Forecasting",
    category: "Forecasting · Geospatial ML",
    description:
      "Forecasts electric-vehicle charging demand across both space and time, helping operators decide where and when charging capacity is needed before the queues form.",
    impact: "Impact: captured spatial + temporal demand patterns for smarter charger placement, [add metric: e.g. X% lower forecast error vs. baseline].",
    stack: ["Python", "PyTorch", "Time Series", "Geospatial"],
    demoUrl: undefined, // TODO: YouTube/Loom demo link
    repoUrl: undefined, // TODO: GitHub repo
    featured: true,
  },
  {
    title: "Reading the Grid — Solar-Cell Fault Detection",
    category: "Computer Vision · Explainable AI",
    description:
      "A CNN that flags faulty solar cells from electroluminescence images, paired with a Grad-CAM heatmap that shows exactly where the model looked, so a human inspector can trust and verify each call. Ships as a single Docker container (FastAPI + React), live on Hugging Face Spaces.",
    impact:
      "Impact: 84.8% accuracy and 85.4% faulty recall on a held-out test set (n=394); fine-tuning ResNet18 on EL imagery lifted faulty recall from 0.72 to 0.85, with recall deliberately prioritized so field faults aren't missed.",
    stack: ["PyTorch", "ResNet18", "Grad-CAM", "FastAPI", "React", "Docker"],
    media: { type: "video", src: "/projects/reading-the-grid-demo.mp4", alt: "Reading the Grid demo: fault prediction and Grad-CAM compare view" },
    demoUrl: "https://huggingface.co/spaces/RichelCode/reading-the-grid",
    repoUrl: "https://github.com/RichelCode/reading-the-grid",
    featured: true,
  },
];

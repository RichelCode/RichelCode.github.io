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
  media?: { type: "image" | "video"; src: string; alt?: string; poster?: string };
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
    impact: "Impact: a spatio-temporal graph model that stays reliable when sensors fail, under 30% sensor outage a Random Forest baseline's forecast error grows about 2.8x faster than the graph model's, tested across 6 Caltrans PeMS District 3 stations at 12 to 72 hour horizons.",
    stack: ["Python", "PyTorch", "Time Series", "Geospatial"],
    media: { type: "video", src: "/projects/spatio-temporal-ev-demo.mp4", alt: "Spatio-Temporal EV charging demand forecasting demo", poster: "/projects/spatio-temporal-poster.jpg" },
    demoUrl: "https://richelcode.github.io/ev-charging-demand-demo/",
    repoUrl: "https://github.com/RichelCode/Spatio-Temporal-Prediction-and-Coordination-of-EV-Charging-Demand-for-Power-System-Resilience",
    featured: true,
  },
  {
    title: "Reading the Grid: Solar-Cell Fault Detection",
    category: "Computer Vision · Explainable AI",
    description:
      "A CNN that flags faulty solar cells from electroluminescence images, paired with a Grad-CAM heatmap that shows exactly where the model looked, so a human inspector can trust and verify each call. Ships as a single Docker container (FastAPI + React), live on Hugging Face Spaces.",
    impact:
      "Impact: 84.8% accuracy and 85.4% faulty recall on a held-out test set (n=394); fine-tuning ResNet18 on EL imagery lifted faulty recall from 0.72 to 0.85, with recall deliberately prioritized so field faults aren't missed.",
    stack: ["PyTorch", "ResNet18", "Grad-CAM", "FastAPI", "React", "Docker"],
    media: { type: "video", src: "/projects/reading-the-grid-demo.mp4", alt: "Reading the Grid demo: fault prediction and Grad-CAM compare view", poster: "/projects/reading-the-grid-poster.jpg" },
    demoUrl: "https://huggingface.co/spaces/RichelCode/reading-the-grid",
    repoUrl: "https://github.com/RichelCode/reading-the-grid",
    featured: true,
  },
];

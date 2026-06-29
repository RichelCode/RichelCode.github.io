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
    title: "Call Report Copilot",
    category: "RAG · AI Assistant",
    description:
      "A retrieval-augmented copilot that lets analysts ask natural-language questions over dense regulatory call-report data and get grounded, cited answers.",
    impact: "Impact: turned hours of manual lookup into seconds of conversational, source-grounded Q&A, [add metric: e.g. time saved per report].",
    stack: ["Python", "LangChain", "RAG", "Vector DB"],
    demoUrl: undefined,
    repoUrl: undefined,
    featured: true,
  },
  {
    title: "Market Intelligence Multi-Agent System",
    category: "Multi-Agent · LLM Orchestration",
    description:
      "A team of cooperating AI agents that research, summarize, and synthesize market signals into a single intelligence brief, each agent owning a slice of the pipeline.",
    impact: "Impact: automated multi-step market research into a repeatable agent workflow, [add metric: e.g. reports produced / hours saved].",
    stack: ["Python", "Multi-Agent", "LLMs", "Tool Use"],
    demoUrl: undefined,
    repoUrl: undefined,
    featured: true,
  },
  {
    title: "Employee Attrition Prediction",
    category: "Predictive ML · People Analytics",
    description:
      "A classification model that flags employees at elevated risk of leaving and surfaces the drivers behind it, giving HR teams a head start on retention.",
    impact: "Impact: identified key attrition drivers and at-risk segments for proactive retention, [add metric: e.g. ROC-AUC / recall].",
    stack: ["Python", "scikit-learn", "XGBoost", "SHAP"],
    demoUrl: undefined,
    repoUrl: undefined,
    featured: true,
  },
];

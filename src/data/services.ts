/* What clients can hire Richel for, the "Work With Me" page. */

export interface Service {
  title: string;
  blurb: string;
  bullets: string[];
  icon: string; // Icon.astro stroke-icon name
}

export const services: Service[] = [
  {
    title: "AI & ML Solutions",
    blurb:
      "Custom machine learning, end to end, from framing the problem to a model running in production and earning its keep.",
    bullets: ["Predictive modeling & classification", "Model evaluation & deployment", "From notebook to shipped product"],
    icon: "spark",
  },
  {
    title: "RAG & AI Assistants",
    blurb:
      "Assistants and agents grounded in your own documents and data, accurate, cited answers instead of guesswork.",
    bullets: ["Document copilots & semantic search", "Multi-agent workflows", "Guardrails & grounding"],
    icon: "chat",
  },
  {
    title: "Forecasting & Time Series",
    blurb:
      "Demand and capacity forecasting that planners actually trust, with honest uncertainty built in.",
    bullets: ["Demand & capacity forecasting", "Spatio-temporal modeling", "Scenario & risk analysis"],
    icon: "compass",
  },
  {
    title: "Data Science Consulting",
    blurb:
      "A statistician's rigor on your hardest questions, experiment design, causal thinking, decision-grade analysis.",
    bullets: ["Experiment design & A/B testing", "Statistical & causal analysis", "Dashboards & decision support"],
    icon: "briefcase",
  },
  {
    title: "Research Support",
    blurb:
      "A strong analytical partner for academic and applied research, methodology, modeling, and clear results.",
    bullets: ["Study design & methodology", "Modeling & analysis", "Reproducible, well-documented work"],
    icon: "pen",
  },
  {
    title: "Training & Workshops",
    blurb:
      "Hands-on enablement for teams and individuals moving into ML/AI, practical, jargon-free, grounded in real work.",
    bullets: ["Team upskilling in ML & AI", "Workshops & live walkthroughs", "Mentoring & technical talks"],
    icon: "grad",
  },
];

/* Who this is for */
export const audiences = [
  {
    title: "Businesses",
    body: "You have data and a problem worth solving. I help you turn it into an AI/ML system that ships and moves a real metric.",
    icon: "briefcase",
  },
  {
    title: "Researchers",
    body: "You need a rigorous analytical partner who speaks both statistics and machine learning, and can get to clear results.",
    icon: "compass",
  },
  {
    title: "Learners",
    body: "You're growing in this field and want a guide who makes the hard parts simple. Training, mentoring, and resources.",
    icon: "grad",
  },
];

/* How it works */
export const process = [
  { step: "01", title: "Discovery call", body: "We talk through your problem, goals, and constraints. No jargon, no pressure, just clarity on what success looks like." },
  { step: "02", title: "Scope & plan", body: "I map the approach, timeline, and deliverables so you know exactly what you're getting and when." },
  { step: "03", title: "Build & iterate", body: "I build in focused increments, sharing progress so you're never in the dark and we can course-correct early." },
  { step: "04", title: "Ship & support", body: "We get it into the real world, and I make sure you (and your team) can actually use and maintain it." },
];

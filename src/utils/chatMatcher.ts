import type { Intent, Suggestion, ProjectCard } from "@/types/chatbot";
import { portfolioData } from "@/data/portfolioData";

// ─── Intent keyword map with weighted scoring ─────────────────────────
const intentKeywords: Record<Intent, { keywords: string[]; weight: number }[]> = {
  greeting: [
    { keywords: ["hi", "hello", "hey", "sup", "yo", "howdy", "greetings", "hola", "good morning", "good evening"], weight: 3 },
  ],
  about: [
    { keywords: ["who are you", "who is nishant", "tell me about", "about nishant", "introduce", "yourself", "what do you do", "what does nishant do", "about me", "about him", "biography", "background"], weight: 3 },
    { keywords: ["nishant", "designer", "developer"], weight: 1 },
  ],
  services: [
    { keywords: ["services", "what services", "what can you do", "what do you offer", "what can you build", "offerings", "provide", "capabilities"], weight: 3 },
    { keywords: ["service", "offer", "build"], weight: 1 },
  ],
  web_design: [
    { keywords: ["web design", "website design", "landing page design", "website designer", "design websites", "page design"], weight: 3 },
    { keywords: ["design", "landing page", "layout", "visual"], weight: 1 },
  ],
  uiux: [
    { keywords: ["ui/ux", "ui ux", "uiux", "user interface", "user experience", "ux design", "ui design", "interface design"], weight: 3 },
    { keywords: ["ux", "ui", "interface", "usability"], weight: 1 },
  ],
  development: [
    { keywords: ["development", "web development", "developer", "coding", "build website", "frontend", "front-end", "code", "programming", "website development"], weight: 3 },
    { keywords: ["develop", "react", "nextjs", "typescript", "javascript"], weight: 1 },
  ],

  ai_integration: [
    { keywords: ["ai integration", "artificial intelligence", "ai features", "ai powered", "machine learning", "ai workflow"], weight: 3 },
    { keywords: ["ai", "automation", "intelligent"], weight: 1 },
  ],
  skills: [
    { keywords: ["skills", "technologies", "tech stack", "what technologies", "what stack", "languages", "frameworks", "tools", "expertise"], weight: 3 },
    { keywords: ["skill", "technology", "stack", "framework", "language", "tool"], weight: 1 },
  ],
  projects: [
    { keywords: ["projects", "portfolio", "work", "previous work", "show me your work", "what have you built", "past work", "case studies", "examples"], weight: 3 },
    { keywords: ["project", "built", "created", "made", "website"], weight: 1 },
  ],
  pricing: [
    { keywords: ["price", "pricing", "cost", "how much", "budget", "charges", "rate", "fees", "quote", "estimate", "affordable", "expensive", "cheap", "package", "plan"], weight: 3 },
    { keywords: ["money", "pay", "payment", "invest"], weight: 1 },
  ],
  process: [
    { keywords: ["process", "how do you work", "workflow", "steps", "how does a project work", "methodology", "approach", "timeline", "phases", "stages"], weight: 3 },
    { keywords: ["step", "phase", "stage", "flow", "method"], weight: 1 },
  ],
  contact: [
    { keywords: ["contact", "hire", "hire you", "email", "reach you", "work with you", "get in touch", "connect", "book a call", "message", "reach out", "instagram", "linkedin", "social"], weight: 3 },
    { keywords: ["mail", "call", "reach", "touch", "talk"], weight: 1 },
  ],
  unknown: [],
};

// ─── Normalize input ──────────────────────────────────────────────────
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ─── Score-based intent detection ─────────────────────────────────────
export function detectIntent(rawMessage: string): Intent {
  const message = normalize(rawMessage);

  if (message.length < 2) return "unknown";

  const scores: Partial<Record<Intent, number>> = {};

  for (const [intent, groups] of Object.entries(intentKeywords) as [Intent, typeof intentKeywords[Intent]][]) {
    if (intent === "unknown") continue;
    let score = 0;

    for (const group of groups) {
      for (const keyword of group.keywords) {
        if (message.includes(keyword)) {
          score += group.weight;
        }
      }
    }

    if (score > 0) {
      scores[intent] = score;
    }
  }

  // Find highest scoring intent
  let bestIntent: Intent = "unknown";
  let bestScore = 0;

  for (const [intent, score] of Object.entries(scores) as [Intent, number][]) {
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  return bestIntent;
}

// ─── Generate response for an intent ──────────────────────────────────
export function getResponse(intent: Intent): {
  content: string;
  suggestions: Suggestion[];
  projectCards?: ProjectCard[];
} {
  const d = portfolioData;

  switch (intent) {
    case "greeting":
      return {
        content: `Hey there! 👋 I'm Nishant's portfolio assistant.\n\nI can help you explore his work, services, skills and process. What would you like to know?`,
        suggestions: [
          { label: "What services do you offer?", intent: "services" },
          { label: "Show me your projects", intent: "projects" },
          { label: "What's your tech stack?", intent: "skills" },
          { label: "How does your process work?", intent: "process" },
        ],
      };

    case "about":
      return {
        content: `${d.person.introduction}\n\n${d.person.experience}\n\nBased in ${d.person.location}.`,
        suggestions: [
          { label: "What services do you offer?", intent: "services" },
          { label: "See projects", intent: "projects" },
          { label: "What's your tech stack?", intent: "skills" },
        ],
      };

    case "services":
      return {
        content: `I work across four core areas:\n\n✦ **${d.services.webDesign.title}** — ${d.services.webDesign.description}\n\n✦ **${d.services.uiux.title}** — ${d.services.uiux.description}\n\n✦ **${d.services.development.title}** — ${d.services.development.description}\n\n✦ **${d.services.aiIntegration.title}** — ${d.services.aiIntegration.description}\n\nIf you're looking to build a modern website, I can take it from concept → design → development → launch.`,
        suggestions: [
          { label: "See my projects", intent: "projects" },
          { label: "What technologies do you use?", intent: "skills" },
          { label: "How does your process work?", intent: "process" },
          { label: "What does it cost?", intent: "pricing" },
        ],
      };

    case "web_design":
      return {
        content: `**${d.services.webDesign.title}**\n\n${d.services.webDesign.description}\n\nI focus on creating layouts that are visually striking, conversion-optimized and built to perform across all devices.`,
        suggestions: [
          { label: "See projects", intent: "projects" },
          { label: "View pricing", intent: "pricing" },
          { label: "Get in touch", intent: "contact" },
        ],
      };

    case "uiux":
      return {
        content: `**${d.services.uiux.title}**\n\n${d.services.uiux.description}\n\nEvery interface I design starts with understanding the user journey and ensuring every interaction feels natural.`,
        suggestions: [
          { label: "See projects", intent: "projects" },
          { label: "View pricing", intent: "pricing" },
          { label: "Other services", intent: "services" },
        ],
      };

    case "development":
      return {
        content: `**${d.services.development.title}**\n\n${d.services.development.description}\n\nI build with React, Next.js, TypeScript and Tailwind CSS — ensuring clean code, fast performance and seamless deployment.`,
        suggestions: [
          { label: "What's your tech stack?", intent: "skills" },
          { label: "See projects", intent: "projects" },
          { label: "View pricing", intent: "pricing" },
        ],
      };



    case "ai_integration":
      return {
        content: `**${d.services.aiIntegration.title}**\n\n${d.services.aiIntegration.description}\n\nI integrate AI features that add real value — from smart forms to AI-driven UI generation and workflow automation.`,
        suggestions: [
          { label: "See projects", intent: "projects" },
          { label: "View pricing", intent: "pricing" },
          { label: "Get in touch", intent: "contact" },
        ],
      };

    case "skills": {
      const all = [
        ...d.skills.frontend,
        ...d.skills.animation,
        ...d.skills.backend,
        ...d.skills.tools,
      ];
      return {
        content: `Here's my current tech stack:\n\n**Frontend:** ${d.skills.frontend.join(", ")}\n\n**Animation:** ${d.skills.animation.join(", ")}\n\n**Backend:** ${d.skills.backend.join(", ")}\n\n**Tools:** ${d.skills.tools.join(", ")}`,
        suggestions: [
          { label: "See my projects", intent: "projects" },
          { label: "How do you work?", intent: "process" },
          { label: "View pricing", intent: "pricing" },
        ],
      };
    }

    case "projects": {
      const projectCards: ProjectCard[] = d.projects.map((p) => ({
        title: p.name,
        category: p.category,
        description: p.description,
        url: p.url,
        technologies: p.technologies,
      }));
      return {
        content: `Here are some of my recent projects. Each one was designed and developed from scratch:`,
        suggestions: [
          { label: "What services do you offer?", intent: "services" },
          { label: "What's your tech stack?", intent: "skills" },
          { label: "Get in touch", intent: "contact" },
        ],
        projectCards,
      };
    }

    case "pricing": {
      const b = d.pricing.basic;
      const s = d.pricing.standard;
      const p = d.pricing.premium;
      return {
        content: `I offer three main pricing plans:\n\n💎 **${b.name}** — ${b.subtitle}\n${b.price} · Delivery: ${b.delivery}\n${b.description}\n\n🚀 **${s.name}** — ${s.subtitle}\n${s.price} · Delivery: ${s.delivery}\n${s.description}\n\n⚡ **${p.name}** — ${p.subtitle}\n${p.price} · Delivery: ${p.delivery}\n${p.description}\n\n${d.pricing.note}`,
        suggestions: [
          { label: "Get in touch", intent: "contact" },
          { label: "How do you work?", intent: "process" },
          { label: "See projects", intent: "projects" },
        ],
      };
    }

    case "process":
      return {
        content: `Here's how I typically work on projects:\n\n${d.process.map((p) => `**${p.step}. ${p.name}** — ${p.description}`).join("\n\n")}\n\nEvery project is collaborative. I keep you involved at each stage so the end result matches your vision perfectly.`,
        suggestions: [
          { label: "View pricing", intent: "pricing" },
          { label: "See projects", intent: "projects" },
          { label: "Get in touch", intent: "contact" },
        ],
      };

    case "contact":
      return {
        content: `I'd love to hear about your project! Here's how you can reach me:\n\n📧 **Email:** ${d.contact.email}\n📸 **Instagram:** [@itsnishant_21](${d.contact.instagram})\n💼 **LinkedIn:** [Nishant More](${d.contact.linkedin})\n\nOr you can use the **Get In Touch** button anywhere on this page to send me a project enquiry directly.`,
        suggestions: [
          { label: "View pricing", intent: "pricing" },
          { label: "What services do you offer?", intent: "services" },
          { label: "See projects", intent: "projects" },
        ],
      };

    case "unknown":
    default:
      return {
        content: `I'm not sure about that one yet.\n\nI'm Nishant's portfolio assistant, so I'm best at answering questions about his work, skills, projects, services, pricing and development process.\n\nWant to explore something?`,
        suggestions: [
          { label: "Services", intent: "services" },
          { label: "Projects", intent: "projects" },
          { label: "Skills", intent: "skills" },
          { label: "Pricing", intent: "pricing" },
          { label: "Process", intent: "process" },
          { label: "Contact", intent: "contact" },
        ],
      };
  }
}

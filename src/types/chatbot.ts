export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
  suggestions?: Suggestion[];
  projectCards?: ProjectCard[];
};

export type Suggestion = {
  label: string;
  intent: string;
};

export type ProjectCard = {
  title: string;
  category: string;
  description: string;
  url: string;
  technologies: string[];
};

export type Intent =
  | "greeting"
  | "about"
  | "services"
  | "web_design"
  | "uiux"
  | "development"
  | "ai_integration"
  | "skills"
  | "projects"
  | "pricing"
  | "process"
  | "contact"
  | "unknown";

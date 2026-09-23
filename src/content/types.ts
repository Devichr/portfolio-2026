export type ProjectDiagramId =
  | "janova"
  | "fas-track"
  | "ble-config"
  | "smart-halter";

export interface StackSection {
  layer: string;
  items: string[];
}

export interface CaseStudy extends CaseStudyBase {
  intro: string[];
  diagram: ProjectDiagramId;
  stack: StackSection[];
  contribution: string[];
  keyResult?: { label: string; before: string; after: string };
  centralQuestion: string;
}

export interface HomeProject {
  slug: string;
  name: string;
  oneLineStory: string;
  tags: string[];
  image?: string;
  screenshots?: string[];
}

export interface CaseStudyBase {
  slug: string;
  name: string;
  subtitle: string;
  oneLineStory: string;
  role: string;
  tags: string[];
  heroQuote: string;
  image?: string;
  screenshots?: string[];
}

export interface OtherBuild {
  name: string;
  oneLine: string;
  tags: string[];
  about: string;
  contribution: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface HighlightSkill {
  name: string;
  group: string;
}

export interface ProfileContent {
  name: string;
  role: string;
  processLine: string;
  lessons: string[];
  skillGroups: SkillGroup[];
  portrait: string;
  headshot: string;
}

export interface ContactContent {
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
  whatsapp: string;
  resumePdf: string;
}

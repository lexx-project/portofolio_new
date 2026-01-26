export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  features: string[];
  refId: string;
  icon: string;
  githubUrl: string;
}

export interface TechItem {
  name: string;
  icon: string;
  load: number;
}

export interface Stat {
  label: string;
  value: string;
}

export interface NavItem {
  id: string;
  number: string;
  label: string;
}

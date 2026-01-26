import { NavItem, Project, TechItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { id: "work", number: "01", label: "MODULES" },
  { id: "about", number: "02", label: "CORE_LOGIC" },
  { id: "stack", number: "03", label: "ENGINE_ROOM" },
  { id: "contact", number: "04", label: "UPLINK" },
];

export const PROJECTS: Project[] = [
  {
    id: "halaqah",
    title: "HALAQAH MANAGEMENT SYSTEM",
    category: "DEPLOYED MODULES",
    description:
      "A comprehensive digital transition project. Designed for high availability and data integrity using a normalized SQL schema.",
    tags: ["POSTGRESQL", "EXPRESS_JS"],
    features: ["RESTFUL API ARCHITECTURE", "AUTOMATED ATTENDANCE ENGINE"],
    refId: "REF_ID: 982-AX-1 // 3D_SCAN_ACTIVE",
    icon: "architecture",
    githubUrl: "https://github.com/lexx-project/halaqah_id-BE",
  },
  {
    id: "whatsapp-bot",
    title: "WHATSAPP AUTOMATION BOT",
    category: "AUTOMATION MATRIX",
    description:
      "Automated response system handling high-volume messaging. Reducing manual communication effort by >70% through intelligent routing.",
    tags: ["NODE_JS", "BAILEYS_LIB"],
    features: ["SESSION PERSISTENCE MODULE", "ASYNC COMMAND PROCESSOR"],
    refId: "REF_ID: 104-BB-X // SIGNAL_LOCKED",
    icon: "smart_toy",
    githubUrl: "https://github.com/lexx-project/bot-wa-md",
  },
];

export const TECH_STACK: TechItem[] = [
  { name: "NODE_JS", icon: "terminal", load: 90 },
  { name: "EXPRESS", icon: "api", load: 85 },
  { name: "POSTGRES", icon: "database", load: 80 },
  { name: "GIT_SCM", icon: "hub", load: 95 },
  { name: "POSTMAN", icon: "rocket_launch", load: 88 },
  { name: "AUTOMATION", icon: "settings_suggest", load: 92 },
];

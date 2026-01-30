export interface Project {
  id: any|string;
  title: string;
  context: 'professional' | 'academic' | 'personal';
  description: string;
  technologies: string[];
  highlights: string[];

  hasDetails?: boolean;
  detailedSections?: {
    title: string;
    icon?: string;
    content: string[];
  }[];
  companyUrl?: string;
  gitRepoUrl?: string;
}

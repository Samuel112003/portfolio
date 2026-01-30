export interface Experience {
  company: string;
  role: string;
  startDate: string; // ISO date or label
  endDate?: string;
  description?: string;
  technologies?: string[];
}

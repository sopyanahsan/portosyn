export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  year: string;
  tags: string[];
  description: string;
  primaryColor: string;
  imageBg: string;
  phoneMockupType: "checkout" | "bills";
}

export interface TimelineEvent {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  logo: string;
  isActive?: boolean;
}

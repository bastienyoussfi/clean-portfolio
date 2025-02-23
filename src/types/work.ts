export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  logo: React.ReactElement;
  achievements: string[];
  link?: {
    link: string;
    title: string;
    image: string;
    description: string;
  };
}

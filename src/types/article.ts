export interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  notionUrl?: string; // Optional URL to a Notion page
}

export interface Article {
  id: number;
  title: string;
  date: string;
  image?: string;
  text?: string;
}

export type Articles = Article[];

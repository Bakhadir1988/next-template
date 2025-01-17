export interface NewsDto {
  section: NewsSection;
  items: NewsItem[];
}

interface NewsSection {
  title: string;
  manual_url: string;
}

export interface NewsItem {
  item_id: string;
  title: string;
  date: string;
  img?: string;
  announce?: string;
  content?: string;
  manual_url: string;
}

export interface NewsListDto {
  section: NewsListSection;
  items: NewsListItems[];
}

interface NewsListSection {
  title: string;
  manual_url: string;
}

export interface NewsListItems {
  item_id: string;
  title: string;
  date: string;
  img?: string;
  announce?: string;
  content?: string;
  manual_url: string;
}

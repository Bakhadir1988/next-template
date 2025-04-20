export type NewsDto = {
  items: NewsItemDto[];
  section: NewsSectionDto;
  pagi: NewsPaginationDto;
};

export type NewsSectionDto = {
  title: string;
  content?: string;
  items_count?: string;
  url: string;
  __path: {
    item_id: string;
    url: string;
    title: string;
  }[];
};

export type NewsPaginationDto = {
  current_page: number;
  from: number;
  items_per_page: string;
  to: string;
  total_items: string;
  total_pages: number;
};

export type NewsItemDto = {
  item_id: string;
  title: string;
  date: string;
  img?: string;
  announce?: string;
  text?: string;
  content?: string;
  manual_url: string;
  url: string;
};

export interface LatestNewsDto {
  title: string;
  content?: string;
  items_count: string;
  linked_sections: {
    items: LatestNewsItems[];
  }[];
}

interface LatestNewsItems {
  id: string;
  title: string;
  announce?: string;
  manual_url: string;
  img: string;
}

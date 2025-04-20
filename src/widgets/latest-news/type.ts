export type LatestNewsDto = {
  title: string;
  content?: string;
  items_count?: string;
  linked_sections: {
    section: {
      item_id: string;
    };
    items: LatestNewsItemsDto[];
  }[];
};

export type LatestNewsItemsDto = {
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

export type LatestNewsDto = {
  title: string;
  content?: string;
  items_count?: string;
  linked_sections: {
    section: {
      item_id: string;
    };
    items: LatestNewsItems[];
  }[];
};

export type LatestNewsItems = {
  item_id: string;
  title: string;
  announce?: string;
  manual_url: string;
  img: string;
};

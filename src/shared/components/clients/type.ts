export type ClientsDto = {
  title: string;
  content?: string;
  items_count?: string;
  linked_sections: {
    section: {
      item_id: string;
    };
    items: ClientsItems[];
  }[];
};

export type ClientsItems = {
  item_id: string;
  title: string;
  manual_url: string;
  img: string;
};

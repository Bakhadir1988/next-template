export type ServicesDto = {
  title: string;
  content?: string;
  linked_sections: {
    section: {
      item_id: string;
    };
    items: ServicesItem[];
  }[];
};

export type ServicesItem = {
  item_id: string;
  title: string;
  manual_url: string;
  in_main: string;
  price?: number;
  announce?: {
    image?: string;
    text?: string;
  };
};

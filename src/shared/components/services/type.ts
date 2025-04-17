export type ServicesDto = {
  title: string;
  content?: string;
  items_count?: string;
  linked_sections: {
    section: {
      item_id: string;
    };
    items: ServicesItems[];
  }[];
};

export type ServicesItems = {
  item_id: string;
  title: string;
  announce: {
    text: string;
    image: string;
  };
  manual_url: string;
  img: string;
  in_main: boolean;
  price: string;
  url: string;
};

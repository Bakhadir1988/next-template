export type AboutDto = {
  title: string;
  content?: string;
  image?: string;
  items_count?: string;
  linked_sections: {
    items: AboutItems[];
  }[];
};

type AboutItems = {
  title: string;
  text: string;
  item_id: string;
};

export type AdvantagesDto = {
  title: string;
  content?: string;
  items_count?: string;
  linked_sections: {
    items: AdvantagesItems[];
  }[];
};

type AdvantagesItems = {
  title: string;
  icon: string;
  text: string;
  item_id: string;
};

export type TabDto = {
  item_id: string;
  title: string;
  content: string;
  linked_sections: TabLinkedSection[];
};

export type TabLinkedSection = {
  items: TabItem[];
  section: {
    item_id: string;
  };
};

export type TabItem = {
  item_id: number;
  title: string;
  text: string;
  announce: {
    image: string;
  };
  prices: TabItemPrices[];
};

export type TabItemPrices = {
  subitem_id: string;
  price: string;
  variant_title: string;
};

export type AccordionDto = {
  item_id: string;
  title: string;
  content: string;
  linked_sections: LinkedSection[];
};

export type LinkedSection = {
  items: AccordionItem[];
  section: {
    item_id: string;
  };
};

export type AccordionItem = {
  item_id: number;
  title: string;
  text?: string;
  image?: string;
  heading?: string;
  buttons: AccordionButton[];
};

export type AccordionButton = {
  subitem_id: string;
  main: string;
  variant_title: string;
  url: string | null;
  alias: string | null;
};

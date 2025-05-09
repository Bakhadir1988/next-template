export type AccordionDto = {
  item_id: string;
  title: string;
  text: string;
  items: AccordionItem[];
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

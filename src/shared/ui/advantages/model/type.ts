export type AdvantagesDto = {
  title: string;
  content?: string;
  items: AdvantagesItemDto[];
};

export type AdvantagesItemDto = {
  title: string;
  icon_svg: string;
  text: string;
  item_id: string;
};

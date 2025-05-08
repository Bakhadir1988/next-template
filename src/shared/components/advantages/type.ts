export type AdvantagesDto = {
  title: string;
  content?: string;
  items: AdvantagesItems[];
};

type AdvantagesItems = {
  title: string;
  icon_svg: string;
  text: string;
  item_id: string;
};

export type WorkPrincipleDto = {
  item_id: string;
  title: string;
  image: string;
  text: string;
  items: WorkPrincipleItem[];
};

export type WorkPrincipleItem = {
  item_id: string;
  title: string;
  icon_svg: string;
  text: string;
};

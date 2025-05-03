export type WorkPrincipleDto = {
  item_id: string;
  title: string;
  image: string;
  content: string;
  linked_sections: WorkPrincipleSection[];
};

export type WorkPrincipleSection = {
  items: WorkPrincipleItem[];
  section: {
    item_id: string;
  };
};

export type WorkPrincipleItem = {
  item_id: string;
  title: string;
  icon_svg: string;
  text: string;
};

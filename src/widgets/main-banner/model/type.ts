export type MainBannerDto = {
  title: string;
  content?: string;
  items_count?: string;
  linked_sections: {
    items: MainBannerItem[];
  }[];
};

export type MainBannerItem = {
  buttons: MainBannerItemButtons[];
  title: string;
  image: string;
  bg_image: string;
  text: string;
  manual_url: string;
  item_id: string;
};

export type MainBannerItemButtons = {
  subitem_id: string;
  variant_title: string;
  url: string;
};

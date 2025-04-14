export type MainBannerDto = {
  title: string;
  content?: string;
  items_count?: string;
  linked_sections: {
    items: MainBannerItems[];
  }[];
};

type MainBannerItems = {
  buttons: MainBannerItemButtons[];
  title: string;
  image: string;
  text: string;
  manual_url: string;
  item_id: string;
};

type MainBannerItemButtons = {
  subitem_id: string;
  variant_title: string;
  url: string;
};

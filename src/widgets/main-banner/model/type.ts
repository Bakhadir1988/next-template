export type MainBannerDto = {
  title: string;
  content?: string;
  items: MainBannerItem[];
};

export type MainBannerItem = {
  button: MainBannerItemButton;
  image: string;
  image_bg: string;
  item_id: string;
  text: string;
  title: string;
};

export type MainBannerItemButton = {
  title: string;
  url?: string;
  variant?: string;
};

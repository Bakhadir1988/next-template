export interface LatestNewsDto {
  title: string;
  items_count: string;
  linked_sections: [
    {
      items: {
        id: string;
        title: string;
        announce?: string;
        url: string;
        img: string;
      }[];
    },
  ];
}

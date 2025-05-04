// features/universalTabs/model/types.ts
export enum TabsOrientationEnum {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export type TabItem = {
  id: string;
  title: string;
  text: string;
};

export type TabsDto = {
  tabs: TabItem[];
  orientation?: TabsOrientationEnum;
  title?: string;
  description?: string;
  className?: string;
};

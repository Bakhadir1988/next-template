// features/universalTabs/model/types.ts
enum TabsOrientationEnum {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export type TabItem = {
  id: string;
  title: string;
  text: string;
};

export type TabsOrientation = TabsOrientationEnum;

export type TabsDto = {
  tabs: TabItem[];
  orientation?: TabsOrientation;
  title?: string;
  description?: string;
  className?: string;
};

// features/universalTabs/model/types.ts
export type TabItem = {
  id: string;
  title: string;
  text: string;
};

export type TabsOrientation = 'horizontal' | 'vertical';

export interface UniversalTabsProps {
  tabs: TabItem[];
  orientation?: TabsOrientation;
  title?: string;
  description?: string;
  className?: string;
}

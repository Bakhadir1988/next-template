import { ReactNode } from 'react';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
  withOverlay?: boolean;
}

export type DialogProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  animation?: 'fade' | 'scale' | 'slide';
};

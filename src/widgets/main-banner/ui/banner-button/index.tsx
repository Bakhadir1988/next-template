'use client';

import { useMediaQuery } from '@mantine/hooks';
import React, { useState } from 'react';

import { DefaultForm } from '@/features/default-form';
import { Dialog } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { Drawer } from '@/shared/ui/drawer';
import { MainBannerItemButton } from '@/widgets/main-banner/model/type';

import styles from './banner-button.module.scss';

export const BannerButton = ({ button }: { button: MainBannerItemButton }) => {
  const { title } = button;
  const isMobile = useMediaQuery('(max-width: 550px)');
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.root}>
      <Button onClick={() => setOpen(true)}>{title}</Button>

      {!isMobile ? (
        <Dialog open={open} onClose={() => setOpen(false)} animation="scale">
          <DefaultForm form={'callform'} />
        </Dialog>
      ) : (
        <Drawer isOpen={open} onClose={() => setOpen(false)}>
          <DefaultForm form={'callform'} />
        </Drawer>
      )}
    </div>
  );
};

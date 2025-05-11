'use client';

import React, { useState } from 'react';

import { DefaultForm } from '@/features/default-form';
import { Dialog } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { MainBannerItemButton } from '@/widgets/main-banner/model/type';

import styles from './banner-button.module.scss';

export const BannerButton = ({ button }: { button: MainBannerItemButton }) => {
  const { title } = button;

  const [open, setOpen] = useState(false);
  return (
    <div className={styles.root}>
      <Button onClick={() => setOpen(true)}>{title}</Button>
      <Dialog open={open} onClose={() => setOpen(false)} animation="scale">
        <DefaultForm form={'callfor'} />
      </Dialog>
    </div>
  );
};

'use client';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

import { Button } from '@/shared/ui/button';

export const UiModal = ({
  children,
  text = 'Заказать',
}: {
  children: React.ReactNode;
  text: string;
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button variant="primary" radius="lg" size="lg" onClick={open}>
        {text}
      </Button>
      <Modal
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        transitionProps={{
          transition: 'fade',
          duration: 300,
          timingFunction: 'linear',
        }}
      >
        <span>{text}</span>
        {children}
      </Modal>
    </>
  );
};

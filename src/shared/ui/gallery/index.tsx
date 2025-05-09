'use client';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import Image from 'next/image';
import React, { useEffect } from 'react';

type Props = {
  item: string;
};

export const Gallery = ({ item }: Props) => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      infinite: false,
      buttons: ['zoom', 'fullScreen', 'close'],
      somethingCustom: true, // тип: unknown → безопасно
    });

    return () => {
      Fancybox.unbind('[data-fancybox="gallery"]');
    };
  }, []);

  return (
    <a
      data-fancybox="gallery"
      href={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item}`}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item}`}
        width={600}
        height={500}
        alt={`slider_${item}`}
      />
    </a>
  );
};

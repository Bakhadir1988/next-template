'use client';

import React from 'react';

import { Gallery } from '@/shared/ui';
import { BaseSlider } from '@/shared/ui/base-slider';

type AboutSliderProps = {
  items: string[];
};

export const AboutSlider = ({ items }: AboutSliderProps) => {
  return (
    <BaseSlider
      data={items}
      slidesPerView={1}
      spaceBetween={32}
      navigation
      pagination
      loop={false}
      autoplay={false}
      renderItem={(item) => <Gallery item={item} />}
    />
  );
};

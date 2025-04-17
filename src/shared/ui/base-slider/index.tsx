'use client';

import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderArrowIcon } from '@/shared/icons/sliderArrow';

import styles from './base-slider.module.scss';
import { BaseSliderProps } from './type';

export const BaseSlider = <T,>({
  data,
  renderItem,
  slidesPerView = 3,
  slidesPerViewXs,
  slidesPerViewSm,
  slidesPerViewMd,
  spaceBetween = 20,
  navigation = true,
  pagination = true,
  loop = true,
  className,
}: BaseSliderProps<T>) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // Проверка: нужно ли показывать элементы управления
  const shouldShowControls = data.length > slidesPerView;

  useEffect(() => {
    if (swiperInstance) {
      if (
        navigation &&
        swiperInstance.params.navigation &&
        typeof swiperInstance.params.navigation !== 'boolean'
      ) {
        swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
        swiperInstance.params.navigation.nextEl = navigationNextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }

      if (
        pagination &&
        swiperInstance.params.pagination &&
        typeof swiperInstance.params.pagination !== 'boolean'
      ) {
        swiperInstance.params.pagination.el = paginationRef.current;
        swiperInstance.params.pagination.clickable = true;
        swiperInstance.pagination.init();
        swiperInstance.pagination.render();
        swiperInstance.pagination.update();
      }
    }
  }, [swiperInstance, navigation, pagination]);

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onSwiper={setSwiperInstance}
        loop={loop}
        className={clsx(className, styles.root)}
        breakpoints={{
          0: {
            slidesPerView: slidesPerViewXs || 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: slidesPerViewSm || 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: slidesPerViewMd || 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: slidesPerView || 4,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide className={styles.item} key={index}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Показываем элементы управления только если shouldShowControls === true */}
      {shouldShowControls && (
        <div className={styles.controls}>
          <div
            ref={paginationRef}
            className={clsx('swiper-pagination', styles.pagination)}
          ></div>
          <div className={clsx('swiper-navigation', styles.navigation)}>
            <div
              ref={navigationPrevRef}
              className={clsx(
                'swiper-button-prev',
                styles.button_prev,
                styles.button,
              )}
            >
              <SliderArrowIcon width={8} height={12} fill="#d8a47a" />
            </div>
            <div
              ref={navigationNextRef}
              className={clsx(
                'swiper-button-next',
                styles.button_next,
                styles.button,
              )}
            >
              <SliderArrowIcon width={8} height={12} fill="#d8a47a" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

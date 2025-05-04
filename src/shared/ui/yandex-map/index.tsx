'use client';

import { useEffect, useRef, useState } from 'react';

export const YandexMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const hasLoadedRef = useRef(false);

  // Наблюдение за входом в зону видимости
  useEffect(() => {
    const node = mapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node); // ✅ безопасно
    };
  }, []);

  // Загружаем карту при isVisible === true
  useEffect(() => {
    if (!isVisible || hasLoadedRef.current || typeof window === 'undefined')
      return;

    hasLoadedRef.current = true;

    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY}`;
    script.type = 'text/javascript';
    script.onload = initMap;
    document.head.appendChild(script);

    const isMobile = window.innerWidth < 768;
    const centerCoords = isMobile ? [55.903812, 37.792214] : [55.903812, 37.78];

    function initMap() {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map(mapRef.current!, {
          center: centerCoords,
          zoom: 15,
          controls: [],
        });

        const placemark = new window.ymaps.Placemark(
          [55.903812, 37.792214],
          {
            hintContent: 'МО, г.Королев, Ярославский проезд, 7А',
          },
          {
            preset: 'islands#blueAutoIcon',
          },
        );

        map.geoObjects.add(placemark);
        setIsMapLoaded(true); // Скрыть скелетон
      });
    }
  }, [isVisible]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '30px',
      }}
    >
      {!isMapLoaded && (
        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            inset: 0,
            backgroundColor: '#f3f3f3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>Загрузка карты...</span>
        </div>
      )}
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '100%',
          opacity: isMapLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
          borderRadius: '30px',
        }}
      />
    </div>
  );
};

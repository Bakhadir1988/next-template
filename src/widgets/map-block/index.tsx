import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { CalendarIcon } from '@/shared/icons/calendar';
import { EmailIcon } from '@/shared/icons/email';
import { GpsIcon } from '@/shared/icons/gps';
import { PhoneIcon } from '@/shared/icons/phone';
import { PinIcon } from '@/shared/icons/pin';
import { WhatsappIcon } from '@/shared/icons/whatsapp';
import { Button } from '@/shared/ui/button';
import { YandexMap } from '@/shared/ui/yandex-map';

import styles from './map-block.module.scss';

export const MapBlock = () => {
  return (
    <section className="base_section">
      <div className="container">
        <div className={styles.root}>
          <div className={styles.map}>
            <YandexMap />
          </div>
          <div className={styles.info}>
            <h2>Наши контакты</h2>
            <div>
              <p>
                Стоимость грузового ремонта грузовых автомобилей и обслуживания
                в нашем автосервисе, Вы можете узнать связавшись с нами:
              </p>
            </div>
            <div className={styles.list}>
              <div className={styles.item}>
                <PinIcon className={styles.icon} />
                <div className={styles.content}>
                  <strong>Адрес</strong>
                  <span>МО, г.Королев, Ярославский проезд, 7А</span>
                </div>
              </div>
              <div className={styles.item}>
                <GpsIcon className={styles.icon} />
                <div className={styles.content}>
                  <strong>GPS:</strong>
                  <span>55.903812, 37.792214</span>
                </div>
              </div>
              <div className={styles.item}>
                <CalendarIcon className={styles.icon} />
                <div className={styles.content}>
                  <strong>График работы</strong>
                  <span>круглосуточно, без выходных</span>
                </div>
              </div>
              <div className={styles.item}>
                <PhoneIcon className={styles.icon} />
                <div className={styles.content}>
                  <strong>Телефон</strong>
                  <a href="tel:+79015691567">+7 (901) 569-15-67</a>
                </div>
              </div>
              <div className={styles.item}>
                <EmailIcon className={styles.icon} width={40} height={28} />
                <div className={styles.content}>
                  <strong>Почта</strong>
                  <a href="mailto:zakaz@remzonaservice.ru">
                    zakaz@remzonaservice.ru
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button variant="primary" size="lg" radius="full">
                Записаться на ремонт
              </Button>
              <Link
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="whatsapp"
              >
                <WhatsappIcon className={clsx(styles.icon, styles.whatsapp)} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

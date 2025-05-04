import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { LogoIcon } from '@/shared/icons/logo';
import { Button } from '@/shared/ui/button';

import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div>
        <div className="container">
          <div className={clsx(styles.top, styles.content)}>
            <Link aria-label="Ремзонасервис" href="/" className={styles.logo}>
              <LogoIcon />
            </Link>
            <ul className={styles.menu}>
              <li>
                <Link href={'#'}>Услуги по ремонту</Link>
              </li>
              <li>
                <Link href={'#'}>О компании</Link>
              </li>
              <li>
                <Link href={'#'}>Изготовление РВД</Link>
              </li>
              <li>
                <Link href={'#'}>Контакты</Link>
              </li>
            </ul>
            <Button size="lg" radius="full">
              Записаться на ремонт
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className={styles.content}>
            <div>© 2025. Все права защищены.</div>
            <Link className="base_hover" href={'#'}>
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

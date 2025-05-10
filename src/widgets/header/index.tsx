'use client';

import { Burger } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect } from 'react';

import { EmailIcon, LogoIcon, PinIcon, WhatsappIcon } from '@/shared/icons';
import { Button } from '@/shared/ui/button';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 1340px)');
  const isMobile = useMediaQuery('(max-width: 1340px)');
  const isSmallScreen = useMediaQuery('(max-width: 550px)');
  const [opened, { toggle, close }] = useDisclosure();

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [opened]);

  // Анимация пунктов меню
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <header
      className={clsx(styles.root, {
        [styles.opened]: opened,
      })}
    >
      <div className="container">
        {isDesktop && (
          <div className={styles.top}>
            <div className={styles.top_item}>
              <span className={styles.icon}>
                <PinIcon width={24} height={24} /> GPS:
              </span>
              <span>55.903812, 37.792214</span>
            </div>
            <div className={styles.top_item}>
              <span>МО, г.Королев, Ярославский проезд, 7А</span>
              <span>круглосуточно, без выходных</span>
            </div>
            <div className={styles.top_item}>
              <a href="#" className={clsx(styles.icon, styles.whatsapp)}>
                <WhatsappIcon width={24} height={24} />
                <span>Написать в WhatsApp</span>
              </a>
              <a href="mailto:zakaz@remzonaservice.ru" className={styles.icon}>
                <EmailIcon width={24} height={24} />
                zakaz@remzonaservice.ru
              </a>
            </div>
          </div>
        )}
        <div className={styles.bottom}>
          <Link aria-label="Ремзонасервис" href="/" className={styles.logo}>
            <LogoIcon width={121} height={38} />
          </Link>
          {isDesktop && (
            <nav className={styles.nav}>
              <ul>
                <li>
                  <Link href="#">
                    <strong>Услуги по ремонту</strong>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <strong>О компании</strong>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <strong>Изготовление РВД</strong>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <strong>Контакты</strong>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
          <div className={styles.link}>
            {!isSmallScreen && (
              <a href="tel:+79015691567">
                <strong>+7 (901) 569-15-67</strong>
              </a>
            )}
            {isDesktop && (
              <Button variant="primary">Записаться на ремонт</Button>
            )}
            {isMobile && (
              <Burger
                opened={opened}
                className={styles.burger}
                onClick={toggle}
                aria-label="Toggle navigation"
                classNames={{ burger: styles.burger_wrapper }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Анимированное мобильное меню через Framer Motion */}
      <AnimatePresence>
        {isMobile && opened && (
          <motion.div
            className={styles.mobile}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className={styles.nav}>
              <ul>
                {[
                  'Услуги по ремонту',
                  'О компании',
                  'Изготовление РВД',
                  'Контакты',
                ].map((title, index) => (
                  <motion.li
                    key={title}
                    custom={index}
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link href="#" onClick={close}>
                      <strong>{title}</strong>
                    </Link>
                  </motion.li>
                ))}

                {/* WhatsApp */}
                <motion.a
                  href="#"
                  custom={4}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  className={clsx(styles.icon, styles.whatsapp)}
                >
                  <WhatsappIcon width={40} height={40} />
                </motion.a>

                {/* Телефон */}
                <motion.a
                  href="tel:+79015691567"
                  custom={5}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <strong>+7 (901) 569-15-67</strong>
                </motion.a>

                {/* Кнопка */}
                <motion.div
                  custom={6}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Button>Записаться на ремонт</Button>
                </motion.div>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

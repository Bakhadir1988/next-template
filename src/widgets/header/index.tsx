import Link from 'next/link';
import React from 'react';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          MyLogo
        </Link>
        <nav className={styles.nav}>
          <Link href="/news" className={styles.link}>
            Новости
          </Link>
          <Link href="/contact" className={styles.link}>
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
};

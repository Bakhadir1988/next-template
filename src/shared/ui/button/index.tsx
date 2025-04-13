'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import styles from './button.module.scss';

// Интерфейс для пропсов
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string; // Для ссылок
  variant?: 'default' | 'outline' | 'link' | 'danger' | 'primary';
  size?: 'default' | 'sm' | 'lg' | 'icon'; // Размеры кнопки
  isLoading?: boolean; // Индикатор загрузки
  iconLeft?: React.ReactNode; // Иконка слева
  iconRight?: React.ReactNode; // Иконка справа
  className?: string; // Дополнительные классы
  radius?: 'sm' | 'md' | 'lg' | 'full'; // Радиус углов кнопки
  type?: 'button' | 'submit' | 'reset'; // Тип кнопки
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'default',
  size = 'default',
  isLoading = false,
  iconLeft,
  iconRight,
  className,
  children,
  disabled,
  onClick,
  radius,
  type = 'button', // Устанавливаем значение по умолчанию
  ...props
}) => {
  const isDisabled = disabled || isLoading;

  // Сборка классов с помощью clsx
  const buttonClass = clsx(
    styles.root,
    styles[variant],
    styles[size],
    styles[`radius_${radius}`], // Применяем класс для радиуса
    {
      [styles.loading]: isLoading,
      [styles.disabled]: isDisabled, // Добавляем класс для отключенной кнопки
    },
    className,
  );

  // Контент кнопки
  const content = isLoading ? (
    <span className={styles.spinner} aria-label="Loading" />
  ) : (
    <>
      {iconLeft && <span className={styles.icon_left}>{iconLeft}</span>}
      <span className={styles.label}>{children}</span>
      {iconRight && <span className={styles.icon_right}>{iconRight}</span>}
    </>
  );

  // Если есть href, используем Link для маршрутизации
  if (href) {
    return (
      <Link
        href={isDisabled ? '#' : href} // Отключаем навигацию, если кнопка неактивна
        className={buttonClass}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : undefined} // Отключаем фокус, если кнопка неактивна
        onClick={(e) => {
          if (isDisabled) e.preventDefault(); // Предотвращаем клик, если кнопка отключена
        }}
      >
        {content}
      </Link>
    );
  }

  // Если href нет — рендерим обычную кнопку
  return (
    <button
      type={type} // Передаем тип кнопки
      className={buttonClass}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

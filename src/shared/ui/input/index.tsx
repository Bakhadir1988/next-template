import { InputHTMLAttributes } from 'react';

import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  shouldShowError?: boolean; // Флаг для отображения ошибки
}

export const Input = ({
  label,
  error,
  shouldShowError,
  ...props
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} {...props} />
      {shouldShowError && error && (
        <span className={styles.error}>{error}</span>
      )}
    </div>
  );
};

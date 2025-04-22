'use client';

import { TextareaHTMLAttributes } from 'react';

import styles from './textarea.module.scss';

interface UiTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  shouldShowError?: boolean;
}

export const Textarea = ({
  label,
  error,
  shouldShowError,
  ...props
}: UiTextareaProps) => {
  console.log('error', shouldShowError);
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea className={styles.textarea} {...props} />
      {shouldShowError && error && (
        <span className={styles.error}>{error}</span>
      )}
    </div>
  );
};

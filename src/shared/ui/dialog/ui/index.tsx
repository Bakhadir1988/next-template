'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import styles from './dialog.module.scss';

type AnimationType = 'fade' | 'scale' | 'slide';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  animation?: AnimationType;
  closeOnEscape?: boolean;
  closeOnClickOutside?: boolean;
  duration?: number;
}

export const Dialog = ({
  open,
  onClose,
  children,
  animation = 'fade',
  closeOnEscape = true,
  closeOnClickOutside = true,
  duration = 0.25,
}: DialogProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);
  const [titleId] = useState(
    () => `dialog-title-${Math.random().toString(36).substring(2, 7)}`,
  );

  const resetBodyStyles = useCallback(() => {
    const scrollY = document.body.style.top;
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, []);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Обработка Escape
  useEffect(() => {
    if (!closeOnEscape) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose, closeOnEscape]);

  useEffect(() => {
    if (open) {
      prevFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.left = '0';
      document.body.style.width = '100%';
      ref.current?.focus();
    } else {
      resetBodyStyles();
      prevFocusRef.current?.focus?.();
    }
    return resetBodyStyles;
  }, [open, resetBodyStyles]);

  const variants = {
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    slide: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  };

  const selectedVariant = variants[animation] || variants.fade;

  return (
    <AnimatePresence>
      {open && (
        <div
          className={styles.overlay}
          onClick={closeOnClickOutside ? handleClose : undefined}
          role="none"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={styles.content}
            onClick={(e) => e.stopPropagation()}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={selectedVariant}
            transition={{ duration, ease: 'easeOut' }}
            tabIndex={-1}
            ref={ref}
            style={{ backgroundImage: "url('/form_bg.svg')" }}
          >
            <button
              className={styles.close}
              onClick={handleClose}
              aria-label="Close dialog"
            >
              &times;
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

'use client';

import { AnimatePresence, PanInfo, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import './drawer.css';

// подключаем стили

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [mounted, setMounted] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null,
  );
  const wrapperRef = useRef<HTMLElement | null>(null);
  const isClosing = useRef(false);

  useEffect(() => {
    const wrapper = document.querySelector<HTMLElement>('main, .wrapper');
    if (wrapper) wrapperRef.current = wrapper;
  }, []);

  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'drawer-portal';
    document.body.appendChild(container);
    setPortalContainer(container);
    setMounted(true);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  useEffect(() => {
    const body = document.body.style;
    const wrapper = wrapperRef.current;

    if (isOpen && wrapper) {
      body.overflow = 'hidden';
      body.backgroundColor = 'black';
      requestAnimationFrame(() => {
        wrapper.classList.add('drawer-transformed');
      });
    }

    if (!isOpen && wrapper && !isClosing.current) {
      isClosing.current = true;
      wrapper.style.transform = 'scale(1)';
      wrapper.style.borderRadius = '0';

      setTimeout(() => {
        wrapper.classList.remove('drawer-transformed');
        wrapper.style.transform = '';
        wrapper.style.borderRadius = '';
        body.overflow = '';
        isClosing.current = false;
      }, 500);
    }
  }, [isOpen]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y > 50) onClose();
  };

  const animation = {
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  };

  if (!mounted || !portalContainer) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className="drawer"
            {...animation}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragMomentum={true}
            onDragEnd={handleDragEnd}
          >
            <div className="drawer-swipe-indicator" />
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    portalContainer,
  );
};

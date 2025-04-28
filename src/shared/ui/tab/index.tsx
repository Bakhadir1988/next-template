'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { Button } from '@/shared/ui/button';

import styles from './UniversalTabs.module.scss';
import { TabsDto } from './type';

export const UniversalTabs = ({
  tabs,
  orientation = TabsOrientationEnum.HORIZONTAL,
  className,
}: TabsDto) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);

  return (
    <div className={clsx(className || '', styles.item, styles[orientation])}>
      <div ref={tabsRef} className={clsx(styles.header)}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx(styles.button, {
              [styles.active]: activeTab === tab.id,
            })}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className={styles.underline}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              tab.id === activeTab && (
                <motion.div
                  key={tab.id}
                  initial={{
                    opacity: 0,
                    x: orientation === 'vertical' ? 20 : 0,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: orientation === 'vertical' ? -20 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={styles.categoryContent}
                >
                  <div className={'base_subtitle base_subtitle__separate'}>
                    {tab.title}
                  </div>
                  <div
                    className={styles.categoryText}
                    dangerouslySetInnerHTML={{ __html: tab.text }}
                  />
                  <Button variant="primary">Подробнее</Button>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

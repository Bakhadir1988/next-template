'use client';

import clsx from 'clsx';
import React from 'react';

import { DefaultForm } from '@/features/default-form';
import { UiModal } from '@/shared/ui/modal';

import styles from './main-banner.module.scss';
import { MainBannerDto } from './type';

export const MainBanner = ({ data }: { data: MainBannerDto }) => {
  return (
    <section className={clsx('base_section', styles.section)}>
      <div className="container">
        <div className={styles.list}>
          {data.linked_sections?.map((section) =>
            section.items?.map((item) => (
              <div
                className={styles.list_item}
                style={{
                  backgroundImage: `url(https://dev.nmcms.ru/resources/catalog/images/${item.image})`,
                }}
                key={item.item_id}
              >
                <div className={styles.inner}>
                  <h1>{item.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.text,
                    }}
                  />
                  {item.buttons && (
                    <div className={styles.buttons}>
                      {item.buttons.map((button) => (
                        <UiModal
                          key={button.subitem_id}
                          text={button.variant_title}
                        >
                          <DefaultForm />
                        </UiModal>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
};

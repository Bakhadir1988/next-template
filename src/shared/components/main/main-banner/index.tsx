import React from 'react';

import { Button } from '@/shared/ui/button';

import styles from './main-banner.module.scss';
import { MainBannerDto } from './type';

export const MainBanner = ({ data }: { data: MainBannerDto }) => {
  return (
    <section>
      <div className="container">
        <div className={styles.list}>
          {data.linked_sections.map((section) =>
            section.items.map((item) => (
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
                  ></div>
                  {item.buttons && (
                    <div className={styles.buttons}>
                      {item.buttons.map((button) => {
                        return (
                          <Button
                            variant="primary"
                            radius="lg"
                            size="lg"
                            key={button.subitem_id}
                          >
                            {button.variant_title}
                          </Button>
                        );
                      })}
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

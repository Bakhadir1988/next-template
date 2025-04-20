import React from 'react';

import styles from './title-block.module.scss';

export const TittleBlock = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.heading}>
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </section>
  );
};
export default TittleBlock;

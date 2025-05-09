import clsx from 'clsx';
import React from 'react';

import styles from './title.module.scss';

type TitleProps = {
  title: string;
  text?: string;
  separate?: boolean;
};

export const Title = ({ title, text, separate }: TitleProps) => {
  return (
    <div className={clsx(styles.root, separate && styles.separate)}>
      <h2>{title}</h2>
      {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
    </div>
  );
};

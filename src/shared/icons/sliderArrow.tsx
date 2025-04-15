import React from 'react';

export const SliderArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    {...(props.width ? { width: props.width } : { width: '40' })}
    {...(props.height ? { height: props.height } : { height: '40' })}
    viewBox="0 0 8 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.6 6 0 10.6 1.4 12l6-6-6-6L0 1.4z" />
  </svg>
);

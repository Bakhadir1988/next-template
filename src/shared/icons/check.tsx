import React from 'react';

export const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    {...(props.width ? { width: props.width } : { width: '40' })}
    {...(props.height ? { height: props.height } : { height: '40' })}
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 0C8.97 0 0 8.97 0 20s8.97 20 20 20 20-8.97 20-20S31.03 0 20 0m0 38.46A18.5 18.5 0 0 1 1.54 20 18.5 18.5 0 0 1 20 1.54 18.5 18.5 0 0 1 38.46 20 18.5 18.5 0 0 1 20 38.46" />
    <path d="M29.42 11.8 17.6 25.1l-7.12-5.7a.77.77 0 0 0-.96 1.2l7.7 6.15a.77.77 0 0 0 1.05-.09l12.3-13.84a.77.77 0 1 0-1.15-1.02" />
  </svg>
);

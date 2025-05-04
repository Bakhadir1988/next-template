import React from 'react';

export const PinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    {...(props.width ? { width: props.width } : { width: '40' })}
    {...(props.height ? { height: props.height } : { height: '40' })}
    viewBox="0 0 40 41"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_220_1850)">
      <path d="M20 9.43a7.43 7.43 0 1 0 .02 14.87A7.43 7.43 0 0 0 20 9.43m0 11.72a4.3 4.3 0 1 1 .01-8.6 4.3 4.3 0 0 1-.01 8.6" />
      <path d="M20 .83A16.04 16.04 0 0 0 3.98 16.85v.45c0 4.47 2.56 9.67 7.61 15.48a66 66 0 0 0 7.43 7.26l.98.79.98-.8c.15-.12 3.77-3.05 7.43-7.25 5.05-5.8 7.61-11.01 7.61-15.48v-.45C36.02 8.02 28.84.83 20 .83M32.9 17.3c0 7.55-9.73 16.7-12.9 19.47C16.83 33.99 7.1 24.85 7.1 17.3v-.45c0-7.1 5.79-12.9 12.9-12.9s12.9 5.8 12.9 12.9z" />
    </g>
    <defs>
      <clipPath id="clip0_220_1850">
        <rect width="40" height="40" transform="translate(0 .83)" />
      </clipPath>
    </defs>
  </svg>
);

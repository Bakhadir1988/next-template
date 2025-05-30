import React from 'react';

export const GpsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    {...(props.width ? { width: props.width } : { width: '40' })}
    {...(props.height ? { height: props.height } : { height: '40' })}
    viewBox="0 0 30 38"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.42 23.29a.8.8 0 0 1-.6-.25l-6.18-6.18a9.58 9.58 0 1 1 13.55 0l-6.18 6.18a.8.8 0 0 1-.6.25m0-21.13a7.92 7.92 0 0 0-5.6 13.52l5.6 5.6 5.6-5.6a7.92 7.92 0 0 0-5.6-13.52" />
    <path d="M27.5 37.16h-25a2.5 2.5 0 0 1-2.5-2.5v-25a2.5 2.5 0 0 1 2.5-2.5h9.42a.83.83 0 0 1 0 1.67H2.5a.83.83 0 0 0-.83.83v25a.83.83 0 0 0 .83.84h25a.83.83 0 0 0 .83-.84V10.08a.83.83 0 0 1 1.67 0v24.58a2.5 2.5 0 0 1-2.5 2.5" />
    <path d="M20.42 14.66a4.58 4.58 0 1 1 0-9.16 4.58 4.58 0 0 1 0 9.16m0-7.5a2.92 2.92 0 1 0 0 5.84 2.92 2.92 0 0 0 0-5.84" />
    <path d="M10 33.83H6.67a.83.83 0 0 1 0-1.67H10a1.67 1.67 0 0 0 0-3.33H7.5a3.33 3.33 0 1 1 0-6.67h9.17a.83.83 0 1 1 0 1.67H7.5a1.67 1.67 0 1 0 0 3.33H10a3.33 3.33 0 0 1 0 6.67" />
  </svg>
);

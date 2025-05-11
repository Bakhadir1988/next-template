import React from 'react';

export const ErrorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    {...(props.width ? { width: props.width } : { width: '40' })}
    {...(props.height ? { height: props.height } : { height: '40' })}
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 0C8.97 0 0 8.97 0 20s8.97 20 20 20 20-8.97 20-20S31.03 0 20 0m0 38.46A18.5 18.5 0 0 1 1.54 20 18.5 18.5 0 0 1 20 1.54 18.5 18.5 0 0 1 38.46 20 18.5 18.5 0 0 1 20 38.46" />
    <path d="M27.47 12.53a.77.77 0 0 0-1.1 0L20 18.91l-6.38-6.38a.77.77 0 1 0-1.09 1.1L18.91 20l-6.38 6.38a.77.77 0 1 0 1.1 1.09L20 21.09l6.38 6.38a.77.77 0 1 0 1.09-1.1L21.09 20l6.38-6.38c.3-.3.3-.79 0-1.09" />
  </svg>
);

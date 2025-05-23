import React from 'react';

export const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    {...(props.width ? { width: props.width } : { width: '40' })}
    {...(props.height ? { height: props.height } : { height: '40' })}
    viewBox="0 0 40 41"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M34.14 6.69A19.9 19.9 0 0 0 20 .83 19.9 19.9 0 0 0 5.86 6.69 20 20 0 0 0 2.5 30.53L.04 39.34A1.17 1.17 0 0 0 1.5 40.8l8.81-2.47A20 20 0 0 0 40 20.83c0-5.34-2.08-10.36-5.86-14.14M20 38.49c-3.15 0-6.25-.85-8.95-2.44a1.2 1.2 0 0 0-.9-.12l-7.29 2.04 2.04-7.28c.08-.3.04-.64-.12-.91A17.64 17.64 0 0 1 7.52 8.35a17.68 17.68 0 0 1 30.14 12.48c0 9.74-7.92 17.66-17.66 17.66" />
    <path d="M28.63 22.33a3.8 3.8 0 0 0-2.69-1.11c-1.01 0-1.97.4-2.69 1.1l-.54.55a.7.7 0 0 1-.5.21.7.7 0 0 1-.51-.2l-3.74-3.75a.7.7 0 0 1-.21-.5q0-.3.2-.51l.55-.55a3.8 3.8 0 0 0 0-5.37l-1.09-1.1a3.8 3.8 0 0 0-2.69-1.1c-1.01 0-1.97.4-2.69 1.1l-.8.82c-1.72 1.71-2.34 4.26-1.76 7.18a15.8 15.8 0 0 0 4.42 7.83c2.9 2.9 6.6 4.64 9.89 4.64 2.07 0 3.85-.68 5.13-1.96l.81-.81a3.8 3.8 0 0 0 0-5.38zm-.57 4.8-.8.82a4.8 4.8 0 0 1-3.48 1.27c-2.68 0-5.76-1.47-8.23-3.94a13.4 13.4 0 0 1-3.78-6.64c-.42-2.12-.03-3.92 1.11-5.06l.81-.81q.43-.43 1.03-.43t1.04.43l1.08 1.08c.57.57.57 1.5 0 2.07l-.54.54a3.04 3.04 0 0 0 0 4.33l3.74 3.74a3.04 3.04 0 0 0 4.33 0l.54-.54q.43-.43 1.03-.43t1.04.43l1.08 1.08c.57.57.57 1.5 0 2.07" />
  </svg>
);

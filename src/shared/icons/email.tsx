import React from 'react';

export const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    {...(props.width ? { width: props.width } : { width: '40' })}
    {...(props.height ? { height: props.height } : { height: '40' })}
    viewBox="0 0 40 29"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M38.83.77H1.17C.52.77 0 1.3 0 1.94v25.78c0 .64.52 1.17 1.17 1.17h37.66c.65 0 1.17-.53 1.17-1.17V1.94c0-.64-.52-1.17-1.17-1.17M37.66 25.3l-13.2-10.44 13.2-10.44zM2.34 4.41l13.2 10.44L2.33 25.3zM20 15.4 4.49 3.1H35.5zm-2.58.95 1.85 1.46a1.2 1.2 0 0 0 1.46 0l1.85-1.46 12.88 10.2H4.54z" />
  </svg>
);

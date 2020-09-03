import React from 'react';

export default function SevenOfSpades({ width }: { width: number }) {
  return (
    <svg
      version="1.2"
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 225 314"
      width="225px"
      height="314px"
    >
      <defs>
        <path
          id="suit"
          d="M26.406,40.187c0.015-1.979-1.561-2.017-1.542-0.573c-0.133,7.257-6.311,10.83-10.799,9.982
            c-6.92-1.307-9.129-8.129-9.062-12.148C5.205,25.046,17.775,15.9,29.116,0c8.311,14.351,22.028,25.623,22.839,36.717
            c1.08,14.749-17.711,20.25-20.394,3.06c-0.173-1.214-1.613-1.759-1.501-0.063c0.408,4.711-0.171,6.674,5.179,18.287H21.252
            C24.351,52.574,26.195,45.911,26.406,40.187L26.406,40.187z"
        />
        <path
          id="numeral"
          d="M4.981,31.887C7.113,20.799,9.39,12.478,15.361,3.441H3.226v3.891H0V0h17.754l2.188,3.44c-6.34,6.797-12.146,28.769-11.119,28.446H4.981z"
        />
      </defs>

      <rect width="100%" height="100%" fill="#fefefe" />

      <g>
        <use xlinkHref="#numeral" transform="matrix(1,0,0,1,7,12)" />
        <use xlinkHref="#suit" transform="matrix(0.4,0,0,0.4,6,51)" />

        <use xlinkHref="#numeral" transform="matrix(-1,0,0,-1,218,302)" />
        <use xlinkHref="#suit" transform="matrix(-0.4,0,0,-0.4,218,263)" />
      </g>
    </svg>
  );
}

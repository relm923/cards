import React from 'react';

export default function TwoOfDiamonds({ width }: { width: number }) {
  return (
    <svg
      version="1.2"
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 225 314"
      width="225px"
      height="314px"
      fill="#d40000"
    >
      <defs>
        <polygon id="suit" points="28.5,0 48.612,29 28.5,58 8.388,29" />
        <path
          id="numeral"
          d="M0,32.676l0.164-2.018c0.51-6.24,1.875-8.348,9.623-14.856c3.76-3.159,4.994-4.717,5.168-6.525c0.49-4.261-3.352-5.592-5.855-5.613c-3.241-0.03-6.909,1.911-5.161,6.414l-3.638,1.066C-0.432,6.945,0.32,3.002,3.727,1.251c4.548-2.279,10.382-1.385,13.324,2.207c1.979,2.414,2.429,5.746,1.367,8.355c-3.1,6.671-13.621,9.605-14.49,17.318h11.631v-4.295h3.427v7.908L0,32.676z"
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

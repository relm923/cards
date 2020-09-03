import React from 'react';

export default function ThreeOfDiamonds({ width }: { width: number }) {
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
          d="M0,25.663l2.578-1.862c2.24,3.576,4.741,5.934,8.566,5.528c5.742-0.388,8.119-6.295,6.918-10.752c-1.161-3.991-5.916-5.938-9.694-3.808c-0.892,0.503-1.922,1.123-1.922,1.123l-1.345-2.19l8.869-10.317H4.346v4.271H0.654V0h18.812v2.599c0,0-5.039,5.13-6.707,7.941c4.104,0.148,7.411,2.701,8.596,6.737c0.693,2.124,0.382,6.984-0.523,9.076c-1.512,3.492-5.651,6.325-9.434,6.488C5.052,33.261,1.681,28.893,0,25.663L0,25.663z"
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

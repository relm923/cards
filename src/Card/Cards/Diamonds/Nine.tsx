import React from 'react';

export default function NineOfDiamonds({ width }: { width: number }) {
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
          d="M0.224,26.224l3.025-0.942c1.143,2.995,3.45,3.879,5.893,3.688c4.381-0.34,5.836-5.147,6.164-9.397c-1.707,1.772-4.273,2.674-6.459,2.586c-6.982-0.369-8.77-5.854-8.834-11.601c-0.195-4.847,1.848-8.355,5.348-9.964c1.853-0.815,6.097-0.815,7.959,0.148c4.283,2.217,5.867,6.049,5.58,15.19c0.004,7.523-1.625,16.287-9.838,16.476C4.314,33.052,0.71,29.429,0.224,26.224L0.224,26.224zM12.111,17.98c1.427-0.887,2.229-1.717,2.867-2.963c0.525-1.021,0.703-1.553,0.553-3.67c-0.385-5.456-3.299-8.547-7.524-7.933C5.651,3.758,4.363,5.053,3.625,7.463c-1.367,4.45,0.364,9.657,3.606,10.855C8.695,18.859,10.947,18.704,12.111,17.98z"
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

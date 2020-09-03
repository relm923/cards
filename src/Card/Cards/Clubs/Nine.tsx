import React from 'react';

export default function NineOfClubs({ width }: { width: number }) {
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
          d="M20.976,57.141c2.879-5.775,4.976-11.7,5.348-18.037c0.342-2.331-1.074-2.37-1.288-0.729
            c-4.076,15.593-25.763,11.37-25.017-3.296c0.604-11.896,12.42-14.454,18.582-10.565c2.434,1.434,2.295,0.575,0.967-0.911
            C10.416,13.391,15.958,0.241,28.331,0c13.38,0.793,16.853,14.87,8.646,23.147c-1.021,0.994-3.283,4.191,0.123,1.956
            c8.287-5.888,19.787,0.443,19.553,9.521c-0.434,16.738-20.84,17.986-25.203,4.006c-0.42-1.55-1.629-2.328-1.295,0.305
            c0.604,4.767,1.855,11.953,5.438,18.205L20.976,57.141L20.976,57.141z"
        />
        <path
          id="numeral"
          d="M0.224,26.224l3.025-0.942
            c1.143,2.995,3.45,3.879,5.893,3.688c4.381-0.34,5.836-5.147,6.164-9.397c-1.707,1.772-4.273,2.674-6.459,2.586
            c-6.982-0.369-8.77-5.854-8.834-11.601c-0.195-4.847,1.848-8.355,5.348-9.964c1.853-0.815,6.097-0.815,7.959,0.148
            c4.283,2.217,5.867,6.049,5.58,15.19c0.004,7.523-1.625,16.287-9.838,16.476C4.314,33.052,0.71,29.429,0.224,26.224L0.224,26.224z
            M12.111,17.98c1.427-0.887,2.229-1.717,2.867-2.963c0.525-1.021,0.703-1.553,0.553-3.67c-0.385-5.456-3.299-8.547-7.524-7.933
            C5.651,3.758,4.363,5.053,3.625,7.463c-1.367,4.45,0.364,9.657,3.606,10.855C8.695,18.859,10.947,18.704,12.111,17.98z"
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

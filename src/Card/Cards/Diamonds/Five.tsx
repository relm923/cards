import React from 'react';

export default function FiveOfDiamonds({ width }: { width: number }) {
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
          d="M0,23.89l3.221-0.026c0.611,1.942,1.973,3.926,3.816,4.473c5.211,1.225,8.567-1.688,9.673-5.047c1.34-4.072-0.03-9.794-3.617-11.827c-2.977-1.686-7.396-0.264-9.422,3.338l-2.259-1.379L2.624,0h14.73v3.172H5.416l-0.187,5.59c2.564-1.802,6.518-1.783,9.085-0.52c4.866,2.318,7.124,7.593,6.178,13.81c-1.311,6.185-4.197,9.688-10.718,10.189C2.529,32.304-0.029,27.324,0,23.89L0,23.89z"
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

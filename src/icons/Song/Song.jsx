/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Song = ({ className }) => {
  return (
    <svg
      className={`song ${className}`}
      fill="none"
      height="98"
      viewBox="0 0 98 98"
      width="98"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_f_0_9)">
        <path
          className="path"
          d="M27.7862 80.5086C37.3876 83.2988 47.4331 77.7772 50.2233 68.1758C53.0135 58.5744 47.492 48.5289 37.8905 45.7387C28.2891 42.9485 18.2436 48.47 15.4534 58.0715C12.6632 67.6729 18.1847 77.7183 27.7862 80.5086Z"
          fill="#B7B7B7"
        />
        <rect
          className="rect"
          fill="#B7B7B7"
          height="42.7917"
          transform="rotate(16.2042 53.1414 22.7479)"
          width="9.875"
          x="53.1414"
          y="22.7479"
        />
        <rect
          className="rect"
          fill="#B7B7B7"
          height="19.75"
          rx="2"
          transform="rotate(16.2042 55.8971 13.2652)"
          width="36.2083"
          x="55.8971"
          y="13.2652"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="105.907"
          id="filter0_f_0_9"
          width="105.907"
          x="-4.00003"
          y="-4"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feBlend className="fe-blend" in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
          <feGaussianBlur className="fe-gaussian-blur" result="effect1_foregroundBlur_0_9" stdDeviation="2" />
        </filter>
      </defs>
    </svg>
  );
};

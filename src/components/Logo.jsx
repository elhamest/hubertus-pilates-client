import React from "react";

const Logo = ({ text }) => (
  <div
    style={{
      width: "100px",
    }}
  >
    <svg
      style={{ "--logo-color": "rgb(114, 128, 186)" }}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9111_579659)">
        <rect
          opacity="0.2"
          x="48"
          width="67.8823"
          height="67.8823"
          rx="2"
          transform="rotate(45 48 0)"
          fill="url(#paint0_radial_9111_579659)"
        />
        <rect
          opacity="0.1"
          x="72.8691"
          y="6.81372"
          width="67.8823"
          height="67.8823"
          rx="2"
          transform="rotate(75 72.8691 6.81372)"
          fill="url(#paint1_radial_9111_579659)"
        />
        <rect
          opacity="0.1"
          x="90.9258"
          y="24.8715"
          width="67.8823"
          height="67.8823"
          rx="2"
          transform="rotate(105 90.9258 24.8715)"
          fill="url(#paint2_radial_9111_579659)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_9111_579659"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(81.9411 33.9411) rotate(78.8401) scale(52.974)"
        >
          <stop stopColor="var(--logo-color)" />
          <stop offset="1" stopColor="var(--logo-color)" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_9111_579659"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(106.81 40.7549) rotate(79.903) scale(72.184)"
        >
          <stop stopColor="var(--logo-color)" />
          <stop offset="1" stopColor="var(--logo-color)" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_9111_579659"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(124.867 58.8126) rotate(78.8401) scale(52.974)"
        >
          <stop stopColor="var(--logo-color)" />
          <stop offset="1" stopColor="var(--logo-color)" stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip0_9111_579659">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
      {/* Add text in the center of the SVG */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#4338ca" // Indigo-600
        fontFamily="FarBeirut"
        fontSize="12px" // text-sm
        fontWeight="bold" // font-bold
        letterSpacing="0.05em" // tracking-wider
        style={{ textTransform: "uppercase" }} // uppercase
      >
        {text}
      </text>
    </svg>
  </div>
);

export default Logo;

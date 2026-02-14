const FaqBanner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 420"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7a4582" />
          <stop offset="100%" stopColor="#6b3a73" />
        </linearGradient>

        <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b4f94" />
          <stop offset="100%" stopColor="#77477e" />
        </linearGradient>

        <linearGradient id="g3" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#95599e" />
          <stop offset="100%" stopColor="#86508e" />
        </linearGradient>
      </defs>

      {/* Base  */}
      <rect width="1600" height="420" fill="#6b3a73" />

      {/* Low-poly facets */}
      <polygon points="0,0 520,0 300,210" fill="url(#g1)" />
      <polygon points="520,0 980,0 760,230" fill="url(#g2)" />
      <polygon points="980,0 1600,0 1280,230" fill="url(#g3)" />

      <polygon points="0,0 300,210 0,420" fill="url(#g2)" />
      <polygon points="300,210 760,230 520,420" fill="url(#g3)" />
      <polygon points="760,230 1280,230 980,420" fill="url(#g1)" />
      <polygon points="1280,230 1600,0 1600,420" fill="url(#g2)" />

      {/* Extra depth layers */}
      <polygon
        points="400,120 800,80 1200,140 800,260"
        fill="#8a4d92"
        opacity="0.35"
      />

      {/* Diamond outline */}
      <polygon
        points="800,70 1180,210 800,350 420,210"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="2"
      />
    </svg>
  );
};

export default FaqBanner;

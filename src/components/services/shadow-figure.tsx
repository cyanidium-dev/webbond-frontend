const ShadowFigure = ({ className }: { className?: string }) => {
  return (
    <div
      className={className}
      style={{
        transform: 'translate3d(0,0,0)',
        WebkitTransform: 'translate3d(0,0,0)',
        willChange: 'transform',
      }}
    >
      <svg
        width="360"
        height="824"
        viewBox="0 0 360 824"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="optimizeSpeed"
        style={{
          filter: 'blur(10px)',
          willChange: 'transform, filter',
          transform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          perspective: 1000,
          WebkitPerspective: 1000,
        }}
      >
        <g filter="url(#filter0_f_341_4364)">
          <ellipse
            cx="145.901"
            cy="334.37"
            rx="147.455"
            ry="117.293"
            transform="rotate(117.549 145.901 334.37)"
            fill="#FF1D2C"
          />
        </g>
        <g filter="url(#filter1_f_341_4364)">
          <ellipse
            cx="136.34"
            cy="449.373"
            rx="226.187"
            ry="198.122"
            transform="rotate(103.547 136.34 449.373)"
            fill="#0A0705"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_341_4364"
            x="-171.263"
            y="-1.52588e-05"
            width="634.328"
            height="668.74"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="96.3942"
              result="effect1_foregroundBlur_341_4364"
            />
          </filter>
          <filter
            id="filter1_f_341_4364"
            x="-212.879"
            y="75.1842"
            width="698.439"
            height="748.378"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="74.7025"
              result="effect1_foregroundBlur_341_4364"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ShadowFigure;

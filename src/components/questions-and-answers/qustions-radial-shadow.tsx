const QuestionsRadialShadow = ({ className }: { className?: string }) => {
  return (
    <svg
      width="1582"
      height="1477"
      viewBox="0 0 1582 1477"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      // style={{ filter: 'blur(10px)', willChange: 'filter' }}
    >
      <g filter="url(#filter0_f_341_4523)">
        <ellipse
          cx="292.56"
          cy="248.558"
          rx="292.56"
          ry="248.558"
          transform="matrix(0.855823 -0.51727 0.54543 0.838157 308.883 752.401)"
          fill="#FF1D2C"
        />
      </g>
      <g filter="url(#filter1_f_341_4523)">
        <ellipse
          cx="487.298"
          cy="433.298"
          rx="487.298"
          ry="433.298"
          transform="matrix(0.820763 -0.571269 0.569956 0.821675 270.427 568.448)"
          fill="#0A0705"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_341_4523"
          x="0"
          y="141.835"
          width="1389.67"
          height="1335.13"
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
            stdDeviation="205.026"
            result="effect1_foregroundBlur_341_4523"
          />
        </filter>
        <filter
          id="filter1_f_341_4523"
          x="253.083"
          y="-0.000167847"
          width="1328.52"
          height="1292.2"
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
            stdDeviation="97.0687"
            result="effect1_foregroundBlur_341_4523"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default QuestionsRadialShadow;

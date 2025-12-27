
const BusinessRadialShadow = ({className}: {className?: string}) => {
  return (
    <svg
      width="360"
      height="1319"
      viewBox="0 0 360 1319"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_341_4529)">
        <ellipse
          cx="292.56"
          cy="248.558"
          rx="292.56"
          ry="248.558"
          transform="matrix(-0.975733 0.218964 -0.251274 -0.967916 28.8333 835.603)"
          fill="#FF1D2C"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_341_4529"
          x="-1021.41"
          y="6.10352e-05"
          width="1404.65"
          height="1318.16"
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
            result="effect1_foregroundBlur_341_4529"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BusinessRadialShadow;

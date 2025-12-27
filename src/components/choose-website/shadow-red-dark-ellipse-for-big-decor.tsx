const ShadowRedDarkEllipseForBigDecor = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <svg
      width="360"
      height="611"
      viewBox="0 0 360 611"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_341_4385)">
        <ellipse
          cx="101.069"
          cy="85.8676"
          rx="101.069"
          ry="85.8676"
          transform="matrix(0.740559 -0.671991 0.696235 0.717814 55.0393 383.645)"
          fill="#FF1D2C"
        />
      </g>
      <g filter="url(#filter1_f_341_4385)">
        <ellipse
          cx="197.759"
          cy="178.41"
          rx="197.759"
          ry="178.41"
          transform="matrix(0.540912 -0.841079 0.840213 0.542256 -20.8077 367.465)"
          fill="#0A0705"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_341_4385"
          x="-47.7836"
          y="143.99"
          width="474.909"
          height="466.75"
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
            stdDeviation="70.829"
            result="effect1_foregroundBlur_341_4385"
          />
        </filter>
        <filter
          id="filter1_f_341_4385"
          x="-53.5327"
          y="7.62939e-06"
          width="579.195"
          height="595.757"
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
            stdDeviation="52.7137"
            result="effect1_foregroundBlur_341_4385"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ShadowRedDarkEllipseForBigDecor;

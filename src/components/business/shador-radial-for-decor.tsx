
const ShadorRadialForDecor = ({className}: {className?: string}) => {
  return (
    <svg
      width="314"
      height="444"
      viewBox="0 0 314 444"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_540_1696)">
        <ellipse
          cx="185.395"
          cy="145.407"
          rx="185.395"
          ry="145.407"
          transform="matrix(0.99097 -0.134086 0.132501 0.991183 57.3831 102.638)"
          fill="#0A0705"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_540_1696"
          x="1.52588e-05"
          y="0.000137329"
          width="520.741"
          height="443.808"
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
            stdDeviation="37.8137"
            result="effect1_foregroundBlur_540_1696"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ShadorRadialForDecor;

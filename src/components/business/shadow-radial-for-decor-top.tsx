const ShadowRadialForDecorTop = ({className}: {className?: string}) => {
  return (
    <svg
      width="673"
      height="449"
      viewBox="0 0 673 449"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_540_1752)">
        <ellipse
          cx="262.454"
          cy="145.407"
          rx="262.454"
          ry="145.407"
          transform="matrix(0.99097 -0.134086 0.132501 0.991183 57.0852 115.087)"
          fill="#0A0705"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_540_1752"
          x="1.52588e-05"
          y="0.000137329"
          width="672.871"
          height="448.042"
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
            result="effect1_foregroundBlur_540_1752"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ShadowRadialForDecorTop;

const ShadowFigure = ({ className }: { className?: string }) => {
  return (
    <svg
      width="360"
      height="824"
      viewBox="0 0 360 824"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      overflow="visible"
    >
      <g style={{ filter: 'blur(96.3942px)', willChange: 'filter' }}>
        <ellipse
          cx="145.901"
          cy="334.37"
          rx="147.455"
          ry="117.293"
          transform="rotate(117.549 145.901 334.37)"
          fill="#FF1D2C"
        />
      </g>
      <g style={{ filter: 'blur(74.7025px)', willChange: 'filter' }}>
        <ellipse
          cx="136.34"
          cy="449.373"
          rx="226.187"
          ry="198.122"
          transform="rotate(103.547 136.34 449.373)"
          fill="#0A0705"
        />
      </g>
    </svg>
  );
};

export default ShadowFigure;

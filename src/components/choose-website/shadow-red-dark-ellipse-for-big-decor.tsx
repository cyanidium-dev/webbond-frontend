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
      overflow="visible"
    >
      <g style={{ filter: 'blur(70.829px)', willChange: 'filter' }}>
        <ellipse
          cx="101.069"
          cy="85.8676"
          rx="101.069"
          ry="85.8676"
          transform="matrix(0.740559 -0.671991 0.696235 0.717814 55.0393 383.645)"
          fill="#FF1D2C"
        />
      </g>
      <g style={{ filter: 'blur(52.7137px)', willChange: 'filter' }}>
        <ellipse
          cx="197.759"
          cy="178.41"
          rx="197.759"
          ry="178.41"
          transform="matrix(0.540912 -0.841079 0.840213 0.542256 -20.8077 367.465)"
          fill="#0A0705"
        />
      </g>
    </svg>
  );
};

export default ShadowRedDarkEllipseForBigDecor;

const ShadowEllipseForIphone = ({ className }: { className?: string }) => {
  return (
    <svg
      width="348"
      height="490"
      viewBox="0 0 348 490"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      overflow="visible"
    >
      <g style={{ filter: 'blur(69.5px)', willChange: 'filter' }}>
        <ellipse cx="257.5" cy="245" rx="118.5" ry="106" fill="#0A0705" />
      </g>
    </svg>
  );
};

export default ShadowEllipseForIphone;

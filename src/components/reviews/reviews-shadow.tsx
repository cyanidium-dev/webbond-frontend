const ReviewsShadow = ({ className }: { className?: string }) => {
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
        height="1106"
        viewBox="0 0 360 1106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="optimizeSpeed"
        className="w-full h-full"
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
        <g filter="url(#filter0_f_341_4465)">
          <ellipse
            cx="218.324"
            cy="185.487"
            rx="218.324"
            ry="185.487"
            transform="matrix(0.775181 0.63174 -0.605625 0.79575 330.769 222.491)"
            fill="#FF1D2C"
          />
        </g>
        <g filter="url(#filter1_f_341_4465)">
          <ellipse
            cx="363.648"
            cy="323.35"
            rx="363.648"
            ry="323.35"
            transform="matrix(0.814226 0.580548 -0.581849 0.813297 450.37 149.255)"
            fill="#0A0705"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_341_4465"
            x="-121.481"
            y="-0.000213623"
            width="1018.31"
            height="1016.03"
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
              stdDeviation="153.002"
              result="effect1_foregroundBlur_341_4465"
            />
          </filter>
          <filter
            id="filter1_f_341_4465"
            x="62.5905"
            y="141.226"
            width="991.46"
            height="964.247"
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
              stdDeviation="72.4379"
              result="effect1_foregroundBlur_341_4465"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ReviewsShadow;

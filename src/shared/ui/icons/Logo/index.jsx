export default function Logo({ className, width, height }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 178 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <filter
          id="filter_1_61_dd"
          x="0.000000"
          y="0.000000"
          width="177.166016"
          height="42.000000"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0" dy="4" />
          <feGaussianBlur stdDeviation="1.33333" />
          <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect_dropShadow_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect_dropShadow_1"
            result="shape"
          />
        </filter>
      </defs>
      <g filter="url(#filter_1_61_dd)">
        <path
          d="M68.36 23.17C67.34 22.44 66.82 21.39 66.81 20.03L66.81 19.76L69.46 19.76L69.46 19.98C69.47 20.74 69.73 21.31 70.23 21.69Q70.99 22.26 72.37 22.26Q73.75 22.26 74.48 21.71Q74.85 21.43 75.04 21.06Q75.21 20.7 75.21 20.25Q75.21 19.79 75.02 19.44Q74.85 19.12 74.51 18.88C74.05 18.55 73.09 18.19 71.63 17.8Q69.29 17.18 68.17 16.22C67.44 15.58 67.07 14.68 67.07 13.53C67.07 12.32 67.53 11.35 68.46 10.61C69.39 9.86 70.66 9.49 72.27 9.49Q74.64 9.49 76.07 10.65Q76.08 10.66 76.09 10.67Q76.1 10.68 76.11 10.68C77.07 11.48 77.55 12.47 77.56 13.66L77.56 13.92L74.94 13.92L74.94 13.71C74.94 13.05 74.72 12.53 74.28 12.13Q73.61 11.53 72.28 11.53C71.4 11.53 70.75 11.7 70.33 12.02C69.91 12.35 69.71 12.79 69.71 13.36C69.71 13.89 69.93 14.3 70.37 14.6C70.82 14.89 71.77 15.24 73.23 15.63Q75.55 16.24 76.69 17.24C77.46 17.9 77.84 18.85 77.85 20.09C77.85 21.38 77.36 22.41 76.37 23.16Q74.88 24.28 72.38 24.28C70.73 24.28 69.39 23.91 68.36 23.17ZM134.03 23.17C133.01 22.44 132.49 21.39 132.49 20.03L132.49 19.76L135.13 19.76L135.13 19.98C135.14 20.74 135.4 21.31 135.91 21.69Q136.67 22.26 138.04 22.26Q139.42 22.26 140.15 21.71Q140.53 21.43 140.71 21.06Q140.89 20.7 140.89 20.25Q140.89 19.79 140.69 19.44Q140.52 19.12 140.18 18.88C139.72 18.55 138.76 18.19 137.3 17.8Q134.96 17.18 133.84 16.22C133.11 15.58 132.74 14.68 132.74 13.53C132.74 12.32 133.2 11.35 134.13 10.61C135.06 9.86 136.33 9.49 137.95 9.49Q140.32 9.49 141.75 10.65Q141.76 10.67 141.78 10.68C142.74 11.48 143.22 12.47 143.23 13.66L143.23 13.92L140.61 13.92L140.61 13.71C140.61 13.05 140.39 12.53 139.95 12.13Q139.28 11.53 137.96 11.53C137.07 11.53 136.42 11.7 136 12.02C135.59 12.35 135.38 12.79 135.38 13.36C135.38 13.89 135.6 14.3 136.04 14.6C136.49 14.89 137.44 15.24 138.9 15.63Q141.22 16.24 142.36 17.24C143.13 17.9 143.52 18.85 143.52 20.09C143.52 21.38 143.03 22.41 142.04 23.16Q140.55 24.28 138.05 24.28C136.4 24.28 135.06 23.91 134.03 23.17ZM147.33 22.5C146.14 21.32 145.55 19.58 145.55 17.29L145.55 16.48C145.55 14.19 146.14 12.46 147.33 11.27C148.52 10.09 150.05 9.49 151.92 9.49C153.78 9.49 155.31 10.09 156.5 11.27C157.7 12.46 158.3 14.19 158.3 16.48L158.3 17.29C158.3 19.58 157.7 21.32 156.5 22.5C155.31 23.69 153.78 24.28 151.92 24.28C150.05 24.28 148.52 23.69 147.33 22.5ZM6.51 24L4 24L9.42 9.71L12.13 9.71L17.6 24L14.8 24L13.59 20.67L7.72 20.67L6.51 24ZM28.51 24L19.35 24L19.35 9.78L21.99 9.78L21.99 21.93L28.51 21.93L28.51 24ZM40.39 24L30.76 24L30.76 9.78L40.28 9.78L40.28 11.84L33.38 11.84L33.38 15.68L39.37 15.68L39.37 17.69L33.38 17.69L33.38 21.95L40.39 21.95L40.39 24ZM44.19 24L41.45 24L46.18 16.75L41.66 9.78L44.7 9.79L47.82 14.79L50.88 9.78L53.57 9.78L49.13 16.77L53.91 24L50.84 24L47.5 18.73L44.19 24ZM83.06 24L80.42 24L80.42 9.78L83.06 9.78L83.06 15.63L89.38 15.63L89.38 9.78L92.02 9.78L92.02 24L89.38 24L89.38 17.71L83.06 17.71L83.06 24ZM105.06 24L95.43 24L95.43 9.78L104.95 9.78L104.95 11.84L98.04 11.84L98.04 15.68L104.03 15.68L104.03 17.69L98.04 17.69L98.04 21.95L105.06 21.95L105.06 24ZM111.23 24.06L105.91 9.78L108.75 9.78L112.31 19.75C112.38 19.94 112.45 20.15 112.5 20.36C112.56 20.57 112.61 20.79 112.65 21.01L112.73 21.01C112.77 20.79 112.82 20.57 112.88 20.35C112.94 20.14 113 19.94 113.06 19.75L116.7 9.78L119.28 9.78L113.96 24.06L111.23 24.06ZM124.2 11.84L119.76 11.84L119.76 9.78L131.28 9.78L131.28 11.84L126.84 11.84L126.84 24L124.2 24L124.2 11.84ZM164.72 24.06L159.4 9.78L162.24 9.78L165.81 19.75C165.88 19.94 165.94 20.15 165.99 20.36C166.05 20.57 166.1 20.79 166.15 21.01L166.23 21.01C166.27 20.79 166.31 20.57 166.37 20.35C166.43 20.14 166.49 19.94 166.56 19.75L170.19 9.78L172.77 9.78L167.46 24.06L164.72 24.06ZM148.27 16.25L148.27 17.52Q148.27 19.87 149.26 21.06C149.93 21.84 150.81 22.23 151.92 22.23Q152.95 22.23 153.72 21.78Q154.2 21.51 154.59 21.06C155.26 20.27 155.59 19.09 155.59 17.53L155.59 16.25C155.59 14.68 155.26 13.51 154.59 12.73Q154.2 12.28 153.72 12Q152.95 11.55 151.92 11.55Q150.89 11.55 150.12 12Q149.64 12.28 149.25 12.73C148.6 13.51 148.27 14.68 148.27 16.25ZM10.25 13.74L8.44 18.7L12.87 18.7L11.07 13.74C10.98 13.51 10.91 13.28 10.85 13.07C10.79 12.85 10.74 12.64 10.69 12.43L10.62 12.43C10.56 12.64 10.51 12.85 10.45 13.07Q10.37 13.39 10.25 13.74ZM56.12 23.75C55.84 23.45 55.7 23.09 55.7 22.66C55.7 22.23 55.84 21.86 56.12 21.56C56.41 21.26 56.82 21.1 57.34 21.1C57.87 21.1 58.27 21.26 58.55 21.56C58.83 21.86 58.97 22.23 58.97 22.66C58.97 23.09 58.83 23.45 58.55 23.75C58.27 24.05 57.87 24.2 57.34 24.2C56.82 24.2 56.41 24.05 56.12 23.75Z"
          fill="#FFFFFF"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
        <path
          d="M173.16 34L4.16 34L4.16 33L173.16 33L173.16 34Z"
          fill="#FFFFFF"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
        <path
          d="M173.16 1L4.16 1L4.16 0L173.16 0L173.16 1Z"
          fill="#FFFFFF"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}
